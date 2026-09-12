/* KAIRO receipt templates add-on v20.10.99
   Isolated add-on: does not alter login/auth, core dashboard JS, or Supabase schema. */
(()=>{
'use strict';
const TEMPLATES=[
 ['pastel','Pastel Commission','Playful pastel'],['studio','Studio List','Clean poster'],['receiptify','Receiptify','Thermal typewriter'],['vintage','Vintage Story','Warm vintage'],
 ['newspaper','Newspaper Editorial','Editorial print'],['boarding','Boarding Pass','Travel ticket'],['diner','Retro Diner','50s diner'],['luxury','Minimal Luxury','Fashion minimal']
];
const esc=s=>String(s??'').replace(/[&<>'"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c]));
const rp=n=>'Rp'+Number(n||0).toLocaleString('id-ID');
const getBranding=()=>{try{return typeof activeWorkspaceBranding!=='undefined'?activeWorkspaceBranding:null}catch(_){return null}};
const getWorkspaceName=()=>{try{return typeof activeWorkspaceName!=='undefined'?activeWorkspaceName:''}catch(_){return ''}};
const labels=()=>({customer:'Customer',start:'Start Reading',status:'Status',status_value:'On Progress',shift:'Shift',shift_active:'Shift aktif',shift_none:'Tanpa shift',platform:'Platform',payment:'Pembayaran',package:'Package',topic:'Topic',addon:'Add On',subtotal:'Subtotal',discount:'Diskon',markup:'Kenaikan Harga',tip:'Tip',total:'Total',...(getBranding()?.receipt_labels||{})});
const selected=()=>String(getBranding()?.receipt_labels?.template||document.querySelector('[data-receipt-template-value]')?.value||'pastel');
const business=()=>String(getWorkspaceName()||'Nama Usaha');
const fmtDate=v=>{try{return new Date(v||Date.now()).toLocaleDateString('id-ID',{day:'2-digit',month:'short',year:'numeric'})}catch(_){return '-'}};
function normalize(p={}){
 const l=labels(), items=(p.order_items||[]).map(x=>({name:x.name||'-',qty:Number(x.qty||1),amount:Number(x.subtotal||0)})), addons=(p.order_addons||[]).map(x=>({name:x.name||'-',qty:Number(x.qty||1),amount:Number(x.subtotal||0)}));
 const subtotal=items.reduce((s,x)=>s+x.amount,0)+addons.reduce((s,x)=>s+x.amount,0);
 return {l,business:business(),customer:p.customer_name||'Amanda',date:fmtDate(p.reading_started_at),platform:p.platform||'Threads',payment:p.payment_method||'QRIS',status:l.status_value||'PAID',topic:(p.order_topics||[]).map(x=>x.name).join(', ')||'Love Life',items:items.length?items:[{name:'General Reading',qty:1,amount:20000}],addons,subtotal,total:Number(p.total_price||subtotal||25000),tip:Number(p.tip_amount||0),adjustType:p.price_adjustment_type,adjustAmount:Number(p.price_adjustment_amount||0),footer:getBranding()?.receipt_footer||''};
}
function rows(d){
 const l=d.l, out=[];
 out.push([l.customer,d.customer],[l.topic,d.topic],[l.platform,d.platform],[l.payment,d.payment]);
 d.items.forEach((x,i)=>out.push([(i===0?l.package+': ':'')+x.name+(x.qty>1?' × '+x.qty:''),rp(x.amount)]));
 d.addons.forEach((x,i)=>out.push([(i===0?l.addon+': ':'')+x.name+(x.qty>1?' × '+x.qty:''),rp(x.amount)]));
 if(d.tip>0)out.push([l.tip,'+'+rp(d.tip)]); if(d.adjustAmount)out.push([d.adjustType==='discount'?l.discount:l.markup,(d.adjustAmount<0?'-':'+')+rp(Math.abs(d.adjustAmount))]);
 return out.map(x=>`<div class="rct-row"><span>${esc(x[0])}</span><b>${esc(x[1])}</b></div>`).join('');
}
function commonFooter(d){return `${d.footer?`<div class="rct-footer-custom">${esc(d.footer)}</div>`:''}<div class="rct-powered">powered by kairo workspaces</div>`;}
function render(p,template=selected()){
 const d=normalize(p), R=rows(d), total=`<div class="rct-row rct-total"><span>${esc(d.l.total)}</span><b>${rp(d.total)}</b></div>`, barcode='<div class="rct-barcode" aria-hidden="true"></div>';
 const map={
 pastel:`<div class="kairo-rct rct-pastel"><div class="rct-kicker">PAYMENT</div><div class="rct-for">for</div><div class="rct-business">${esc(d.business)}</div><div class="rct-row"><span>${esc(d.date)}</span><b>${esc(d.status)}</b></div>${R}${total}<div class="rct-status">${esc(d.payment)} • ${esc(d.status)}</div>${barcode}${commonFooter(d)}</div>`,
 studio:`<div class="kairo-rct rct-studio"><div class="rct-business">${esc(d.business)}</div><div class="rct-subtitle">PRICE / ORDER LIST • ${esc(d.date)}</div>${R}${total}<div class="rct-status">THANK YOU • ${esc(d.status)}</div>${barcode}${commonFooter(d)}</div>`,
 receiptify:`<div class="kairo-rct rct-receiptify"><div class="rct-business">${esc(d.business)}</div><div class="rct-subtitle">SALES RECEIPT — ${esc(d.date)}</div><div class="rct-rule"></div>${R}${total}<div class="rct-status">${esc(d.payment)} / ${esc(d.status)}</div>${barcode}${commonFooter(d)}</div>`,
 vintage:`<div class="kairo-rct rct-vintage"><div class="rct-business">${esc(d.business)}</div><div class="rct-subtitle">ORDER NOTE • ${esc(d.date)}</div>${R}${total}<div class="rct-status">Thank you for your order.</div>${barcode}${commonFooter(d)}</div>`,
 newspaper:`<div class="kairo-rct rct-newspaper"><div class="rct-mast"><div class="rct-business">${esc(d.business)}</div><div class="rct-edition">THE DAILY RECEIPT • ${esc(d.date)}</div></div>${R}${total}<div class="rct-status">PAYMENT: ${esc(d.payment)} • ${esc(d.status)}</div>${barcode}${commonFooter(d)}</div>`,
 boarding:`<div class="kairo-rct rct-boarding"><div class="rct-main"><div class="rct-business">${esc(d.business)}</div><div class="rct-subtitle">BOARDING RECEIPT</div>${R}${total}${barcode}${commonFooter(d)}</div><div class="rct-side"><small>STATUS</small><div class="big">${esc(d.status)}</div><small>PAYMENT</small><div class="big">${esc(d.payment)}</div><small>${esc(d.date)}</small></div></div>`,
 diner:`<div class="kairo-rct rct-diner"><div class="rct-business">${esc(d.business)}</div><div class="rct-subtitle">ORDER RECEIPT • SERVED FRESH</div>${R}${total}<div class="rct-status">${esc(d.payment)} • ${esc(d.status)} • THANK YOU!</div>${barcode}${commonFooter(d)}</div>`,
 luxury:`<div class="kairo-rct rct-luxury"><div class="rct-business">${esc(d.business)}</div><div class="rct-subtitle">purchase receipt • ${esc(d.date)}</div>${R}${total}<div class="rct-status">${esc(d.payment)} · ${esc(d.status)}</div>${barcode}${commonFooter(d)}</div>`
 };
 return map[template]||map.pastel;
}
function sample(){return {customer_name:'Amanda',reading_started_at:new Date().toISOString(),platform:'Threads',payment_method:'QRIS',order_topics:[{name:'Love Life'}],order_items:[{name:'General Reading',qty:1,subtotal:20000}],order_addons:[{name:'Priority',qty:1,subtotal:5000}],total_price:25000};}
function refreshUI(){
 const val=document.querySelector('[data-receipt-template-value]'); if(!val)return; const key=val.value||'pastel'; document.querySelectorAll('.kairo-template-card').forEach(c=>c.classList.toggle('is-active',c.dataset.template===key)); const stage=document.querySelector('.kairo-template-live-stage'); if(stage)stage.innerHTML=render(sample(),key);
}
function installSettings(){
 const panel=document.querySelector('[data-settings-panel="receipt"]'); const form=panel?.querySelector('#receipt-wording-form'); if(!panel||!form||panel.querySelector('.kairo-template-picker'))return false;
 const wrap=document.createElement('div');wrap.className='kairo-template-picker full';
 wrap.innerHTML=`<div class="kairo-template-head"><div><strong>Template Layout Struk</strong><br><span>Pilih style. Isi & wording tetap mengikuti pengaturan di bawah.</span></div><span>8 template</span></div><input type="hidden" data-receipt-label="template" data-receipt-template-value value="${esc(selected())}"><div class="kairo-template-grid">${TEMPLATES.map(([k,n,s])=>`<button type="button" class="kairo-template-card" data-template="${k}"><div class="kairo-template-mini"><div>${render(sample(),k)}</div></div><div class="kairo-template-meta"><i class="kairo-template-dot"></i><div><b>${esc(n)}</b><small>${esc(s)}</small></div></div></button>`).join('')}</div><div class="kairo-template-live"><div class="kairo-template-live-title">Live preview</div><div class="kairo-template-live-stage"></div></div>`;
 form.insertBefore(wrap,form.firstChild);
 wrap.addEventListener('click',e=>{const card=e.target.closest('.kairo-template-card');if(!card)return;const input=wrap.querySelector('[data-receipt-template-value]');input.value=card.dataset.template;refreshUI();});
 refreshUI(); return true;
}
function installPreviewHook(){
 if(typeof window.showReceiptPreview!=='function'||window.showReceiptPreview.__kairoTemplateWrapped)return false;
 const original=window.showReceiptPreview; const wrapped=function(p){const r=original.apply(this,arguments);try{const c=document.getElementById('receipt-content');if(c)c.innerHTML=render(p,selected());}catch(e){console.warn('Kairo receipt template render fallback:',e);}return r;}; wrapped.__kairoTemplateWrapped=true; window.showReceiptPreview=wrapped; return true;
}
function boot(){installPreviewHook();installSettings();let tries=0;const timer=setInterval(()=>{installPreviewHook();installSettings();if(++tries>80)clearInterval(timer)},250);}
document.readyState==='loading'?document.addEventListener('DOMContentLoaded',boot,{once:true}):boot();
})();
