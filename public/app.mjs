import {hongKongDate,dailyCode} from './code.mjs';
const code=document.querySelector('#code'),date=document.querySelector('#date'),copy=document.querySelector('#copy'),status=document.querySelector('#status');let current='';
async function refresh(){const today=hongKongDate();if(today===current)return;copy.disabled=true;try{const value=await dailyCode(today);current=today;code.textContent=value;date.textContent=today;copy.disabled=false;status.textContent='香港時間每日午夜更新';}catch{code.textContent='----';status.textContent='未能計算，請重新整理。';}}
copy.addEventListener('click',async()=>{await refresh();try{await navigator.clipboard.writeText(code.textContent);status.textContent='已複製四位碼';}catch{status.textContent='請長按四位碼複製';}});
refresh();setInterval(refresh,1000);document.addEventListener('visibilitychange',()=>{if(!document.hidden)refresh();});
