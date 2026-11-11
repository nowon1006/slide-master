const pptxgen = require('pptxgenjs');
const pres = new pptxgen();
pres.layout = 'LAYOUT_WIDE'; // 13.333 x 7.5
const F = 'Pretendard';
pres.theme = { headFontFace: F, bodyFontFace: F };
const NAVY='1E2188', BLUE='2D5BFF', SKY='8FB4FF', YEL='F1CE36', INK='12152E', GREY='5B6178', TINT='F2F4FC', TINT2='E2E8FB', WHITE='FFFFFF';
const L=0.6, R=12.733, CW=R-L;  // outline
const A='assets/';
const T=(s,txt,o)=>s.addText(txt,Object.assign({fontFace:F,margin:0,isTextBox:true,valign:'top',color:INK},o));
const box=(s,o)=>s.addShape(pres.shapes.ROUNDED_RECTANGLE,Object.assign({rectRadius:0.1,line:{type:'none'}},o));

pres.defineSlideMaster({ title:'CONTENT', background:{path:A+'bg_light.png'},
  objects:[ {image:{path:A+'sp_navy.png',x:11.78,y:6.86,w:0.55,h:0.32}} ] });
function frame(s,label,title,key,page,source){
  T(s,label,{x:L,y:0.42,w:8,h:0.3,fontSize:13,bold:true,color:BLUE});
  T(s,title,{x:L,y:0.78,w:CW,h:0.62,fontSize:28,bold:true,valign:'middle'});
  box(s,{x:L,y:1.6,w:CW,h:0.58,fill:{color:NAVY},rectRadius:0.08});
  T(s,key,{x:L+0.28,y:1.6,w:CW-0.56,h:0.58,fontSize:16,bold:true,color:WHITE,valign:'middle'});
  if(source) T(s,source,{x:L,y:6.86,w:10.9,h:0.34,fontSize:10,color:GREY,valign:'middle'});
  T(s,page,{x:12.38,y:6.86,w:0.353,h:0.32,fontSize:11,bold:true,color:NAVY,align:'right',valign:'middle'});
}

// ---------- 01 COVER ----------
{ const s=pres.addSlide(); s.background={path:A+'bg_cover.png'};
  s.addImage({path:A+'sp_white.png',x:L,y:0.5,w:1.2,h:0.7});
  T(s,'IR DECK  |  2026. 11',{x:9.733,y:0.5,w:3,h:0.4,fontSize:13,bold:true,color:'C9D4FF',align:'right',valign:'middle'});
  T(s,'구간 가속 진단 기술이 적용된',{x:L,y:1.95,w:7.4,h:0.45,fontSize:20,bold:true,color:SKY});
  T(s,'컴퓨터·AI 반도체 성능 인증과\n평생관리 에이전트, 딥스펙',{x:L,y:2.45,w:7.6,h:1.6,fontSize:40,bold:true,color:WHITE,lineSpacingMultiple:1.05});
  const steps=['측정','6등급 판정','시험성적서','평생관리'], ws=[0.9,1.45,1.4,1.3]; let x=L;
  steps.forEach((t,i)=>{ box(s,{x,y:4.3,w:ws[i],h:0.48,rectRadius:0.24,fill:{color:i==3?BLUE:WHITE,transparency:i==3?0:84}});
    T(s,t,{x,y:4.3,w:ws[i],h:0.48,fontSize:15,bold:true,color:WHITE,align:'center',valign:'middle'}); x+=ws[i];
    if(i<3){T(s,'→',{x,y:4.3,w:0.36,h:0.48,fontSize:15,bold:true,color:SKY,align:'center',valign:'middle'});x+=0.36;} });
  T(s,'DeepSpec Auto v3.1 · DeepSpec Agent 2종 · 강원대 4개 캠퍼스 안심거래 플랫폼',{x:L,y:4.98,w:7.6,h:0.4,fontSize:14,color:'C9D4FF'});
  T(s,'솔포스 주식회사  |  대표이사 김창선  |  www.deepspec.kr',{x:L,y:6.6,w:7,h:0.4,fontSize:13,color:'C9D4FF',valign:'middle'});
  box(s,{x:8.55,y:1.3,w:4.183,h:5.32,rectRadius:0.18,fill:{color:WHITE},shadow:{type:'outer',color:'2D5BFF',opacity:0.45,blur:30,offset:0,angle:90}});
  s.addImage({path:A+'cover_r.png',x:8.79,y:1.54,w:3.703,h:3.616});
  s.addImage({path:A+'ds_logo.png',x:9.82,y:5.36,w:1.645,h:0.965});
}

// ---------- 02 문제 정의 · 현실 ----------
{ const s=pres.addSlide({masterName:'CONTENT'});
  frame(s,'1. 문제 정의 · 현실','거래 사기 · 부품 털이 · AI 명령 거부, 하드웨어를 믿을 근거 부재',
   '사진과 말만 믿고 사는 중고 IT, 통제 밖에서 움직이는 AI, 멈추고 나서야 아는 서버','02',
   '출처: KBS News·SBS 뉴스·YTN 유튜브(각 영상 제목·화면 인용), 당사 시장 조사(2026.08)');
  const cols=[
   ['중고거래로 맥북 샀는데','KBS 자막뉴스 · 2024.03.13','youtube.com/watch?v=aCLYk93TMWw','중고 거래 사기','2.3배','동일 사양 중고 노트북\n매입처별 사정가 편차'],
   ['램값이 금값, 중고 거래에 PC 털이까지','SBS 뉴스 · 2026','youtube.com/watch?v=QW3PfvUsnM0','부품 빼돌리기','40~50만 대','연간 중고 노트북 유통\n성능 기준 가격 없음'],
   ['AI, 명령 거부 + 코드 조작까지','YTN · 2025.05','youtube.com/watch?v=NsTJt3sEoW8','AI 통제 이탈','2025.05','AI의 종료 지시 거부\n첫 사례 보고(YTN 보도)'],
   ['정부 시스템 647개 중단','SBS 8뉴스 · 2025.09.27','youtube.com/watch?v=cpbq9fR_4Bw','전산 인프라 마비','647개','2025.09 화재로 중단된\n정부 업무 시스템(SBS 보도)']];
  const gap=0.24, cw=(CW-3*gap)/4, p=0.16;
  cols.forEach((c,i)=>{ const x=L+i*(cw+gap), iw=cw-2*p;
    box(s,{x,y:2.42,w:cw,h:4.2,fill:{color:TINT},rectRadius:0.14});
    s.addImage({path:A+`yt${i+1}.png`,x:x+p,y:2.58,w:iw,h:iw*720/1280});
    const th=iw*720/1280, cx=x+p+iw/2, cy=2.58+th/2;
    box(s,{x:cx-0.26,y:cy-0.18,w:0.52,h:0.36,rectRadius:0.1,fill:{color:'E62117'}});
    T(s,'▶',{x:cx-0.26,y:cy-0.18,w:0.52,h:0.36,fontSize:12,color:WHITE,align:'center',valign:'middle'});
    T(s,c[0],{x:x+p,y:4.08,w:iw,h:0.48,fontSize:13,bold:true});
    T(s,c[1]+'\n'+c[2],{x:x+p,y:4.56,w:iw,h:0.4,fontSize:10,color:GREY});
    box(s,{x:x+p,y:5.0,w:iw,h:1.46,fill:{color:WHITE},rectRadius:0.1});
    box(s,{x:x+p+0.14,y:5.12,w:1.45,h:0.32,rectRadius:0.16,fill:{color:i==0?BLUE:NAVY}});
    T(s,c[3],{x:x+p+0.14,y:5.12,w:1.45,h:0.32,fontSize:11,bold:true,color:WHITE,align:'center',valign:'middle'});
    T(s,c[4],{x:x+p+0.14,y:5.48,w:iw-0.28,h:0.5,fontSize:28,bold:true,color:i==0?BLUE:NAVY,valign:'middle'});
    T(s,c[5],{x:x+p+0.14,y:5.99,w:iw-0.28,h:0.42,fontSize:11,color:GREY});
  });
}

// ---------- 05 시장규모 ----------
{ const s=pres.addSlide({masterName:'CONTENT'});
  frame(s,'2. 시장규모 · TAM-SAM-SOM','IT 하드웨어 성능 검증·인증 시장, 2031년 약 1.2조 원',
   '목표: 2031년 SOM 시장에서 점유율 약 1%, 매출 127억 원','05',
   '출처: Gartner, Market Share: IT Operations Management Software, Worldwide, 2024 · Persistence Market Research, IT Infrastructure Monitoring Market, 2025–2032 · 당사 추정(2026.08)');
  box(s,{x:L,y:2.42,w:4.9,h:4.2,fill:{color:TINT},rectRadius:0.14});
  const cx=L+2.45;
  s.addShape(pres.shapes.OVAL,{x:cx-1.95,y:2.58,w:3.9,h:3.9,fill:{color:TINT2},line:{type:'none'}});
  s.addShape(pres.shapes.OVAL,{x:cx-1.35,y:3.78,w:2.7,h:2.7,fill:{color:'A9BBF7'},line:{type:'none'}});
  s.addShape(pres.shapes.OVAL,{x:cx-0.78,y:4.92,w:1.56,h:1.56,fill:{color:NAVY},line:{type:'none'},shadow:{type:'outer',color:'2D5BFF',opacity:0.4,blur:18,offset:0,angle:90}});
  T(s,[{text:'TAM',options:{fontSize:12,bold:true,color:BLUE,breakLine:true}},{text:"$71.8B ('31)",options:{fontSize:18,bold:true,color:NAVY}}],{x:cx-1.5,y:2.78,w:3,h:0.7,align:'center'});
  T(s,[{text:'SAM',options:{fontSize:12,bold:true,color:NAVY,breakLine:true}},{text:"$19.4B ('31)",options:{fontSize:18,bold:true,color:NAVY}}],{x:cx-1.2,y:3.98,w:2.4,h:0.7,align:'center'});
  T(s,[{text:'SOM',options:{fontSize:12,bold:true,color:SKY,breakLine:true}},{text:'약 1.2조 원',options:{fontSize:17,bold:true,color:WHITE}}],{x:cx-0.75,y:5.32,w:1.5,h:0.7,align:'center'});
  const tx=L+5.14, tw=R-tx, b={type:'solid',pt:2,color:WHITE};
  const H=(t)=>({text:t,options:{fill:{color:NAVY},color:WHITE,bold:true,align:'center'}});
  const K=(t)=>({text:t,options:{fill:{color:TINT2},color:NAVY,bold:true,align:'center'}});
  const C=(t,al)=>({text:t,options:{fill:{color:TINT},align:al||'left'}});
  const rows=[[H('구분'),H('시장'),H('규모'),H('성장률')],
   [K('TAM'),C('글로벌 IT 자산관리 및 운영 SW'),C("$40.67B('26) → $71.82B('31)",'center'),C('CAGR 12.05%','center')],
   [K('SAM'),C('글로벌 IT 인프라 모니터링 SW'),C("$13.72B('26) → $19.42B('31)",'center'),C('CAGR 7.2%','center')],
   [K('SOM'),C('글로벌 IT HW 성능 검증·인증 SW'),C("약 8,400억 원('26) → 약 1조 1,892억 원('31)",'center'),C('당사 추정','center')],
   [K('국내'),C('중고 노트북 시장 중 인증 요구분 15%'),C("약 3,000억 원('31) 중 450억 원",'center'),C('당사 추정','center')]];
  s.addTable(rows,{x:tx,y:2.42,w:tw,colW:[0.8,2.35,2.65,tw-5.8],rowH:[0.42,0.56,0.56,0.56,0.56],fontFace:F,fontSize:12,color:INK,valign:'middle',border:b,margin:[0,0.1,0,0.1]});
  T(s,'시장 진입 경로',{x:tx,y:5.3,w:3,h:0.32,fontSize:14,bold:true,color:NAVY});
  T(s,'(6개 영업부문)',{x:R-2,y:5.3,w:2,h:0.32,fontSize:11,color:GREY,align:'right',valign:'middle'});
  const ch=['중고 IT 거래','IT 자산관리','공공조달·렌탈·보험 검수','피지컬 AI 진단'], cws=[1.33,1.22,2.2,1.33];
  const aw=(tw-cws.reduce((a,b)=>a+b))/3; let x=tx;
  ch.forEach((t,i)=>{ box(s,{x,y:5.74,w:cws[i],h:0.52,rectRadius:0.26,fill:{color:i==3?NAVY:TINT2}});
    T(s,t,{x,y:5.74,w:cws[i],h:0.52,fontSize:12,bold:true,color:i==3?WHITE:NAVY,align:'center',valign:'middle'}); x+=cws[i];
    if(i<3){T(s,'→',{x,y:5.74,w:aw,h:0.52,fontSize:13,bold:true,color:BLUE,align:'center',valign:'middle'});x+=aw;} });
}

// ---------- 06 솔루션 ----------
{ const s=pres.addSlide({masterName:'CONTENT'});
  frame(s,'3. 솔루션 · 서비스 구조','PC에 설치해 측정하고, 웹에서 시험성적서 발급',
   '설치파일 하나로 측정 · 추가 장비 불필요 · 결과는 6등급과 QR 인증 성적서로 제공','06','출처: deepspec.kr 화면(2026.11)');
  box(s,{x:L,y:2.42,w:5.6,h:4.2,fill:{color:NAVY},rectRadius:0.14});
  s.addImage({path:A+'shot6.png',x:L+(5.6-4.66)/2,y:2.62,w:4.66,h:3.8});
  const st=[['01','에이전트 설치','DeepSpec 에이전트(.msi) 다운로드, 로그인하면 기기 자동 등록'],
   ['02','가속 부하 측정','사용률 60 → 80 → 100% 구간별로 부하를 올리며 속도·온도·연산량 수집'],
   ['03','6등급 판정','24개 품질 지표를 A+ ~ C 6단계 등급으로 환산'],
   ['04','시험성적서 발급','웹에서 PDF 성적서 발급, QR로 진위 확인']];
  const rx=L+5.84, rw=R-rx, sh=0.74, sg=0.1;
  st.forEach((r,i)=>{ const y=2.42+i*(sh+sg);
    box(s,{x:rx,y,w:sh,h:sh,fill:{color:i==3?BLUE:NAVY},rectRadius:0.1});
    T(s,r[0],{x:rx,y,w:sh,h:sh,fontSize:20,bold:true,color:WHITE,align:'center',valign:'middle'});
    box(s,{x:rx+sh+0.1,y,w:rw-sh-0.1,h:sh,fill:{color:TINT},rectRadius:0.1});
    T(s,r[1],{x:rx+sh+0.3,y:y+0.07,w:rw-sh-0.5,h:0.28,fontSize:15,bold:true,color:i==3?BLUE:NAVY});
    T(s,r[2],{x:rx+sh+0.3,y:y+0.36,w:rw-sh-0.5,h:0.34,fontSize:11,color:INK}); });
  const uy=2.42+4*(sh+sg);  // 5.78
  box(s,{x:rx,y:uy,w:sh,h:6.62-uy,fill:{color:TINT2},rectRadius:0.1});
  T(s,'활용처',{x:rx,y:uy,w:sh,h:6.62-uy,fontSize:13,bold:true,color:NAVY,align:'center',valign:'middle'});
  const us=['중고 거래 가격 기준','기업 IT 자산 실사','렌탈 반납 검수','보험·보증 심사 자료'];
  const ux=rx+sh+0.1, uw=(R-ux-0.1)/2, uh=(6.62-uy-0.1)/2;
  us.forEach((t,i)=>{ const x=ux+(i%2)*(uw+0.1), y=uy+Math.floor(i/2)*(uh+0.1);
    box(s,{x,y,w:uw,h:uh,fill:{color:TINT},rectRadius:0.08});
    T(s,t,{x:x+0.2,y,w:uw-0.4,h:uh,fontSize:12,bold:true,color:INK,valign:'middle'}); });
}

// ---------- 21 재무 ----------
{ const s=pres.addSlide({masterName:'CONTENT'});
  frame(s,'9. 재무 계획 · 매출 추정','6개 영업부문, 2031년 매출 127억 원 목표',
   '투자 후 12개월 5.0억 원(유통 비중 80%) → 2027년 9.4억 원(유통 33%, 진단·플랫폼·구독 중심)','21',
   '출처: 당사 사업계획(2026.08) · 단위: 억 원 · 직전년도(2026) 실적과 비용 추정은 결산 자료 수령 후 반영 필요');
  const b={type:'solid',pt:2,color:WHITE};
  const H=(t,al)=>({text:t,options:{fill:{color:NAVY},color:WHITE,bold:true,align:al||'center'}});
  const data=[['IT 자산관리','2.0','4.0','7.0','18.0','24','55'],['공공조달 검수','0.9','1.5','2.1','4.5','6','15'],
   ['중고 IT 거래','3.0','12.0','22.0','45.0','68','150'],['렌탈·리스 검수','0.5','1.0','1.5','3.0','4','10'],
   ['피지컬 AI 진단','2.0','4.0','7.0','13.0','19','45'],['보험·보증 진단','1.0','1.0','2.0','5.0','6','15']];
  const rows=[[H('영업부문','left'),H('2027'),H('2028'),H('2029'),H('2030'),H('2031'),H('5개년')]];
  data.forEach(r=>rows.push(r.map((t,j)=>({text:t,options:{fill:{color:TINT},align:j?'center':'left',bold:j==0,color:j==0?NAVY:INK}}))));
  rows.push(['합계','9.4','23.5','41.6','88.5','127','290'].map((t,j)=>({text:t,options:{fill:{color:TINT2},bold:true,align:j?'center':'left',color:j==5?BLUE:NAVY}})));
  const fc=2.2; s.addTable(rows,{x:L,y:2.42,w:CW,colW:[fc,...Array(6).fill((CW-fc)/6)],rowH:0.4,fontFace:F,fontSize:13,color:INK,valign:'middle',border:b,margin:[0,0.2,0,0.2]});
  const k=[['투자 후 12개월','5.0억 원','특판 유통 4.0 · 진단솔루션 SI 0.8 · 진단료 0.2',TINT,NAVY,NAVY,GREY],
   ['2027년','9.4억 원','거래·유통 3.0 · 진단·플랫폼·구독 6.4',BLUE,'DCE5FF',WHITE,'DCE5FF'],
   ['2031년','127억 원','거래·유통 68 · 진단·플랫폼·구독 59',NAVY,SKY,YEL,'C9D4FF']];
  const g=0.24, kw=(CW-2*g)/3;
  k.forEach((c,i)=>{ const x=L+i*(kw+g);
    box(s,{x,y:5.78,w:kw,h:0.84,fill:{color:c[3]},rectRadius:0.12});
    T(s,[{text:c[0]+'   ',options:{fontSize:12,bold:true,color:c[4]}},{text:c[1],options:{fontSize:22,bold:true,color:c[5]}}],{x:x+0.24,y:5.82,w:kw-0.48,h:0.44,valign:'middle'});
    T(s,c[2],{x:x+0.24,y:6.26,w:kw-0.48,h:0.3,fontSize:11,color:c[6],valign:'middle'}); });
}
pres.writeFile({fileName:'solpos_IR_draft.pptx'}).then(()=>console.log('done'));
