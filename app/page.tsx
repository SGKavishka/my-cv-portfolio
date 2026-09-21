"use client";

import { FormEvent, useEffect, useState } from "react";

const techGroups = [
  { icon: "{ }", title: "Languages", items: ["JavaScript", "TypeScript", "PHP", "C#", "Java — Basic", "C — Basic"] },
  { icon: "◫", title: "Web & Frameworks", items: ["HTML", "CSS", "React", "Next.js / Vinext", "Responsive Web Design"] },
  { icon: "◉", title: "Databases", items: ["MySQL", "MongoDB"] },
  { icon: "⌘", title: "Tools & Platforms", items: ["GitHub", "Unity", "Cloudflare", "Figma", "Power BI"] },
  { icon: "◇", title: "Development Concepts", items: ["Object-Oriented Programming", "CRUD Operations", "Frontend Development", "Backend Development", "Database Management"] },
];

const projects = [
  { n:"01", title:"GIFT HUB", category:"Full-Stack E-Commerce", featured:true, tone:"gift", image:"./projects/gift-hub.jpg", description:"A complete gift-store experience built for effortless discovery, personalisation and checkout.", tech:["React","TypeScript","Cloudflare"], github:"https://github.com/SGKavishka/Gift-Hub", features:["Product search & filters","Wishlist and shopping cart","Custom gift-box builder","Budget controls","Order tracking","WhatsApp ordering"] },
  { n:"02", title:"Velocity Legends", category:"Unity C# Racing Game", featured:true, tone:"race", image:"./projects/velocity-legends.jpg", description:"A systems-rich racing game with custom vehicle physics, progression and configurable mechanics.", tech:["Unity","C#","JSON"], github:"https://github.com/SGKavishka/Car-Game", features:["Wheel-collider physics","Drifting & nitro boost","Race states & lap timing","Vehicle selection","Unlockable upgrades","JSON save system"] },
  { n:"03", title:"TechGear", category:"Technology Products Website", tone:"tech", image:"./projects/techgear.jpg", description:"Responsive product website with database-driven inventory management and complete CRUD operations.", tech:["PHP","MySQL","JavaScript"], github:"https://github.com/SGKavishka/TechGear", features:["Product browsing","Database listings","Create, read, update & delete","Responsive interface"] },
  { n:"04", title:"TeachMe", category:"Online Learning Platform", tone:"learn", image:"./projects/teachme.jpg", description:"An interactive learning platform designed to make digital education simple and engaging.", tech:["HTML","CSS","PHP","MySQL"], github:"https://github.com/SGKavishka/TeachMe", features:["Interactive frontend","Engagement features","Backend data management","Database integration"] },
  { n:"05", title:"Library Management", category:"Web Application", tone:"library", image:"./projects/library-management.jpg", description:"A secure library solution for managing books, members, borrowing and return operations.", tech:["Web App","MySQL","CRUD"], features:["Book & member management","Borrowing workflow","Availability tracking","Secure data retrieval"] },
  { n:"06", title:"ProxJavaSwingApp", category:"Java Desktop Application", tone:"java", image:"./projects/prox-java-swing.jpg", description:"A clean desktop application built around object-oriented principles and practical CRUD workflows.", tech:["Java","Swing","OOP"], features:["Desktop GUI","CRUD operations","Object-oriented architecture","User-friendly interface"] },
  { n:"07", title:"Tourism Web App", category:"Collaborative Team Project", tone:"travel", image:"./projects/tourism-web-app.jpg", description:"A responsive tourism promotion experience designed and developed collaboratively.", tech:["Frontend","Responsive","UX"], features:["Interface design","Frontend development","Responsive design","Navigation & UX improvements"] },
];

function SectionHeading({eyebrow,title,copy}:{eyebrow:string,title:string,copy?:string}) {
  return <div className="section-heading reveal"><span>{eyebrow}</span><div><h2>{title}</h2>{copy && <p>{copy}</p>}</div></div>;
}

function ProjectCard({p}:{p:(typeof projects)[number]}) {
  return <article className={`project-card reveal ${p.featured ? "featured" : ""}`}>
    <div className={`project-art ${p.tone}`}>
      <div className="project-no">{p.n}</div>
      <img src={p.image} alt={`${p.title} project preview`} loading="lazy" />
    </div>
    <div className="project-body">
      <div className="project-label">{p.category}</div>
      <h3>{p.title}</h3>
      <p>{p.description}</p>
      <ul>{p.features.map(x=><li key={x}>{x}</li>)}</ul>
      <div className="tags">{p.tech.map(x=><span key={x}>{x}</span>)}</div>
      <div className="project-actions">
        {p.github && <a href={p.github} target="_blank" rel="noreferrer">GitHub <span>↗</span></a>}
        <a href="#contact">Discuss project <span>→</span></a>
      </div>
    </div>
  </article>
}

export default function Home() {
  const [menu,setMenu]=useState(false);
  useEffect(()=>{
    const observer=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)e.target.classList.add("visible")}),{threshold:.1});
    document.querySelectorAll(".reveal").forEach(e=>observer.observe(e));
    const move=(e:MouseEvent)=>{document.documentElement.style.setProperty("--mx",e.clientX+"px");document.documentElement.style.setProperty("--my",e.clientY+"px")};
    window.addEventListener("mousemove",move); return()=>{observer.disconnect();window.removeEventListener("mousemove",move)};
  },[]);
  const submit=(e:FormEvent<HTMLFormElement>)=>{e.preventDefault(); const f=e.currentTarget; const d=new FormData(f); window.location.href=`mailto:sgayankavishka@gmail.com?subject=${encodeURIComponent(String(d.get("subject")))}&body=${encodeURIComponent(`From: ${d.get("name")} (${d.get("email")})\n\n${d.get("message")}`)}`};
  return (
    <main>
      <div className="cursor-glow"/>
      <nav className="nav">
        <a className="brand" href="#home">GK<span>.</span></a>
        <div className={`navlinks ${menu?"open":""}`}>
          {["Home","About","Skills","Projects","Education","Contact"].map(x=><a key={x} onClick={()=>setMenu(false)} href={`#${x.toLowerCase()}`}>{x}</a>)}
        </div>
        <div className="navactions">
          <a className="button ghost github-top" href="https://github.com/SGKavishka" target="_blank" rel="noreferrer">GitHub ↗</a>
          <a className="button primary" href="./Gayan_Kavishka_Senarathna_Resume.pdf" download>Download CV ↓</a>
          <button className="menu" onClick={()=>setMenu(!menu)} aria-label="Toggle menu"><i/><i/></button>
        </div>
      </nav>

      <section className="hero" id="home">
        <div className="orb orb-one"/><div className="orb orb-two"/>
        <div className="hero-copy">
          <div className="eyebrow"><i/> Available for opportunities</div>
          <p className="hello">Hi, I&apos;m Gayan Kavishka Senarathna.</p>
          <h1>Computer Science <span>Undergraduate</span> &amp; Software Developer</h1>
          <p className="lead">Building responsive, practical and user-focused software experiences.</p>
          <p className="summary">Computer Science undergraduate with hands-on experience in full-stack web development, game development, desktop applications and database-driven systems.</p>
          <div className="hero-actions"><a className="button primary big" href="#projects">View My Projects <b>↘</b></a><a className="button ghost big" href="https://github.com/SGKavishka" target="_blank" rel="noreferrer">View GitHub ↗</a></div>
          <div className="hero-meta"><span>⌖ Embilipitiya, Sri Lanka</span><span>✦ Full-stack developer</span></div>
        </div>
        <div className="hero-visual" aria-label="Developer technology showcase">
          <div className="code-window"><div className="window-bar"><span/><span/><span/><small>portfolio.tsx</small></div>
            <pre><code><em>const</em> developer = {'{'}{"\n"}  name: <strong>&quot;Gayan&quot;</strong>,{"\n"}  role: <strong>&quot;Software Developer&quot;</strong>,{"\n"}  stack: [<strong>&quot;React&quot;</strong>, <strong>&quot;TypeScript&quot;</strong>],{"\n"}  passion: <strong>true</strong>,{"\n"}  build: () ={">"} <u>&quot;impactful products&quot;</u>{"\n"}{'}'};</code></pre><div className="status"><i/> Ready to create</div>
          </div>
          <div className="tech-pill p1">TS</div><div className="tech-pill p2">⚛</div><div className="tech-pill p3">JS</div><div className="tech-pill p4">C#</div>
        </div>
        <a className="scroll" href="#about"><span>Scroll to explore</span><i/></a>
      </section>

      <section className="section about" id="about">
        <SectionHeading eyebrow="01 / About" title="Turning ideas into useful digital experiences."/>
        <div className="about-grid">
          <div className="about-copy reveal"><p className="large">I&apos;m a motivated Computer Science undergraduate with a focus on building software that feels clear, useful and thoughtfully made.</p><p>My experience spans full-stack web applications, e-commerce platforms, database-driven systems, Java desktop applications and Unity-based games. I continuously explore new technologies and strengthen my software engineering skills through practical projects.</p><a href="#contact" className="text-link">Let&apos;s work together <span>↗</span></a></div>
          <div className="stats reveal"><div><b>7<span>+</span></b><small>Projects built</small></div><div><b>10<span>+</span></b><small>Technologies</small></div><div><b>Full</b><small>Stack development</small></div><div><b>Game</b><small>Development</small></div></div>
        </div>
      </section>

      <section className="section skills" id="skills">
        <SectionHeading eyebrow="02 / Capabilities" title="My tech stack." copy="A practical toolkit for taking ideas from interface to database."/>
        <div className="skill-grid">{techGroups.map((g,i)=><article className={`skill-card reveal s${i}`} key={g.title}><div className="skill-icon">{g.icon}</div><h3>{g.title}</h3><div className="skill-list">{g.items.map(x=><span key={x}>{x}</span>)}</div></article>)}</div>
      </section>

      <section className="section projects" id="projects">
        <SectionHeading eyebrow="03 / Selected Work" title="Featured projects." copy="Some of the projects I&apos;ve designed and developed."/>
        <div className="projects-grid">{projects.map(p=><ProjectCard key={p.n} p={p}/>)}</div>
      </section>

      <section className="section education" id="education">
        <SectionHeading eyebrow="04 / Journey" title="Education & growth."/>
        <div className="education-wrap">
          <div className="timeline reveal">
            {[
              ["2023 — PRESENT","BSc (Hons) Computer Science","SLIIT City University","Undergraduate — In Progress"],
              ["COMPLETED","G.C.E Advanced & Ordinary Level","MO/Bandaranayaka National College","Secondary Education"],
              ["COMPLETED","Basic Certification in Cambridge English","ESOFT Metro Campus","Professional Certification"]
            ].map((x,i)=><div className="timeline-item" key={x[1]}><i className={i===0?"active":""}/><small>{x[0]}</small><h3>{x[1]}</h3><p>{x[2]}</p><span>{x[3]}</span></div>)}
          </div>
          <div className="beyond reveal"><div className="mini-heading">Beyond code</div><h3>The human skills behind the work.</h3><div className="soft-grid">{["Problem Solving","Teamwork","Communication","Time Management","Adaptability","Quick Learning"].map((x,i)=><span key={x}><b>0{i+1}</b>{x}</span>)}</div><div className="languages"><small>Languages</small><div><b>Sinhala</b><span>Native</span></div><div><b>English</b><span>Basic</span></div></div></div>
        </div>
      </section>

      <section className="github-cta reveal">
        <div><span>OPEN SOURCE & EXPERIMENTS</span><h2>Explore my code.</h2><p>See how I approach projects, experiments and development work on GitHub.</p></div>
        <div className="github-panel"><div className="gh-top"><b>SGKavishka</b><span>github.com</span></div><div className="commit"><i/> Latest repositories and development work</div><a className="button primary big" href="https://github.com/SGKavishka" target="_blank" rel="noreferrer">Visit GitHub ↗</a></div>
      </section>

      <section className="section contact" id="contact">
        <SectionHeading eyebrow="05 / Contact" title="Let&apos;s build something together." copy="I&apos;m always interested in learning, collaborating and working on interesting software projects."/>
        <div className="contact-grid">
          <div className="contact-info reveal">
            <p>Have a project, opportunity or simply want to connect? My inbox is open.</p>
            <a href="mailto:sgayankavishka@gmail.com"><i>↗</i><span><small>Email</small>sgayankavishka@gmail.com</span></a>
            <a href="tel:+94764910671"><i>⌕</i><span><small>Phone</small>+94 76 491 0671</span></a>
            <div><i>⌖</i><span><small>Location</small>Embilipitiya, Sri Lanka</span></div>
            <a href="https://github.com/SGKavishka" target="_blank" rel="noreferrer"><i>⌘</i><span><small>GitHub</small>github.com/SGKavishka</span></a>
          </div>
          <form className="contact-form reveal" onSubmit={submit}>
            <div className="field-row"><label>Name<input name="name" placeholder="Your name" required/></label><label>Email<input name="email" type="email" placeholder="you@example.com" required/></label></div>
            <label>Subject<input name="subject" placeholder="What would you like to discuss?" required/></label>
            <label>Message<textarea name="message" rows={6} placeholder="Tell me about your idea or opportunity..." required/></label>
            <button className="button primary big" type="submit">Send Message <span>↗</span></button>
          </form>
        </div>
      </section>

      <footer><div><a className="brand" href="#home">GK<span>.</span></a><p><b>Gayan Kavishka Senarathna</b><br/>Computer Science Undergraduate &amp; Software Developer</p></div><div className="footer-links"><a href="https://github.com/SGKavishka" target="_blank" rel="noreferrer">GitHub ↗</a><a href="mailto:sgayankavishka@gmail.com">Email ↗</a></div><small>© 2026 Gayan Kavishka Senarathna. All Rights Reserved.</small></footer>
    </main>
  );
}
