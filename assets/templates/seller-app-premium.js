/* KAIRO v20.10.121 — Seller App Premium UX + products/profit isolated template */
(function(){
  'use strict';
  if(window.__KAIRO_SELLER_APP_PREMIUM_V121__) return;
  window.__KAIRO_SELLER_APP_PREMIUM_V121__ = true;

  const CATALOG = [{"category":"Streaming Apps","product":"NETFLIX","variant":"1P1U","duration":"1 hari","price":6000},{"category":"Streaming Apps","product":"NETFLIX","variant":"1P1U","duration":"3 hari","price":12000},{"category":"Streaming Apps","product":"NETFLIX","variant":"1P1U","duration":"7 hari","price":18000},{"category":"Streaming Apps","product":"NETFLIX","variant":"1P1U","duration":"14 hari","price":30000},{"category":"Streaming Apps","product":"NETFLIX","variant":"1P1U","duration":"1 bulan","price":45000},{"category":"Streaming Apps","product":"NETFLIX","variant":"1P1U","duration":"2 bulan","price":85000},{"category":"Streaming Apps","product":"NETFLIX","variant":"1P1U","duration":"3 bulan","price":125000},{"category":"Streaming Apps","product":"NETFLIX","variant":"1P2U","duration":"1 hari","price":5000},{"category":"Streaming Apps","product":"NETFLIX","variant":"1P2U","duration":"3 hari","price":8000},{"category":"Streaming Apps","product":"NETFLIX","variant":"1P2U","duration":"7 hari","price":15000},{"category":"Streaming Apps","product":"NETFLIX","variant":"1P2U","duration":"14 hari","price":25000},{"category":"Streaming Apps","product":"NETFLIX","variant":"1P2U","duration":"1 bulan","price":30000},{"category":"Streaming Apps","product":"NETFLIX","variant":"1P2U","duration":"2 bulan","price":55000},{"category":"Streaming Apps","product":"NETFLIX","variant":"1P2U","duration":"3 bulan","price":85000},{"category":"Streaming Apps","product":"NETFLIX","variant":"SEMPRIV","duration":"1 bulan","price":55000},{"category":"Streaming Apps","product":"NETFLIX","variant":"ANTI LIMIT","duration":"1 bulan","price":60000},{"category":"Streaming Apps","product":"NETFLIX","variant":"SINGLESCREEN","duration":"1 bulan","price":65000},{"category":"Streaming Apps","product":"NETFLIX","variant":"PRIVATE","duration":"1 bulan (RVISA)","price":180000},{"category":"Streaming Apps","product":"NETFLIX","variant":"PRIVATE","duration":"1 bulan (LEGAL)","price":200000},{"category":"Streaming Apps","product":"AMAZON PRIME","variant":"SHARING","duration":"1 hari","price":4000},{"category":"Streaming Apps","product":"AMAZON PRIME","variant":"SHARING","duration":"3 hari","price":8000},{"category":"Streaming Apps","product":"AMAZON PRIME","variant":"SHARING","duration":"7 hari","price":12000},{"category":"Streaming Apps","product":"AMAZON PRIME","variant":"SHARING","duration":"1 bulan (4U - 5U)","price":15000},{"category":"Streaming Apps","product":"AMAZON PRIME","variant":"SHARING","duration":"1 bulan (3U)","price":20000},{"category":"Streaming Apps","product":"AMAZON PRIME","variant":"SHARING","duration":"1 bulan (2U)","price":25000},{"category":"Streaming Apps","product":"AMAZON PRIME","variant":"PRIVATE","duration":"1 bulan","price":35000},{"category":"Streaming Apps","product":"YOUTUBE","variant":"FAMPLAN","duration":"1 bulan","price":12000},{"category":"Streaming Apps","product":"YOUTUBE","variant":"FAMPLAN","duration":"2 bulan","price":20000},{"category":"Streaming Apps","product":"YOUTUBE","variant":"INDPLAN","duration":"1 bulan","price":20000},{"category":"Streaming Apps","product":"YOUTUBE","variant":"INDPLAN","duration":"3 bulan (RENEW)","price":45000},{"category":"Streaming Apps","product":"YOUTUBE","variant":"INDPLAN","duration":"3 bulan (NO RENEW)","price":60000},{"category":"Streaming Apps","product":"YOUTUBE","variant":"MIXPLAN","duration":"3 bulan","price":45000},{"category":"Streaming Apps","product":"YOUTUBE","variant":"MIXPLAN","duration":"4 bulan","price":55000},{"category":"Streaming Apps","product":"VIDIO","variant":"SHARING 2U (ALL DEVICES)","duration":"1 hari","price":10000},{"category":"Streaming Apps","product":"VIDIO","variant":"SHARING 2U (ALL DEVICES)","duration":"3 hari","price":15000},{"category":"Streaming Apps","product":"VIDIO","variant":"SHARING 2U (ALL DEVICES)","duration":"7 hari","price":20000},{"category":"Streaming Apps","product":"VIDIO","variant":"SHARING 2U (ALL DEVICES)","duration":"1 bulan","price":35000},{"category":"Streaming Apps","product":"VIDIO","variant":"PRIVATE (ALL DEVICES)","duration":"1 hari","price":12000},{"category":"Streaming Apps","product":"VIDIO","variant":"PRIVATE (ALL DEVICES)","duration":"3 hari","price":18000},{"category":"Streaming Apps","product":"VIDIO","variant":"PRIVATE (ALL DEVICES)","duration":"7 hari","price":25000},{"category":"Streaming Apps","product":"VIDIO","variant":"PRIVATE (ALL DEVICES)","duration":"1 bulan","price":55000},{"category":"Streaming Apps","product":"VIDIO","variant":"SHARING 2U (MOBILE)","duration":"1 hari","price":7000},{"category":"Streaming Apps","product":"VIDIO","variant":"SHARING 2U (MOBILE)","duration":"3 hari","price":12000},{"category":"Streaming Apps","product":"VIDIO","variant":"SHARING 2U (MOBILE)","duration":"7 hari","price":18000},{"category":"Streaming Apps","product":"VIDIO","variant":"SHARING 2U (MOBILE)","duration":"1 bulan","price":30000},{"category":"Streaming Apps","product":"VIDIO","variant":"PRIVATE (MOBILE)","duration":"1 hari","price":10000},{"category":"Streaming Apps","product":"VIDIO","variant":"PRIVATE (MOBILE)","duration":"3 hari","price":15000},{"category":"Streaming Apps","product":"VIDIO","variant":"PRIVATE (MOBILE)","duration":"7 hari","price":20000},{"category":"Streaming Apps","product":"VIDIO","variant":"PRIVATE (MOBILE)","duration":"1 bulan","price":40000},{"category":"Streaming Apps","product":"VIDIO","variant":"SHARING 2U (TV ONLY)","duration":"1 hari","price":5000},{"category":"Streaming Apps","product":"VIDIO","variant":"SHARING 2U (TV ONLY)","duration":"3 hari","price":10000},{"category":"Streaming Apps","product":"VIDIO","variant":"SHARING 2U (TV ONLY)","duration":"7 hari","price":15000},{"category":"Streaming Apps","product":"VIDIO","variant":"SHARING 2U (TV ONLY)","duration":"1 bulan","price":25000},{"category":"Streaming Apps","product":"VIDIO","variant":"PRIVATE (TV ONLY)","duration":"1 hari","price":8000},{"category":"Streaming Apps","product":"VIDIO","variant":"PRIVATE (TV ONLY)","duration":"3 hari","price":12000},{"category":"Streaming Apps","product":"VIDIO","variant":"PRIVATE (TV ONLY)","duration":"7 hari","price":20000},{"category":"Streaming Apps","product":"VIDIO","variant":"PRIVATE (TV ONLY)","duration":"1 bulan","price":35000},{"category":"Streaming Apps","product":"VIDIO","variant":"PLATINUM EXTRA PRIVATE","duration":"1 bulan alldev","price":70000},{"category":"Streaming Apps","product":"VIDIO","variant":"PLATINUM EXTRA PRIVATE","duration":"1 bulan mobile","price":50000},{"category":"Streaming Apps","product":"VIDIO","variant":"ULTIMATE SHARING","duration":"1 bulan alldev","price":87000},{"category":"Streaming Apps","product":"VIDIO","variant":"ULTIMATE SHARING","duration":"1 bulan mobile","price":55000},{"category":"Streaming Apps","product":"VIDIO","variant":"ULTIMATE PRIVATE","duration":"1 bulan mobile","price":95000},{"category":"Streaming Apps","product":"DISNEY+","variant":"PREMIUM PLAN","duration":"1 hari 6U","price":5000},{"category":"Streaming Apps","product":"DISNEY+","variant":"PREMIUM PLAN","duration":"3 hari 6U","price":12000},{"category":"Streaming Apps","product":"DISNEY+","variant":"PREMIUM PLAN","duration":"5 hari 6U","price":15000},{"category":"Streaming Apps","product":"DISNEY+","variant":"PREMIUM PLAN","duration":"7 hari 6U","price":20000},{"category":"Streaming Apps","product":"DISNEY+","variant":"PREMIUM PLAN","duration":"1 hari 3U","price":10000},{"category":"Streaming Apps","product":"DISNEY+","variant":"PREMIUM PLAN","duration":"3 hari 3U","price":15000},{"category":"Streaming Apps","product":"DISNEY+","variant":"PREMIUM PLAN","duration":"5 hari 3U","price":20000},{"category":"Streaming Apps","product":"DISNEY+","variant":"PREMIUM PLAN","duration":"7 hari 3U","price":25000},{"category":"Streaming Apps","product":"DISNEY+","variant":"PREMIUM PLAN","duration":"1 bulan 6U","price":35000},{"category":"Streaming Apps","product":"DISNEY+","variant":"PREMIUM PLAN","duration":"1 bulan 5U","price":40000},{"category":"Streaming Apps","product":"DISNEY+","variant":"PREMIUM PLAN","duration":"1 bulan 4U","price":46000},{"category":"Streaming Apps","product":"DISNEY+","variant":"PREMIUM PLAN","duration":"1 bulan 3U","price":60000},{"category":"Streaming Apps","product":"DISNEY+","variant":"BASIC PLAN","duration":"1 hari 3U","price":4000},{"category":"Streaming Apps","product":"DISNEY+","variant":"BASIC PLAN","duration":"3 hari 3U","price":9000},{"category":"Streaming Apps","product":"DISNEY+","variant":"BASIC PLAN","duration":"5 hari 3U","price":13000},{"category":"Streaming Apps","product":"DISNEY+","variant":"BASIC PLAN","duration":"7 hari 3U","price":16000},{"category":"Streaming Apps","product":"DISNEY+","variant":"BASIC PLAN","duration":"1 bulan 3U","price":35000},{"category":"Streaming Apps","product":"DISNEY+","variant":"BASIC PLAN","duration":"1 bulan 2U","price":45000},{"category":"Streaming Apps","product":"DISNEY+","variant":"PRIVATE","duration":"1 bulan (premium)","price":160000},{"category":"Streaming Apps","product":"DISNEY+","variant":"PRIVATE","duration":"1 bulan (basic)","price":90000},{"category":"Streaming Apps","product":"HBO","variant":"HBO STANDAR SHARING","duration":"1 hari","price":5000},{"category":"Streaming Apps","product":"HBO","variant":"HBO STANDAR SHARING","duration":"3 hari","price":8000},{"category":"Streaming Apps","product":"HBO","variant":"HBO STANDAR SHARING","duration":"7 hari","price":15000},{"category":"Streaming Apps","product":"HBO","variant":"HBO STANDAR SHARING","duration":"1 bulan","price":25000},{"category":"Streaming Apps","product":"HBO","variant":"HBO ULTIMATE/PREMIUM SHARING","duration":"1 hari (8U)","price":7000},{"category":"Streaming Apps","product":"HBO","variant":"HBO ULTIMATE/PREMIUM SHARING","duration":"3 hari (8U)","price":12000},{"category":"Streaming Apps","product":"HBO","variant":"HBO ULTIMATE/PREMIUM SHARING","duration":"7 hari (8U)","price":20000},{"category":"Streaming Apps","product":"HBO","variant":"HBO ULTIMATE/PREMIUM SHARING","duration":"1 bulan","price":35000},{"category":"Streaming Apps","product":"HBO","variant":"HBO ULTIMATE/PREMIUM ANLIM","duration":"1 hari","price":8000},{"category":"Streaming Apps","product":"HBO","variant":"HBO ULTIMATE/PREMIUM ANLIM","duration":"3 hari","price":18000},{"category":"Streaming Apps","product":"HBO","variant":"HBO ULTIMATE/PREMIUM ANLIM","duration":"7 hari","price":25000},{"category":"Streaming Apps","product":"HBO","variant":"HBO ULTIMATE/PREMIUM ANLIM","duration":"1 bulan (sharing)","price":45000},{"category":"Streaming Apps","product":"HBO","variant":"HBO PRIVATE","duration":"1 bulan (standar)","price":75000},{"category":"Streaming Apps","product":"HBO","variant":"HBO PRIVATE","duration":"1 bulan (ultimate/premium)","price":125000},{"category":"Streaming Apps","product":"VIU","variant":"VIU PRIVATE ANLIM","duration":"1 hari","price":3000},{"category":"Streaming Apps","product":"VIU","variant":"VIU PRIVATE ANLIM","duration":"3 hari","price":6000},{"category":"Streaming Apps","product":"VIU","variant":"VIU PRIVATE ANLIM","duration":"7 hari","price":10000},{"category":"Streaming Apps","product":"VIU","variant":"VIU PRIVATE ANLIM","duration":"1 bulan","price":15000},{"category":"Streaming Apps","product":"VIU","variant":"VIU PRIVATE ANLIM","duration":"2 bulan","price":20000},{"category":"Streaming Apps","product":"VIU","variant":"VIU PRIVATE ANLIM","duration":"3 bulan","price":25000},{"category":"Streaming Apps","product":"VIU","variant":"VIU PRIVATE ANLIM","duration":"6 bulan","price":40000},{"category":"Streaming Apps","product":"VIU","variant":"VIU PRIVATE ANLIM","duration":"1 tahun","price":50000},{"category":"Streaming Apps","product":"VIU","variant":"VIU PRIVATE BIASA","duration":"1 hari","price":2000},{"category":"Streaming Apps","product":"VIU","variant":"VIU PRIVATE BIASA","duration":"3 hari","price":4000},{"category":"Streaming Apps","product":"VIU","variant":"VIU PRIVATE BIASA","duration":"7 hari","price":8000},{"category":"Streaming Apps","product":"VIU","variant":"VIU PRIVATE BIASA","duration":"1 bulan","price":10000},{"category":"Streaming Apps","product":"VIU","variant":"VIU PRIVATE BIASA","duration":"2 bulan","price":15000},{"category":"Streaming Apps","product":"VIU","variant":"VIU PRIVATE BIASA","duration":"3 bulan","price":20000},{"category":"Streaming Apps","product":"VIU","variant":"VIU PRIVATE BIASA","duration":"6 bulan","price":30000},{"category":"Streaming Apps","product":"VIU","variant":"VIU PRIVATE BIASA","duration":"1 tahun","price":40000},{"category":"Streaming Apps","product":"YOUKU","variant":"SHARING","duration":"1 hari","price":4000},{"category":"Streaming Apps","product":"YOUKU","variant":"SHARING","duration":"3 hari","price":7000},{"category":"Streaming Apps","product":"YOUKU","variant":"SHARING","duration":"7 hari","price":10000},{"category":"Streaming Apps","product":"YOUKU","variant":"SHARING","duration":"1 bulan","price":15000},{"category":"Streaming Apps","product":"YOUKU","variant":"SHARING","duration":"3 bulan","price":25000},{"category":"Streaming Apps","product":"YOUKU","variant":"SHARING","duration":"1 tahun","price":45000},{"category":"Streaming Apps","product":"YOUKU","variant":"PRIVATE","duration":"1 bulan","price":45000},{"category":"Streaming Apps","product":"YOUKU","variant":"PRIVATE","duration":"3 bulan","price":85000},{"category":"Streaming Apps","product":"YOUKU","variant":"PRIVATE","duration":"1 tahun","price":245000},{"category":"Streaming Apps","product":"LOKLOK","variant":"BASIC SHARING","duration":"1 hari (3U)","price":5000},{"category":"Streaming Apps","product":"LOKLOK","variant":"BASIC SHARING","duration":"3 hari (3U)","price":8000},{"category":"Streaming Apps","product":"LOKLOK","variant":"BASIC SHARING","duration":"5 hari (3U)","price":11000},{"category":"Streaming Apps","product":"LOKLOK","variant":"BASIC SHARING","duration":"7 hari (3U)","price":15000},{"category":"Streaming Apps","product":"LOKLOK","variant":"BASIC SHARING","duration":"1 bulan (3U)","price":27000},{"category":"Streaming Apps","product":"LOKLOK","variant":"BASIC SHARING","duration":"1 bulan (4U)","price":25000},{"category":"Streaming Apps","product":"LOKLOK","variant":"STANDARD SHARING","duration":"1 hari","price":8000},{"category":"Streaming Apps","product":"LOKLOK","variant":"STANDARD SHARING","duration":"3 hari","price":12000},{"category":"Streaming Apps","product":"LOKLOK","variant":"STANDARD SHARING","duration":"7 hari","price":17000},{"category":"Streaming Apps","product":"LOKLOK","variant":"STANDARD SHARING","duration":"14 hari","price":26000},{"category":"Streaming Apps","product":"LOKLOK","variant":"STANDARD SHARING","duration":"1 bulan","price":30000},{"category":"Streaming Apps","product":"LOKLOK","variant":"BASIC PRIVATE","duration":"1 hari","price":7000},{"category":"Streaming Apps","product":"LOKLOK","variant":"BASIC PRIVATE","duration":"3 hari","price":15000},{"category":"Streaming Apps","product":"LOKLOK","variant":"BASIC PRIVATE","duration":"7 hari","price":20000},{"category":"Streaming Apps","product":"LOKLOK","variant":"BASIC PRIVATE","duration":"11 hari","price":25000},{"category":"Streaming Apps","product":"LOKLOK","variant":"BASIC PRIVATE","duration":"1 bulan","price":60000},{"category":"Streaming Apps","product":"WE TV","variant":"SHARING","duration":"1 hari (6U)","price":5000},{"category":"Streaming Apps","product":"WE TV","variant":"SHARING","duration":"3 hari (6U)","price":7000},{"category":"Streaming Apps","product":"WE TV","variant":"SHARING","duration":"7 hari (6U)","price":10000},{"category":"Streaming Apps","product":"WE TV","variant":"SHARING","duration":"1 bulan (8U)","price":14000},{"category":"Streaming Apps","product":"WE TV","variant":"SHARING","duration":"1 bulan (5U-6U)","price":15000},{"category":"Streaming Apps","product":"WE TV","variant":"SHARING","duration":"1 bulan (3U / ANLIM)","price":25000},{"category":"Streaming Apps","product":"WE TV","variant":"SHARING","duration":"3 bulan (5U-6U)","price":30000},{"category":"Streaming Apps","product":"WE TV","variant":"PRIVATE","duration":"1 bulan","price":40000},{"category":"Streaming Apps","product":"IQIYI","variant":"SHARING STANDARD","duration":"1 hari (5U)","price":4000},{"category":"Streaming Apps","product":"IQIYI","variant":"SHARING STANDARD","duration":"3 hari (5U)","price":8000},{"category":"Streaming Apps","product":"IQIYI","variant":"SHARING STANDARD","duration":"5 hari (5U)","price":10000},{"category":"Streaming Apps","product":"IQIYI","variant":"SHARING STANDARD","duration":"1 bulan","price":15000},{"category":"Streaming Apps","product":"IQIYI","variant":"SHARING STANDARD","duration":"3 bulan","price":30000},{"category":"Streaming Apps","product":"IQIYI","variant":"SHARING STANDARD","duration":"1 tahun","price":40000},{"category":"Streaming Apps","product":"IQIYI","variant":"SHARING STANDARD","duration":"1 bulan (ANLIM)","price":25000},{"category":"Streaming Apps","product":"IQIYI","variant":"SHARING PREMIUM","duration":"1 hari","price":5000},{"category":"Streaming Apps","product":"IQIYI","variant":"SHARING PREMIUM","duration":"3 hari","price":10000},{"category":"Streaming Apps","product":"IQIYI","variant":"SHARING PREMIUM","duration":"5 hari","price":12000},{"category":"Streaming Apps","product":"IQIYI","variant":"SHARING PREMIUM","duration":"7 hari","price":15000},{"category":"Streaming Apps","product":"IQIYI","variant":"SHARING PREMIUM","duration":"1 bulan","price":25000},{"category":"Streaming Apps","product":"IQIYI","variant":"SHARING PREMIUM","duration":"3 bulan","price":40000},{"category":"Streaming Apps","product":"IQIYI","variant":"SHARING PREMIUM","duration":"1 tahun","price":55000},{"category":"Streaming Apps","product":"IQIYI","variant":"SHARING PREMIUM","duration":"1 bulan (ANLIM)","price":30000},{"category":"Streaming Apps","product":"CRUNCHYROLL","variant":"SHARING","duration":"7 hari","price":12000},{"category":"Streaming Apps","product":"CRUNCHYROLL","variant":"SHARING","duration":"14 hari","price":16000},{"category":"Streaming Apps","product":"CRUNCHYROLL","variant":"SHARING","duration":"1 bulan","price":20000},{"category":"Streaming Apps","product":"CRUNCHYROLL","variant":"SHARING","duration":"1 tahun","price":35000},{"category":"Streaming Apps","product":"CRUNCHYROLL","variant":"PRIVATE","duration":"7 hari","price":18000},{"category":"Streaming Apps","product":"CRUNCHYROLL","variant":"PRIVATE","duration":"14 hari","price":24000},{"category":"Streaming Apps","product":"BSTATION","variant":"SHARING","duration":"1 hari","price":5000},{"category":"Streaming Apps","product":"BSTATION","variant":"SHARING","duration":"3 hari","price":8000},{"category":"Streaming Apps","product":"BSTATION","variant":"SHARING","duration":"7 hari","price":11000},{"category":"Streaming Apps","product":"BSTATION","variant":"SHARING","duration":"1 bulan","price":15000},{"category":"Streaming Apps","product":"BSTATION","variant":"SHARING","duration":"3 bulan","price":25000},{"category":"Streaming Apps","product":"BSTATION","variant":"SHARING","duration":"1 tahun","price":45000},{"category":"Streaming Apps","product":"BSTATION","variant":"PRIVATE","duration":"1 bulan","price":40000},{"category":"Streaming Apps","product":"RCTI","variant":"SHARING","duration":"1 hari (2U)","price":6000},{"category":"Streaming Apps","product":"RCTI","variant":"3 hari (2U) 12k","duration":"7 hari (2U)","price":15000},{"category":"Streaming Apps","product":"RCTI","variant":"PRIVATE","duration":"1 hari","price":8000},{"category":"Streaming Apps","product":"RCTI","variant":"PRIVATE","duration":"3 hari","price":15000},{"category":"Streaming Apps","product":"RCTI","variant":"PRIVATE","duration":"7 hari","price":24000},{"category":"Streaming Apps","product":"RCTI","variant":"PRIVATE","duration":"1 bulan","price":35000},{"category":"Streaming Apps","product":"VISION","variant":"SHARING PAYTV","duration":"1 hari (2U)","price":6000},{"category":"Streaming Apps","product":"VISION","variant":"3 hari (2U) 10k","duration":"7 hari (2U)","price":15000},{"category":"Streaming Apps","product":"VISION","variant":"3 hari (2U) 10k","duration":"1 bulan","price":25000},{"category":"Streaming Apps","product":"VISION","variant":"PRIVATE PAYTV","duration":"1 hari","price":10000},{"category":"Streaming Apps","product":"VISION","variant":"PRIVATE PAYTV","duration":"3 hari","price":15000},{"category":"Streaming Apps","product":"VISION","variant":"PRIVATE PAYTV","duration":"7 hari","price":20000},{"category":"Streaming Apps","product":"VISION","variant":"PRIVATE PAYTV","duration":"1 bulan","price":50000},{"category":"Streaming Apps","product":"GAGAOLALA","variant":"SHARING","duration":"1 hari","price":5000},{"category":"Streaming Apps","product":"GAGAOLALA","variant":"SHARING","duration":"3 hari","price":7000},{"category":"Streaming Apps","product":"GAGAOLALA","variant":"SHARING","duration":"7 hari","price":12000},{"category":"Streaming Apps","product":"GAGAOLALA","variant":"SHARING","duration":"1 bulan","price":20000},{"category":"Streaming Apps","product":"GAGAOLALA","variant":"SHARING","duration":"3 bulan","price":30000},{"category":"Streaming Apps","product":"MANGO TV","variant":"SHARING","duration":"1 bulan","price":15000},{"category":"Streaming Apps","product":"MELOLO","variant":"SHARING","duration":"1 hari","price":8000},{"category":"Streaming Apps","product":"MELOLO","variant":"SHARING","duration":"7 hari","price":15000},{"category":"Streaming Apps","product":"MELOLO","variant":"SHARING","duration":"1 bulan","price":20000},{"category":"Streaming Apps","product":"MELOLO","variant":"SHARING","duration":"3 bulan","price":30000},{"category":"Streaming Apps","product":"MELOLO","variant":"SHARING","duration":"6 bulan","price":35000},{"category":"Streaming Apps","product":"MELOLO","variant":"SHARING","duration":"1 tahun","price":40000},{"category":"Streaming Apps","product":"MELOLO","variant":"PRIVATE","duration":"7 hari","price":30000},{"category":"Streaming Apps","product":"MELOLO","variant":"PRIVATE","duration":"1 bulan","price":55000},{"category":"Streaming Apps","product":"DRAMAWAVE","variant":"SHARING LOGIN APP","duration":"1 hari","price":15000},{"category":"Streaming Apps","product":"DRAMAWAVE","variant":"SHARING LOGIN APP","duration":"7 hari","price":55000},{"category":"Streaming Apps","product":"DRAMAWAVE","variant":"PRIVATE LOGIN WEB","duration":"7 hari","price":35000},{"category":"Streaming Apps","product":"DRAMAWAVE","variant":"PRIVATE LOGIN WEB","duration":"1 bulan","price":70000},{"category":"Streaming Apps","product":"REELSHORT","variant":"SHARING LOGIN APP","duration":"1 bulan","price":20000},{"category":"Streaming Apps","product":"REELSHORT","variant":"SHARING LOGIN APP","duration":"3 bulan","price":38000},{"category":"Streaming Apps","product":"REELSHORT","variant":"SHARING LOGIN APP","duration":"6 bulan","price":58000},{"category":"Streaming Apps","product":"REELSHORT","variant":"SHARING LOGIN APP","duration":"1 tahun","price":84000},{"category":"Streaming Apps","product":"DRAMABOX","variant":"SHARING","duration":"7 hari","price":15000},{"category":"Streaming Apps","product":"DRAMABOX","variant":"SHARING","duration":"1 bulan","price":25000},{"category":"Streaming Apps","product":"DRAMABOX","variant":"SHARING","duration":"3 bulan","price":60000},{"category":"Streaming Apps","product":"SHORTMAX","variant":"SHARING LOGIN APP","duration":"7 hari","price":20000},{"category":"Streaming Apps","product":"SHORTMAX","variant":"SHARING LOGIN APP","duration":"1 bulan","price":25000},{"category":"Streaming Apps","product":"SHORTMAX","variant":"SHARING LOGIN APP","duration":"3 bulan","price":45000},{"category":"Streaming Apps","product":"SHORTMAX","variant":"SHARING LOGIN APP","duration":"6 bulan","price":60000},{"category":"Streaming Apps","product":"SHORTMAX","variant":"SHARING LOGIN APP","duration":"1 tahun","price":90000},{"category":"Streaming Apps","product":"SHORTMAX","variant":"SHARING LOGIN WEB","duration":"7 hari","price":20000},{"category":"Streaming Apps","product":"SHORTMAX","variant":"SHARING LOGIN WEB","duration":"1 bulan","price":35000},{"category":"Streaming Apps","product":"SHORTMAX","variant":"PRIVATE LOGIN WEB","duration":"1 bulan","price":75000},{"category":"Streaming Apps","product":"NETSHORT","variant":"SHARING LOGIN WEB","duration":"7 hari","price":25000},{"category":"Streaming Apps","product":"NETSHORT","variant":"SHARING LOGIN WEB","duration":"1 bulan","price":40000},{"category":"Streaming Apps","product":"VIKI","variant":"SHARING","duration":"1 bulan (plus)","price":20000},{"category":"Streaming Apps","product":"VIKI","variant":"SHARING","duration":"1 bulan (standard)","price":18000},{"category":"Streaming Apps","product":"VIKI","variant":"PRIVATE","duration":"7 hari","price":18000},{"category":"Streaming Apps","product":"VIKI","variant":"PRIVATE","duration":"1 bulan (plus)","price":40000},{"category":"Streaming Apps","product":"VIKI","variant":"PRIVATE","duration":"1 bulan (standard)","price":30000},{"category":"Streaming Apps","product":"DRAKOR ID","variant":"SHARING","duration":"1 bulan","price":15000},{"category":"Streaming Apps","product":"DRAKOR ID","variant":"SHARING","duration":"3 bulan","price":35000},{"category":"Streaming Apps","product":"DRAKOR ID","variant":"SHARING","duration":"1 tahun","price":45000},{"category":"Streaming Apps","product":"DRAKOR ID","variant":"PRIVATE","duration":"1 bulan","price":30000},{"category":"Streaming Apps","product":"DRAKOR ID","variant":"PRIVATE","duration":"3 bulan","price":40000},{"category":"Education Apps","product":"CHATGPT PLUS","variant":"SHARING 8U","duration":"1 hari","price":10000},{"category":"Education Apps","product":"CHATGPT PLUS","variant":"SHARING 8U","duration":"3 hari","price":15000},{"category":"Education Apps","product":"CHATGPT PLUS","variant":"SHARING 8U","duration":"7 hari","price":20000},{"category":"Education Apps","product":"CHATGPT PLUS","variant":"SHARING 8U","duration":"1 bulan","price":40000},{"category":"Education Apps","product":"CHATGPT PLUS","variant":"SHARING 8U","duration":"3 bulan","price":85000},{"category":"Education Apps","product":"CHATGPT PLUS","variant":"SHARING 5U","duration":"1 hari","price":15000},{"category":"Education Apps","product":"CHATGPT PLUS","variant":"SHARING 5U","duration":"3 hari","price":20000},{"category":"Education Apps","product":"CHATGPT PLUS","variant":"SHARING 5U","duration":"7 hari","price":30000},{"category":"Education Apps","product":"CHATGPT PLUS","variant":"SHARING 5U","duration":"1 bulan","price":55000},{"category":"Education Apps","product":"CHATGPT PLUS","variant":"SHARING 3U","duration":"1 hari","price":18000},{"category":"Education Apps","product":"CHATGPT PLUS","variant":"SHARING 3U","duration":"3 hari","price":25000},{"category":"Education Apps","product":"CHATGPT PLUS","variant":"SHARING 3U","duration":"7 hari","price":35000},{"category":"Education Apps","product":"CHATGPT PLUS","variant":"SHARING 3U","duration":"1 bulan","price":65000},{"category":"Education Apps","product":"CHATGPT PLUS","variant":"PRIVATE","duration":"1 bulan","price":170000},{"category":"Education Apps","product":"CLAUDE PRO","variant":"SHARING 3U","duration":"7 hari","price":65000},{"category":"Education Apps","product":"CLAUDE PRO","variant":"SHARING 3U","duration":"1 bulan","price":170000},{"category":"Education Apps","product":"CLAUDE PRO","variant":"SHARING 5U","duration":"7 hari","price":60000},{"category":"Education Apps","product":"CLAUDE PRO","variant":"SHARING 5U","duration":"1 bulan","price":150000},{"category":"Education Apps","product":"CLAUDE PRO","variant":"PRIVATE","duration":"7 hari","price":140000},{"category":"Education Apps","product":"CLAUDE PRO","variant":"PRIVATE","duration":"1 bulan","price":400000},{"category":"Education Apps","product":"GROK AI","variant":"PRIVATE","duration":"7 hari","price":35000},{"category":"Education Apps","product":"GEMINI AI","variant":"SHARING 5U","duration":"1 bulan","price":25000},{"category":"Education Apps","product":"GEMINI AI","variant":"FAMPLAN / INVITE","duration":"1 bulan","price":25000},{"category":"Education Apps","product":"GEMINI AI","variant":"FAMPLAN / INVITE","duration":"2 bulan","price":40000},{"category":"Education Apps","product":"GEMINI AI","variant":"FAMPLAN / INVITE","duration":"3 bulan","price":55000},{"category":"Education Apps","product":"GEMINI AI","variant":"FAMPLAN / INVITE","duration":"6 bulan","price":95000},{"category":"Education Apps","product":"GEMINI AI","variant":"FAMPLAN / INVITE","duration":"1 tahun","price":120000},{"category":"Education Apps","product":"KIRO AI","variant":"PRIVATE","duration":"14 hari","price":50000},{"category":"Education Apps","product":"PERPLEXITY AI","variant":"SHARING 5U","duration":"1 hari","price":8000},{"category":"Education Apps","product":"PERPLEXITY AI","variant":"SHARING 5U","duration":"3 hari","price":15000},{"category":"Education Apps","product":"PERPLEXITY AI","variant":"SHARING 5U","duration":"7 hari","price":23000},{"category":"Education Apps","product":"PERPLEXITY AI","variant":"SHARING 5U","duration":"1 bulan","price":40000},{"category":"Education Apps","product":"MICROSOFT 365","variant":"FAMPLAN / INVITE","duration":"1 bulan","price":15000},{"category":"Education Apps","product":"MICROSOFT 365","variant":"FAMPLAN / INVITE","duration":"2 bulan","price":25000},{"category":"Education Apps","product":"MICROSOFT 365","variant":"FAMPLAN / INVITE","duration":"3 bulan","price":30000},{"category":"Education Apps","product":"MICROSOFT 365","variant":"FAMPLAN / INVITE","duration":"6 bulan","price":55000},{"category":"Education Apps","product":"MICROSOFT 365","variant":"FAMPLAN / INVITE","duration":"1 tahun","price":60000},{"category":"Education Apps","product":"MICROSOFT 365","variant":"HEAD","duration":"1 bulan","price":45000},{"category":"Education Apps","product":"GOODNOTES IOS","variant":"Standard","duration":"1 tahun","price":30000},{"category":"Education Apps","product":"GOODNOTES IOS","variant":"Standard","duration":"Lifetime (garansi 6b)","price":40000},{"category":"Education Apps","product":"GOODNOTES IOS","variant":"Standard","duration":"Lifetime (full garansi)","price":45000},{"category":"Education Apps","product":"DUOLINGO SUPER","variant":"FAMPLAN / INVITE","duration":"1 hari","price":7000},{"category":"Education Apps","product":"DUOLINGO SUPER","variant":"FAMPLAN / INVITE","duration":"3 hari","price":10000},{"category":"Education Apps","product":"DUOLINGO SUPER","variant":"FAMPLAN / INVITE","duration":"7 hari","price":15000},{"category":"Education Apps","product":"DUOLINGO SUPER","variant":"FAMPLAN / INVITE","duration":"1 bulan","price":20000},{"category":"Education Apps","product":"DUOLINGO SUPER","variant":"FAMPLAN / INVITE","duration":"3 bulan","price":40000},{"category":"Education Apps","product":"DUOLINGO SUPER","variant":"FAMPLAN / INVITE","duration":"6 bulan","price":70000},{"category":"Education Apps","product":"DUOLINGO SUPER","variant":"INDIVIDUAL PLAN","duration":"14 hari","price":18000},{"category":"Education Apps","product":"DUOLINGO SUPER","variant":"INDIVIDUAL PLAN","duration":"1 bulan","price":30000},{"category":"Education Apps","product":"DUOLINGO SUPER","variant":"INDIVIDUAL PLAN","duration":"3 bulan","price":45000},{"category":"Education Apps","product":"DUOLINGO SUPER","variant":"INDIVIDUAL PLAN","duration":"6 bulan","price":60000},{"category":"Education Apps","product":"DUOLINGO SUPER","variant":"HEAD","duration":"1 bulan","price":45000},{"category":"Education Apps","product":"QUILLBOT","variant":"SHARING 8U","duration":"7 hari","price":15000},{"category":"Education Apps","product":"QUILLBOT","variant":"SHARING 8U","duration":"1 bulan","price":25000},{"category":"Education Apps","product":"QUILLBOT","variant":"SHARING 5U","duration":"1 hari","price":5000},{"category":"Education Apps","product":"QUILLBOT","variant":"SHARING 5U","duration":"3 hari","price":7000},{"category":"Education Apps","product":"QUILLBOT","variant":"SHARING 5U","duration":"7 hari","price":15000},{"category":"Education Apps","product":"QUILLBOT","variant":"SHARING 5U","duration":"1 bulan","price":30000},{"category":"Education Apps","product":"QUILLBOT","variant":"PRIVATE","duration":"1 bulan","price":60000},{"category":"Education Apps","product":"GRAMMARLY","variant":"SHARING 5U","duration":"1 hari","price":6000},{"category":"Education Apps","product":"GRAMMARLY","variant":"SHARING 5U","duration":"3 hari","price":10000},{"category":"Education Apps","product":"GRAMMARLY","variant":"SHARING 5U","duration":"7 hari","price":25000},{"category":"Education Apps","product":"GRAMMARLY","variant":"SHARING 8U","duration":"7 hari","price":20000},{"category":"Education Apps","product":"GRAMMARLY","variant":"SHARING 8U","duration":"1 bulan","price":25000},{"category":"Education Apps","product":"GRAMMARLY","variant":"SHARING 8U","duration":"2 bulan","price":35000},{"category":"Education Apps","product":"GRAMMARLY","variant":"SHARING 8U","duration":"3 bulan","price":65000},{"category":"Education Apps","product":"GRAMMARLY","variant":"SHARING 8U","duration":"1 tahun","price":75000},{"category":"Education Apps","product":"GRAMMARLY","variant":"PRIVATE","duration":"1 bulan","price":55000},{"category":"Education Apps","product":"GRAMMARLY","variant":"PRIVATE","duration":"2 bulan","price":65000},{"category":"Education Apps","product":"GRAMMARLY","variant":"PRIVATE","duration":"3 bulan","price":75000},{"category":"Education Apps","product":"GRAMMARLY","variant":"PRIVATE","duration":"6 bulan","price":100000},{"category":"Education Apps","product":"GRAMMARLY","variant":"EDUCATION","duration":"2 bulan","price":35000},{"category":"Education Apps","product":"SCRIBD","variant":"SHARING","duration":"1 bulan","price":15000},{"category":"Education Apps","product":"SCRIBD","variant":"SHARING","duration":"2 bulan","price":20000},{"category":"Education Apps","product":"SCRIBD","variant":"SHARING","duration":"3 bulan","price":28000},{"category":"Education Apps","product":"SCRIBD","variant":"PRIVATE","duration":"1 bulan","price":35000},{"category":"Education Apps","product":"WPS OFFICE","variant":"SHARING","duration":"1 bulan","price":20000},{"category":"Education Apps","product":"WPS OFFICE","variant":"SHARING","duration":"1 tahun","price":30000},{"category":"Education Apps","product":"WPS OFFICE","variant":"PRIVATE","duration":"1 bulan","price":40000},{"category":"Education Apps","product":"DEEPL PRO","variant":"SHARING","duration":"1 hari","price":7000},{"category":"Education Apps","product":"DEEPL PRO","variant":"SHARING","duration":"3 hari","price":10000},{"category":"Education Apps","product":"DEEPL PRO","variant":"SHARING","duration":"7 hari","price":15000},{"category":"Education Apps","product":"DEEPL PRO","variant":"SHARING","duration":"14 hari","price":25000},{"category":"Education Apps","product":"DEEPL PRO","variant":"SHARING 3U","duration":"1 bulan","price":30000},{"category":"Education Apps","product":"DEEPL PRO","variant":"SHARING 3U","duration":"2 bulan","price":50000},{"category":"Education Apps","product":"DEEPL PRO","variant":"SHARING 3U","duration":"3 bulan","price":65000},{"category":"Education Apps","product":"DEEPL PRO","variant":"PRIVATE","duration":"1 hari","price":11000},{"category":"Education Apps","product":"DEEPL PRO","variant":"PRIVATE","duration":"3 hari","price":15000},{"category":"Education Apps","product":"DEEPL PRO","variant":"PRIVATE","duration":"7 hari","price":25000},{"category":"Education Apps","product":"DEEPL PRO","variant":"PRIVATE","duration":"14 hari","price":35000},{"category":"Education Apps","product":"DEEPL PRO","variant":"PRIVATE","duration":"1 bulan","price":40000},{"category":"Education Apps","product":"DEEPL PRO","variant":"PRIVATE","duration":"2 bulan","price":70000},{"category":"Education Apps","product":"DEEPL PRO","variant":"PRIVATE","duration":"3 bulan","price":90000},{"category":"Editing Apps","product":"CAPCUT PRO","variant":"SHARING 3U","duration":"1 hari","price":8000},{"category":"Editing Apps","product":"CAPCUT PRO","variant":"SHARING 3U","duration":"3 hari","price":12000},{"category":"Editing Apps","product":"CAPCUT PRO","variant":"SHARING 3U","duration":"7 hari","price":17000},{"category":"Editing Apps","product":"CAPCUT PRO","variant":"SHARING 3U","duration":"1 bulan","price":35000},{"category":"Editing Apps","product":"CAPCUT PRO","variant":"SHARING 2U","duration":"1 hari","price":9000},{"category":"Editing Apps","product":"CAPCUT PRO","variant":"SHARING 2U","duration":"3 hari","price":15000},{"category":"Editing Apps","product":"CAPCUT PRO","variant":"SHARING 2U","duration":"7 hari","price":20000},{"category":"Editing Apps","product":"CAPCUT PRO","variant":"SHARING 2U","duration":"1 bulan","price":45000},{"category":"Editing Apps","product":"CAPCUT PRO","variant":"PRIVATE","duration":"1 hari","price":10000},{"category":"Editing Apps","product":"CAPCUT PRO","variant":"PRIVATE","duration":"3 hari","price":18000},{"category":"Editing Apps","product":"CAPCUT PRO","variant":"PRIVATE","duration":"7 hari","price":25000},{"category":"Editing Apps","product":"CANVA","variant":"MEMBER","duration":"1 hari","price":3000},{"category":"Editing Apps","product":"CANVA","variant":"MEMBER","duration":"3 hari","price":5000},{"category":"Editing Apps","product":"CANVA","variant":"MEMBER","duration":"7 hari","price":7000},{"category":"Editing Apps","product":"CANVA","variant":"MEMBER","duration":"1 bulan","price":12000},{"category":"Editing Apps","product":"CANVA","variant":"MEMBER","duration":"2 bulan","price":14000},{"category":"Editing Apps","product":"CANVA","variant":"MEMBER","duration":"3 bulan","price":17000},{"category":"Editing Apps","product":"CANVA","variant":"MEMBER","duration":"4 bulan","price":20000},{"category":"Editing Apps","product":"CANVA","variant":"MEMBER","duration":"5 bulan","price":24000},{"category":"Editing Apps","product":"CANVA","variant":"MEMBER","duration":"6 bulan","price":27000},{"category":"Editing Apps","product":"CANVA","variant":"MEMBER","duration":"1 tahun garansi 6 bulan","price":32000},{"category":"Editing Apps","product":"CANVA","variant":"MEMBER","duration":"1 tahun full garansi","price":37000},{"category":"Editing Apps","product":"CANVA","variant":"EDUCATION","duration":"Lifetime garansi 6 bulan","price":34000},{"category":"Editing Apps","product":"CANVA","variant":"EDUCATION","duration":"Lifetime garansi 12 bulan","price":40000},{"category":"Editing Apps","product":"DAZZCAM IOS","variant":"LIFETIME","duration":"Garansi 6 bulan","price":30000},{"category":"Editing Apps","product":"DAZZCAM IOS","variant":"LIFETIME","duration":"Garansi 1 tahun","price":45000},{"category":"Editing Apps","product":"CAMSCANNER","variant":"SHARING","duration":"1 bulan","price":20000},{"category":"Editing Apps","product":"CAMSCANNER","variant":"SHARING","duration":"6 bulan","price":35000},{"category":"Editing Apps","product":"CAMSCANNER","variant":"SHARING","duration":"1 tahun","price":40000},{"category":"Editing Apps","product":"CAMSCANNER","variant":"PRIVATE","duration":"1 bulan","price":30000},{"category":"Editing Apps","product":"ALIGHT MOTION","variant":"SHARING","duration":"1 bulan","price":15000},{"category":"Editing Apps","product":"ALIGHT MOTION","variant":"SHARING","duration":"1 tahun","price":30000},{"category":"Editing Apps","product":"ALIGHT MOTION","variant":"PRIVATE","duration":"1 bulan","price":35000},{"category":"Editing Apps","product":"ALIGHT MOTION","variant":"PRIVATE","duration":"1 tahun","price":50000},{"category":"Editing Apps","product":"BEAUTY PLUS","variant":"IOS","duration":"Lifetime garansi 6 bulan","price":33000},{"category":"Editing Apps","product":"BEAUTY PLUS","variant":"ANDROID","duration":"Lifetime garansi 6 bulan","price":33000},{"category":"Editing Apps","product":"BEAUTY PLUS","variant":"ANDROID","duration":"Lifetime garansi 1 tahun","price":40000},{"category":"Editing Apps","product":"PICSART","variant":"SHARING","duration":"1 bulan","price":15000},{"category":"Editing Apps","product":"PICSART","variant":"PRIVATE","duration":"1 bulan","price":25000},{"category":"Editing Apps","product":"IBIS PAINT","variant":"SHARING","duration":"6 bulan","price":30000},{"category":"Editing Apps","product":"IBIS PAINT","variant":"SHARING","duration":"1 tahun","price":40000},{"category":"Editing Apps","product":"INSHOT","variant":"SHARING","duration":"Lifetime garansi 1 tahun","price":40000},{"category":"Editing Apps","product":"LIGHTROOM","variant":"SHARING","duration":"1 tahun","price":40000},{"category":"Editing Apps","product":"MEITU","variant":"SHARING","duration":"VIP 7 hari","price":15000},{"category":"Editing Apps","product":"MEITU","variant":"SHARING","duration":"VIP+ 7 hari","price":25000},{"category":"Editing Apps","product":"MEITU","variant":"PRIVATE","duration":"VIP 7 hari","price":25000},{"category":"Editing Apps","product":"MEITU","variant":"PRIVATE","duration":"VIP+ 7 hari","price":35000},{"category":"Editing Apps","product":"OLDROLL","variant":"LIFETIME","duration":"Garansi 6 bulan","price":35000},{"category":"Editing Apps","product":"OLDROLL","variant":"LIFETIME","duration":"Garansi 1 tahun","price":45000},{"category":"Editing Apps","product":"PROCREATE","variant":"LIFETIME","duration":"Garansi 6 bulan","price":35000},{"category":"Editing Apps","product":"PROCREATE","variant":"LIFETIME","duration":"Garansi 1 tahun","price":40000},{"category":"Editing Apps","product":"REMINI","variant":"SHARING","duration":"1 bulan","price":20000},{"category":"Editing Apps","product":"REMINI","variant":"SHARING","duration":"1 tahun","price":40000},{"category":"Editing Apps","product":"REMINI","variant":"PRIVATE","duration":"7 hari","price":14000},{"category":"Editing Apps","product":"REMINI","variant":"PRIVATE","duration":"1 bulan","price":35000},{"category":"Editing Apps","product":"VSCO","variant":"SHARING PLUS","duration":"6 bulan","price":25000},{"category":"Editing Apps","product":"VSCO","variant":"SHARING PLUS","duration":"1 tahun","price":35000},{"category":"Editing Apps","product":"VSCO","variant":"SHARING PRO","duration":"1 tahun","price":45000},{"category":"Editing Apps","product":"WINK","variant":"SHARING","duration":"7 hari","price":20000},{"category":"Editing Apps","product":"WINK","variant":"SHARING","duration":"1 bulan","price":38000},{"category":"Editing Apps","product":"WINK","variant":"PRIVATE","duration":"7 hari","price":25000},{"category":"Editing Apps","product":"WINK","variant":"PRIVATE","duration":"1 bulan","price":60000},{"category":"Music Apps","product":"APPLE MUSIC","variant":"FAMPLAN","duration":"1 bulan","price":23000},{"category":"Music Apps","product":"APPLE MUSIC","variant":"FAMPLAN","duration":"2 bulan","price":30000},{"category":"Music Apps","product":"APPLE MUSIC","variant":"FAMPLAN","duration":"3 bulan","price":38000},{"category":"Music Apps","product":"APPLE MUSIC","variant":"FAMPLAN","duration":"4 bulan","price":43000},{"category":"Music Apps","product":"APPLE MUSIC","variant":"INDIVIDUAL PLAN","duration":"1 bulan","price":30000},{"category":"Music Apps","product":"SPOTIFY","variant":"HARIAN","duration":"1 hari","price":6000},{"category":"Music Apps","product":"SPOTIFY","variant":"HARIAN","duration":"3 hari","price":10000},{"category":"Music Apps","product":"SPOTIFY","variant":"HARIAN","duration":"7 hari","price":18000},{"category":"Music Apps","product":"SPOTIFY","variant":"FAMPLAN","duration":"1 bulan","price":25000},{"category":"Music Apps","product":"SPOTIFY","variant":"FAMPLAN","duration":"2 bulan","price":50000},{"category":"Music Apps","product":"SPOTIFY","variant":"FAMPLAN","duration":"3 bulan","price":70000},{"category":"Music Apps","product":"SPOTIFY","variant":"INDPLAN REPLACE","duration":"1 bulan","price":35000},{"category":"Music Apps","product":"SPOTIFY","variant":"INDPLAN REPLACE","duration":"2 bulan","price":55000},{"category":"Music Apps","product":"SPOTIFY","variant":"INDPLAN REPLACE","duration":"3 bulan","price":75000},{"category":"Music Apps","product":"SPOTIFY","variant":"INDPLAN NO REPLACE","duration":"1 bulan","price":45000},{"category":"Music Apps","product":"SPOTIFY","variant":"INDPLAN NO REPLACE","duration":"2 bulan","price":58000},{"category":"Music Apps","product":"SPOTIFY","variant":"INDPLAN NO REPLACE","duration":"3 bulan","price":160000},{"category":"Music Apps","product":"SPOTIFY","variant":"STUDENT","duration":"1 bulan","price":35000},{"category":"Music Apps","product":"SPOTIFY","variant":"STUDENT","duration":"2 bulan","price":70000},{"category":"Music Apps","product":"SPOTIFY","variant":"STUDENT LEGAL PPJ","duration":"1 bulan","price":35000},{"category":"Music Apps","product":"SPOTIFY","variant":"INDPLAN LEGAL PPJ","duration":"1 bulan","price":45000},{"category":"Other Apps","product":"KILONOTES","variant":"LIFETIME","duration":"Garansi 6 bulan","price":35000},{"category":"Other Apps","product":"WATTPAD","variant":"SHARING","duration":"1 bulan","price":15000},{"category":"Other Apps","product":"WATTPAD","variant":"SHARING","duration":"1 tahun garansi 6 bulan","price":35000},{"category":"Other Apps","product":"WATTPAD","variant":"PRIVATE","duration":"1 bulan","price":40000},{"category":"Other Apps","product":"GET CONTACT","variant":"Standard","duration":"1 bulan","price":15000},{"category":"Other Apps","product":"HMA VPN","variant":"SHARING","duration":"1 bulan","price":20000},{"category":"Other Apps","product":"HMA VPN","variant":"PRIVATE","duration":"1 bulan","price":35000},{"category":"Other Apps","product":"EXPRESS VPN","variant":"SHARING","duration":"1 bulan","price":25000},{"category":"Other Apps","product":"EXPRESS VPN","variant":"PRIVATE","duration":"1 bulan","price":40000},{"category":"Other Apps","product":"SURFSHARK VPN","variant":"SHARING","duration":"1 bulan","price":20000},{"category":"Other Apps","product":"WINDSCRIBE VPN","variant":"SHARING","duration":"1 bulan","price":20000},{"category":"Other Apps","product":"ILOVEPDF","variant":"SHARING","duration":"1 bulan","price":15000},{"category":"Other Apps","product":"ILOVEPDF","variant":"SHARING","duration":"1 tahun","price":35000},{"category":"Other Apps","product":"ILOVEPDF","variant":"PRIVATE","duration":"1 bulan","price":35000},{"category":"Other Apps","product":"ZOOM","variant":"100 PESERTA","duration":"1 jam","price":7000},{"category":"Other Apps","product":"ZOOM","variant":"100 PESERTA","duration":"1 hari","price":15000},{"category":"Other Apps","product":"ZOOM","variant":"100 PESERTA","duration":"7 hari","price":45000},{"category":"Other Apps","product":"ZOOM","variant":"100 PESERTA","duration":"14 hari","price":55000},{"category":"Other Apps","product":"ZOOM","variant":"100 PESERTA","duration":"1 bulan","price":75000},{"category":"Other Apps","product":"ZOOM","variant":"300 PESERTA","duration":"1 jam","price":15000},{"category":"Other Apps","product":"ZOOM","variant":"300 PESERTA","duration":"1 hari","price":35000},{"category":"Other Apps","product":"ZOOM","variant":"300 PESERTA","duration":"7 hari","price":100000},{"category":"Other Apps","product":"ZOOM","variant":"300 PESERTA","duration":"1 bulan","price":185000},{"category":"Other Apps","product":"ZOOM","variant":"500 PESERTA","duration":"1 jam","price":25000},{"category":"Other Apps","product":"ZOOM","variant":"500 PESERTA","duration":"1 hari","price":65000},{"category":"Other Apps","product":"ZOOM","variant":"500 PESERTA","duration":"7 hari","price":250000},{"category":"Other Apps","product":"ZOOM","variant":"500 PESERTA","duration":"1 bulan","price":350000},{"category":"Other Apps","product":"ZOOM","variant":"1000 PESERTA","duration":"1 jam","price":45000},{"category":"Other Apps","product":"ZOOM","variant":"1000 PESERTA","duration":"1 hari","price":115000},{"category":"Other Apps","product":"ZOOM","variant":"1000 PESERTA","duration":"7 hari","price":335000},{"category":"Other Apps","product":"ZOOM","variant":"1000 PESERTA","duration":"1 bulan","price":500000}];
  const PRETTY = {"CHATGPT PLUS":"ChatGPT Plus","CLAUDE PRO":"Claude Pro","GROK AI":"Grok AI","GEMINI AI":"Gemini AI","KIRO AI":"Kiro AI","PERPLEXITY AI":"Perplexity AI","MICROSOFT 365":"Microsoft 365","GOODNOTES IOS":"Goodnotes iOS","DEEPL PRO":"DeepL Pro","CAPCUT PRO":"CapCut Pro","DAZZCAM IOS":"DazzCam iOS","IBIS PAINT":"ibis Paint","APPLE MUSIC":"Apple Music","GET CONTACT":"GetContact","ILOVEPDF":"iLovePDF","WE TV":"WeTV","IQIYI":"iQIYI","WPS OFFICE":"WPS Office","HMA VPN":"HMA VPN","EXPRESS VPN":"ExpressVPN","SURFSHARK VPN":"Surfshark VPN","WINDSCRIBE VPN":"Windscribe VPN"};
  const ICON_BASE = 'assets/app-logos/seller-app-premium/';
  const CATEGORIES = [...new Set(CATALOG.map(x=>x.category))];
  const rupiahLocal = n=>'Rp'+Math.round(Number(n)||0).toLocaleString('id-ID');
  const esc = s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[c]));
  const slug = s=>String(s||'').toLowerCase().replace(/\+/g,'plus').replace(/&/g,'and').replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'');
  const pretty = s=>PRETTY[s]||String(s||'').toLowerCase().replace(/(^|\s|\/|-)([a-z])/g,(m,a,b)=>a+b.toUpperCase());
  const rowKey = r=>[r.category,r.product,r.variant,r.duration].join('||');
  const isSellerTx = t=>String(t?.package_code||'').toUpperCase()==='SELLER_APP' || String(t?.topic_name||'').toLowerCase().includes('seller app premium');

  let category='', product='', variant='', duration='', searchQuery='', cart=[], mounted=false;
  let sellerSettings = new Map();
  let sellerSettingsReady = false;
  let sellerCustomerMeta = new Map();
  let historyExpanded = false;
  let settingsCategory = CATEGORIES[0]||'';
  let settingsSearch = '';

  function effective(base){
    if(!base) return null;
    const saved=sellerSettings.get(rowKey(base));
    return {...base,price:Number(saved?.price ?? base.price ?? 0),cost:Number(saved?.cost ?? 0)};
  }
  function allEffective(){return CATALOG.map(effective)}
  function rows(){
    const source=allEffective();
    if(searchQuery){
      const q=searchQuery.toLowerCase();
      return source.filter(x=>pretty(x.product).toLowerCase().includes(q)||String(x.product).toLowerCase().includes(q));
    }
    return category ? source.filter(x=>x.category===category) : [];
  }
  function products(){
    const seen=new Map();
    rows().forEach(x=>{if(!seen.has(x.product))seen.set(x.product,{product:x.product,category:x.category})});
    return [...seen.values()];
  }
  function variants(){
    return [...new Set(allEffective().filter(x=>x.category===category&&x.product===product).map(x=>x.variant))];
  }
  function durations(){
    return allEffective().filter(x=>x.category===category&&x.product===product&&x.variant===variant);
  }
  function selectedRow(){
    return allEffective().find(x=>x.category===category&&x.product===product&&x.variant===variant&&x.duration===duration)||null;
  }
  function itemKey(x){return [x.category,x.product,x.variant,x.duration].join('|')}
  function categoryIcon(c){
    const icons={
      'Streaming Apps':'<svg viewBox="0 0 24 24"><rect x="4" y="5" width="16" height="14" rx="3"/><path d="m10 9 5 3-5 3Z"/></svg>',
      'Education Apps':'<svg viewBox="0 0 24 24"><path d="m3 10 9-5 9 5-9 5Z"/><path d="M7 12v5c3 2 7 2 10 0v-5"/></svg>',
      'Editing Apps':'<svg viewBox="0 0 24 24"><path d="m4 20 6-6M14 10l6-6M8 8l8 8M5 5l14 14"/></svg>',
      'Music Apps':'<svg viewBox="0 0 24 24"><path d="M9 18V6l10-2v12"/><circle cx="6" cy="18" r="3"/><circle cx="16" cy="16" r="3"/></svg>',
      'Other Apps':'<svg viewBox="0 0 24 24"><rect x="4" y="4" width="6" height="6" rx="1"/><rect x="14" y="4" width="6" height="6" rx="1"/><rect x="4" y="14" width="6" height="6" rx="1"/><rect x="14" y="14" width="6" height="6" rx="1"/></svg>'
    };
    return icons[c]||icons['Other Apps'];
  }

  function hideGenericMasterAreas(){
    ['tx-packages','tx-topics','tx-addons'].forEach(id=>{
      const el=document.getElementById(id); if(!el)return;
      const box=el.closest('.form-group')||el.parentElement;
      (box||el).classList.add('seller-template-hidden');
    });
  }

  async function loadSellerProductSettings(){
    sellerSettingsReady=false;
    try{
      const {data,error}=await db.from('seller_product_settings')
        .select('item_key,category,product,variant,duration,price,cost')
        .eq('workspace_id',requireWorkspaceId());
      if(error) throw error;
      sellerSettings=new Map((data||[]).map(x=>[x.item_key,x]));
      sellerSettingsReady=true;
    }catch(err){
      console.warn('Seller product settings unavailable:',err?.message||err);
      sellerSettings=new Map();
    }
    renderProducts();
    renderVariants();
    renderDurations();
    renderCart();
    installSellerSettings();
    renderSellerSettingsProducts();
  }

  async function loadSellerCustomerMeta(){
    try{
      const {data,error}=await db.from('customers')
        .select('id,device,admin_fh,warranty')
        .eq('workspace_id',requireWorkspaceId());
      if(error) throw error;
      sellerCustomerMeta=new Map((data||[]).map(x=>[String(x.id),x]));
      decorateCustomerDatabase();
    }catch(err){
      console.warn('Seller customer metadata unavailable:',err?.message||err);
    }
  }

  function renderCategories(){
    const box=document.getElementById('seller-category-grid'); if(!box)return;
    box.innerHTML=CATEGORIES.map(c=>`<button type="button" class="seller-category-card ${c===category?'active':''}" data-seller-category="${esc(c)}"><span>${categoryIcon(c)}</span><strong>${esc(c)}</strong></button>`).join('');
  }
  function renderProducts(){
    const box=document.getElementById('seller-product-grid'); if(!box)return;
    const list=products();
    if(!list.length){
      box.innerHTML=`<div class="seller-product-empty">${searchQuery?'Produk tidak ditemukan.':'Pilih kategori dulu untuk menampilkan produk.'}</div>`;
      renderCategories();
      return;
    }
    box.innerHTML=list.map(p=>`<button type="button" class="seller-product-card ${p.product===product?'active':''}" data-seller-product="${esc(p.product)}" data-seller-product-category="${esc(p.category)}"><img src="${ICON_BASE+slug(p.product)+'.svg'}" alt=""><span>${esc(pretty(p.product))}</span>${searchQuery?`<small>${esc(p.category)}</small>`:''}</button>`).join('');
    renderCategories();
  }
  function renderVariants(){
    const sec=document.getElementById('seller-variant-section'),box=document.getElementById('seller-variant-grid');
    if(!sec||!box)return;
    const list=product?variants():[];
    sec.hidden=!list.length;
    if(!list.length){variant='';duration='';renderDurations();return;}
    if(!variant||!list.includes(variant))variant='';
    box.innerHTML=list.map(v=>`<button type="button" class="seller-choice ${v===variant?'active':''}" data-seller-variant="${esc(v)}">${esc(pretty(v))}</button>`).join('');
    renderDurations();
  }
  function renderDurations(){
    const sec=document.getElementById('seller-duration-section'),box=document.getElementById('seller-duration-grid');
    if(!sec||!box)return;
    const list=variant?durations():[];
    sec.hidden=!list.length;
    const labels=list.map(x=>x.duration);
    if(!duration||!labels.includes(duration))duration='';
    box.innerHTML=list.map(x=>`<button type="button" class="seller-choice ${x.duration===duration?'active':''}" data-seller-duration="${esc(x.duration)}">${esc(pretty(x.duration))}</button>`).join('');
    renderSelection();
  }
  function renderSelection(){
    const r=selectedRow(),box=document.getElementById('seller-selection'),price=document.getElementById('seller-selected-price'),meta=document.getElementById('seller-selected-meta'),add=document.getElementById('seller-add-order');
    if(box)box.hidden=!r;
    if(price)price.textContent=r?rupiahLocal(r.price):'—';
    if(meta)meta.textContent=r?`${pretty(r.product)} · ${pretty(r.variant)} · ${pretty(r.duration)}`:'Pilih produk, varian, dan durasi';
    if(add)add.disabled=!r;
  }
  function renderCart(){
    const list=document.getElementById('seller-cart-list'),count=document.getElementById('seller-cart-count'),total=document.getElementById('seller-cart-total'),empty=document.getElementById('seller-cart-empty');
    if(!list)return;
    const qty=cart.reduce((s,x)=>s+x.qty,0),subtotal=cart.reduce((s,x)=>s+x.price*x.qty,0);
    let sum=subtotal;
    try{const a=getPriceAdjustment(subtotal);sum=Math.max(0,subtotal+Number(a.amount||0));}catch(_e){}
    const tipRaw=String(document.getElementById('tx-tip')?.value||'').trim(),tip=tipRaw===''?0:Number(tipRaw);
    if(Number.isFinite(tip)&&tip>=0)sum+=tip;
    const txTotal=document.getElementById('tx-total'); if(txTotal)txTotal.textContent=rupiahLocal(sum);
    if(count)count.textContent=`${qty} item${qty===1?'':'s'}`;
    if(total)total.textContent=rupiahLocal(sum);
    if(empty)empty.hidden=cart.length>0;
    list.innerHTML=cart.map((x,i)=>`<div class="seller-cart-item"><img src="${ICON_BASE+slug(x.product)+'.svg'}" alt=""><div class="seller-cart-copy"><strong>${esc(pretty(x.product))}</strong><small>${esc(pretty(x.variant))} · ${esc(pretty(x.duration))}</small></div><div class="seller-cart-qty"><button type="button" data-seller-minus="${i}">−</button><span>${x.qty}</span><button type="button" data-seller-plus="${i}">+</button></div><strong class="seller-cart-subtotal">${rupiahLocal(x.price*x.qty)}</strong><button class="seller-cart-remove" type="button" data-seller-remove="${i}" aria-label="Hapus">×</button></div>`).join('');
    const save=document.getElementById('seller-save-order'); if(save)save.disabled=!cart.length;
  }
  function addSelected(){
    const r=selectedRow(); if(!r)return;
    const item={category:r.category,product:r.product,variant:r.variant,duration:r.duration,price:Number(r.price),cost:Number(r.cost||0),qty:1,seller_key:rowKey(r)};
    const k=itemKey(item),found=cart.find(x=>itemKey(x)===k);
    if(found)found.qty+=1; else cart.push(item);
    renderCart();
    try{showToast(`${pretty(r.product)} ditambahkan ke pesanan.`)}catch(_e){}
  }

  function extraValue(id){return document.getElementById(id)?.value.trim()||null}
  function buildSellerOrder(){
    if(!cart.length)throw new Error('Pilih minimal 1 paket.');
    const customer=document.getElementById('tx-customer')?.value.trim();
    if(!customer)throw new Error('Nama customer wajib diisi.');
    const subtotal=cart.reduce((s,x)=>s+x.price*x.qty,0);
    let adjustment={type:'none',mode:'nominal',value:0,amount:0};
    try{adjustment=getPriceAdjustment(subtotal)}catch(_e){}
    const tipInput=document.getElementById('tx-tip'),tipRaw=String(tipInput?.value||'').trim(),tip=tipRaw===''?0:Number(tipRaw);
    if(tipRaw!==''&&(!Number.isFinite(tip)||tip<500||tip>10000000))throw new Error('Tip harus di antara Rp500 sampai Rp10.000.000.');
    const items=cart.map((x,i)=>({
      id:`seller-${slug(x.product)}-${i+1}`,code:x.product,
      name:`${pretty(x.product)} · ${pretty(x.variant)} · ${pretty(x.duration)}`,
      seller_key:x.seller_key,category:x.category,product:x.product,variant:x.variant,duration:x.duration,
      qty:x.qty,unit_price:x.price,subtotal:x.price*x.qty,cost_price:x.cost,cost_subtotal:x.cost*x.qty,
      profit_share_mode:'percentage',manual_profit_split:[]
    }));
    const customerId=document.getElementById('tx-customer-id')?.value||null;
    return {
      transaction_date:document.getElementById('tx-date')?.value,
      reading_started_at:new Date().toISOString(),reading_status:'on_progress',
      shift_id:(typeof currentShift!=='undefined'&&currentShift?.id)?currentShift.id:null,
      customer_name:customer,customer_id:customerId,
      platform:document.getElementById('tx-platform')?.value||'Other',
      social_name:document.getElementById('tx-social-name')?.value.trim()||null,
      whatsapp:document.getElementById('tx-whatsapp')?.value.trim()||null,
      device:extraValue('seller-device'),admin_fh:extraValue('seller-admin-fh'),warranty:extraValue('seller-warranty'),
      package_id:null,package_code:'SELLER_APP',package_price:subtotal,package_qty:cart.reduce((s,x)=>s+x.qty,0),
      topic_id:null,topic_name:'Seller App Premium',addon_id:null,addon_code:null,addon_price:0,addon_qty:0,
      order_items:items,order_topics:[{id:'seller-app-premium',name:'Seller App Premium'}],order_addons:[],
      price_adjustment_type:adjustment.type,price_adjustment_mode:adjustment.mode,price_adjustment_value:adjustment.value,price_adjustment_amount:adjustment.amount,
      tip_amount:tip,total_price:Math.max(0,subtotal+Number(adjustment.amount||0))+tip,
      payment_method:document.getElementById('tx-payment')?.value||'',
      notes:document.getElementById('tx-notes')?.value.trim()||null
    };
  }

  function interceptSubmit(e){
    if(!mounted||!document.getElementById('seller-app-premium-template'))return;
    e.preventDefault();e.stopImmediatePropagation();
    try{
      pendingTransactionPayload=buildSellerOrder();
      const saveBtn=document.getElementById('confirm-save');
      if(saveBtn){saveBtn.style.display='';saveBtn.disabled=false;saveBtn.textContent='✓ Simpan Transaksi'}
      showReceiptPreview(pendingTransactionPayload);
    }catch(err){
      try{showToast(err.message||'Gagal menyiapkan transaksi.',true)}catch(_e){alert(err.message)}
    }
  }

  function resetSellerState(){
    category='';product='';variant='';duration='';searchQuery='';cart=[];
    const q=document.getElementById('seller-product-search');if(q)q.value='';
    ['seller-device','seller-admin-fh','seller-warranty'].forEach(id=>{const e=document.getElementById(id);if(e)e.value=''});
    renderCategories();renderProducts();renderVariants();renderDurations();renderSelection();renderCart();
  }

  function installExtraFields(){
    if(document.getElementById('seller-extra-details'))return;
    const host=document.getElementById('seller-app-premium-template');if(!host)return;
    const details=document.createElement('details');
    details.id='seller-extra-details';details.className='seller-extra-details';
    details.innerHTML=`<summary><span>Detail Tambahan (Opsional)</span><small>Device, Admin FH, Garansi</small></summary><div class="seller-extra-grid"><div class="form-group"><label class="label">Device</label><input id="seller-device" class="input" placeholder="contoh: iPhone / Android / TV"></div><div class="form-group"><label class="label">Admin FH</label><input id="seller-admin-fh" class="input" placeholder="Nama admin FH"></div><div class="form-group"><label class="label">Garansi</label><input id="seller-warranty" class="input" placeholder="contoh: 30 hari / 1 bulan"></div></div>`;
    host.appendChild(details);
  }

  function installCompactActions(form,cartBox){
    if(document.getElementById('seller-order-actions'))return;
    const originalSubmit=form.querySelector('button[type="submit"],input[type="submit"]');
    if(originalSubmit)originalSubmit.classList.add('seller-original-submit-hidden');
    form.querySelectorAll('button[type="reset"],input[type="reset"]').forEach(x=>x.classList.add('seller-original-submit-hidden'));
    const actions=document.createElement('div');actions.id='seller-order-actions';actions.className='seller-order-actions';
    actions.innerHTML=`<button type="button" class="seller-reset-btn" id="seller-reset-order">↻ Reset</button><button type="button" class="seller-save-btn" id="seller-save-order">Simpan Penjualan</button>`;
    cartBox.insertAdjacentElement('afterend',actions);
    document.getElementById('seller-reset-order').addEventListener('click',()=>{try{resetTxForm()}catch(_e){document.getElementById('tx-form')?.reset();resetSellerState()}});
    document.getElementById('seller-save-order').addEventListener('click',()=>{if(!cart.length)return;form.requestSubmit();});
  }

  function installSellerOrderLayout(form){
    const orderCard=form.closest('.card');
    const historyCard=document.getElementById('transaction-history-card');
    if(!orderCard||!historyCard||document.getElementById('seller-orders-layout'))return;
    const parent=orderCard.parentElement;
    const wrap=document.createElement('div');wrap.id='seller-orders-layout';wrap.className='seller-orders-layout';
    parent.insertBefore(wrap,orderCard);wrap.appendChild(orderCard);wrap.appendChild(historyCard);
  }

  function txTime(t){
    const raw=t.reading_started_at||t.created_at;
    if(raw){const d=new Date(raw);if(!Number.isNaN(d.getTime()))return new Intl.DateTimeFormat('id-ID',{hour:'2-digit',minute:'2-digit',hour12:false}).format(d).replace('.',':')}
    return '-';
  }
  function txStamp(t){
    const raw=t.reading_started_at||t.created_at||`${t.transaction_date||'1970-01-01'}T00:00:00`;
    const d=new Date(raw);return Number.isNaN(d.getTime())?0:d.getTime();
  }
  function renderSellerHistory(){
    if(!mounted)return;
    const card=document.getElementById('transaction-history-card');if(!card)return;
    const table=card.querySelector('table');if(table)table.classList.add('seller-history-table-hidden');
    let host=document.getElementById('seller-history-list');
    if(!host){
      host=document.createElement('div');host.id='seller-history-list';host.className='seller-history-list';
      const holder=table?.parentElement||card;holder.insertBefore(host,table||null);
    }
    const all=(historyTransactions||[]).filter(isSellerTx).slice().sort((a,b)=>txStamp(b)-txStamp(a));
    const limit=historyExpanded?all.length:(window.innerWidth<=900?3:7),rows=all.slice(0,limit);
    host.innerHTML=rows.length?rows.map(t=>`<article class="seller-history-card"><div class="seller-history-avatar">${esc(String(t.customer_name||'?').trim().charAt(0).toUpperCase()||'?')}</div><div class="seller-history-main"><strong>${esc(t.customer_name||'-')}</strong><small>${esc(txTime(t))}</small></div><div class="seller-history-actions"><button type="button" class="seller-history-receipt" data-seller-history-receipt="${esc(t.id)}">Struk</button><button type="button" class="seller-history-delete" data-seller-history-delete="${esc(t.id)}" data-seller-history-name="${esc(t.customer_name||'')}" data-seller-history-customer="${esc(t.customer_id||'')}">Hapus</button></div></article>`).join(''):'<div class="seller-history-empty">Belum ada transaksi Seller App Premium.</div>';
    let toggle=document.getElementById('seller-history-toggle');
    if(!toggle){
      toggle=document.createElement('button');toggle.type='button';toggle.id='seller-history-toggle';toggle.className='seller-history-toggle';host.insertAdjacentElement('afterend',toggle);
      toggle.addEventListener('click',()=>{historyExpanded=!historyExpanded;renderSellerHistory()});
    }
    toggle.hidden=all.length<=limit&&!historyExpanded;
    toggle.textContent=historyExpanded?'Tampilkan Ringkas':'Lihat Semua';
  }

  function sellerTodayRows(){
    const today=(typeof todayISO==='function'?todayISO():new Date().toISOString().slice(0,10));
    const src=Array.isArray(financialSnapshot?.txAll)&&financialSnapshot.txAll.length?financialSnapshot.txAll:(historyTransactions||[]);
    return src.filter(t=>isSellerTx(t)&&String(t.transaction_date||'')===today);
  }
  function sellerProfit(t){
    const costs=(Array.isArray(t.order_items)?t.order_items:[]).reduce((s,x)=>s+Number((x.cost_subtotal ?? (Number(x.cost_price||0)*Number(x.qty||1))) || 0),0);
    return Number(t.total_price||0)-costs;
  }
  function renderSellerDashboardKpis(){
    if(!mounted)return;
    const revenueEl=document.getElementById('kpi-revenue');if(!revenueEl)return;
    const rows=sellerTodayRows(),revenue=rows.reduce((s,t)=>s+Number(t.total_price||0),0),profit=rows.reduce((s,t)=>s+sellerProfit(t),0);
    const revCard=revenueEl.closest('.kpi');
    if(revCard){
      const label=revCard.querySelector('.kpi-label');if(label)label.textContent='Omset Hari Ini';
      revenueEl.textContent=(typeof maskedNominals!=='undefined'&&maskedNominals)?'••••••':rupiahLocal(revenue);
    }
    let card=document.getElementById('seller-kpi-profit-card');
    if(!card&&revCard){
      card=document.createElement('div');card.className='kpi seller-profit-kpi';card.id='seller-kpi-profit-card';
      card.innerHTML=`<div class="kpi-head"><div class="kpi-label">Profit Hari Ini</div><button type="button" class="kpi-eye" id="seller-profit-eye" aria-label="Sembunyikan nominal"></button></div><div class="kpi-value" id="seller-kpi-profit">Rp0</div>`;
      revCard.insertAdjacentElement('afterend',card);
      document.getElementById('seller-profit-eye')?.addEventListener('click',()=>{if(typeof toggleKpiVisibility==='function')toggleKpiVisibility();renderSellerDashboardKpis()});
      try{updateKpiEyeButtons()}catch(_e){}
    }
    const val=document.getElementById('seller-kpi-profit');
    if(val)val.textContent=(typeof maskedNominals!=='undefined'&&maskedNominals)?'••••••':rupiahLocal(profit);
  }

  function decorateCustomerDatabase(){
    if(!mounted)return;
    document.querySelectorAll('.customer-db-name-btn').forEach(btn=>{
      const id=String(btn.dataset.customerHistoryId||'');const meta=sellerCustomerMeta.get(id);if(!meta)return;
      const td=btn.closest('td');if(!td)return;
      let line=td.querySelector('.seller-customer-meta');
      if(!line){line=document.createElement('small');line.className='seller-customer-meta';td.appendChild(line)}
      const bits=[];if(meta.device)bits.push('Device: '+meta.device);if(meta.admin_fh)bits.push('Admin FH: '+meta.admin_fh);if(meta.warranty)bits.push('Garansi: '+meta.warranty);
      line.textContent=bits.join(' · ');
      line.hidden=!bits.length;
    });
  }

  function installReceiptExtras(){
    if(typeof showReceiptPreview!=='function'||showReceiptPreview.__sellerWrapped)return;
    const core=showReceiptPreview;
    const wrapped=function(p){
      const result=core.apply(this,arguments);
      if(isSellerTx(p)){
        const content=document.getElementById('receipt-content');
        if(content){
          const bits=[];if(p.device)bits.push(`<div><strong>Device:</strong> ${esc(p.device)}</div>`);if(p.admin_fh)bits.push(`<div><strong>Admin FH:</strong> ${esc(p.admin_fh)}</div>`);if(p.warranty)bits.push(`<div><strong>Garansi:</strong> ${esc(p.warranty)}</div>`);
          if(bits.length)content.insertAdjacentHTML('afterbegin',bits.join(''));
        }
      }
      return result;
    };
    wrapped.__sellerWrapped=true;showReceiptPreview=wrapped;
  }

  async function saveSellerSetting(baseRow,price,cost){
    if(!sellerSettingsReady)throw new Error('Migration Seller App Premium belum diterapkan / belum bisa diakses.');
    if(!isWorkspaceAdmin())throw new Error('Hanya Owner/Admin yang bisa mengubah Produk.');
    const row={...baseRow,price:Math.max(0,Number(price||0)),cost:Math.max(0,Number(cost||0))};
    const payload={workspace_id:requireWorkspaceId(),item_key:rowKey(baseRow),category:baseRow.category,product:baseRow.product,variant:baseRow.variant,duration:baseRow.duration,price:row.price,cost:row.cost,updated_at:new Date().toISOString()};
    const {error}=await db.from('seller_product_settings').upsert(payload,{onConflict:'workspace_id,item_key'});
    if(error)throw error;
    sellerSettings.set(payload.item_key,payload);
    renderProducts();renderVariants();renderDurations();renderSelection();
  }

  function sellerSettingsRows(){
    const q=settingsSearch.trim().toLowerCase();
    return CATALOG.filter(x=>x.category===settingsCategory && (!q||pretty(x.product).toLowerCase().includes(q)||pretty(x.variant).toLowerCase().includes(q)||pretty(x.duration).toLowerCase().includes(q)));
  }
  function renderSellerSettingsProducts(){
    const host=document.getElementById('seller-settings-products-list');if(!host)return;
    const rows=sellerSettingsRows(),groups=new Map();
    rows.forEach(r=>{if(!groups.has(r.product))groups.set(r.product,[]);groups.get(r.product).push(r)});
    if(!groups.size){host.innerHTML='<div class="seller-settings-empty">Produk tidak ditemukan.</div>';return}
    host.innerHTML=[...groups.entries()].map(([prod,list])=>`<details class="seller-settings-product-group" ${settingsSearch?'open':''}><summary><span><img src="${ICON_BASE+slug(prod)+'.svg'}" alt=""><strong>${esc(pretty(prod))}</strong></span><small>${list.length} pilihan</small></summary><div class="seller-settings-option-list">${list.map(base=>{const r=effective(base);return `<div class="seller-settings-option" data-seller-setting-key="${esc(rowKey(base))}"><div class="seller-settings-copy"><strong>${esc(pretty(base.variant))}</strong><small>${esc(pretty(base.duration))}</small></div><label>Harga<input type="number" min="0" step="500" class="seller-setting-price" value="${Number(r.price||0)}"></label><label>Modal<input type="number" min="0" step="500" class="seller-setting-cost" value="${Number(r.cost||0)}"></label><div class="seller-setting-profit"><small>Profit/unit</small><strong>${rupiahLocal(Math.max(0,Number(r.price||0)-Number(r.cost||0)))}</strong></div><button type="button" class="seller-setting-save">Simpan</button></div>`}).join('')}</div></details>`).join('');
  }

  function installSellerSettings(){
    const panel=document.querySelector('[data-settings-panel="packages"]');if(!panel)return;
    const select=document.getElementById('settings-category-select');
    const opt=select?.querySelector('option[value="packages"]');if(opt)opt.textContent='Produk';
    document.querySelectorAll('.saas-settings-submenu-btn[data-settings-category="packages"]').forEach(b=>b.textContent='Produk');
    const genericCard=panel.querySelector('.settings-master-card');
    if(genericCard)genericCard.classList.add('seller-template-hidden');
    let seller=document.getElementById('seller-settings-products');
    if(!seller){
      seller=document.createElement('section');seller.id='seller-settings-products';seller.className='card seller-settings-products';
      seller.innerHTML=`<div class="seller-settings-head"><div><div class="card-title">Produk</div><div class="page-sub">Atur harga jual dan modal khusus Seller App Premium. Harga langsung sinkron ke Orders.</div></div><span class="seller-settings-db-status">${sellerSettingsReady?'Tersinkron':'Perlu migration'}</span></div><div class="seller-settings-toolbar"><div id="seller-settings-category-tabs" class="seller-settings-category-tabs">${CATEGORIES.map(c=>`<button type="button" data-seller-settings-category="${esc(c)}" class="${c===settingsCategory?'active':''}">${esc(c)}</button>`).join('')}</div><input id="seller-settings-search" class="input" placeholder="Cari produk / varian / durasi"></div><div id="seller-settings-products-list"></div>`;
      panel.appendChild(seller);
      seller.addEventListener('click',async e=>{
        const cat=e.target.closest('[data-seller-settings-category]');
        if(cat){settingsCategory=cat.dataset.sellerSettingsCategory;seller.querySelectorAll('[data-seller-settings-category]').forEach(b=>b.classList.toggle('active',b===cat));renderSellerSettingsProducts();return}
        const save=e.target.closest('.seller-setting-save');if(!save)return;
        const row=save.closest('.seller-settings-option'),key=row?.dataset.sellerSettingKey,base=CATALOG.find(x=>rowKey(x)===key);if(!base)return;
        save.disabled=true;const old=save.textContent;save.textContent='Menyimpan...';
        try{await saveSellerSetting(base,row.querySelector('.seller-setting-price')?.value,row.querySelector('.seller-setting-cost')?.value);showToast('Harga & modal tersimpan.');renderSellerSettingsProducts();renderSellerDashboardKpis();}
        catch(err){showToast(err.message||'Gagal menyimpan produk.',true)}
        finally{save.disabled=false;save.textContent=old}
      });
      seller.querySelector('#seller-settings-search').addEventListener('input',e=>{settingsSearch=e.target.value;renderSellerSettingsProducts()});
    }
    const status=seller.querySelector('.seller-settings-db-status');if(status)status.textContent=sellerSettingsReady?'Tersinkron':'Perlu migration';
    renderSellerSettingsProducts();
  }

  function wireCoreHooks(){
    try{
      if(typeof renderHistory==='function'&&!renderHistory.__sellerWrapped){
        const core=renderHistory;const wrapped=function(){const r=core.apply(this,arguments);if(mounted)renderSellerHistory();return r};wrapped.__sellerWrapped=true;renderHistory=wrapped;
      }
      if(typeof renderDashboard==='function'&&!renderDashboard.__sellerWrapped){
        const core=renderDashboard;const wrapped=function(){const r=core.apply(this,arguments);if(mounted){renderSellerDashboardKpis();renderSellerHistory()}return r};wrapped.__sellerWrapped=true;renderDashboard=wrapped;
      }
      if(typeof renderCustomerDatabase==='function'&&!renderCustomerDatabase.__sellerWrapped){
        const core=renderCustomerDatabase;const wrapped=function(){const r=core.apply(this,arguments);if(mounted)decorateCustomerDatabase();return r};wrapped.__sellerWrapped=true;renderCustomerDatabase=wrapped;
      }
      if(typeof loadCustomerDirectory==='function'&&!loadCustomerDirectory.__sellerWrapped){
        const core=loadCustomerDirectory;const wrapped=async function(){const r=await core.apply(this,arguments);if(mounted)await loadSellerCustomerMeta();return r};wrapped.__sellerWrapped=true;loadCustomerDirectory=wrapped;
      }
      if(typeof chooseExistingCustomer==='function'&&!chooseExistingCustomer.__sellerWrapped){
        const core=chooseExistingCustomer;const wrapped=function(id){const r=core.apply(this,arguments),m=sellerCustomerMeta.get(String(id));if(m){const d=document.getElementById('seller-device'),a=document.getElementById('seller-admin-fh'),w=document.getElementById('seller-warranty');if(d)d.value=m.device||'';if(a)a.value=m.admin_fh||'';if(w)w.value=m.warranty||''}return r};wrapped.__sellerWrapped=true;chooseExistingCustomer=wrapped;
      }
      if(typeof ensureCustomerForPendingTransaction==='function'&&!ensureCustomerForPendingTransaction.__sellerWrapped){
        const core=ensureCustomerForPendingTransaction;const wrapped=async function(){
          const id=await core.apply(this,arguments);
          if(mounted&&id&&pendingTransactionPayload&&isSellerTx(pendingTransactionPayload)){
            const payload={device:pendingTransactionPayload.device||null,admin_fh:pendingTransactionPayload.admin_fh||null,warranty:pendingTransactionPayload.warranty||null};
            const {error}=await db.from('customers').update(payload).eq('workspace_id',requireWorkspaceId()).eq('id',id);
            if(error)throw new Error('Metadata seller gagal disimpan. Pastikan migration v20.10.121 sudah dijalankan: '+error.message);
            sellerCustomerMeta.set(String(id),{id,...payload});
          }
          return id;
        };wrapped.__sellerWrapped=true;ensureCustomerForPendingTransaction=wrapped;
      }
      if(typeof resetTxForm==='function'&&!resetTxForm.__sellerWrapped){
        const core=resetTxForm;const wrapped=function(){const r=core.apply(this,arguments);if(mounted)resetSellerState();return r};wrapped.__sellerWrapped=true;resetTxForm=wrapped;
      }
    }catch(err){console.warn('Seller core hook:',err)}
    installReceiptExtras();
  }

  function mount(){
    if(mounted||!document.body.classList.contains('authenticated'))return;
    const form=document.getElementById('tx-form'),packages=document.getElementById('tx-packages');if(!form||!packages)return;
    mounted=true;document.body.classList.add('seller-app-premium');
    hideGenericMasterAreas();wireCoreHooks();

    const host=document.createElement('section');host.id='seller-app-premium-template';host.className='seller-app-panel';
    host.innerHTML=`<div class="seller-app-head"><div><span class="seller-app-kicker">SELLER APP PREMIUM</span><h3>Buat Pesanan Baru</h3><p>Pilih kategori, cari produk, lalu tentukan plan dan durasi.</p></div></div><div class="seller-app-field seller-category-field"><label>Kategori</label><div id="seller-category-grid" class="seller-category-grid"></div></div><div class="seller-app-search"><svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="7"/><path d="m20 20-4-4"/></svg><input id="seller-product-search" type="search" placeholder="Cari produk, contoh: Netflix, Canva, ChatGPT..."></div><div class="seller-app-field"><label>Pilih Produk</label><div id="seller-product-grid" class="seller-product-grid"></div></div><div class="seller-app-field" id="seller-variant-section" hidden><label>Plan / Varian</label><div id="seller-variant-grid" class="seller-choice-grid"></div></div><div class="seller-app-field" id="seller-duration-section" hidden><label>Durasi</label><div id="seller-duration-grid" class="seller-choice-grid"></div></div><div class="seller-selection" id="seller-selection" hidden><div><small>Harga pilihan</small><strong id="seller-selected-price">—</strong><span id="seller-selected-meta">Pilih paket</span></div><button id="seller-add-order" type="button">+ Tambah ke Pesanan</button></div>`;

    const packageBox=packages.closest('.form-group')||packages.parentElement;(packageBox||form.firstChild).insertAdjacentElement('beforebegin',host);
    installExtraFields();

    const submit=form.querySelector('button[type="submit"],input[type="submit"]'),cartBox=document.createElement('section');
    cartBox.id='seller-cart-preview';cartBox.className='seller-cart-panel';
    cartBox.innerHTML=`<div class="seller-cart-head"><div><span>Ringkasan Pesanan</span><small id="seller-cart-count">0 item</small></div></div><div id="seller-cart-empty" class="seller-cart-empty">Belum ada paket dipilih.</div><div id="seller-cart-list"></div><div class="seller-cart-total"><span>Total</span><strong id="seller-cart-total">Rp0</strong></div>`;
    if(submit)submit.insertAdjacentElement('beforebegin',cartBox);else form.appendChild(cartBox);
    installCompactActions(form,cartBox);
    installSellerOrderLayout(form);

    document.getElementById('seller-product-search').addEventListener('input',e=>{searchQuery=e.target.value.trim();if(searchQuery){product='';variant='';duration=''}renderProducts();renderVariants()});
    host.addEventListener('click',e=>{
      const c=e.target.closest('[data-seller-category]');if(c){category=c.dataset.sellerCategory;searchQuery='';const q=document.getElementById('seller-product-search');if(q)q.value='';product='';variant='';duration='';renderProducts();renderVariants();return}
      const p=e.target.closest('[data-seller-product]');if(p){category=p.dataset.sellerProductCategory;product=p.dataset.sellerProduct;variant='';duration='';searchQuery='';const q=document.getElementById('seller-product-search');if(q)q.value='';renderProducts();renderVariants();return}
      const v=e.target.closest('[data-seller-variant]');if(v){variant=v.dataset.sellerVariant;duration='';renderVariants();return}
      const d=e.target.closest('[data-seller-duration]');if(d){duration=d.dataset.sellerDuration;renderDurations();return}
    });
    document.getElementById('seller-add-order').addEventListener('click',addSelected);
    cartBox.addEventListener('click',e=>{let i;if((i=e.target.dataset.sellerPlus)!==undefined){cart[+i].qty++;renderCart()}else if((i=e.target.dataset.sellerMinus)!==undefined){cart[+i].qty=Math.max(1,cart[+i].qty-1);renderCart()}else if((i=e.target.dataset.sellerRemove)!==undefined){cart.splice(+i,1);renderCart()}});
    form.addEventListener('submit',interceptSubmit,true);
    ['tx-adjustment-type','tx-adjustment-mode','tx-adjustment-value','tx-tip'].forEach(id=>document.getElementById(id)?.addEventListener('input',renderCart));
    ['tx-adjustment-type','tx-adjustment-mode'].forEach(id=>document.getElementById(id)?.addEventListener('change',renderCart));

    const historyCard=document.getElementById('transaction-history-card');
    historyCard?.addEventListener('click',e=>{
      const r=e.target.closest('[data-seller-history-receipt]');if(r){openSavedReceipt(r.dataset.sellerHistoryReceipt);return}
      const d=e.target.closest('[data-seller-history-delete]');if(d)deleteCancelledTransaction(d.dataset.sellerHistoryDelete,d.dataset.sellerHistoryName,d.dataset.sellerHistoryCustomer);
    });

    document.addEventListener('click',e=>{
      if(e.target.closest('#saas-settings-btn,#saas-settings-side-btn,[data-settings-category="packages"]'))setTimeout(installSellerSettings,40);
    },true);

    renderCategories();renderProducts();renderVariants();renderDurations();renderCart();
    renderSellerHistory();renderSellerDashboardKpis();installSellerSettings();
    loadSellerProductSettings();loadSellerCustomerMeta();
  }

  function maybeMount(){if(document.body.classList.contains('authenticated'))mount()}
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',()=>setTimeout(maybeMount,0),{once:true});else setTimeout(maybeMount,0);
  document.addEventListener('click',e=>{if(e.target.closest('[data-tab="input"],[data-mobile-tab="input"],.kairo-mobile-orders-main'))setTimeout(maybeMount,0)},true);
})();
