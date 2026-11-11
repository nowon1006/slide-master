const sharp = require('sharp');
const W=2667,H=1500;
function chip(cx,cy,s,op){ // isometric-ish chip made of faces
  let g=`<g transform="translate(${cx},${cy}) rotate(-28) skewX(18) scale(1,0.62)" opacity="${op}">`;
  g+=`<rect x="${-s*0.62}" y="${-s*0.62}" width="${s*1.24}" height="${s*1.24}" rx="${s*0.08}" fill="url(#pkg)"/>`;
  g+=`<rect x="${-s*0.5}" y="${-s*0.5}" width="${s}" height="${s}" rx="${s*0.05}" fill="#0E1A7A"/>`;
  const n=7, c=s/n;
  for(let i=0;i<n;i++)for(let j=0;j<n;j++){
    const v=((i*7+j*13)%10)/10; const col=v>0.75?'#5CC8FF':(v>0.4?'#2D5BFF':'#1B2BA8');
    g+=`<rect x="${-s/2+i*c+c*0.12}" y="${-s/2+j*c+c*0.12}" width="${c*0.76}" height="${c*0.76}" rx="${c*0.12}" fill="${col}" opacity="${0.55+v*0.45}"/>`;
  }
  // pins as faces
  for(let k=0;k<10;k++){const p=-s*0.55+k*s*0.11+s*0.02;
    g+=`<rect x="${p}" y="${-s*0.78}" width="${s*0.06}" height="${s*0.12}" rx="4" fill="#3A63FF" opacity=".7"/>`;
    g+=`<rect x="${p}" y="${s*0.66}" width="${s*0.06}" height="${s*0.12}" rx="4" fill="#3A63FF" opacity=".7"/>`;
    g+=`<rect x="${-s*0.78}" y="${p}" width="${s*0.12}" height="${s*0.06}" rx="4" fill="#3A63FF" opacity=".7"/>`;
    g+=`<rect x="${s*0.66}" y="${p}" width="${s*0.12}" height="${s*0.06}" rx="4" fill="#3A63FF" opacity=".7"/>`;}
  return g+'</g>';
}
function dots(x0,y0,x1,y1,step,col,op){let s='';for(let x=x0;x<x1;x+=step)for(let y=y0;y<y1;y+=step)s+=`<circle cx="${x}" cy="${y}" r="3" fill="${col}" opacity="${op}"/>`;return s;}
const defs=`<defs>
<linearGradient id="base" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#04061F"/><stop offset=".55" stop-color="#0A0F45"/><stop offset="1" stop-color="#101C7A"/></linearGradient>
<radialGradient id="g1"><stop offset="0" stop-color="#2D5BFF" stop-opacity=".75"/><stop offset="1" stop-color="#2D5BFF" stop-opacity="0"/></radialGradient>
<radialGradient id="g2"><stop offset="0" stop-color="#29C6FF" stop-opacity=".45"/><stop offset="1" stop-color="#29C6FF" stop-opacity="0"/></radialGradient>
<radialGradient id="g3"><stop offset="0" stop-color="#7A5CFF" stop-opacity=".35"/><stop offset="1" stop-color="#7A5CFF" stop-opacity="0"/></radialGradient>
<linearGradient id="pkg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#3B5BFF"/><stop offset="1" stop-color="#121C6E"/></linearGradient>
<filter id="blur"><feGaussianBlur stdDeviation="40"/></filter>
<linearGradient id="fadeL" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#04061F" stop-opacity=".95"/><stop offset=".5" stop-color="#04061F" stop-opacity=".35"/><stop offset="1" stop-color="#04061F" stop-opacity="0"/></linearGradient>
<radialGradient id="lg1"><stop offset="0" stop-color="#D9E3FF" stop-opacity=".9"/><stop offset="1" stop-color="#FFFFFF" stop-opacity="0"/></radialGradient>
<radialGradient id="lg2"><stop offset="0" stop-color="#E3F6FF" stop-opacity=".9"/><stop offset="1" stop-color="#FFFFFF" stop-opacity="0"/></radialGradient>
</defs>`;
const cover=`<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}">${defs}
<rect width="${W}" height="${H}" fill="url(#base)"/>
${dots(1300,60,W,H,60,'#5C7CFF',.18)}
<ellipse cx="2000" cy="700" rx="1100" ry="900" fill="url(#g1)"/>
<ellipse cx="2550" cy="1400" rx="700" ry="500" fill="url(#g2)"/>
<ellipse cx="300" cy="1500" rx="900" ry="500" fill="url(#g3)"/>
<g filter="url(#blur)">${chip(2060,780,820,.55)}</g>
${chip(2060,760,780,.9)}
<rect width="1500" height="${H}" fill="url(#fadeL)"/>
</svg>`;
const dark=`<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}">${defs}
<rect width="${W}" height="${H}" fill="url(#base)"/>
${dots(1800,40,W,520,60,'#5C7CFF',.16)}
<ellipse cx="2500" cy="80" rx="1000" ry="650" fill="url(#g1)"/>
<ellipse cx="150" cy="1500" rx="900" ry="450" fill="url(#g3)"/>
<ellipse cx="2600" cy="1500" rx="600" ry="380" fill="url(#g2)"/>
</svg>`;
const light=`<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}">${defs}
<rect width="${W}" height="${H}" fill="#FFFFFF"/>
<ellipse cx="2620" cy="0" rx="900" ry="520" fill="url(#lg1)"/>
<ellipse cx="2300" cy="-60" rx="600" ry="380" fill="url(#lg2)"/>
${dots(2160,36,W,300,48,'#2D5BFF',.10)}
</svg>`;
(async()=>{for(const [n,s] of [['cover',cover],['dark',dark],['light',light]])
 await sharp(Buffer.from(s)).png().toFile('assets/bg_'+n+'.png');})();
