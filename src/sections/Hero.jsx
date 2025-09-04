import {React, useState, useEffect, useRef} from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

const Hero = () => {

  function openEmailPrompt() {
    var recipient = 'victor.rochin97@gmail.com'; 
    var subject = 'Hey Victor! I just checked out your portfolio...';
  
    var mailtoLink = 'mailto:' + encodeURIComponent(recipient) +
                     '?subject=' + encodeURIComponent(subject) 
    window.location.href = mailtoLink;
  }

  //Fade animations when first intersecting the DOM or at start//
  //Small pause so it loads after the navbar
  const [isMounted, setIsMounted] = useState();
  //Creates a timer to set is mounted after navbar loads
  useEffect(() => {
    const timeout = setTimeout(() => {setIsMounted(true)}, 600);
    return () => clearTimeout(timeout)
  }, [])

  const ref1 = useRef()
  const ref2 = useRef()
  const ref3 = useRef()
  const ref4 = useRef()
  const ref5 = useRef()
  const ref6 = useRef()

  return (
    <section id="hero" className="section hero-section" >
      <TransitionGroup component={null} >
        {isMounted && (<div className="hero-container">
          <CSSTransition in={isMounted} nodeRef={ref1} classNames="fadeup" timeout={1000}>
            <p id='codeFont' ref={ref1} style={{ transitionDelay: `100ms` }}>
              Hola! Me llamo
            </p>
          </CSSTransition>
          <CSSTransition in={isMounted} nodeRef={ref2} classNames="fadeup" timeout={1000}>
            <h1 className='name' ref={ref2} style={{ transitionDelay: `200ms` }}>
              Victor Rochin
            </h1>
          </CSSTransition>
          <CSSTransition in={isMounted} nodeRef={ref3} classNames="fadeup" timeout={1000}>
            <h1 className='slogan' ref={ref3} style={{ transitionDelay: `300ms` }}>
            Full-Stack Web Developer <br></br> React, Node.js & Stripe Integrations
            </h1>
          </CSSTransition>
          <CSSTransition in={isMounted} nodeRef={ref4} classNames="fadeup" timeout={1000}>
            <p className='intro' ref={ref4} style={{ transitionDelay: `500ms` }}>
              I build fast, user-focused web applications with clean code and thoughtful design. Experienced with React, Node.js, and modern APIs, I help teams ship scalable products quickly and effectively. When I'm not coding, I'm editing videos for my <span id='highlight' className='tiktoklink'><a href="https://www.tiktok.com/@chismecito.reddit" target='_blank' className='project-title'>social media</a></span> — creativity drives everything I do.
            </p>
          </CSSTransition>
          <CSSTransition in={isMounted} nodeRef={ref5} classNames="fadeup" timeout={1000}>
            <div ref={ref5} style={{ transitionDelay: `600ms` }}>
              <button className='CTA-button hero-button' id='codeFont' onClick={openEmailPrompt} >Let's Build Something</button>
            </div>
          </CSSTransition>
          <CSSTransition in={isMounted} nodeRef={ref6} classNames="slide-in-email" timeout={1200}>
            {/*only available on mobile*/}
            <div ref={ref6} 
            style={{ transitionDelay: `800ms` }}
            className='sticky-email-hero'>
              <span onClick={openEmailPrompt} className="email">victor.rochin97@gmail.com</span>
              <div className="fine-line"></div>
            </div>
          </CSSTransition>

        </div>)}
      </TransitionGroup>

    </section>
  );
};

export default Hero;
