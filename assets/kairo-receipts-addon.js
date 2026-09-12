/* KAIRO v20.10.97 — isolated receipt templates addon.
   Safety rule: this file never changes auth, Supabase, orders, roles, sidebar, or core functions.
   If this addon errors, the core dashboard remains untouched. */
(()=>{
  'use strict';
  try{
    const TEMPLATES=[
      ['pastel-commission','Pastel Commission','Playful pastel'],
      ['studio-list','Studio List','Clean studio'],
      ['receiptify','Receiptify','Thermal playful'],
      ['vintage-story','Vintage Story','Vintage minimal'],
      ['newspaper-editorial','Newspaper Editorial','Editorial print'],
      ['boarding-pass','Boarding Pass','Travel ticket'],
      ['retro-diner','Retro Diner','Retro bold'],
      ['minimal-luxury','Minimal Luxury','Premium minimal']
    ];
    const valid=new Set(TEMPLATES.map(x=>x[0]));
    const safe=(v,f='')=>String(v??f).replace(/[&<>"']/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m]));
    const workspaceId=()=>{try{return (typeof activeWorkspaceId!=='undefined'&&activeWorkspaceId)||'default'}catch(_){return 'default'}};
    const workspaceName=()=>{try{return String((typeof activeWorkspaceName!=='undefined'&&activeWorkspaceName)||'Nama Usaha Anda').trim()||'Nama Usaha Anda'}catch(_){return 'Nama Usaha Anda'}};
    const key=()=>`kairo_receipt_template_v1_${workspaceId()}`;
    const getTemplate=()=>{const x=localStorage.getItem(key())||'pastel-commission';return valid.has(x)?x:'pastel-commission'};
    const setTemplate=id=>{if(valid.has(id))localStorage.setItem(key(),id)};
    const powered='<div class="kairo-addon-powered">powered by kairo workspaces</div>';
    const barcode='<div class="kairo-addon-barcode" aria-hidden="true"></div>';
    function head(id){
      const brand=safe(workspaceName());
      const map={
        'pastel-commission':`<div class="kairo-addon-head pastel"><b>${brand}</b><em>for</em><strong>A KINDER TOMORROW</strong></div>`,
        'studio-list':`<div class="kairo-addon-head studio"><b>${brand}</b><small>QUALITY MAKES A DIFFERENCE</small></div>`,
        'receiptify':`<div class="kairo-addon-head receiptify"><b>${brand}</b><small>GOOD PEOPLE, GOOD PRODUCT</small></div>`,
        'vintage-story':`<div class="kairo-addon-head vintage"><small>EST. 2024</small><b>${brand}</b><small>MORE THAN JUST A BUSINESS</small></div>`,
        'newspaper-editorial':`<div class="kairo-addon-head newspaper"><strong>The Daily Order</strong><b>${brand}</b><small>SMALL BUSINESS, BIG IMPACT</small></div>`,
        'boarding-pass':`<div class="kairo-addon-head boarding"><small>BUSINESS CLASS</small><b>${brand}</b><span>BOARDING TO A BRIGHTER TOMORROW</span></div>`,
        'retro-diner':`<div class="kairo-addon-head diner"><small>GOOD PEOPLE · GOOD STORIES</small><b>${brand}</b><span>ALWAYS A GOOD CHOICE</span></div>`,
        'minimal-luxury':`<div class="kairo-addon-head luxury"><small>EST. 2024</small><b>${brand}</b><span>BEAUTY IN EVERY DETAIL</span></div>`
      };
      return map[id]||map['pastel-commission'];
    }
    function decorateReceipt(){
      if(!document.body.classList.contains('authenticated'))return;
      const host=document.getElementById('receipt-content');
      if(!host||!host.children.length)return;
      if(host.dataset.kairoAddonBusy==='1')return;
      const id=getTemplate();
      const existing=host.querySelector(':scope > .kairo-addon-template');
      if(existing){
        existing.className=`kairo-addon-template kairo-addon-${id}`;
        const h=existing.querySelector('.kairo-addon-head'); if(h)h.outerHTML=head(id);
        return;
      }
      host.dataset.kairoAddonBusy='1';
      const children=[...host.childNodes];
      const wrap=document.createElement('div');
      wrap.className=`kairo-addon-template kairo-addon-${id}`;
      const paper=document.createElement('div'); paper.className='kairo-addon-paper';
      paper.insertAdjacentHTML('beforeend',head(id));
      const body=document.createElement('div');body.className='kairo-addon-body';
      children.forEach(n=>body.appendChild(n));
      paper.appendChild(body);
      paper.insertAdjacentHTML('beforeend',barcode+powered);
      wrap.appendChild(paper);host.appendChild(wrap);
      host.dataset.kairoAddonBusy='0';
    }
    function ensurePicker(){
      if(!document.body.classList.contains('authenticated'))return;
      const receiptPanel=document.querySelector('[data-settings-panel="receipt"]');
      if(!receiptPanel||receiptPanel.querySelector('#kairo-receipt-template-addon'))return;
      const anchor=receiptPanel.querySelector('.receipt-layout-card,.receipt-settings-card,.card')||receiptPanel;
      const box=document.createElement('div');box.id='kairo-receipt-template-addon';box.className='kairo-addon-picker';
      box.innerHTML=`<div class="kairo-addon-picker-head"><div><div class="card-title" style="font-size:14px">Template Layout</div><div class="page-sub">Pilih visual struk. Wording dan isi tetap mengikuti Struk & Wording yang sudah ada.</div></div><select id="kairo-addon-template-select" class="input">${TEMPLATES.map((t,i)=>`<option value="${t[0]}">${String(i+1).padStart(2,'0')}. ${t[1]}</option>`).join('')}</select></div><div class="kairo-addon-grid">${TEMPLATES.map((t,i)=>`<button type="button" data-kairo-addon-template="${t[0]}"><span>${String(i+1).padStart(2,'0')}</span><strong>${t[1]}</strong><small>${t[2]}</small></button>`).join('')}</div>`;
      anchor.prepend(box);
      const select=box.querySelector('#kairo-addon-template-select');select.value=getTemplate();
      const sync=()=>box.querySelectorAll('[data-kairo-addon-template]').forEach(b=>b.classList.toggle('active',b.dataset.kairoAddonTemplate===getTemplate()));
      select.addEventListener('change',()=>{setTemplate(select.value);sync();decorateReceipt();});
      box.querySelectorAll('[data-kairo-addon-template]').forEach(btn=>btn.addEventListener('click',()=>{setTemplate(btn.dataset.kairoAddonTemplate);select.value=getTemplate();sync();decorateReceipt();}));
      sync();
    }
    function safeTick(){try{ensurePicker();decorateReceipt()}catch(e){console.warn('[KAIRO receipt addon]',e)}}
    // Run only after core page has fully loaded. Never participate in authentication startup.
    window.addEventListener('load',()=>{
      setTimeout(safeTick,400);
      const obs=new MutationObserver(()=>setTimeout(safeTick,0));
      obs.observe(document.body,{subtree:true,childList:true,attributes:true,attributeFilter:['class','style']});
      document.addEventListener('click',()=>setTimeout(safeTick,30),true);
    },{once:true});
  }catch(e){console.warn('[KAIRO receipt addon disabled safely]',e)}
})();
