const el = id => document.getElementById(id);
const lengthEl = el('length');
const lenVal = el('lenVal');
const result = el('result');
const genBtn = el('gen');
const copyBtn = el('copy');


const sets = { lower:'abcdefghijklmnopqrstuvwxyz', upper:'ABCDEFGHIJKLMNOPQRSTUVWXYZ', numbers:'0123456789', symbols:'!@#$%&*?'};


lenVal.textContent = lengthEl.value;
lengthEl.addEventListener('input', ()=> lenVal.textContent = lengthEl.value);


function buildCharset(){ let s=''; if(el('lower').checked)s+=sets.lower; if(el('upper').checked)s+=sets.upper; if(el('numbers').checked)s+=sets.numbers; if(el('symbols').checked)s+=sets.symbols; return s; }
function generatePassword(len){ const charset=buildCharset(); if(!charset) return ''; let out=''; for(let i=0;i<len;i++){ out+=charset[Math.floor(Math.random()*charset.length)]; } return out; }
function setResult(pwd){ result.textContent=pwd || '—'; }


genBtn.addEventListener('click',()=>{ const len=parseInt(lengthEl.value,10); setResult(generatePassword(len)); });
copyBtn.addEventListener('click',()=>{ const txt=result.textContent; if(!txt || txt==='—') return; navigator.clipboard.writeText(txt).then(()=>copyBtn.textContent='Copied!').finally(()=>setTimeout(()=>copyBtn.textContent='Copy',1200)); });