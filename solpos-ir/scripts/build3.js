const pptxgen=require('pptxgenjs'), sharp=require('sharp'), fs=require('fs');
const F='Pretendard', A='assets/', G='assets/gen/'; fs.mkdirSync(G,{recursive:true});
const L=0.6,R=12.733,CW=R-L,TOP=2.42,BOT=6.62;
const NAVY='1E2188',BLUE='2D5BFF',SKY='8FB4FF',YEL='F1CE36',INK='12152E',GREY='5B6178',TINT='F1F4FC',TINT2='E2E8FB',WHITE='FFFFFF',PALE='DCE6FF';
// ---------- panel image generator ----------
const PX=150;
function iso(x,y,s,c,o){return `<g transform="translate(${x},${y})" opacity="${o}"><path d="M0 0 L${s} ${-s*.5} L${2*s} 0 L${s} ${s*.5}Z" fill="${c[0]}"/><path d="M0 0 L${s} ${s*.5} L${s} ${s*1.5} L0 ${s}Z" fill="${c[1]}"/><path d="M${s} ${s*.5} L${2*s} 0 L${2*s} ${s} L${s} ${s*1.5}Z" fill="${c[2]}"/></g>`;}
const cubeC=[['#6E95FF','#1E2188','#2D4BD8'],['#B5CCFF','#2D5BFF','#5C86FF'],['#3D66FF','#141870','#1E2188']];
async function gen(name,wi,hi,style,r=0){
 const w=Math.round(wi*PX),h=Math.round(hi*PX),rx=r*PX,m=Math.min(w,h),M=Math.max(w,h);
 let body='';
 const defs=`<defs><linearGradient id="gw" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#151A7A"/><stop offset=".55" stop-color="#2D5BFF"/><stop offset="1" stop-color="#6FA8FF"/></linearGradient>
 <linearGradient id="gm" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#2D5BFF"/><stop offset="1" stop-color="#7DB2FF"/></linearGradient>
 <linearGradient id="gs" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#E6EDFF"/><stop offset="1" stop-color="#F9FBFF"/></linearGradient>
 <linearGradient id="gn" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#10136A"/><stop offset=".6" stop-color="#1E2188"/><stop offset="1" stop-color="#2D4BD8"/></linearGradient>
 <radialGradient id="rc"><stop offset="0" stop-color="#5CD0FF" stop-opacity=".55"/><stop offset="1" stop-color="#5CD0FF" stop-opacity="0"/></radialGradient>
 <radialGradient id="rb"><stop offset="0" stop-color="#4C7DFF" stop-opacity=".8"/><stop offset="1" stop-color="#4C7DFF" stop-opacity="0"/></radialGradient>
 <radialGradient id="rw"><stop offset="0" stop-color="#FFFFFF" stop-opacity=".9"/><stop offset="1" stop-color="#FFFFFF" stop-opacity="0"/></radialGradient>
 <linearGradient id="orb" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#FFFFFF" stop-opacity=".75"/><stop offset=".5" stop-color="#9CC2FF" stop-opacity=".35"/><stop offset="1" stop-color="#2D5BFF" stop-opacity=".15"/></linearGradient>
 <clipPath id="cp"><rect width="${w}" height="${h}" rx="${rx}"/></clipPath></defs>`;
 const dots=(x0,y0,x1,y1,st,c,o)=>{let s='';for(let x=x0;x<x1;x+=st)for(let y=y0;y<y1;y+=st)s+=`<circle cx="${x}" cy="${y}" r="${st*0.06}" fill="${c}" opacity="${o}"/>`;return s;};
 if(style==='wave'||style==='rings'){
   body=`<rect width="${w}" height="${h}" fill="url(#gw)"/><ellipse cx="${w*.9}" cy="${h*.1}" rx="${M*.45}" ry="${M*.35}" fill="url(#rc)"/>`;
   if(style==='rings'){const cx=w*.82,cy=h*.55;for(let i=0;i<6;i++){const rr=m*(.75-i*.1);body+=`<circle cx="${cx}" cy="${cy}" r="${rr}" fill="none" stroke="#FFFFFF" stroke-opacity="${.16-i*.015}" stroke-width="${m*.05}"/>`;}
     body+=`<circle cx="${w*.95}" cy="${h*.15}" r="${m*.12}" fill="url(#orb)"/><circle cx="${w*.62}" cy="${h*.95}" r="${m*.08}" fill="url(#orb)"/>`;}
   body+=dots(w*.55,m*.04,w,h*.45,m*.07,'#FFFFFF',.12);
 } else if(style==='grad'){ body=`<rect width="${w}" height="${h}" fill="url(#gw)"/><ellipse cx="${w*.95}" cy="0" rx="${w*.35}" ry="${h*1.6}" fill="url(#rc)"/>`;
 } else if(style==='mid'){ body=`<rect width="${w}" height="${h}" fill="url(#gm)"/><ellipse cx="${w}" cy="0" rx="${w*.5}" ry="${h*1.2}" fill="url(#rw)" opacity=".35"/>`;
 } else if(style==='soft'){ body=`<rect width="${w}" height="${h}" fill="url(#gs)"/><circle cx="${w*.96}" cy="${h*.1}" r="${m*.5}" fill="url(#rb)" opacity=".18"/>`;
 } else if(style==='iso'||style==='navy'){
   body=`<rect width="${w}" height="${h}" fill="url(#gn)"/><ellipse cx="${w*.95}" cy="${h*.05}" rx="${M*.5}" ry="${M*.4}" fill="url(#rb)" opacity=".7"/>`+dots(m*.04,m*.04,w,h,m*.06,'#8FB4FF',.16);
   if(style==='iso'){const s=m*.13, ox=w*.62, oy=h*.80; const g=[[0,0,0],[1,0,1],[2,0,2],[0,1,1],[1,1,0],[0,2,2],[2,1,0],[1,2,1],[3,0,1]];
     g.forEach(([i,j,k],n)=>body+=iso(ox+(i-j)*s,oy+(i+j)*s*.5-(n%3)*s*.35,s,cubeC[k],.95));}
 } else if(style==='cover'){ // white cover right block: iso cubes on gradient
   body=`<rect width="${w}" height="${h}" fill="url(#gw)"/><ellipse cx="${w*.8}" cy="${h*.1}" rx="${w*.7}" ry="${h*.4}" fill="url(#rc)"/>`+dots(m*.05,m*.05,w,h,m*.07,'#FFFFFF',.12);
   const s=m*.12, ox=w*.42, oy=h*.82; const g=[[0,0,0],[1,0,1],[2,0,2],[0,1,1],[1,1,0],[0,2,2],[2,1,0],[1,2,1],[3,0,1],[3,1,2]];
   g.forEach(([i,j,k],n)=>body+=iso(ox+(i-j)*s,oy+(i+j)*s*.5-(n%3)*s*.4,s,cubeC[k],.95));
 }
 const svg=`<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}">${defs}<g clip-path="url(#cp)">${body}</g></svg>`;
 await sharp(Buffer.from(svg)).png().toFile(G+name+'.png'); return G+name+'.png';
}
// ---------- content data ----------
const S2=[['중고거래로 맥북 샀는데','KBS 자막뉴스 · 2024.03.13','youtube.com/watch?v=aCLYk93TMWw','중고 거래 사기','2.3배','동일 사양 중고 노트북\n매입처별 사정가 편차'],
 ['램값이 금값, 중고 거래에 PC 털이까지','SBS 뉴스 · 2026','youtube.com/watch?v=QW3PfvUsnM0','부품 빼돌리기','40~50만 대','연간 중고 노트북 유통\n성능 기준 가격 없음'],
 ['AI, 명령 거부 + 코드 조작까지','YTN · 2025.05','youtube.com/watch?v=NsTJt3sEoW8','AI 통제 이탈','2025.05','AI의 종료 지시 거부\n첫 사례 보고(YTN 보도)'],
 ['정부 시스템 647개 중단','SBS 8뉴스 · 2025.09.27','youtube.com/watch?v=cpbq9fR_4Bw','전산 인프라 마비','647개','2025.09 화재로 중단된\n정부 업무 시스템(SBS 보도)']];
const SRC={2:'출처: KBS News·SBS 뉴스·YTN 유튜브(각 영상 제목·화면 인용), 당사 시장 조사(2026.08)',
 5:'출처: Gartner, Market Share: IT Operations Management Software, Worldwide, 2024 · Persistence Market Research, IT Infrastructure Monitoring Market, 2025–2032 · 당사 추정(2026.08)',
 6:'출처: deepspec.kr 화면(2026.11)',12:'출처: 당사 「피지컬 AI 암코어」 기술 자료(2026.02) · 딥러닝 진단 엔진은 개발 계획',
 21:'출처: 당사 사업계획(2026.08) · 단위: 억 원 · 직전년도(2026) 실적과 비용 추정은 결산 자료 수령 후 반영 필요',
 23:'출처: 당사 제안 기준(도전의 IR 발표 자료, 2026.11) · 밸류에이션·투자 조건은 협의, 주주 구성은 기업 확인 필요'};
const HD={2:['1. 문제 정의 · 현실','거래 사기 · 부품 털이 · AI 명령 거부, 하드웨어를 믿을 근거 부재','사진과 말만 믿고 사는 중고 IT, 통제 밖에서 움직이는 AI, 멈추고 나서야 아는 서버'],
 5:['2. 시장규모 · TAM-SAM-SOM','IT 하드웨어 성능 검증·인증 시장, 2031년 약 1.2조 원','목표: 2031년 SOM 시장에서 점유율 약 1%, 매출 127억 원'],
 6:['3. 솔루션 · 서비스 구조','PC에 설치해 측정하고, 웹에서 시험성적서 발급','설치파일 하나로 측정 · 추가 장비 불필요 · 결과는 6등급과 QR 인증 성적서로 제공'],
 12:['4. 기술 · 피지컬 AI 확장','동일 엔진으로 로봇 연산장치(ARM)까지 진단','NVIDIA Jetson Orin NX·Raspberry Pi 실측 완료 · x86에서 ARM 기반 피지컬 AI 장비로 적용 범위 확대'],
 21:['9. 재무 계획 · 매출 추정','6개 영업부문, 2031년 매출 127억 원 목표','투자 후 12개월 5.0억 원(유통 비중 80%) → 2027년 9.4억 원(유통 33%, 진단·플랫폼·구독 중심)'],
 23:['10. 투자 제안 · 라운드 개요','Seed 3억 원(TIPS 연계 포함 총 10억 원) 투자 유치','24개월 내 전국 3개 거점 · 입점 파트너 30개사 · 2028년 매출 약 24억 원']};
const MKT=[['TAM','글로벌 IT 자산관리 및 운영 SW',"$40.67B('26) → $71.82B('31)",'CAGR 12.05%'],['SAM','글로벌 IT 인프라 모니터링 SW',"$13.72B('26) → $19.42B('31)",'CAGR 7.2%'],
 ['SOM','글로벌 IT HW 성능 검증·인증 SW',"약 8,400억 원('26) → 약 1조 1,892억 원('31)",'당사 추정'],['국내','중고 노트북 시장 중 인증 요구분 15%',"약 3,000억 원('31) 중 450억 원",'당사 추정']];
const PATH=['중고 IT 거래','IT 자산관리','공공조달·렌탈·보험 검수','피지컬 AI 진단'];
const STEPS=[['01','에이전트 설치','DeepSpec 에이전트(.msi) 다운로드, 로그인하면 기기 자동 등록'],['02','가속 부하 측정','사용률 60 → 80 → 100% 구간별로 부하를 올리며 속도·온도·연산량 수집'],['03','6등급 판정','24개 품질 지표를 A+ ~ C 6단계 등급으로 환산'],['04','시험성적서 발급','웹에서 PDF 성적서 발급, QR로 진위 확인']];
const USES=['중고 거래 가격 기준','기업 IT 자산 실사','렌탈 반납 검수','보험·보증 심사 자료'];
const AIE=['다중 데이터: CPU·GPU·전력·온도','LSTM 오토인코더 + 데이터 융합','LIME 기반 특성 기여도 분석','이상 분석 시각화 UI'];
const EXP=['가동 패턴 검증, 안전 신뢰도 측정·경고','로봇 연산력 정규화, 코어 슬립 제어·재배치','3D 단층면 이상 추적, 비상대응망'];
const FIN=[['IT 자산관리','2.0','4.0','7.0','18.0','24','55'],['공공조달 검수','0.9','1.5','2.1','4.5','6','15'],['중고 IT 거래','3.0','12.0','22.0','45.0','68','150'],['렌탈·리스 검수','0.5','1.0','1.5','3.0','4','10'],['피지컬 AI 진단','2.0','4.0','7.0','13.0','19','45'],['보험·보증 진단','1.0','1.0','2.0','5.0','6','15']];
const FINT=['합계','9.4','23.5','41.6','88.5','127','290'];
const KPI=[['투자 후 12개월','5.0억 원','특판 유통 4.0 · 진단솔루션 SI 0.8 · 진단료 0.2'],['2027년','9.4억 원','거래·유통 3.0 · 진단·플랫폼·구독 6.4'],['2031년','127억 원','거래·유통 68 · 진단·플랫폼·구독 59']];
const COND=[['라운드','Seed'],['투자 유치 금액','3억 원'],['TIPS 연계 포함','총 10억 원'],['밸류에이션','협의(IP 가치평가 24.18억 원 참고)'],['정부 매칭','강원권 LIPS 별도 병행']];
const GOAL=[['매출 33억 원','향후 2개년 누적(중고·신품 IT 기기 거래, 피지컬 AI 진단 수수료)'],['월 5,000건','전국 다자간 안심거래 플랫폼 확대, 파트너사 5개사 이상 정식 계약'],['베타 출시','피지컬 AI 3D 이상 추적·비상대응망'],['Pre-A 20억 원','상용화 실적 기반 후속 투자 유치']];
const SHARE=['주주 구성','대표이사 김창선 및 경영진 중심(지분율·기존 투자사는 기업 확인 후 기재)'];
const IMG12=[['jetson.png',739/691,'Jetson Orin NX 코어별 부하 시험'],['csv.png',661/606,'응답 CSV 모니터링(Raspberry Pi)'],['turtle.png',1,'TurtleBot3 실증 장비']];
const VITAL='바이탈 미터: 온도·전력·GPU·CPU 사용률 실시간 표시';
// ---------- helpers ----------
function kit(pres){
 const T=(s,txt,o)=>s.addText(txt,Object.assign({fontFace:F,margin:0,isTextBox:true,valign:'top',color:INK},o));
 const box=(s,o)=>{const r=o.r===undefined?0.12:o.r; delete o.r; const opt=Object.assign({line:{type:'none'}},o);
   if(r>0){opt.rectRadius=r;s.addShape(pres.shapes.ROUNDED_RECTANGLE,opt);}else s.addShape(pres.shapes.RECTANGLE,opt);};
 const sh=()=>({type:'outer',color:'2D5BFF',opacity:0.16,blur:18,offset:4,angle:90});
 const img=(s,p,x,y,w,h)=>s.addImage({path:p,x,y,w,h});
 const footer=(s,n,src,dark,sx=L,sw=10.9)=>{T(s,src,{x:sx,y:6.86,w:sw,h:0.34,fontSize:10,color:dark?'C9D4FF':GREY,valign:'middle'});
   T(s,n,{x:12.38,y:6.86,w:0.353,h:0.32,fontSize:11,bold:true,color:dark?WHITE:NAVY,align:'right',valign:'middle'});};
 const table=(s,rows,o)=>s.addTable(rows,Object.assign({fontFace:F,valign:'middle'},o));
 const pills=(s,x,y,h,items,widths,fillFn,txtFn,arrowColor,r,fs=12)=>{const tw=o=>o; let cx=x; const aw=0.36;
   items.forEach((t,i)=>{box(s,{x:cx,y,w:widths[i],h,r,fill:fillFn(i)});T(s,t,{x:cx,y,w:widths[i],h,fontSize:fs,bold:true,color:txtFn(i),align:'center',valign:'middle'});cx+=widths[i];
     if(i<items.length-1){T(s,'→',{x:cx,y,w:aw,h,fontSize:fs+1,bold:true,color:arrowColor,align:'center',valign:'middle'});cx+=aw;}});};
 return {T,box,sh,img,footer,table,pills};
}
const coverSteps=['측정','6등급 판정','시험성적서','평생관리'], coverW=[0.9,1.45,1.4,1.3];

// ======================= SET D : BLUE WAVE =======================
async function setD(){
 const pres=new pptxgen(); pres.layout='LAYOUT_WIDE'; pres.theme={headFontFace:F,bodyFontFace:F};
 const {T,box,sh,img,footer,table,pills}=kit(pres);
 pres.defineSlideMaster({title:'D',background:{path:A+'A_content.png'},objects:[{image:{path:A+'sp_navy.png',x:11.78,y:6.86,w:0.55,h:0.32}}]});
 const keyImg=await gen('d_key',CW,0.58,'grad',0.29);
 function head(s,n){const [lab,title,key]=HD[n]; const lw=lab.length*0.125+0.5;
   box(s,{x:L,y:0.4,w:lw,h:0.34,r:0.17,fill:{color:BLUE}}); T(s,lab,{x:L,y:0.4,w:lw,h:0.34,fontSize:12,bold:true,color:WHITE,align:'center',valign:'middle'});
   T(s,title,{x:L,y:0.82,w:CW,h:0.62,fontSize:28,bold:true,color:NAVY,valign:'middle'});
   img(s,keyImg,L,1.6,CW,0.58); T(s,key,{x:L+0.3,y:1.6,w:CW-0.6,h:0.58,fontSize:16,bold:true,color:WHITE,valign:'middle'});}
 // COVER
 { const s=pres.addSlide(); s.background={path:A+'A_cover.png'};
   img(s,A+'sp_white.png',L,0.5,1.2,0.7);
   T(s,'IR DECK  |  2026. 11',{x:9.733,y:0.5,w:3,h:0.4,fontSize:13,bold:true,color:WHITE,align:'right',valign:'middle'});
   T(s,'구간 가속 진단 기술이 적용된',{x:L,y:1.95,w:7.4,h:0.45,fontSize:20,bold:true,color:'BFD4FF'});
   T(s,'컴퓨터·AI 반도체 성능 인증과\n평생관리 에이전트, 딥스펙',{x:L,y:2.45,w:7.8,h:1.6,fontSize:42,bold:true,color:WHITE,lineSpacingMultiple:1.05});
   pills(s,L,4.3,0.5,coverSteps,coverW,i=>({color:WHITE,transparency:i==3?0:80}),i=>i==3?BLUE:WHITE,'BFD4FF',0.25,15);
   T(s,'DeepSpec Auto v3.1 · DeepSpec Agent 2종 · 강원대 4개 캠퍼스 안심거래 플랫폼',{x:L,y:5.0,w:7.6,h:0.4,fontSize:14,color:PALE});
   T(s,'솔포스 주식회사  |  대표이사 김창선  |  www.deepspec.kr',{x:L,y:6.6,w:7,h:0.4,fontSize:13,color:PALE,valign:'middle'});
   s.addShape(pres.shapes.OVAL,{x:8.25,y:0.95,w:4.9,h:4.9,fill:{color:WHITE,transparency:86},line:{type:'none'}});
   s.addShape(pres.shapes.OVAL,{x:8.75,y:1.45,w:3.9,h:3.9,fill:{color:WHITE,transparency:78},line:{type:'none'}});
   box(s,{x:9.05,y:1.75,w:3.3,h:3.3,r:0.3,fill:{color:WHITE},shadow:{type:'outer',color:'0B1270',opacity:0.35,blur:30,offset:8,angle:90}});
   img(s,A+'cover_r.png',9.17,1.87,3.06,2.99);
   box(s,{x:9.6,y:5.45,w:2.2,h:1.17,r:0.22,fill:{color:WHITE}}); img(s,A+'ds_logo.png',9.92,5.53,1.56,0.915);
 }
 // 02
 { const s=pres.addSlide({masterName:'D'}); head(s,2); footer(s,'02',SRC[2]);
   const band=await gen('d_band',13.333,1.62,'rings',0); img(s,band,0,5.08,13.333,1.62);
   const gap=0.24,cw=(CW-3*gap)/4,p=0.14;
   S2.forEach((c,i)=>{const x=L+i*(cw+gap),iw=cw-2*p,th=iw*720/1280;
     box(s,{x,y:TOP,w:cw,h:2.56,r:0.16,fill:{color:WHITE},shadow:sh()});
     img(s,A+`yt${i+1}.png`,x+p,TOP+p,iw,th);
     const cx=x+p+iw/2,cy=TOP+p+th/2; box(s,{x:cx-0.26,y:cy-0.18,w:0.52,h:0.36,r:0.1,fill:{color:'E62117'}});
     T(s,'▶',{x:cx-0.26,y:cy-0.18,w:0.52,h:0.36,fontSize:12,color:WHITE,align:'center',valign:'middle'});
     T(s,c[0],{x:x+p,y:TOP+p+th+0.05,w:iw,h:0.44,fontSize:12.5,bold:true});
     T(s,c[1]+'\n'+c[2],{x:x+p,y:TOP+p+th+0.5,w:iw,h:0.36,fontSize:10,color:GREY});
     box(s,{x:x,y:5.2,w:1.45,h:0.32,r:0.16,fill:{color:WHITE,transparency:i==0?0:15}});
     T(s,c[3],{x:x,y:5.2,w:1.45,h:0.32,fontSize:11,bold:true,color:i==0?BLUE:NAVY,align:'center',valign:'middle'});
     T(s,c[4],{x,y:5.56,w:cw,h:0.52,fontSize:30,bold:true,color:i==0?YEL:WHITE,valign:'middle'});
     T(s,c[5],{x,y:6.08,w:cw,h:0.46,fontSize:11,color:WHITE});});
 }
 // 05
 { const s=pres.addSlide({masterName:'D'}); head(s,5); footer(s,'05',SRC[5]);
   const H=BOT-TOP, pan=await gen('d_mkt',4.9,H,'rings',0.2); img(s,pan,L,TOP,4.9,H);
   const cx=L+2.45,b=TOP+H-0.18,d0=3.85,ds=[d0,d0*.69,d0*.4];
   ds.forEach((d,i)=>s.addShape(pres.shapes.OVAL,{x:cx-d/2,y:b-d,w:d,h:d,fill:{color:WHITE,transparency:[84,70,0][i]},line:{type:'none'},shadow:i==2?{type:'outer',color:'0B1270',opacity:0.35,blur:20,offset:4,angle:90}:undefined}));
   [['TAM',"$71.8B ('31)"],['SAM',"$19.4B ('31)"],['SOM','약 1.2조 원']].forEach((l,i)=>T(s,[{text:l[0],options:{fontSize:12,bold:true,color:i==2?BLUE:PALE,breakLine:true}},{text:l[1],options:{fontSize:i==2?17:19,bold:true,color:i==2?NAVY:WHITE}}],{x:cx-1.5,y:b-ds[i]+(i==2?0.4:0.22),w:3,h:0.7,align:'center'}));
   const tx=L+5.14,tw=R-tx,bd={type:'solid',pt:2,color:WHITE};
   const rows=[['구분','시장','규모','성장률'].map(t=>({text:t,options:{fill:{color:BLUE},color:WHITE,bold:true,align:'center'}}))];
   MKT.forEach(r=>rows.push(r.map((t,j)=>({text:t,options:{fill:{color:j==0?TINT2:'F4F7FF'},color:j==0?NAVY:INK,bold:j==0,align:j==1?'left':'center'}}))));
   table(s,rows,{x:tx,y:TOP,w:tw,colW:[0.8,2.35,2.65,tw-5.8],rowH:[0.44,0.56,0.56,0.56,0.56],fontSize:12,border:bd,margin:[0,0.1,0,0.1]});
   T(s,'시장 진입 경로',{x:tx,y:5.28,w:3,h:0.32,fontSize:14,bold:true,color:NAVY});
   T(s,'(6개 영업부문)',{x:R-2,y:5.28,w:2,h:0.32,fontSize:11,color:GREY,align:'right',valign:'middle'});
   const pw=[1.33,1.22,2.2,1.33],aw=(tw-6.08)/3; let x=tx; const chipImg=await gen('d_chip',1.33,0.52,'grad',0.26);
   PATH.forEach((t,i)=>{if(i==3) img(s,chipImg,x,6.1,pw[i],0.52); else box(s,{x,y:6.1,w:pw[i],h:0.52,r:0.26,fill:{color:TINT2}});
     T(s,t,{x,y:6.1,w:pw[i],h:0.52,fontSize:12,bold:true,color:i==3?WHITE:NAVY,align:'center',valign:'middle'});x+=pw[i];
     if(i<3){T(s,'→',{x,y:6.1,w:aw,h:0.52,fontSize:13,bold:true,color:BLUE,align:'center',valign:'middle'});x+=aw;}});
 }
 // 06  (steps left, screenshot stage bleeding right)
 { const s=pres.addSlide({masterName:'D'}); head(s,6); footer(s,'06',SRC[6]);
   const sx=7.0, sw=13.333-sx, H=BOT-TOP, stage=await gen('d_stage',sw,H,'rings',0); img(s,stage,sx,TOP,sw,H);
   box(s,{x:sx-0.0,y:TOP,w:0.01,h:0.01,r:0,fill:{color:WHITE,transparency:100}});
   const ih=H-0.5,iw=ih*1201/979; box(s,{x:sx+0.3,y:TOP+0.18,w:iw+0.14,h:ih+0.14,r:0.2,fill:{color:WHITE,transparency:70}});
   img(s,A+'shot6.png',sx+0.37,TOP+0.25,iw,ih);
   const rw=sx-0.3-L, sg=0.1, uH=0.86, shh=(H-uH-4*sg)/4; const hi=await gen('d_step4',rw,shh,'grad',0.14);
   STEPS.forEach((r,i)=>{const y=TOP+i*(shh+sg);
     if(i==3) img(s,hi,L,y,rw,shh); else box(s,{x:L,y,w:rw,h:shh,r:0.14,fill:{color:WHITE},shadow:sh()});
     T(s,r[0],{x:L+0.2,y,w:0.7,h:shh,fontSize:24,bold:true,color:i==3?WHITE:BLUE,valign:'middle'});
     T(s,r[1],{x:L+1.0,y:y+0.07,w:rw-1.2,h:0.28,fontSize:15,bold:true,color:i==3?WHITE:NAVY});
     T(s,r[2],{x:L+1.0,y:y+0.36,w:rw-1.2,h:shh-0.4,fontSize:11,color:i==3?PALE:INK});});
   const uy=BOT-uH; box(s,{x:L,y:uy,w:rw,h:uH,r:0.14,fill:{color:TINT2}});
   T(s,'활용처',{x:L+0.2,y:uy,w:0.8,h:uH,fontSize:13,bold:true,color:NAVY,valign:'middle'});
   const ux=L+1.0,uw=(L+rw-0.12-ux-0.1)/2,uh=(uH-0.3)/2;
   USES.forEach((t,i)=>{const x=ux+(i%2)*(uw+0.1),y=uy+0.1+Math.floor(i/2)*(uh+0.1);
     box(s,{x,y,w:uw,h:uh,r:uh/2,fill:{color:WHITE}}); T(s,t,{x,y,w:uw,h:uh,fontSize:12,bold:true,color:NAVY,align:'center',valign:'middle'});});
 }
 // 12
 { const s=pres.addSlide({masterName:'D'}); head(s,12); footer(s,'12',SRC[12]);
   const rpW=3.6,rpx=R-rpW,lw=rpx-0.24-L,g=0.24,bH=1.0,tH=BOT-TOP-bH-g,w3=2.0,w1=(lw-w3-2*g)/2,p=0.12;
   let x=L; IMG12.forEach((im,i)=>{const w=i<2?w1:w3; box(s,{x,y:TOP,w,h:tH,r:0.16,fill:{color:WHITE},shadow:sh()});
     let iw=w-2*p,ih=iw/im[1]; const mh=tH-2*p-0.4; if(ih>mh){ih=mh;iw=ih*im[1];}
     img(s,A+im[0],x+(w-iw)/2,TOP+p+(mh-ih)/2,iw,ih);
     T(s,im[2],{x:x+p,y:TOP+tH-p-0.34,w:w-2*p,h:0.34,fontSize:11,bold:true,color:NAVY,align:'center',valign:'middle'});x+=w+g;});
   const by=BOT-bH, vb=await gen('d_vital',lw,bH,'wave',0.16); img(s,vb,L,by,lw,bH);
   box(s,{x:L+p,y:by+p,w:2.0,h:bH-2*p,r:0.1,fill:{color:WHITE}}); img(s,A+'gauge.png',L+p+0.06,by+p+(bH-2*p-0.703)/2,1.88,0.703);
   T(s,VITAL,{x:L+2.4,y:by,w:lw-2.6,h:bH,fontSize:15,bold:true,color:WHITE,valign:'middle'});
   const avail=BOT-TOP-0.16,r1=(avail-1.37)/7.9,r2=r1*1.3;
   const ph1=0.51+4*(r1+0.05), ph2=0.51+3*(r2+0.05); const pi=await gen('d_aie',rpW,ph1,'rings',0.16); img(s,pi,rpx,TOP,rpW,ph1);
   T(s,'AI 진단 엔진(계획)',{x:rpx+0.2,y:TOP+0.1,w:rpW-0.4,h:0.32,fontSize:15,bold:true,color:WHITE,valign:'middle'});
   AIE.forEach((t,j)=>{const iy=TOP+0.46+j*(r1+0.05); box(s,{x:rpx+0.14,y:iy,w:rpW-0.28,h:r1,r:r1/2,fill:{color:WHITE,transparency:86}});
     T(s,t,{x:rpx+0.32,y:iy,w:rpW-0.6,h:r1,fontSize:12,color:WHITE,valign:'middle'});});
   const y2=BOT-ph2; box(s,{x:rpx,y:y2,w:rpW,h:ph2,r:0.16,fill:{color:WHITE},shadow:sh()});
   T(s,'3개년 확장',{x:rpx+0.2,y:y2+0.1,w:rpW-0.4,h:0.32,fontSize:15,bold:true,color:NAVY,valign:'middle'});
   EXP.forEach((t,j)=>{const iy=y2+0.46+j*(r2+0.05); box(s,{x:rpx+0.14,y:iy,w:rpW-0.28,h:r2,r:0.1,fill:{color:TINT}});
     T(s,t,{x:rpx+0.32,y:iy,w:rpW-0.6,h:r2,fontSize:12,valign:'middle'});});
 }
 // 21
 { const s=pres.addSlide({masterName:'D'}); head(s,21); footer(s,'21',SRC[21]);
   const bd={type:'solid',pt:2,color:WHITE}, fc=2.2;
   const rows=[['영업부문','2027','2028','2029','2030','2031','5개년'].map((t,j)=>({text:t,options:{fill:{color:BLUE},color:WHITE,bold:true,align:j?'center':'left'}}))];
   FIN.forEach(r=>rows.push(r.map((t,j)=>({text:t,options:{fill:{color:'F4F7FF'},align:j?'center':'left',bold:j==0,color:j==0?NAVY:INK}}))));
   rows.push(FINT.map((t,j)=>({text:t,options:{fill:{color:TINT2},bold:true,align:j?'center':'left',color:j==5?BLUE:NAVY}})));
   table(s,rows,{x:L,y:TOP,w:CW,colW:[fc,...Array(6).fill((CW-fc)/6)],rowH:0.355,fontSize:13,border:bd,margin:[0,0.2,0,0.2]});
   const g=0.24,kw=(CW-2*g)/3,ky=5.48,kh=BOT-ky; const st=['soft','mid','rings'];
   for(let i=0;i<3;i++){const x=L+i*(kw+g), im=await gen('d_kpi'+i,kw,kh,st[i],0.18); img(s,im,x,ky,kw,kh);
     const dk=i>0; T(s,KPI[i][0],{x:x+0.28,y:ky+0.12,w:kw-0.56,h:0.3,fontSize:13,bold:true,color:dk?PALE:BLUE});
     T(s,KPI[i][1],{x:x+0.28,y:ky+0.4,w:kw-0.56,h:0.46,fontSize:28,bold:true,color:i==2?YEL:(dk?WHITE:NAVY),valign:'middle'});
     T(s,KPI[i][2],{x:x+0.28,y:ky+0.84,w:kw-0.56,h:0.26,fontSize:11,color:dk?PALE:GREY,valign:'middle'});}
 }
 // 23 (right gradient stage bleeding)
 { const s=pres.addSlide({masterName:'D'}); head(s,23); footer(s,'23',SRC[23],false,L,6.0);
   const lw=5.9;
   T(s,'투자 조건',{x:L,y:TOP,w:3,h:0.34,fontSize:16,bold:true,color:NAVY,valign:'middle'});
   const ry0=TOP+0.46,shH=0.92,rH=(BOT-shH-0.16-ry0-4*0.06)/5;
   COND.forEach((c,i)=>{const y=ry0+i*(rH+0.06),hi=i==1;
     box(s,{x:L,y,w:lw,h:rH,r:rH/2,fill:{color:hi?BLUE:WHITE},shadow:hi?undefined:sh()});
     T(s,c[0],{x:L+0.26,y,w:1.8,h:rH,fontSize:13,bold:true,color:hi?PALE:BLUE,valign:'middle'});
     T(s,c[1],{x:L+2.05,y,w:lw-2.2,h:rH,fontSize:hi?22:14,bold:true,color:hi?WHITE:INK,valign:'middle'});});
   const sy=BOT-shH; box(s,{x:L,y:sy,w:lw,h:shH,r:0.16,fill:{color:TINT2}});
   T(s,SHARE[0],{x:L+0.26,y:sy+0.1,w:2,h:0.3,fontSize:13,bold:true,color:BLUE});
   T(s,SHARE[1],{x:L+0.26,y:sy+0.42,w:lw-0.5,h:0.42,fontSize:13,color:NAVY,valign:'middle'});
   const rx=L+lw+0.4, rw=13.333-rx, st=await gen('d_goal',rw,BOT-TOP+0.24,'rings',0); img(s,st,rx,TOP-0.24,rw,BOT-TOP+0.24);
   T(s,'24개월 목표',{x:rx+0.4,y:TOP-0.06,w:3,h:0.34,fontSize:16,bold:true,color:WHITE,valign:'middle'});
   const gy0=TOP+0.46,gH=(BOT-0.14-gy0-3*0.1)/4, gw=R-rx-0.4;
   GOAL.forEach((gl,i)=>{const y=gy0+i*(gH+0.1);
     box(s,{x:rx+0.4,y,w:gw,h:gH,r:0.14,fill:{color:WHITE,transparency:i==0?0:86}});
     T(s,gl[0],{x:rx+0.62,y,w:2.0,h:gH,fontSize:18,bold:true,color:i==0?BLUE:WHITE,valign:'middle'});
     T(s,gl[1],{x:rx+2.65,y,w:gw-2.45,h:gH,fontSize:12.5,color:i==0?INK:WHITE,valign:'middle'});});
 }
 await pres.writeFile({fileName:'solpos_IR_D_wave.pptx'});
}

// ======================= SET E : ISO BLOCK =======================
async function setE(){
 const pres=new pptxgen(); pres.layout='LAYOUT_WIDE'; pres.theme={headFontFace:F,bodyFontFace:F};
 const {T,box,sh,img,footer,table,pills}=kit(pres);
 pres.defineSlideMaster({title:'E',background:{color:WHITE},objects:[{image:{path:A+'sp_navy.png',x:11.78,y:6.86,w:0.55,h:0.32}}]});
 pres.defineSlideMaster({title:'EW',background:{color:WHITE},objects:[{image:{path:A+'sp_white.png',x:11.78,y:6.86,w:0.55,h:0.32}}]});
 const r=0.04;
 function head(s,n,w=CW){const [lab,title,key]=HD[n];
   T(s,lab,{x:L,y:0.42,w:8,h:0.3,fontSize:13,bold:true,color:BLUE});
   T(s,title,{x:L,y:0.78,w,h:0.62,fontSize:28,bold:true,color:NAVY,valign:'middle'});
   box(s,{x:L,y:1.6,w,h:0.58,r,fill:{color:NAVY}}); T(s,key,{x:L+0.28,y:1.6,w:w-0.56,h:0.58,fontSize:16,bold:true,color:WHITE,valign:'middle'});}
 // COVER: white left, iso gradient block right (bleed)
 { const s=pres.addSlide(); s.background={color:WHITE};
   const cb=await gen('e_cover',5.6,7.5,'cover',0); img(s,cb,7.733,0,5.6,7.5);
   const dg=await gen('e_cdots',7.7,7.5,'soft',0); img(s,dg,0,0,7.733,7.5);
   img(s,A+'sp_navy.png',L,0.5,1.2,0.7);
   T(s,'IR DECK  |  2026. 11',{x:9.733,y:0.5,w:3,h:0.4,fontSize:13,bold:true,color:WHITE,align:'right',valign:'middle'});
   T(s,'구간 가속 진단 기술이 적용된',{x:L,y:1.95,w:6.9,h:0.45,fontSize:20,bold:true,color:BLUE});
   T(s,'컴퓨터·AI 반도체 성능 인증과\n평생관리 에이전트, 딥스펙',{x:L,y:2.45,w:7.0,h:1.6,fontSize:39,bold:true,color:NAVY,lineSpacingMultiple:1.05});
   pills(s,L,4.3,0.5,coverSteps,coverW,i=>({color:i==3?BLUE:NAVY}),()=>WHITE,BLUE,0.04,15);
   T(s,'DeepSpec Auto v3.1 · DeepSpec Agent 2종 · 강원대 4개 캠퍼스 안심거래 플랫폼',{x:L,y:5.0,w:6.9,h:0.7,fontSize:14,color:GREY});
   T(s,'솔포스 주식회사  |  대표이사 김창선  |  www.deepspec.kr',{x:L,y:6.6,w:6.9,h:0.4,fontSize:13,color:GREY,valign:'middle'});
   box(s,{x:8.3,y:1.1,w:3.6,h:3.6,r:0.06,fill:{color:WHITE},shadow:{type:'outer',color:'0B1270',opacity:0.3,blur:30,offset:10,angle:90}});
   img(s,A+'cover_r.png',8.42,1.22,3.36,3.28);
   box(s,{x:10.4,y:5.4,w:2.333,h:1.22,r:0.06,fill:{color:WHITE}}); img(s,A+'ds_logo.png',10.73,5.5,1.68,0.985);
 }
 // 02: standard header; cards with navy top face
 { const s=pres.addSlide({masterName:'E'}); head(s,2); footer(s,'02',SRC[2]);
   const gap=0.24,cw=(CW-3*gap)/4,p=0.16,H=BOT-TOP;
   S2.forEach((c,i)=>{const x=L+i*(cw+gap),iw=cw-2*p,th=iw*720/1280,topH=p+th+0.98;
     box(s,{x,y:TOP,w:cw,h:H,r,fill:{color:TINT}});
     box(s,{x,y:TOP,w:cw,h:topH,r,fill:{color:i==0?BLUE:NAVY}});
     img(s,A+`yt${i+1}.png`,x+p,TOP+p,iw,th);
     const cx=x+p+iw/2,cy=TOP+p+th/2; box(s,{x:cx-0.26,y:cy-0.18,w:0.52,h:0.36,r:0.1,fill:{color:'E62117'}});
     T(s,'▶',{x:cx-0.26,y:cy-0.18,w:0.52,h:0.36,fontSize:12,color:WHITE,align:'center',valign:'middle'});
     T(s,c[0],{x:x+p,y:TOP+p+th+0.08,w:iw,h:0.46,fontSize:13,bold:true,color:WHITE});
     T(s,c[1]+'\n'+c[2],{x:x+p,y:TOP+p+th+0.54,w:iw,h:0.38,fontSize:9.5,color:'C9D4FF'});
     const by=TOP+topH+0.14;
     box(s,{x:x+p,y:by,w:1.45,h:0.32,r,fill:{color:i==0?BLUE:NAVY}});
     T(s,c[3],{x:x+p,y:by,w:1.45,h:0.32,fontSize:11,bold:true,color:WHITE,align:'center',valign:'middle'});
     T(s,c[4],{x:x+p,y:by+0.38,w:iw,h:0.52,fontSize:30,bold:true,color:i==0?BLUE:NAVY,valign:'middle'});
     T(s,c[5],{x:x+p,y:by+0.92,w:iw,h:0.42,fontSize:11,color:GREY});});
 }
 // 05: left full-height iso block with header + circles
 { const s=pres.addSlide({masterName:'E'}); const [lab,title,key]=HD[5];
   const bw=5.3, blk=await gen('e05',bw,7.5,'navy',0); img(s,blk,0,0,bw,7.5);
   T(s,lab,{x:L,y:0.5,w:bw-1.1,h:0.3,fontSize:13,bold:true,color:SKY});
   T(s,'IT 하드웨어 성능 검증·인증 시장,\n2031년 약 1.2조 원',{x:L,y:0.86,w:bw-0.8,h:0.95,fontSize:24,bold:true,color:WHITE});
   box(s,{x:L,y:2.0,w:bw-0.9,h:0.84,r,fill:{color:BLUE}}); T(s,'목표: 2031년 SOM 시장에서 점유율 약 1%,\n매출 127억 원',{x:L+0.2,y:2.0,w:bw-1.3,h:0.84,fontSize:15,bold:true,color:WHITE,valign:'middle'});
   const cx=(bw-0.6)/2+0.6,b=6.62,ds=[3.4,2.34,1.38];
   ds.forEach((d,i)=>s.addShape(pres.shapes.OVAL,{x:cx-d/2,y:b-d,w:d,h:d,fill:{color:i==2?YEL:WHITE,transparency:[86,72,0][i]},line:{type:'none'}}));
   [['TAM',"$71.8B ('31)"],['SAM',"$19.4B ('31)"],['SOM','약 1.2조 원']].forEach((l,i)=>T(s,[{text:l[0],options:{fontSize:12,bold:true,color:i==2?NAVY:SKY,breakLine:true}},{text:l[1],options:{fontSize:i==2?15:17,bold:true,color:i==2?NAVY:WHITE}}],{x:cx-1.4,y:b-ds[i]+(i==2?0.34:0.18),w:2.8,h:0.66,align:'center'}));
   const tx=bw+0.45,tw=R-tx,bd={type:'solid',pt:2,color:WHITE};
   const rows=[['구분','시장','규모','성장률'].map(t=>({text:t,options:{fill:{color:NAVY},color:WHITE,bold:true,align:'center'}}))];
   MKT.forEach((rr,k)=>rows.push(rr.map((t,j)=>({text:t,options:{fill:{color:j==0?(k==2?BLUE:TINT2):TINT},color:j==0?(k==2?WHITE:NAVY):INK,bold:j==0,align:j==1?'left':'center'}}))));
   table(s,rows,{x:tx,y:0.9,w:tw,colW:[0.8,2.3,2.6,tw-5.7],rowH:[0.48,0.74,0.74,0.74,0.74],fontSize:13,border:bd,margin:[0,0.12,0,0.12]});
   T(s,'시장 진입 경로',{x:tx,y:4.95,w:3,h:0.34,fontSize:15,bold:true,color:NAVY});
   T(s,'(6개 영업부문)',{x:R-2,y:4.95,w:2,h:0.34,fontSize:11,color:GREY,align:'right',valign:'middle'});
   const pw=[1.25,1.15,2.15,1.3];
   pills(s,tx,5.42,0.62,PATH,pw,i=>({color:i==3?BLUE:TINT2}),i=>i==3?WHITE:NAVY,BLUE,r,12);
   footer(s,'05',SRC[5],false,tx,11.0-tx+0.6);
 }
 // 06: screenshot on navy block bleeding left/bottom (white logo master)
 { const s=pres.addSlide({masterName:'EW'}); head(s,6);
   const bw=6.35, blk=await gen('e06',bw,7.5-TOP,'navy',0); img(s,blk,0,TOP,bw,7.5-TOP);
   const ih=3.75,iw=ih*1201/979; img(s,A+'shot6.png',L,TOP+0.25,iw,ih);
   const rx=bw+0.3,rw=R-rx,sg=0.1,uH=0.86,H=BOT-TOP,shh=(H-uH-4*sg)/4;
   STEPS.forEach((st,i)=>{const y=TOP+i*(shh+sg);
     box(s,{x:rx,y,w:0.8,h:shh,r,fill:{color:i==3?BLUE:NAVY}}); T(s,st[0],{x:rx,y,w:0.8,h:shh,fontSize:22,bold:true,color:WHITE,align:'center',valign:'middle'});
     box(s,{x:rx+0.88,y,w:rw-0.88,h:shh,r,fill:{color:i==3?TINT2:TINT}});
     T(s,st[1],{x:rx+1.08,y:y+0.06,w:rw-1.28,h:0.28,fontSize:15,bold:true,color:i==3?BLUE:NAVY});
     T(s,st[2],{x:rx+1.08,y:y+0.35,w:rw-1.28,h:shh-0.38,fontSize:11});});
   const uy=BOT-uH; box(s,{x:rx,y:uy,w:0.8,h:uH,r,fill:{color:BLUE}}); T(s,'활용처',{x:rx,y:uy,w:0.8,h:uH,fontSize:13,bold:true,color:WHITE,align:'center',valign:'middle'});
   const ux=rx+0.88,uw=(R-ux-0.08)/2,uh=(uH-0.08)/2;
   USES.forEach((t,i)=>{const x=ux+(i%2)*(uw+0.08),y=uy+Math.floor(i/2)*(uh+0.08); box(s,{x,y,w:uw,h:uh,r,fill:{color:TINT}});
     T(s,t,{x:x+0.18,y,w:uw-0.3,h:uh,fontSize:12,bold:true,valign:'middle'});});
   T(s,SRC[6],{x:L,y:6.86,w:5,h:0.34,fontSize:10,color:'C9D4FF',valign:'middle'});
   T(s,'06',{x:12.38,y:6.86,w:0.353,h:0.32,fontSize:11,bold:true,color:NAVY,align:'right',valign:'middle'});
   img(s,A+'sp_navy.png',11.78,6.86,0.55,0.32);
 }
 // 12: images top + navy band bleeding bottom
 { const s=pres.addSlide({masterName:'EW'}); head(s,12); footer(s,'12',SRC[12],true);
   const bandY=5.42, band=await gen('e12',13.333,7.5-bandY,'iso',0); img(s,band,0,bandY,13.333,7.5-bandY);
   const rpW=3.4,rpx=R-rpW,lw=rpx-0.24-L,g=0.24,tH=bandY-0.2-TOP,w3=2.0,w1=(lw-w3-2*g)/2,p=0.12;
   let x=L; IMG12.forEach((im,i)=>{const w=i<2?w1:w3; box(s,{x,y:TOP,w,h:tH,r,fill:{color:TINT}});
     let iw=w-2*p,ih=iw/im[1]; const mh=tH-2*p-0.36; if(ih>mh){ih=mh;iw=ih*im[1];}
     if(i==2) box(s,{x:x+p,y:TOP+p,w:w-2*p,h:mh,r,fill:{color:WHITE}});
     img(s,A+im[0],x+(w-iw)/2,TOP+p+(mh-ih)/2,iw,ih);
     T(s,im[2],{x:x+p,y:TOP+tH-p-0.32,w:w-2*p,h:0.32,fontSize:11,bold:true,color:NAVY,align:'center',valign:'middle'});x+=w+g;});
   box(s,{x:rpx,y:TOP,w:rpW,h:tH,r,fill:{color:BLUE}});
   T(s,'AI 진단 엔진(계획)',{x:rpx+0.2,y:TOP+0.12,w:rpW-0.4,h:0.34,fontSize:15,bold:true,color:WHITE,valign:'middle'});
   const ih_=(tH-0.6-3*0.06)/4;
   AIE.forEach((t,j)=>{const iy=TOP+0.52+j*(ih_+0.06); box(s,{x:rpx+0.14,y:iy,w:rpW-0.28,h:ih_,r,fill:{color:WHITE,transparency:85}});
     T(s,t,{x:rpx+0.3,y:iy,w:rpW-0.5,h:ih_,fontSize:12,color:WHITE,valign:'middle'});});
   const vy=bandY+0.2; box(s,{x:L,y:vy,w:2.2,h:1.0,r,fill:{color:WHITE}}); img(s,A+'gauge.png',L+0.1,vy+0.14,1.99,0.745);
   T(s,VITAL,{x:L+2.4,y:vy,w:2.9,h:1.0,fontSize:14,bold:true,color:WHITE,valign:'middle'});
   const ex=L+5.55; T(s,'3개년 확장',{x:ex,y:vy-0.02,w:3,h:0.3,fontSize:14,bold:true,color:SKY,valign:'middle'});
   const ew=(R-ex-2*0.12)/3;
   EXP.forEach((t,j)=>{const x=ex+j*(ew+0.12); box(s,{x,y:vy+0.34,w:ew,h:0.66,r,fill:{color:WHITE,transparency:j==0?0:88}});
     T(s,t,{x:x+0.14,y:vy+0.34,w:ew-0.28,h:0.66,fontSize:11.5,bold:j==0,color:j==0?NAVY:WHITE,valign:'middle'});});
 }
 // 21: top full-bleed band header (only here)
 { const s=pres.addSlide({masterName:'E'}); const [lab,title,key]=HD[21]; footer(s,'21',SRC[21]);
   const hb=await gen('e21',13.333,2.25,'iso',0); img(s,hb,0,0,13.333,2.25);
   T(s,lab,{x:L,y:0.3,w:8,h:0.3,fontSize:13,bold:true,color:SKY});
   T(s,title,{x:L,y:0.62,w:CW,h:0.62,fontSize:28,bold:true,color:WHITE,valign:'middle'});
   box(s,{x:L,y:1.42,w:CW,h:0.52,r,fill:{color:BLUE}}); T(s,key,{x:L+0.22,y:1.42,w:CW-0.44,h:0.52,fontSize:15,bold:true,color:WHITE,valign:'middle'});
   const bd={type:'solid',pt:2,color:WHITE},fc=2.2;
   const rows=[['영업부문','2027','2028','2029','2030','2031','5개년'].map((t,j)=>({text:t,options:{fill:{color:NAVY},color:WHITE,bold:true,align:j?'center':'left'}}))];
   FIN.forEach(rr=>rows.push(rr.map((t,j)=>({text:t,options:{fill:{color:TINT},align:j?'center':'left',bold:j==0,color:j==0?NAVY:INK}}))));
   rows.push(FINT.map((t,j)=>({text:t,options:{fill:{color:TINT2},bold:true,align:j?'center':'left',color:j==5?BLUE:NAVY}})));
   table(s,rows,{x:L,y:2.5,w:CW,colW:[fc,...Array(6).fill((CW-fc)/6)],rowH:0.36,fontSize:13,border:bd,margin:[0,0.2,0,0.2]});
   const g=0.24,kw=(CW-2*g)/3,ky=5.5,kh=BOT-ky;
   const fills=[[TINT2,BLUE,NAVY,GREY],[BLUE,PALE,WHITE,PALE],[NAVY,SKY,YEL,'C9D4FF']];
   for(let i=0;i<3;i++){const x=L+i*(kw+g),f=fills[i];
     if(i==2){const im=await gen('e21k',kw,kh,'navy',0.04); img(s,im,x,ky,kw,kh);} else box(s,{x,y:ky,w:kw,h:kh,r,fill:{color:f[0]}});
     T(s,KPI[i][0],{x:x+0.26,y:ky+0.12,w:kw-0.52,h:0.3,fontSize:13,bold:true,color:f[1]});
     T(s,KPI[i][1],{x:x+0.26,y:ky+0.4,w:kw-0.52,h:0.46,fontSize:28,bold:true,color:f[2],valign:'middle'});
     T(s,KPI[i][2],{x:x+0.26,y:ky+0.84,w:kw-0.52,h:0.26,fontSize:11,color:f[3],valign:'middle'});}
 }
 // 23: split - left navy iso block full height with header + conditions
 { const s=pres.addSlide({masterName:'E'}); const [lab,title,key]=HD[23];
   const bw=6.7, blk=await gen('e23',bw,7.5,'navy',0); img(s,blk,0,0,bw,7.5);
   T(s,lab,{x:L,y:0.42,w:5,h:0.3,fontSize:13,bold:true,color:SKY});
   T(s,'Seed 3억 원(TIPS 연계 포함\n총 10억 원) 투자 유치',{x:L,y:0.78,w:bw-1.1,h:1.0,fontSize:26,bold:true,color:WHITE});
   T(s,'24개월 내 전국 3개 거점 · 입점 파트너 30개사 ·\n2028년 매출 약 24억 원',{x:L,y:1.84,w:bw-1.1,h:0.6,fontSize:14,bold:true,color:PALE});
   T(s,'투자 조건',{x:L,y:2.6,w:3,h:0.34,fontSize:16,bold:true,color:WHITE,valign:'middle'});
   const ry0=3.02,shH=0.84,rH=(BOT-shH-0.14-ry0-4*0.06)/5, lw=bw-1.1;
   COND.forEach((c,i)=>{const y=ry0+i*(rH+0.06),hi=i==1;
     box(s,{x:L,y,w:lw,h:rH,r,fill:{color:hi?YEL:WHITE,transparency:hi?0:88}});
     T(s,c[0],{x:L+0.2,y,w:1.8,h:rH,fontSize:13,bold:true,color:hi?NAVY:SKY,valign:'middle'});
     T(s,c[1],{x:L+2.0,y,w:lw-2.1,h:rH,fontSize:hi?22:14,bold:true,color:hi?NAVY:WHITE,valign:'middle'});});
   const sy=BOT-shH; box(s,{x:L,y:sy,w:lw,h:shH,r,fill:{color:BLUE}});
   T(s,SHARE[0],{x:L+0.2,y:sy+0.08,w:2,h:0.3,fontSize:13,bold:true,color:PALE});
   T(s,SHARE[1],{x:L+0.2,y:sy+0.38,w:lw-0.4,h:0.42,fontSize:12.5,color:WHITE,valign:'middle'});
   T(s,SRC[23],{x:L,y:6.86,w:lw,h:0.4,fontSize:9.5,color:'C9D4FF',valign:'middle'});
   T(s,'23',{x:12.38,y:6.86,w:0.353,h:0.32,fontSize:11,bold:true,color:NAVY,align:'right',valign:'middle'});
   const rx=bw+0.45,rw=R-rx;
   T(s,'24개월 목표',{x:rx,y:0.78,w:4,h:0.62,fontSize:24,bold:true,color:NAVY,valign:'middle'});
   const gy0=1.6,gH=(BOT-gy0-3*0.14)/4;
   GOAL.forEach((gl,i)=>{const y=gy0+i*(gH+0.14);
     box(s,{x:rx,y,w:rw,h:gH,r,fill:{color:i==0?BLUE:TINT}});
     T(s,gl[0],{x:rx+0.24,y,w:2.3,h:gH,fontSize:20,bold:true,color:i==0?WHITE:NAVY,valign:'middle'});
     T(s,gl[1],{x:rx+2.6,y,w:rw-2.8,h:gH,fontSize:12.5,color:i==0?WHITE:INK,valign:'middle'});});
 }
 await pres.writeFile({fileName:'solpos_IR_E_iso.pptx'});
}
(async()=>{await setD();await setE();console.log('built');})();
