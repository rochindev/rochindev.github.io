import {React, useRef, useState, useEffect} from 'react';
import headshot from '../assets/headshot2.png'

const About = () => {

  const [isInViewport, setIsInViewport] = useState(false);
  const aboutRef = useRef()

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0].isIntersecting
      if (entry === true) {setIsInViewport(true)}
    })

    observer.observe(aboutRef.current)
  }, [])

  
  return (
    <section id="about" className={`section`} >
      <div ref={aboutRef} className={isInViewport ? 'fade-enter-active' : 'fade-enter'} style={{ transitionDelay: `400ms` }}>
        <h2 id="sectionTitle" className="aboutTitle" >
            <span id="codeFont">03. </span>
            About Me
        </h2>

        <div className="about-container" >

          <div className='about-section-info'>
            
            <p>
            Hey there! My name is Victor Rochin, border-town native just a stone-throw away from the city of San Diego. <span id='highlight'>Fun fact:</span> Did you know that the Tijuana-California border holds the record for the most transited border in world? Wow!
            </p>
            <p>
              My journey into the world of webdev started way back when I was a kid, editing <span id='highlight'>MySpace</span> "aboutme's" for my friends and whatnot, lol. Unfortunately, the lack of accessible learning resources I had at hand kept me from pursuing my career in webdev. Fast-forward to today, I pivoted from a career in global logistics to take on a new challenge.
            </p>
            <p>
              Looking forward to collaborating with dynamic teams, whether you are <span id='highlight'>based in Mexico or across the globe.</span> Let's join forces and build something, anything!</p> <p>
              Here are a few of the technologies I feel most comfortable working
              with:
            </p>
            <ul className='tech-list' id='codeFont'>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>React</li>
              <li>Node.js</li>
            </ul>
          </div>

          <div className='about-section-headshot'>
              <div className='fade-effect'>
                <img  src={headshot} alt='myHeadshot' className='headshot' />
              </div>
              <figcaption>Seoul, South Korea, 2023.</figcaption>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
