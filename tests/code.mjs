import {test} from 'node:test';import assert from 'node:assert/strict';import {hongKongDate,dailyCode} from '../public/code.mjs';
test('Hong Kong midnight boundary',()=>{assert.equal(hongKongDate(new Date('2026-11-08T15:59:59Z')),'2026-11-08');assert.equal(hongKongDate(new Date('2026-11-08T16:00:00Z')),'2026-11-09');});
test('deterministic four digit format including zero padding',async()=>{let zero=false;for(let day=1;day<=365;day++){const date=new Date(Date.UTC(2026,0,day)).toISOString().slice(0,10),a=await dailyCode(date);assert.match(a,/^\d{4}$/);assert.equal(a,await dailyCode(date));if(a.startsWith('0'))zero=true;}assert(zero);});
test('invalid dates rejected',async()=>{for(const d of ['2026-02-30','2026-13-01','2026-1-1','abc'])await assert.rejects(()=>dailyCode(d));});
