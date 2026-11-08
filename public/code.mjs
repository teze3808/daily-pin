export function hongKongDate(now = new Date()) {
 const parts = new Intl.DateTimeFormat('en-CA', {timeZone:'Asia/Hong_Kong',year:'numeric',month:'2-digit',day:'2-digit'}).formatToParts(now);
 const get = type => parts.find(p=>p.type===type).value;
 return `${get('year')}-${get('month')}-${get('day')}`;
}
// Public deterministic algorithm, not a secret or authentication mechanism.
export async function dailyCode(date) {
 if(!/^\d{4}-\d{2}-\d{2}$/.test(date)||new Date(`${date}T00:00:00Z`).toISOString().slice(0,10)!==date)throw Error('Invalid date');
 const bytes=new Uint8Array(await crypto.subtle.digest('SHA-256',new TextEncoder().encode(`daily-pin-v1|Asia/Hong_Kong|${date}`)));
 return String(new DataView(bytes.buffer).getUint32(0,false)%10000).padStart(4,'0');
}
