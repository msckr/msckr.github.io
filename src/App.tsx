import { ArrowDown, ArrowUpRight, Code2, Mail, Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'

type SkillKey = 'frontend' | 'backend' | 'other'
const skillTabs: Record<SkillKey, { label: string; eyebrow: string; skills: string[] }> = {
  frontend: { label: 'Frontend', eyebrow: '01 — CLIENT', skills: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'React Query', 'Zustand', 'Tailwind CSS', 'shadcn/ui'] },
  backend: { label: 'Backend', eyebrow: '02 — SERVER', skills: ['Java', 'Spring Framework', 'Spring Boot', 'REST API', 'Python', 'PostgreSQL', 'MySQL'] },
  other: { label: 'Others', eyebrow: '03 — INFRA & TOOLS', skills: ['WebSocket', 'Docker', 'Linux', 'AWS', 'Amazon S3', 'Amazon EC2', 'GitHub Actions', 'Git'] },
}

const projects = [
  { index:'01', type:'WORK · TRADING PLATFORM', title:'VETA 거래 플랫폼', period:'2025.07 — 2025.12', role:'Frontend Developer', stack:'React · TypeScript · React Query · Zustand · WebSocket · Monorepo', summary:'실시간 시세와 거래 현황이 여러 화면에서 동일한 데이터를 바라보도록 이벤트 처리와 상태 흐름을 설계했습니다.', points:['React Query와 Zustand의 책임을 분리해 중복 요청과 상태 결합을 축소','공통 컴포넌트·유틸리티 공유로 중복 코드 약 30% 감소','모노레포 빌드 시간 약 50% 단축'], accent:'blue' },
  { index:'02', type:'WORK · ENTERPRISE SYSTEM', title:'그룹웨어 및 경비정산', period:'2026.01 — 2026.06', role:'Full Stack Developer', stack:'React · TypeScript · Java · Spring · PostgreSQL · WebSocket', summary:'휴가, 일정, 전자결재부터 권한별 조회까지 화면과 API를 함께 설계한 업무 시스템입니다.', points:['공통 검색·필터·페이지네이션으로 반복 구현 약 20% 감소','신규 화면 개발 시간 약 30% 단축','SQL, API, UI를 순차 추적해 운영 데이터 불일치 해결'], accent:'lime' },
  { index:'03', type:'SIDE PROJECT · AUCTION', title:'893 중고 거래 경매', period:'2025.04 — 2025.06', role:'Frontend Developer', stack:'Next.js · React · TypeScript · React Query · Zustand · shadcn/ui', summary:'상품 탐색부터 실시간 입찰까지 끊김 없이 이어지는 중고 거래 경매 경험을 구현했습니다.', points:['실시간 이벤트를 단일 데이터 흐름으로 관리','불필요한 API 요청 약 60%, 중복 이벤트 연결 약 80% 감소','로그인 여부를 추상화한 북마크 공통 훅 설계'], accent:'orange', link:'https://github.com/msckr/893-front' },
  { index:'04', type:'SIDE PROJECT · FINTECH', title:'AI 주식 매수 타이밍', period:'2024.06 — 2024.12', role:'Backend Developer', stack:'Python · WebSocket · React · TypeScript · Amazon S3 · EC2', summary:'외부 주식 데이터를 수집·가공하고 조건 충족 시 매수 타이밍을 전달하는 실시간 알림 서비스입니다.', points:['외부 장애·응답 지연·누락을 구분한 예외 및 재시도 구조','데이터 누락 약 80% 감소','장애 복구 성공률 약 50% 개선'], accent:'violet', link:'https://github.com/msckr/heros4' },
  { index:'05', type:'SIDE PROJECT · ANDROID', title:'Favor 선물 일기', period:'2023.06 — 2024.06', role:'Android Frontend Developer', stack:'Kotlin · Retrofit · Repository Pattern · Git', summary:'선물과 일정을 기록하는 Android 앱의 화면과 데이터 접근 구조를 개선했습니다.', points:['Fragment/Activity와 네트워크 구현의 책임 분리','화면별 네트워크 중복 코드 약 80% 감소','API 변경 시 수정 범위 약 70% 축소'], accent:'pink', link:'https://github.com/msckr/Favor-Android' },
]

export default function App(){
  const [active,setActive]=useState<SkillKey>('frontend'); const [menu,setMenu]=useState(false); const [progress,setProgress]=useState(0)
  useEffect(()=>{const onScroll=()=>setProgress(scrollY/(document.documentElement.scrollHeight-innerHeight)*100);onScroll();addEventListener('scroll',onScroll,{passive:true});return()=>removeEventListener('scroll',onScroll)},[])
  return <>
    <div className="progress" style={{width:`${progress}%`}}/>
    <header><a href="#home" className="logo">MINSOO<sup>©</sup></a><nav className={menu?'open':''}>{[['About','#about'],['Stack','#stack'],['Projects','#projects'],['Contact','#contact']].map(([t,h])=><a href={h} onClick={()=>setMenu(false)} key={t}>{t}</a>)}</nav><button aria-label="메뉴" onClick={()=>setMenu(!menu)}>{menu?<X/>:<Menu/>}</button></header>
    <main>
      <section className="hero" id="home">
        <div className="heroMeta"><span>PORTFOLIO / 2026</span><span>SEOUL, KR</span></div>
        <div className="heroAside" aria-hidden="true"><span>MIN</span><i/><span>SOO</span></div>
        <div className="heroTitle">
          <div className="available"><i/> OPEN TO NEW OPPORTUNITIES</div>
          <p>Frontend / Full Stack Developer</p>
          <h1>실시간 데이터와<br/><em>상태 관리를</em> 설계하는<br/>개발자 조민수입니다.</h1>
        </div>
        <div className="heroTech" aria-label="주요 기술"><span>React</span><span>TypeScript</span><span>Java · Spring</span><span>WebSocket</span></div>
        <div className="heroFoot"><p>화면과 서버 사이의 데이터 흐름을 이해하고,<br/>운영과 유지보수까지 고려한 제품을 만듭니다.</p><a href="#about" className="scroll"><span>EXPLORE</span><i><ArrowDown/></i></a></div>
        <div className="heroMark" aria-hidden="true">M</div>
      </section>

      <section className="intro" id="about"><div className="introGrid"><h2>화면 너머의<br/><span>흐름을 봅니다.</span></h2><div><p className="lead">요구사항을 데이터 구조로 바꾸고, 서버 상태와 화면 상태의 책임을 명확하게 나눕니다.</p><p>WebSocket 기반 실시간 데이터 처리, PostgreSQL 조회·업무 로직, 공통 컴포넌트 설계 경험을 바탕으로 운영과 유지보수를 고려한 구조를 구현합니다.</p><div className="career"><strong>2025.06 — NOW</strong><span>주식회사 유더블유에스<br/>기업부설연구소 · 풀스택 개발자</span></div></div></div></section>

      <section className="stack" id="stack"><div className="stackHead"><h2>도구보다 중요한 건<br/><em>어떻게 연결하는가.</em></h2><span>SELECT A CATEGORY</span></div><div className="tabs" role="tablist">{(Object.keys(skillTabs) as SkillKey[]).map(k=><button role="tab" aria-selected={active===k} className={active===k?'active':''} onClick={()=>setActive(k)} key={k}><span>{skillTabs[k].label}</span><small>{String(Object.keys(skillTabs).indexOf(k)+1).padStart(2,'0')}</small></button>)}</div><div className="skillPanel" role="tabpanel" key={active}><p>{skillTabs[active].eyebrow}</p><div>{skillTabs[active].skills.map((s,i)=><span style={{animationDelay:`${i*45}ms`}} key={s}>{s}</span>)}</div></div></section>

      <section className="projects" id="projects"><div className="projectIntro"><h2>문제를 발견하고,<br/>구조로 해결한 기록.</h2></div>{projects.map((p,i)=><article className={`project ${p.accent}`} key={p.title}><div className="projectSticky"><span>{p.index}</span><p>{p.type}</p></div><div className="projectBody"><div className="projectMeta"><span>{p.period}</span><span>{p.role}</span></div><h3>{p.title}</h3><p className="summary">{p.summary}</p><p className="projectStack">{p.stack}</p><ul>{p.points.map(x=><li key={x}>{x}</li>)}</ul>{p.link&&<a href={p.link} target="_blank" rel="noreferrer">VIEW REPOSITORY <ArrowUpRight/></a>}<span className="projectCount">{String(i+1).padStart(2,'0')} / {String(projects.length).padStart(2,'0')}</span></div></article>)}</section>

      <section className="contact" id="contact"><p>새로운 제품과 어려운 문제에 대해<br/>함께 이야기하고 싶습니다.</p><a href="mailto:mschoyb@naver.com"><Mail/>mschoyb@naver.com<ArrowUpRight/></a><div className="contactFoot"><span>© 2026 MINSOO CHO</span><a href="https://github.com/msckr" target="_blank" rel="noreferrer"><Code2/>GITHUB</a></div></section>
    </main>
  </>
}


