import { ArrowDown, ArrowUpRight, Code2, Mail, Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'

type SkillKey = 'frontend' | 'backend' | 'other'
const skillTabs: Record<SkillKey, { label: string; eyebrow: string; skills: string[] }> = {
  frontend: { label: 'Frontend', eyebrow: '01 — CLIENT', skills: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'React Query', 'Zustand', 'Tailwind CSS', 'shadcn/ui'] },
  backend: { label: 'Backend Understanding', eyebrow: '02 — API & DATA', skills: ['REST API', 'Java', 'Spring Framework', 'Spring Boot', 'PostgreSQL', 'MySQL', 'Python'] },
  other: { label: 'Others', eyebrow: '03 — INFRA & TOOLS', skills: ['WebSocket', 'Docker', 'Linux', 'AWS', 'Amazon S3', 'Amazon EC2', 'GitHub Actions', 'Git'] },
}

const projects = [
  { index:'01', type:'WORK · TRADING PLATFORM', title:'VETA 거래 플랫폼', period:'2025.07 — 2025.12', role:'Frontend Developer', stack:'React · TypeScript · React Query · Zustand · WebSocket · Monorepo', summary:'실시간 시세와 거래 현황이 여러 화면에서 동일한 데이터를 바라보도록 이벤트 처리와 상태 흐름을 설계했습니다.', points:['React Query와 Zustand의 책임을 분리해 중복 요청과 상태 결합을 축소','공통 컴포넌트와 유틸리티를 공유해 프로젝트별 중복 구현을 정리','모노레포 빌드 구성을 개선해 개발 피드백 속도를 향상'], accent:'blue' },
  { index:'02', type:'WORK · ENTERPRISE SYSTEM', title:'그룹웨어 및 경비정산', period:'2026.01 — 2026.06', role:'Full Stack Developer', stack:'React · TypeScript · Java · Spring · PostgreSQL · WebSocket', summary:'휴가, 일정, 전자결재부터 권한별 조회까지 화면과 API를 함께 설계한 업무 시스템입니다.', points:['공통 검색·필터·페이지네이션을 재사용 가능한 구조로 분리','반복 구현을 줄여 신규 화면을 일관된 방식으로 개발','SQL, API, UI를 순차 추적해 운영 데이터 불일치 해결'], accent:'lime' },
  { index:'03', type:'SIDE PROJECT · AUCTION', title:'893 중고 거래 경매', period:'2025.04 — 2025.06', role:'Frontend Developer', stack:'Next.js · React · TypeScript · React Query · Zustand · shadcn/ui', summary:'상품 탐색부터 실시간 입찰까지 끊김 없이 이어지는 중고 거래 경매 경험을 구현했습니다.', points:['실시간 이벤트를 단일 데이터 흐름으로 관리','중복 API 요청과 이벤트 연결을 정리해 입찰 상태의 일관성 확보','로그인 여부를 추상화한 북마크 공통 훅 설계'], accent:'orange', link:'https://github.com/msckr/893-front' },
  { index:'04', type:'SIDE PROJECT · FINTECH', title:'AI 주식 매수 타이밍', period:'2024.06 — 2024.12', role:'Backend Developer', stack:'Python · WebSocket · React · TypeScript · Amazon S3 · EC2', summary:'외부 주식 데이터를 수집·가공하고 조건 충족 시 매수 타이밍을 전달하는 실시간 알림 서비스입니다.', points:['외부 장애·응답 지연·누락을 구분한 예외 및 재시도 구조','데이터 누락 상황을 줄이고 안정적인 처리 흐름 구성','외부 API 장애 이후 자동으로 복구할 수 있는 구조 마련'], accent:'violet', link:'https://github.com/msckr/heros4' },
  { index:'05', type:'SIDE PROJECT · ANDROID', title:'Favor 선물 일기', period:'2023.06 — 2024.06', role:'Android Frontend Developer', stack:'Kotlin · Retrofit · Repository Pattern · Git', summary:'선물과 일정을 기록하는 Android 앱의 화면과 데이터 접근 구조를 개선했습니다.', points:['Fragment/Activity와 네트워크 구현의 책임 분리','화면별로 반복되던 네트워크 코드를 Repository 계층으로 통합','API 변경 시 영향을 받는 코드 범위를 축소'], accent:'pink', link:'https://github.com/msckr/Favor-Android' },
]

export default function App(){
  const [active,setActive]=useState<SkillKey>('frontend'); const [menu,setMenu]=useState(false); const [progress,setProgress]=useState(0)
  useEffect(()=>{const onScroll=()=>setProgress(scrollY/(document.documentElement.scrollHeight-innerHeight)*100);onScroll();addEventListener('scroll',onScroll,{passive:true});return()=>removeEventListener('scroll',onScroll)},[])
  return <>
    <div className="progress" style={{width:`${progress}%`}}/>
    <header><a href="#home" className="logo">Front-end Developer</a><nav className={menu?'open':''}>{[['Home','#home'],['Skills','#stack'],['Career','#career'],['Projects','#projects'],['Contact','#contact']].map(([t,h])=><a href={h} onClick={()=>setMenu(false)} key={t}>{t}</a>)}</nav><img className="railProfile" src="https://github.com/msckr.png" alt="조민수 프로필"/><button aria-label="메뉴" onClick={()=>setMenu(!menu)}>{menu?<X/>:<Menu/>}</button></header>
    <main>
      <section className="hero" id="home"><div className="profileHead"><div><h1>조민수</h1><span>MIN SOO CHO</span></div><p>Frontend Developer</p><div className="profileLinks"><a href="mailto:mschoyb@naver.com">EMAIL</a><a href="https://github.com/msckr" target="_blank" rel="noreferrer">GITHUB</a></div></div><div className="heroCopy"><strong>복잡한 데이터 흐름을 안정적인 사용자 경험으로 연결하는 프론트엔드 개발자</strong><p>React와 TypeScript를 중심으로 실시간 거래 플랫폼과 사내 업무 시스템의 사용자 화면을 개발해 왔습니다. 요구사항을 빠르게 구현하는 것에서 나아가 사용자가 정보를 이해하고 기능을 자연스럽게 사용할 수 있는 인터페이스를 고민합니다.</p><p>React Query와 Zustand로 서버 상태와 화면 상태의 책임을 분리하고, WebSocket 데이터가 여러 화면에서 일관되게 반영되도록 설계합니다. 재사용 가능한 컴포넌트와 예측 가능한 상태 구조를 통해 동료가 이해하고 확장하기 쉬운 프론트엔드를 만드는 것을 지향합니다.</p></div></section>

      <section className="intro" id="about"><div className="introGrid"><h2>사용자 경험과<br/><span>개발 경험을 함께 봅니다.</span></h2><div><p className="lead">복잡한 비즈니스 요구사항을 명확한 화면과 관리하기 쉬운 프론트엔드 구조로 바꿉니다.</p><p>실시간 거래 화면, 전자결재, 권한별 조회, 검색·필터·페이지네이션을 구현하며 데이터 로딩부터 오류·빈 상태까지 사용자의 전체 흐름을 고려했습니다. 문제가 발생하면 브라우저 상태와 네트워크 요청을 먼저 확인하고 API와 데이터 구조까지 추적합니다. 백엔드 경험은 API 설계 의도를 빠르게 이해하고 서버 개발자와 정확하게 소통하는 기반으로 활용합니다.</p><div className="career"><strong>2025.06 — NOW</strong><span>주식회사 유더블유에스<br/>기업부설연구소 · 풀스택 개발자(프론트엔드 중심)</span></div></div></div></section>

      <section className="stack" id="stack"><div className="stackHead"><h2>도구보다 중요한 건<br/><em>어떻게 연결하는가.</em></h2><span>SELECT A CATEGORY</span></div><div className="tabs" role="tablist">{(Object.keys(skillTabs) as SkillKey[]).map(k=><button role="tab" aria-selected={active===k} className={active===k?'active':''} onClick={()=>setActive(k)} key={k}><span>{skillTabs[k].label}</span><small>{String(Object.keys(skillTabs).indexOf(k)+1).padStart(2,'0')}</small></button>)}</div><div className="skillPanel" role="tabpanel" key={active}><p>{skillTabs[active].eyebrow}</p><div>{skillTabs[active].skills.map((s,i)=><span style={{animationDelay:`${i*45}ms`}} key={s}>{s}</span>)}</div></div></section>

      <section className="careerSection" id="career"><div className="careerTitle">Career. Career.</div><div className="careerRow"><h3>주식회사 유더블유에스</h3><p>기업부설연구소<br/><strong>Full Stack Developer · Frontend Focus</strong></p><span>2025.06 — NOW</span></div><div className="careerWorks"><article><span>2025.07 — 2025.12</span><h4>VETA 거래 플랫폼</h4><p>WebSocket 실시간 시세를 여러 거래 화면에 일관되게 반영하고, 공통 컴포넌트와 모노레포 구조를 개선했습니다.</p></article><article><span>2026.01 — 2026.06</span><h4>그룹웨어 및 경비정산 시스템</h4><p>전자결재·일정·휴가 관리 화면을 개발하고, 공통 검색과 페이지네이션을 재사용 가능한 UI 구조로 설계했습니다.</p></article></div></section>

      <section className="projects" id="projects"><div className="projectIntro"><h2>문제를 발견하고,<br/>구조로 해결한 기록.</h2></div>{projects.map((p,i)=><article className={`project ${p.accent}`} key={p.title}><div className="projectSticky"><span>{p.index}</span><p>{p.type}</p></div><div className="projectBody"><div className="projectMeta"><span>{p.period}</span><span>{p.role}</span></div><h3>{p.title}</h3><p className="summary">{p.summary}</p><p className="projectStack">{p.stack}</p><ul>{p.points.map(x=><li key={x}>{x}</li>)}</ul>{p.link&&<a href={p.link} target="_blank" rel="noreferrer">VIEW REPOSITORY <ArrowUpRight/></a>}<span className="projectCount">{String(i+1).padStart(2,'0')} / {String(projects.length).padStart(2,'0')}</span></div></article>)}</section>

      <section className="contact" id="contact"><p>좋은 사용자 경험을 만드는<br/>프론트엔드 팀을 기다립니다.</p><a href="mailto:mschoyb@naver.com"><Mail/>mschoyb@naver.com<ArrowUpRight/></a><div className="contactFoot"><span>© 2026 MINSOO CHO</span><a href="https://github.com/msckr" target="_blank" rel="noreferrer"><Code2/>GITHUB</a></div></section>
    </main>
  </>
}




