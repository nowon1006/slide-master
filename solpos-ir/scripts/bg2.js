const sharp=require('sharp'); const W=2667,H=1500;
const S=(w,h,body)=>`<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}">${body}</svg>`;
function chip(cx,cy,s,op,rot=-28){let g=`<g transform="translate(${cx},${cy}) rotate(${rot}) skewX(18) scale(1,0.62)" opacity="${op}">`;
 g+=`<rect x="${-s*.62}" y="${-s*.62}" width="${s*1.24}" height="${s*1.24}" rx="${s*.08}" fill="url(#pkg)"/><rect x="${-s/2}" y="${-s/2}" width="${s}" height="${s}" rx="${s*.05}" fill="#0E1A7A"/>`;
 const n=8,c=s/n;for(let i=0;i<n;i++)for(let j=0;j<n;j++){const v=((i*7+j*13)%10)/10;const col=v>.75?'#5CC8FF':(v>.4?'#2D5BFF':'#1B2BA8');
 g+=`<rect x="${-s/2+i*c+c*.12}" y="${-s/2+j*c+c*.12}" width="${c*.76}" height="${c*.76}" rx="${c*.12}" fill="${col}" opacity="${.55+v*.45}"/>`;}
 for(let k=0;k<12;k++){const p=-s*.56+k*s*.095+s*.02;for(const [x,y,w,h] of [[p,-s*.8,s*.05,s*.13],[p,s*.67,s*.05,s*.13],[-s*.8,p,s*.13,s*.05],[s*.67,p,s*.13,s*.05]])
 g+=`<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="4" fill="#3A63FF" opacity=".75"/>`;}return g+'</g>';}
const defs=`<defs><linearGradient id="pkg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#3B5BFF"/><stop offset="1" stop-color="#121C6E"/></linearGradient>
<filter id="b40"><feGaussianBlur stdDeviation="40"/></filter><filter id="b8"><feGaussianBlur stdDeviation="8"/></filter>
<radialGradient id="rg"><stop offset="0" stop-color="#FFF" stop-opacity=".55"/><stop offset="1" stop-color="#FFF" stop-opacity="0"/></radialGradient>
<radialGradient id="rb"><stop offset="0" stop-color="#2D5BFF" stop-opacity=".8"/><stop offset="1" stop-color="#2D5BFF" stop-opacity="0"/></radialGradient>
<radialGradient id="rc"><stop offset="0" stop-color="#29C6FF" stop-opacity=".55"/><stop offset="1" stop-color="#29C6FF" stop-opacity="0"/></radialGradient>
<radialGradient id="rv"><stop offset="0" stop-color="#7A5CFF" stop-opacity=".45"/><stop offset="1" stop-color="#7A5CFF" stop-opacity="0"/></radialGradient>
<linearGradient id="orb" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#9CC2FF" stop-opacity=".9"/><stop offset=".5" stop-color="#3D6BFF" stop-opacity=".55"/><stop offset="1" stop-color="#1E2188" stop-opacity=".3"/></linearGradient>
<linearGradient id="orb2" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#FFFFFF" stop-opacity=".55"/><stop offset="1" stop-color="#8FB4FF" stop-opacity=".1"/></linearGradient>
<linearGradient id="fadeL" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#03051A" stop-opacity=".97"/><stop offset=".55" stop-color="#03051A" stop-opacity=".45"/><stop offset="1" stop-color="#03051A" stop-opacity="0"/></linearGradient>
</defs>`;
const dots=(x0,y0,x1,y1,st,c,o)=>{let s='';for(let x=x0;x<x1;x+=st)for(let y=y0;y<y1;y+=st)s+=`<circle cx="${x}" cy="${y}" r="3" fill="${c}" opacity="${o}"/>`;return s;};
// A: glass blue
const A_cover=S(W,H,defs+`<linearGradient id="ga" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#0B1270"/><stop offset=".5" stop-color="#1E3BE0"/><stop offset="1" stop-color="#4C8DFF"/></linearGradient>
<rect width="${W}" height="${H}" fill="url(#ga)"/>
<ellipse cx="2300" cy="300" rx="900" ry="700" fill="url(#rc)"/>
${[0,1,2,3,4,5,6].map(i=>`<ellipse cx="${2050+i*40}" cy="${780-i*10}" rx="${640-i*70}" ry="${640-i*70}" fill="none" stroke="url(#orb2)" stroke-width="${70-i*6}" opacity="${.5-i*.05}"/>`).join('')}
<circle cx="2000" cy="1180" r="300" fill="url(#orb)" filter="url(#b8)"/><circle cx="2500" cy="250" r="200" fill="url(#orb)"/>
<circle cx="1500" cy="1350" r="140" fill="url(#orb)" opacity=".8"/>
<rect width="1300" height="${H}" fill="#0B1270" opacity=".35"/>`);
const A_content=S(W,H,defs+`<linearGradient id="gl" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#F7F9FF"/><stop offset="1" stop-color="#E6EDFF"/></linearGradient>
<rect width="${W}" height="${H}" fill="url(#gl)"/><circle cx="2600" cy="40" r="420" fill="url(#orb)" opacity=".35" filter="url(#b40)"/>
<circle cx="2470" cy="120" r="150" fill="url(#orb)" opacity=".45"/><circle cx="2230" cy="60" r="60" fill="url(#orb)" opacity=".4"/>`);
// B: bold block
const iso=(x,y,s,c,o)=>`<g transform="translate(${x},${y})" opacity="${o}"><path d="M0 0 L${s} ${-s*.5} L${2*s} 0 L${s} ${s*.5}Z" fill="${c[0]}"/><path d="M0 0 L${s} ${s*.5} L${s} ${s*1.5} L0 ${s}Z" fill="${c[1]}"/><path d="M${s} ${s*.5} L${2*s} 0 L${2*s} ${s} L${s} ${s*1.5}Z" fill="${c[2]}"/></g>`;
const blues=[['#4C7DFF','#1E2188','#2D4BD8'],['#8FB4FF','#2D5BFF','#4C7DFF'],['#2D5BFF','#141870','#1E2188']];
let isoB='';const grid=[[0,0,0],[1,0,1],[2,0,2],[0,1,1],[1,1,0],[0,2,2],[2,1,0],[1,2,1]];
grid.forEach(([i,j,k],n)=>{isoB+=iso(1900+(i-j)*170, 520+(i+j)*85 - (n%3)*60,170,blues[k],1);});
const B_head=S(W,450,defs+`<rect width="${W}" height="450" fill="#1E2188"/><circle cx="2500" cy="80" r="420" fill="url(#rb)"/>
${dots(2000,30,W,430,46,'#8FB4FF',.22)}`);
const B_cover=S(W,H,defs+`<rect width="${W}" height="${H}" fill="#FFFFFF"/>
${dots(1500,60,W,H,52,'#2D5BFF',.12)}<circle cx="2300" cy="600" r="700" fill="url(#rb)" opacity=".25"/>${isoB}`);
// C: dark AI
const C_cover=S(W,H,defs+`<rect width="${W}" height="${H}" fill="#03051A"/>
<ellipse cx="1900" cy="760" rx="1300" ry="950" fill="url(#rb)"/><ellipse cx="2600" cy="1400" rx="800" ry="500" fill="url(#rc)"/><ellipse cx="250" cy="1500" rx="1000" ry="520" fill="url(#rv)"/>
${dots(0,30,W,H,56,'#5C7CFF',.13)}
<g filter="url(#b40)">${chip(1880,800,1000,.7,-24)}</g>${chip(1880,780,960,.95,-24)}
<rect width="1600" height="${H}" fill="url(#fadeL)"/>`);
const C_content=S(W,H,defs+`<rect width="${W}" height="${H}" fill="#050826"/>
<ellipse cx="2550" cy="40" rx="1000" ry="620" fill="url(#rb)" opacity=".8"/><ellipse cx="100" cy="1500" rx="900" ry="420" fill="url(#rv)"/><ellipse cx="2650" cy="1500" rx="600" ry="360" fill="url(#rc)" opacity=".7"/>
${dots(1900,30,W,480,56,'#5C7CFF',.18)}`);
(async()=>{for(const [n,s] of Object.entries({A_cover,A_content,B_head,B_cover,C_cover,C_content}))
 await sharp(Buffer.from(s)).png().toFile('assets/'+n+'.png');console.log('ok');})();
