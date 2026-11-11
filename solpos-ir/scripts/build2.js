const pptxgen=require('pptxgenjs'); const F='Pretendard', A='assets/';
const L=0.6,R=12.733,CW=R-L,TOP=2.42,BOT=6.62;
const NAVY='1E2188',BLUE='2D5BFF',SKY='8FB4FF',YEL='F1CE36',CYAN='5CC8FF';
const THEMES={
 A:{name:'A_glass',bg:'A_content.png',radius:0.18,shadow:true,ink:'12152E',sub:'5B6178',title:NAVY,label:BLUE,accent:BLUE,stat:NAVY,hi:BLUE,
    card:'FFFFFF',card2:'F2F5FF',chip:NAVY,chipTxt:'FFFFFF',head:BLUE,headTxt:'FFFFFF',key:'E4EBFF',keyTxt:NAVY,cell:'FFFFFF',gap:'EEF2FF',num:BLUE,
    keyFill:BLUE,keyTxtColor:'FFFFFF',keyRadius:0.29,logo:'sp_navy.png',src:'5B6178',panel:BLUE,circ:['DCE5FF','9DB5FF',BLUE],circTxt:[BLUE,NAVY,'FFFFFF']},
 B:{name:'B_block',bg:null,radius:0.03,shadow:false,ink:'12152E',sub:'5B6178',title:'FFFFFF',label:SKY,accent:BLUE,stat:NAVY,hi:BLUE,
    card:'F1F3FA',card2:'FFFFFF',chip:NAVY,chipTxt:'FFFFFF',head:NAVY,headTxt:'FFFFFF',key:'E1E6F7',keyTxt:NAVY,cell:'F1F3FA',gap:'FFFFFF',num:NAVY,
    keyFill:BLUE,keyTxtColor:'FFFFFF',keyRadius:0.03,logo:'sp_navy.png',src:'5B6178',panel:NAVY,circ:['E1E6F7','A9BBF7',NAVY],circTxt:[BLUE,NAVY,'FFFFFF']},
 C:{name:'C_dark',bg:'C_content.png',radius:0.12,shadow:false,ink:'FFFFFF',sub:'A9B4E0',title:'FFFFFF',label:CYAN,accent:CYAN,stat:'FFFFFF',hi:YEL,
    card:'10164A',card2:'19216A',chip:BLUE,chipTxt:'FFFFFF',head:BLUE,headTxt:'FFFFFF',key:'1F2A80',keyTxt:'FFFFFF',cell:'131A55',gap:'050826',num:BLUE,
    keyFill:'1A2470',keyTxtColor:'FFFFFF',keyRadius:0.12,logo:'sp_white.png',src:'8E98C8',panel:'10164A',circ:['141C5E','24319A',BLUE],circTxt:[CYAN,'FFFFFF','FFFFFF']}
};
function build(key){
 const th=THEMES[key]; const pres=new pptxgen(); pres.layout='LAYOUT_WIDE'; pres.theme={headFontFace:F,bodyFontFace:F};
 const T=(s,txt,o)=>s.addText(txt,Object.assign({fontFace:F,margin:0,isTextBox:true,valign:'top',color:th.ink},o));
 const sh=()=>th.shadow?{type:'outer',color:'2D5BFF',opacity:0.14,blur:16,offset:3,angle:90}:undefined;
 const box=(s,o)=>{const r=o.r!==undefined?o.r:th.radius; delete o.r; const opt=Object.assign({line:{type:'none'}},o);
   if(r>0){opt.rectRadius=r; s.addShape(pres.shapes.ROUNDED_RECTANGLE,opt);} else s.addShape(pres.shapes.RECTANGLE,opt);};
 const card=(s,x,y,w,h,fill,shadow=true)=>box(s,{x,y,w,h,fill:{color:fill||th.card},shadow:shadow?sh():undefined});
 pres.defineSlideMaster({title:'CONTENT',background:th.bg?{path:A+th.bg}:{color:'FFFFFF'},objects:[{image:{path:A+th.logo,x:11.78,y:6.86,w:0.55,h:0.32}}]});
 function frame(s,label,title,keymsg,page,source){
  if(key==='B'){ s.addImage({path:A+'B_head.png',x:0,y:0,w:13.333,h:2.25});
    T(s,label,{x:L,y:0.3,w:8,h:0.3,fontSize:13,bold:true,color:SKY});
    T(s,title,{x:L,y:0.62,w:CW,h:0.62,fontSize:28,bold:true,color:'FFFFFF',valign:'middle'});
    box(s,{x:L,y:1.42,w:CW,h:0.52,fill:{color:BLUE},r:0.03});
    T(s,keymsg,{x:L+0.24,y:1.42,w:CW-0.48,h:0.52,fontSize:16,bold:true,color:'FFFFFF',valign:'middle'});
  } else {
    T(s,label,{x:L,y:0.42,w:8,h:0.3,fontSize:13,bold:true,color:th.label});
    T(s,title,{x:L,y:0.78,w:CW,h:0.62,fontSize:28,bold:true,color:th.title,valign:'middle'});
    box(s,{x:L,y:1.6,w:CW,h:0.58,fill:{color:th.keyFill},r:th.keyRadius});
    T(s,keymsg,{x:L+0.3,y:1.6,w:CW-0.6,h:0.58,fontSize:16,bold:true,color:th.keyTxtColor,valign:'middle'});
  }
  T(s,source,{x:L,y:6.86,w:10.9,h:0.34,fontSize:10,color:th.src,valign:'middle'});
  T(s,page,{x:12.38,y:6.86,w:0.353,h:0.32,fontSize:11,bold:true,color:key==='C'?CYAN:NAVY,align:'right',valign:'middle'});
 }
 const top= key==='B'?2.5:TOP;  // content top
 // ---------- COVER ----------
 { const s=pres.addSlide();
   const title='컴퓨터·AI 반도체 성능 인증과\n평생관리 에이전트, 딥스펙';
   const steps=['측정','6등급 판정','시험성적서','평생관리'], ws=[0.9,1.45,1.4,1.3];
   const pills=(x,y,fill,tfill,txt,arr,last)=>{steps.forEach((t,i)=>{box(s,{x,y,w:ws[i],h:0.48,r:key==='B'?0.03:0.24,fill:{color:i==3?last:fill,transparency:i==3?0:tfill}});
      T(s,t,{x,y,w:ws[i],h:0.48,fontSize:15,bold:true,color:i==3?'FFFFFF':txt,align:'center',valign:'middle'});x+=ws[i];
      if(i<3){T(s,'→',{x,y,w:0.36,h:0.48,fontSize:15,bold:true,color:arr,align:'center',valign:'middle'});x+=0.36;}});};
   if(key==='A'){ s.background={path:A+'A_cover.png'};
     s.addImage({path:A+'sp_white.png',x:L,y:0.5,w:1.2,h:0.7});
     T(s,'IR DECK  |  2026. 11',{x:9.733,y:0.5,w:3,h:0.4,fontSize:13,bold:true,color:'FFFFFF',align:'right',valign:'middle'});
     T(s,'구간 가속 진단 기술이 적용된',{x:L,y:1.95,w:7.4,h:0.45,fontSize:20,bold:true,color:'BFD4FF'});
     T(s,title,{x:L,y:2.45,w:7.8,h:1.6,fontSize:40,bold:true,color:'FFFFFF',lineSpacingMultiple:1.05});
     pills(L,4.3,'FFFFFF',80,'FFFFFF','BFD4FF','FFFFFF'); // last pill white w/ navy text handled below
     T(s,'DeepSpec Auto v3.1 · DeepSpec Agent 2종 · 강원대 4개 캠퍼스 안심거래 플랫폼',{x:L,y:4.98,w:7.6,h:0.4,fontSize:14,color:'DCE6FF'});
     T(s,'솔포스 주식회사  |  대표이사 김창선  |  www.deepspec.kr',{x:L,y:6.6,w:7,h:0.4,fontSize:13,color:'DCE6FF',valign:'middle'});
     box(s,{x:8.7,y:1.35,w:4.033,h:5.27,r:0.3,fill:{color:'FFFFFF',transparency:22}});
     s.addImage({path:A+'cover_r.png',x:8.95,y:1.6,w:3.533,h:3.45});
     box(s,{x:9.62,y:5.25,w:2.2,h:1.12,r:0.2,fill:{color:'FFFFFF'}});
     s.addImage({path:A+'ds_logo.png',x:9.98,y:5.33,w:1.6,h:0.94});
   } else if(key==='B'){ s.background={path:A+'B_cover.png'};
     box(s,{x:0,y:0,w:7.6,h:7.5,fill:{color:NAVY},r:0});
     s.addImage({path:A+'sp_white.png',x:L,y:0.5,w:1.2,h:0.7});
     T(s,'IR DECK  |  2026. 11',{x:9.733,y:0.5,w:3,h:0.4,fontSize:13,bold:true,color:NAVY,align:'right',valign:'middle'});
     T(s,'구간 가속 진단 기술이 적용된',{x:L,y:1.95,w:6.6,h:0.45,fontSize:20,bold:true,color:SKY});
     T(s,title,{x:L,y:2.45,w:6.8,h:1.6,fontSize:38,bold:true,color:'FFFFFF',lineSpacingMultiple:1.05});
     pills(L,4.3,'FFFFFF',85,'FFFFFF',SKY,BLUE);
     T(s,'DeepSpec Auto v3.1 · DeepSpec Agent 2종 · 강원대 4개 캠퍼스 안심거래 플랫폼',{x:L,y:4.98,w:6.6,h:0.7,fontSize:14,color:'C9D4FF'});
     T(s,'솔포스 주식회사  |  대표이사 김창선  |  www.deepspec.kr',{x:L,y:6.6,w:6.6,h:0.4,fontSize:13,color:'C9D4FF',valign:'middle'});
     s.addImage({path:A+'cover_r.png',x:8.35,y:1.35,w:3.6,h:3.515});
     s.addImage({path:A+'ds_logo.png',x:8.35,y:5.35,w:1.8,h:1.056});
   } else { s.background={path:A+'C_cover.png'};
     s.addImage({path:A+'sp_white.png',x:L,y:0.5,w:1.2,h:0.7});
     T(s,'IR DECK  |  2026. 11',{x:9.733,y:0.5,w:3,h:0.4,fontSize:13,bold:true,color:CYAN,align:'right',valign:'middle'});
     T(s,'구간 가속 진단 기술이 적용된',{x:L,y:1.95,w:7.4,h:0.45,fontSize:20,bold:true,color:CYAN});
     T(s,title,{x:L,y:2.45,w:7.8,h:1.6,fontSize:42,bold:true,color:'FFFFFF',lineSpacingMultiple:1.05});
     pills(L,4.3,'2D5BFF',70,'FFFFFF',CYAN,BLUE);
     T(s,'DeepSpec Auto v3.1 · DeepSpec Agent 2종 · 강원대 4개 캠퍼스 안심거래 플랫폼',{x:L,y:4.98,w:7.6,h:0.4,fontSize:14,color:'C9D4FF'});
     T(s,'솔포스 주식회사  |  대표이사 김창선  |  www.deepspec.kr',{x:L,y:6.6,w:7,h:0.4,fontSize:13,color:'A9B4E0',valign:'middle'});
     box(s,{x:9.85,y:4.98,w:2.883,h:1.64,r:0.14,fill:{color:'0A0F3A',transparency:15}});
     s.addImage({path:A+'cover_r.png',x:9.99,y:5.12,w:1.33,h:1.3});
     box(s,{x:11.42,y:5.12,w:1.173,h:1.3,r:0.1,fill:{color:'FFFFFF'}});
     s.addImage({path:A+'ds_logo.png',x:11.48,y:5.42,w:1.06,h:0.622});
   }
   if(key==='A'){ // fix last pill color: white with navy text
     const x=L+0.9+0.36+1.45+0.36+1.4+0.36; box(s,{x,y:4.3,w:1.3,h:0.48,r:0.24,fill:{color:'FFFFFF'}});
     T(s,'평생관리',{x,y:4.3,w:1.3,h:0.48,fontSize:15,bold:true,color:BLUE,align:'center',valign:'middle'}); }
 }
 // ---------- 02 ----------
 { const s=pres.addSlide({masterName:'CONTENT'});
   frame(s,'1. 문제 정의 · 현실','거래 사기 · 부품 털이 · AI 명령 거부, 하드웨어를 믿을 근거 부재','사진과 말만 믿고 사는 중고 IT, 통제 밖에서 움직이는 AI, 멈추고 나서야 아는 서버','02','출처: KBS News·SBS 뉴스·YTN 유튜브(각 영상 제목·화면 인용), 당사 시장 조사(2026.08)');
   const cols=[['중고거래로 맥북 샀는데','KBS 자막뉴스 · 2024.03.13','youtube.com/watch?v=aCLYk93TMWw','중고 거래 사기','2.3배','동일 사양 중고 노트북\n매입처별 사정가 편차'],
    ['램값이 금값, 중고 거래에 PC 털이까지','SBS 뉴스 · 2026','youtube.com/watch?v=QW3PfvUsnM0','부품 빼돌리기','40~50만 대','연간 중고 노트북 유통\n성능 기준 가격 없음'],
    ['AI, 명령 거부 + 코드 조작까지','YTN · 2025.05','youtube.com/watch?v=NsTJt3sEoW8','AI 통제 이탈','2025.05','AI의 종료 지시 거부\n첫 사례 보고(YTN 보도)'],
    ['정부 시스템 647개 중단','SBS 8뉴스 · 2025.09.27','youtube.com/watch?v=cpbq9fR_4Bw','전산 인프라 마비','647개','2025.09 화재로 중단된\n정부 업무 시스템(SBS 보도)']];
   const gap=0.24,cw=(CW-3*gap)/4,p=0.16,H=BOT-top;
   cols.forEach((c,i)=>{const x=L+i*(cw+gap),iw=cw-2*p,th_=iw*720/1280;
     card(s,x,top,cw,H);
     s.addImage({path:A+`yt${i+1}.png`,x:x+p,y:top+p,w:iw,h:th_});
     const cx=x+p+iw/2,cy=top+p+th_/2; box(s,{x:cx-0.26,y:cy-0.18,w:0.52,h:0.36,r:0.1,fill:{color:'E62117'}});
     T(s,'▶',{x:cx-0.26,y:cy-0.18,w:0.52,h:0.36,fontSize:12,color:'FFFFFF',align:'center',valign:'middle'});
     const y1=top+p+th_+0.1;
     T(s,c[0],{x:x+p,y:y1,w:iw,h:0.48,fontSize:13,bold:true});
     T(s,c[1]+'\n'+c[2],{x:x+p,y:y1+0.48,w:iw,h:0.4,fontSize:10,color:th.sub});
     const by=BOT-p-1.46; box(s,{x:x+p,y:by,w:iw,h:1.46,fill:{color:i==0&&key!=='C'?NAVY:th.card2},r:Math.max(th.radius-0.06,0.03)});
     const inv=(i==0&&key!=='C');
     box(s,{x:x+p+0.14,y:by+0.12,w:1.45,h:0.32,r:key==='B'?0.03:0.16,fill:{color:inv?BLUE:th.chip}});
     T(s,c[3],{x:x+p+0.14,y:by+0.12,w:1.45,h:0.32,fontSize:11,bold:true,color:'FFFFFF',align:'center',valign:'middle'});
     T(s,c[4],{x:x+p+0.14,y:by+0.48,w:iw-0.28,h:0.5,fontSize:28,bold:true,color:inv?'FFFFFF':(i==0?th.hi:th.stat),valign:'middle'});
     T(s,c[5],{x:x+p+0.14,y:by+0.98,w:iw-0.28,h:0.42,fontSize:11,color:inv?'C9D4FF':th.sub});
   });
 }
 // ---------- 05 ----------
 { const s=pres.addSlide({masterName:'CONTENT'});
   frame(s,'2. 시장규모 · TAM-SAM-SOM','IT 하드웨어 성능 검증·인증 시장, 2031년 약 1.2조 원','목표: 2031년 SOM 시장에서 점유율 약 1%, 매출 127억 원','05','출처: Gartner, Market Share: IT Operations Management Software, Worldwide, 2024 · Persistence Market Research, IT Infrastructure Monitoring Market, 2025–2032 · 당사 추정(2026.08)');
   const H=BOT-top; card(s,L,top,4.9,H); const cx=L+2.45, d0=Math.min(3.9,H-0.3), b=top+H-0.15;
   const ds=[d0,d0*0.69,d0*0.4];
   ds.forEach((d,i)=>s.addShape(pres.shapes.OVAL,{x:cx-d/2,y:b-d,w:d,h:d,fill:{color:th.circ[i]},line:{type:'none'}}));
   const lab=[['TAM',"$71.8B ('31)",18],['SAM',"$19.4B ('31)",18],['SOM','약 1.2조 원',17]];
   lab.forEach((l,i)=>T(s,[{text:l[0],options:{fontSize:12,bold:true,color:i==2?(key==='C'?'FFFFFF':SKY):th.circTxt[0],breakLine:true}},{text:l[1],options:{fontSize:l[2],bold:true,color:th.circTxt[Math.max(i,1)===1&&i<2?1:2]}}],
     {x:cx-1.5,y:b-ds[i]+(i==2?0.38:0.2),w:3,h:0.7,align:'center'}));
   const tx=L+5.14,tw=R-tx,bd={type:'solid',pt:2,color:th.gap};
   const Hd=t=>({text:t,options:{fill:{color:th.head},color:th.headTxt,bold:true,align:'center'}});
   const K=t=>({text:t,options:{fill:{color:th.key},color:th.keyTxt,bold:true,align:'center'}});
   const C=(t,al)=>({text:t,options:{fill:{color:th.cell},align:al||'left',color:th.ink}});
   const rows=[[Hd('구분'),Hd('시장'),Hd('규모'),Hd('성장률')],
    [K('TAM'),C('글로벌 IT 자산관리 및 운영 SW'),C("$40.67B('26) → $71.82B('31)",'center'),C('CAGR 12.05%','center')],
    [K('SAM'),C('글로벌 IT 인프라 모니터링 SW'),C("$13.72B('26) → $19.42B('31)",'center'),C('CAGR 7.2%','center')],
    [K('SOM'),C('글로벌 IT HW 성능 검증·인증 SW'),C("약 8,400억 원('26) → 약 1조 1,892억 원('31)",'center'),C('당사 추정','center')],
    [K('국내'),C('중고 노트북 시장 중 인증 요구분 15%'),C("약 3,000억 원('31) 중 450억 원",'center'),C('당사 추정','center')]];
   const rh=key==='B'?0.52:0.56;
   s.addTable(rows,{x:tx,y:top,w:tw,colW:[0.8,2.35,2.65,tw-5.8],rowH:[0.42,rh,rh,rh,rh],fontFace:F,fontSize:12,valign:'middle',border:bd,margin:[0,0.1,0,0.1]});
   const py=top+0.42+4*rh+0.24;
   T(s,'시장 진입 경로',{x:tx,y:py,w:3,h:0.32,fontSize:14,bold:true,color:key==='C'?'FFFFFF':NAVY});
   T(s,'(6개 영업부문)',{x:R-2,y:py,w:2,h:0.32,fontSize:11,color:th.sub,align:'right',valign:'middle'});
   const ch=['중고 IT 거래','IT 자산관리','공공조달·렌탈·보험 검수','피지컬 AI 진단'],cws=[1.33,1.22,2.2,1.33];
   const aw=(tw-cws.reduce((a,b)=>a+b))/3; let x=tx; const cy=BOT-0.52;
   ch.forEach((t,i)=>{box(s,{x,y:cy,w:cws[i],h:0.52,r:key==='B'?0.03:0.26,fill:{color:i==3?BLUE:th.key}});
     T(s,t,{x,y:cy,w:cws[i],h:0.52,fontSize:12,bold:true,color:i==3?'FFFFFF':th.keyTxt,align:'center',valign:'middle'});x+=cws[i];
     if(i<3){T(s,'→',{x,y:cy,w:aw,h:0.52,fontSize:13,bold:true,color:th.accent,align:'center',valign:'middle'});x+=aw;}});
 }
 // ---------- 06 ----------
 { const s=pres.addSlide({masterName:'CONTENT'});
   frame(s,'3. 솔루션 · 서비스 구조','PC에 설치해 측정하고, 웹에서 시험성적서 발급','설치파일 하나로 측정 · 추가 장비 불필요 · 결과는 6등급과 QR 인증 성적서로 제공','06','출처: deepspec.kr 화면(2026.11)');
   const H=BOT-top; box(s,{x:L,y:top,w:5.6,h:H,fill:{color:th.panel}});
   const ih=H-0.4, iw=ih*1201/979; s.addImage({path:A+'shot6.png',x:L+(5.6-iw)/2,y:top+0.2,w:iw,h:ih});
   const st=[['01','에이전트 설치','DeepSpec 에이전트(.msi) 다운로드, 로그인하면 기기 자동 등록'],['02','가속 부하 측정','사용률 60 → 80 → 100% 구간별로 부하를 올리며 속도·온도·연산량 수집'],['03','6등급 판정','24개 품질 지표를 A+ ~ C 6단계 등급으로 환산'],['04','시험성적서 발급','웹에서 PDF 성적서 발급, QR로 진위 확인']];
   const rx=L+5.84,rw=R-rx,sg=0.1,uH=0.84,shh=(H-uH-4*sg)/4;
   st.forEach((r,i)=>{const y=top+i*(shh+sg);
     box(s,{x:rx,y,w:0.74,h:shh,fill:{color:i==3?(key==='C'?YEL:BLUE):th.num}});
     T(s,r[0],{x:rx,y,w:0.74,h:shh,fontSize:20,bold:true,color:i==3&&key==='C'?'0A0F3A':'FFFFFF',align:'center',valign:'middle'});
     card(s,rx+0.84,y,rw-0.84,shh);
     T(s,r[1],{x:rx+1.04,y:y+0.06,w:rw-1.24,h:0.28,fontSize:15,bold:true,color:i==3?th.hi:(key==='C'?'FFFFFF':NAVY)});
     T(s,r[2],{x:rx+1.04,y:y+0.34,w:rw-1.24,h:shh-0.38,fontSize:11});});
   const uy=BOT-uH; box(s,{x:rx,y:uy,w:0.74,h:uH,fill:{color:th.key}});
   T(s,'활용처',{x:rx,y:uy,w:0.74,h:uH,fontSize:13,bold:true,color:th.keyTxt,align:'center',valign:'middle'});
   const us=['중고 거래 가격 기준','기업 IT 자산 실사','렌탈 반납 검수','보험·보증 심사 자료'],ux=rx+0.84,uw=(R-ux-0.1)/2,uh=(uH-0.1)/2;
   us.forEach((t,i)=>{const x=ux+(i%2)*(uw+0.1),y=uy+Math.floor(i/2)*(uh+0.1); card(s,x,y,uw,uh,null,false);
     T(s,t,{x:x+0.2,y,w:uw-0.4,h:uh,fontSize:12,bold:true,valign:'middle'});});
 }
 // ---------- 12 ----------
 { const s=pres.addSlide({masterName:'CONTENT'});
   frame(s,'4. 기술 · 피지컬 AI 확장','동일 엔진으로 로봇 연산장치(ARM)까지 진단','NVIDIA Jetson Orin NX·Raspberry Pi 실측 완료 · x86에서 ARM 기반 피지컬 AI 장비로 적용 범위 확대','12','출처: 당사 「피지컬 AI 암코어」 기술 자료(2026.02) · 딥러닝 진단 엔진은 개발 계획');
   const rpW=3.6, rpx=R-rpW, lw=rpx-0.24-L, g=0.24, bH=1.0, tH=BOT-top-bH-g;
   const w3=2.0, w1=(lw-w3-2*g)/2, p=0.12;
   const imgs=[['jetson.png',739/691,'Jetson Orin NX 코어별 부하 시험'],['csv.png',661/606,'응답 CSV 모니터링(Raspberry Pi)'],['turtle.png',1,'TurtleBot3 실증 장비']];
   let x=L; imgs.forEach((im,i)=>{const w=i<2?w1:w3; card(s,x,top,w,tH);
     let iw=w-2*p, ih=iw/im[1]; const maxh=tH-2*p-0.4; if(ih>maxh){ih=maxh;iw=ih*im[1];}
     const iy=top+p+(maxh-ih)/2; if(i==2) box(s,{x:x+p,y:top+p,w:w-2*p,h:maxh,fill:{color:'FFFFFF'},r:Math.max(th.radius-0.06,0.03)});
     s.addImage({path:A+im[0],x:x+(w-iw)/2,y:iy,w:iw,h:ih});
     T(s,im[2],{x:x+p,y:top+tH-p-0.34,w:w-2*p,h:0.34,fontSize:11,bold:true,align:'center',valign:'middle',color:th.sub}); x+=w+g;});
   const by=BOT-bH; card(s,L,by,lw,bH);
   box(s,{x:L+p,y:by+p,w:2.0,h:bH-2*p,fill:{color:'FFFFFF'},r:Math.max(th.radius-0.08,0.03)});
   s.addImage({path:A+'gauge.png',x:L+p+0.06,y:by+p+(bH-2*p-0.71)/2,w:1.88,h:0.703});
   T(s,'바이탈 미터: 온도·전력·GPU·CPU 사용률 실시간 표시',{x:L+2.4,y:by,w:lw-2.6,h:bH,fontSize:15,bold:true,valign:'middle',color:key==='C'?'FFFFFF':NAVY});
   const avail=BOT-top-0.16, r1=(avail-1.37)/7.9, r2=r1*1.3;
   const panels=[['AI 진단 엔진(계획)',['다중 데이터: CPU·GPU·전력·온도','LSTM 오토인코더 + 데이터 융합','LIME 기반 특성 기여도 분석','이상 분석 시각화 UI'],r1],
                 ['3개년 확장',['가동 패턴 검증, 안전 신뢰도 측정·경고','로봇 연산력 정규화, 코어 슬립 제어·재배치','3D 단층면 이상 추적, 비상대응망'],r2]];
   let py=top; panels.forEach((pn,k)=>{const n=pn[1].length, ph=0.1+0.36+n*pn[2]+n*0.05+0.05;
     if(k==1) py=BOT-ph;
     box(s,{x:rpx,y:py,w:rpW,h:ph,fill:{color:k==0?th.panel:th.card},shadow:k?sh():undefined});
     const onPanel=k==0; T(s,pn[0],{x:rpx+0.2,y:py+0.1,w:rpW-0.4,h:0.32,fontSize:15,bold:true,color:onPanel?'FFFFFF':(key==='C'?'FFFFFF':NAVY),valign:'middle'});
     pn[1].forEach((it,j)=>{const iy=py+0.46+j*(pn[2]+0.05);
       box(s,{x:rpx+0.14,y:iy,w:rpW-0.28,h:pn[2],fill:{color:onPanel?'FFFFFF':th.card2,transparency:onPanel?(key==='C'?90:88):0},r:Math.max(th.radius-0.08,0.03)});
       T(s,it,{x:rpx+0.3,y:iy,w:rpW-0.6,h:pn[2],fontSize:12,color:onPanel?'FFFFFF':th.ink,valign:'middle'});});
     py+=ph;});
 }
 // ---------- 21 ----------
 { const s=pres.addSlide({masterName:'CONTENT'});
   frame(s,'9. 재무 계획 · 매출 추정','6개 영업부문, 2031년 매출 127억 원 목표','투자 후 12개월 5.0억 원(유통 비중 80%) → 2027년 9.4억 원(유통 33%, 진단·플랫폼·구독 중심)','21','출처: 당사 사업계획(2026.08) · 단위: 억 원 · 직전년도(2026) 실적과 비용 추정은 결산 자료 수령 후 반영 필요');
   const bd={type:'solid',pt:2,color:th.gap};
   const Hd=(t,al)=>({text:t,options:{fill:{color:th.head},color:th.headTxt,bold:true,align:al||'center'}});
   const data=[['IT 자산관리','2.0','4.0','7.0','18.0','24','55'],['공공조달 검수','0.9','1.5','2.1','4.5','6','15'],['중고 IT 거래','3.0','12.0','22.0','45.0','68','150'],['렌탈·리스 검수','0.5','1.0','1.5','3.0','4','10'],['피지컬 AI 진단','2.0','4.0','7.0','13.0','19','45'],['보험·보증 진단','1.0','1.0','2.0','5.0','6','15']];
   const rows=[[Hd('영업부문','left'),Hd('2027'),Hd('2028'),Hd('2029'),Hd('2030'),Hd('2031'),Hd('5개년')]];
   data.forEach(r=>rows.push(r.map((t,j)=>({text:t,options:{fill:{color:th.cell},align:j?'center':'left',bold:j==0,color:j==0?(key==='C'?'FFFFFF':NAVY):th.ink}}))));
   rows.push(['합계','9.4','23.5','41.6','88.5','127','290'].map((t,j)=>({text:t,options:{fill:{color:th.key},bold:true,align:j?'center':'left',color:j==5?th.hi:th.keyTxt}})));
   const rh=key==='B'?0.39:0.4, fc=2.2;
   s.addTable(rows,{x:L,y:top,w:CW,colW:[fc,...Array(6).fill((CW-fc)/6)],rowH:rh,fontFace:F,fontSize:13,valign:'middle',border:bd,margin:[0,0.2,0,0.2]});
   const k=[['투자 후 12개월','5.0억 원','특판 유통 4.0 · 진단솔루션 SI 0.8 · 진단료 0.2'],['2027년','9.4억 원','거래·유통 3.0 · 진단·플랫폼·구독 6.4'],['2031년','127억 원','거래·유통 68 · 진단·플랫폼·구독 59']];
   const fills=key==='C'?[['131A55',SKY,'FFFFFF','A9B4E0'],['1F2A80',SKY,'FFFFFF','C9D4FF'],[BLUE,'DCE5FF',YEL,'DCE5FF']]:[[key==='A'?'FFFFFF':'F1F3FA',BLUE,NAVY,'5B6178'],[BLUE,'DCE5FF','FFFFFF','DCE5FF'],[NAVY,SKY,YEL,'C9D4FF']];
   const g=0.24,kw=(CW-2*g)/3,ky=BOT-0.84;
   k.forEach((c,i)=>{const x=L+i*(kw+g),f=fills[i]; box(s,{x,y:ky,w:kw,h:0.84,fill:{color:f[0]},shadow:i==0?sh():undefined});
     T(s,[{text:c[0]+'   ',options:{fontSize:12,bold:true,color:f[1]}},{text:c[1],options:{fontSize:22,bold:true,color:f[2]}}],{x:x+0.24,y:ky+0.04,w:kw-0.48,h:0.44,valign:'middle'});
     T(s,c[2],{x:x+0.24,y:ky+0.48,w:kw-0.48,h:0.3,fontSize:11,color:f[3],valign:'middle'});});
 }
 // ---------- 23 ----------
 { const s=pres.addSlide({masterName:'CONTENT'});
   frame(s,'10. 투자 제안 · 라운드 개요','Seed 3억 원(TIPS 연계 포함 총 10억 원) 투자 유치','24개월 내 전국 3개 거점 · 입점 파트너 30개사 · 2028년 매출 약 24억 원','23','출처: 당사 제안 기준(도전의 IR 발표 자료, 2026.11) · 밸류에이션·투자 조건은 협의, 주주 구성은 기업 확인 필요');
   const lw=5.8, hd=key==='C'?'FFFFFF':NAVY;
   T(s,'투자 조건',{x:L,y:top,w:3,h:0.34,fontSize:16,bold:true,color:hd,valign:'middle'});
   const cond=[['라운드','Seed'],['투자 유치 금액','3억 원'],['TIPS 연계 포함','총 10억 원'],['밸류에이션','협의(IP 가치평가 24.18억 원 참고)'],['정부 매칭','강원권 LIPS 별도 병행']];
   const ry0=top+0.46, shH=0.92, rH=(BOT-shH-0.16-ry0-4*0.06)/5;
   cond.forEach((c,i)=>{const y=ry0+i*(rH+0.06), hi=i==1;
     box(s,{x:L,y,w:1.9,h:rH,fill:{color:hi?BLUE:th.key}}); T(s,c[0],{x:L+0.18,y,w:1.7,h:rH,fontSize:13,bold:true,color:hi?'FFFFFF':th.keyTxt,valign:'middle'});
     card(s,L+1.98,y,lw-1.98,rH,null,false);
     T(s,c[1],{x:L+2.18,y,w:lw-2.3,h:rH,fontSize:hi?22:14,bold:true,color:hi?th.hi:th.ink,valign:'middle'});});
   const sy=BOT-shH; box(s,{x:L,y:sy,w:lw,h:shH,fill:{color:th.panel}});
   T(s,'주주 구성',{x:L+0.22,y:sy+0.1,w:2,h:0.3,fontSize:13,bold:true,color:key==='C'?CYAN:(key==='A'?'DCE5FF':SKY)});
   T(s,'대표이사 김창선 및 경영진 중심(지분율·기존 투자사는 기업 확인 후 기재)',{x:L+0.22,y:sy+0.42,w:lw-0.44,h:0.42,fontSize:13,color:'FFFFFF',valign:'middle'});
   const rx=L+lw+0.34, rw=R-rx;
   T(s,'24개월 목표',{x:rx,y:top,w:3,h:0.34,fontSize:16,bold:true,color:hd,valign:'middle'});
   const goals=[['매출 33억 원','향후 2개년 누적(중고·신품 IT 기기 거래, 피지컬 AI 진단 수수료)'],['월 5,000건','전국 다자간 안심거래 플랫폼 확대, 파트너사 5개사 이상 정식 계약'],['베타 출시','피지컬 AI 3D 이상 추적·비상대응망'],['Pre-A 20억 원','상용화 실적 기반 후속 투자 유치']];
   const gy0=top+0.46, gH=(BOT-gy0-3*0.1)/4;
   goals.forEach((gl,i)=>{const y=gy0+i*(gH+0.1); const f=i==0?(key==='C'?YEL:BLUE):(key==='C'?'1F2A80':NAVY);
     box(s,{x:rx,y,w:2.3,h:gH,fill:{color:f}});
     T(s,gl[0],{x:rx+0.2,y,w:2.0,h:gH,fontSize:18,bold:true,color:i==0&&key==='C'?'0A0F3A':'FFFFFF',valign:'middle'});
     card(s,rx+2.4,y,rw-2.4,gH);
     T(s,gl[1],{x:rx+2.62,y,w:rw-2.84,h:gH,fontSize:13,valign:'middle'});});
 }
 return pres.writeFile({fileName:`solpos_IR_${th.name}.pptx`});
}
(async()=>{for(const k of ['A','B','C']) console.log(await build(k));})();
