"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { Analytics } from "@vercel/analytics/next"

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
 
   useEffect(() => {
     document.body.style.overflow = menuOpen ? "hidden" : "";
   }, [menuOpen]);
 
   return (
     <div>     
       <div className="main">       
         <nav className={`u ${menuOpen ? "mobile-active" : ""}`}>
           <a href="#about" onClick={() => setMenuOpen(false)}>
             About me
           </a>
           <a href="#skills" onClick={() => setMenuOpen(false)}>
             Skills
           </a>
           <a href="#portfolio" onClick={() => setMenuOpen(false)}>
             Portfolio
           </a>
           <a href="#contact" onClick={() => setMenuOpen(false)}>
             Contact
           </a>
         </nav>
 
         <div
           className={`hamburger ${menuOpen ? "active" : ""}`}
           aria-label="Toggle menu"
           aria-expanded={menuOpen}
           role="button"
           onClick={() => setMenuOpen(!menuOpen)}
         >
           <span></span>
           <span></span>
           <span></span>
         </div>
 
         {/* TEXT */}
         <p className="p1">
           <span className="bla">It’s</span> me,
         </p>
         <p className="p2">Capin, Julius Martin S.</p>
         <p className="p3">
           The honored <span className="bla">one</span>
         </p>
 
         <img src="/mypic.png" alt="" className="mp" />
       </div>
 
       <div className="about" id="about">
         <div className="con">
           <div className="items"></div>
 
           <div className="items1">
             <p className="ab">ABOUT ME</p>
             <p>
               Hi, I’m Julius! I’m Currently a 3rd Year Comscie student with
               interest in <br />
               Web Designing and Web Development. I enjoy turning ideas/design
               into practical projects.
               <br />
               I’m also recreating popular website design UI, but with no backend
               and no functionality. <br />
               I start coding on my Android Device using SPCK Editor Application.
               <br />
               I may still be building my skills, but I’m improving a little
               every time I study.
             </p>
           </div>
 
           <div className="items3">
             <div className="stat">
               <h2>3+</h2>
               <p>Years of Experience</p>
               <div className="line"></div>
             </div>
             <div className="stat">
               <h2>15+</h2>
               <p>Project Completed</p>
               <div className="line"></div>
             </div>
             <div className="stat">
               <h2>100%</h2>
               <p>Client Satisfaction</p>
               <div className="line"></div>
             </div>
             <div className="stat">
               <h2>0</h2>
               <p>Awards</p>
               <div className="line"></div>
             </div>
           </div>
         </div>
       </div>
 
       <div className="skill" id="skills">
         <div className="sgrid">
           <div className="scard">
             <img src="/html.svg" alt="" />
             <p className="t">HTML</p>
             <p>Years of Experience: 3+</p>
             <p>Usage Count: 20+</p>
             <p>Mastery: Advanced</p>
           </div>
 
           <div className="scard">
             <img src="/css2.svg" alt="" />
             <p className="t">CSS</p>
             <p>Years of Experience: 3</p>
             <p>Usage Count: 20+</p>
             <p>Mastery: Intermediate</p>
           </div>
 
           <div className="scard">
             <img src="/js.svg" alt="" />
             <p className="t">JavaScript</p>
             <p>Years of Experience: 1+</p>
             <p>Usage Count: 10+</p>
             <p>Mastery: Beginner</p>
           </div>
 
           <div className="scard">
             <img src="/bootstrap1.svg" alt="" />
             <p className="t">Bootstrap</p>
             <p>Years of Experience: 1</p>
             <p>Usage Count: 1</p>
             <p>Mastery: Beginner</p>
           </div>
 
           <div className="scard">
             <img src="/github.svg" alt="" />
             <p className="t">GitHub</p>
             <p>Years of Experience: 3+</p>
             <p>Usage Count: 10+</p>
             <p>Mastery: Beginner</p>
           </div>
 
           <div className="scard">
             <img src="/figma.svg" alt="" />
             <p className="t">Figma</p>
             <p>Years of Experience: 1</p>
             <p>Usage Count: 2</p>
             <p>Mastery: Beginner</p>
           </div>
         </div>
       </div>
 
       <div className="projects-section" id="portfolio">
         <h2 className="projects-title">MY PROJECTS</h2>
 
         <div className="projects-wrapper">
           <div className="top-projects">
             <div className="project-card">
               <img src="/ngl.png" alt="" />
               <div className="project-info">
                 <h3>NGL UI</h3>
                 <p>
                   App Used: VS Code, WAMP
                   <br />
                   Tools Used: HTML, CSS, JS, PHP
                   <br />
                   New Learnings: Database
                 </p>
               </div>
             </div>
 
             <div className="project-card">
               <img src="/non.png" alt="" />
               <div className="project-info">
                 <h3>E-Commerce</h3>
                 <p>
                   App Used: Vscode
                   <br />
                   Tools Used: HTML, CSS, JS
                   <br />
                   New Learnings: Grid
                 </p>
               </div>
             </div>
           </div>
 
           <div className="bottom-projects">
             <div className="project-card">
               <img src="/tik.jpg" alt="" />
               <div className="project-info">
                 <h3>Tiktok UI</h3>
                 <p>
                   App Used: Spck Editor
                   <br />
                   Tools Used: HTML, CSS
                   <br />
                   New Learnings: UI
                 </p>
               </div>
             </div>
 
             <div className="project-card">
               <img src="/fb.jpg" alt="" />
               <div className="project-info">
                 <h3>Facebook UI</h3>
                 <p>
                   App Used: SPCK
                   <br />
                   Tools Used: HTML, CSS
                   <br />
                   New Learnings: None
                 </p>
               </div>
             </div>
 
             <div className="project-card">
               <img src="/note.jpg" alt="" />
               <div className="project-info">
                 <h3>Note App</h3>
                 <p>
                   App Used: Spck Editor
                   <br />
                   Tools Used: HTML, CSS, JS
                   <br />
                   New Learnings: Logic
                 </p>
               </div>
             </div>
 
             <div className="project-card">
               <img src="/rps.jpg" alt="" />
               <div className="project-info">
                 <h3>RPS</h3>
                 <p>
                   App Used: Spck Editor
                   <br />
                   Tools Used: HTML, CSS, JS
                   <br />
                   New Learnings: None
                 </p>
               </div>
             </div>
           </div>
         </div>
       </div>
 
       <div className="contact-section" id="contact">
         <div className="contact-container">
           <p className="awa">GET IN TOUCH</p>
           <h2>Contact Me</h2>
 
           <form>
             <div className="row">
               <div className="fg">
                 <p>First Name</p>
                 <input type="text" name="fname" />
               </div>
               <div className="fg">
                 <p>Last Name</p>
                 <input type="text" name="lname" />
               </div>
             </div>
 
             <div className="row">
               <div className="fg">
                 <p>Email</p>
                 <input type="email" name="mail" />
               </div>
               <div className="fg">
                 <p>Phone Number</p>
                 <input
                   type="text"
                   name="number"
                   onInput={(e) => {
                     const target = e.target as HTMLInputElement;
                     target.value = target.value
                       .replace(/[^0-9]/g, "")
                       .slice(0, 11);
                   }}
                 />
               </div>
             </div>
 
             <div className="fg" style={{ marginBottom: "15px" }}>
               <p>Message</p>
               <textarea name="mess" placeholder="your message here..."></textarea>
             </div>
 
             <button type="submit" name="submit">
               Send Message
             </button>
           </form>
         </div>
       </div>
     </div>
   );
}

