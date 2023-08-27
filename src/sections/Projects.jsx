import {React, useState, useEffect, useRef} from 'react';
import projectCoaches from '../assets/project-coaches.png'
import projectBreweries from '../assets/project-breweries-photo.png'
import projectScrapetron from '../assets/scrapetron.png'
import projectChismecito from '../assets/chismecito.png'

const Projects = () => {

    const [isInViewport, setIsInViewport] = useState(false);
    const projRef = useRef()

    useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
        const entry = entries[0].isIntersecting
        if (entry === true) {setIsInViewport(true)}
    })

    observer.observe(projRef.current)
    }, [])

  return (
    <section id="projects" className="section project-section-container">
      <div className="project-container">
        <h2 id="sectionTitle">
            <span id="codeFont">03. </span>
            Projects I've worked on
        </h2>

        <div ref={projRef} className={isInViewport ? 'fadeup-enter-done' : 'fadeup-enter'} style={{ transitionDelay: `400ms` }}>

        <ul className='project-list'>

            <li className='project'>

                <div className='project-content right'>
                    <p id='codeFont'>Project</p>
                    <h3><a href="https://rochindev.github.io/local-breweries-react-app/" target='_blank' className='project-title'>Find Local Breweries</a></h3>
                    <div className='project-description'>
                        <p>An interactive website that uses the <span id='highlight'>Google Maps API</span> to display the best local breweries state-wide using reusable components as well as tags to match their characteristics. Don't forget to <span id='highlight'>sway away the foliage!</span></p>
                    </div>
                    <ul className='project-tech right'>
                        <li id="special-tech">Google Maps API</li>
                        <li>React</li>
                        <li>Javascript ES6</li>
                        <li>HTML5</li>
                        <li>CSS</li>
                    </ul>
                    <div className='project-links'>
                        <a
                            href='https://github.com/rochindev/local-breweries-react-app'
                            target='_blank'
                        >
                            <i className="fa-brands fa-github"></i>
                        </a>
                        <a
                            href='https://rochindev.github.io/local-breweries-react-app/'
                            target='_blank'
                        >
                            <i class="fa-solid fa-arrow-up-right-from-square"></i>
                        </a>
                    </div>
                </div>

                <div className='project-image-container left'>
                    <a 
                        className=' project-image-link fade-effect'
                        href='https://rochindev.github.io/local-breweries-react-app/'
                        target='_blank'
                    >
                        <img 
                            src={projectBreweries} 
                            alt='project-1-breweries'
                            className='project-image'
                        />
                    </a>
                </div>

            </li>


            <li className='project'>

                <div className='project-content left'>
                    <p id='codeFont'>Project</p>
                    <h3><a href="https://coachrecruiters.com/" target='_blank' className='project-title'>Recruiting coaches!</a></h3>    
                    <div className='project-description'>
                        <p>A website made for recruiters in a company that especializes in staffing after school programs. Prospecting candidates can use it to gain more insights on the job description as well as apply for one of the available roles through a form that uses the <span id='highlight'>Google sheets API </span> to submit their contact info to a sheet on Google Drive.</p>
                    </div>
                    <ul className='project-tech left'>
                        <li>React</li>
                        <li>Tailwind</li>
                        <li>Javascript</li>
                        <li>CSS</li>
                        <li id="special-tech">Google Sheets API</li>
                    </ul>
                    <div className='project-links'>
                        <a
                            href='https://github.com/rochindev/recruiting-website/tree/main/recruiting_success'
                            target='_blank'
                        >
                            <i className="fa-brands fa-github"></i>
                        </a>
                        <a
                            href='https://coachrecruiters.com/'
                            target='_blank'
                        >
                            <i class="fa-solid fa-arrow-up-right-from-square"></i>
                        </a>
                    </div>
                </div>

                <div className='project-image-container right'>
                    <a 
                        className=' project-image-link fade-effect'
                        href='https://coachrecruiters.com/'
                        target='_blank'
                    >
                        <img 
                            src={projectCoaches} 
                            alt='project-2-coaches'
                            className='project-image'
                        />
                    </a>
                </div>

            </li>

            <li className='project'>

                <div className='project-content right'>
                    <p id='codeFont'>Project</p>
                    <h3><a href="https://rochindev.github.io/scrapetron/" target='_blank' className='project-title'>Web Scraper & Data Cleaner</a></h3>    
                    <div className='project-description'>
                        <p>One of my best yet. This is a data scraper that uses <span id='highlight'>Puppeteer</span> to scrape the web for different products and their info. But what do you do with thousands of lines of raw data? That's why it also uses <span id='highlight'>OpenAI's API</span> to process and clean the data so for once, it makes sense, but also to homogenize it so we can work with it to our advantage.</p>
                    </div>
                    <ul className='project-tech right'>
                        <li>React</li>
                        <li>Javascript</li>
                        <li>CSS</li>
                        <li id='puppeteer'>Puppeteer</li>
                        <li id="special-tech">OpenAI API</li>
                    </ul>
                    <div className='project-links'>
                        <a
                            href='https://github.com/rochindev/scrapetron'
                            target='_blank'
                        >
                            <i className="fa-brands fa-github"></i>
                        </a>
                        <a
                            href='https://rochindev.github.io/scrapetron/'
                            target='_blank'
                        >
                            <i class="fa-solid fa-arrow-up-right-from-square"></i>
                        </a>
                    </div>
                </div>

                <div className='project-image-container left'>
                    <a 
                        className=' project-image-link fade-effect'
                        href='https://rochindev.github.io/scrapetron/'
                        target='_blank'
                    >
                        <img 
                            src={projectScrapetron} 
                            alt='project-3-scrapetron'
                            className='project-image'
                        />
                    </a>
                </div>

            </li>

            <li className='project'>

                <div className='project-content left'>
                    <p id='codeFont'>Project</p>
                    <h3><a href="https://www.tiktok.com/@chismecito.reddit" target='_blank' className='project-title'>@chismecito.reddit</a></h3>    
                    <div className='project-description'>
                        <p>No crazy coding skills here, this is another side project/hobby I've worked on for some time.<span id='highlight' className='tiktoklink'><a href="https://www.tiktok.com/@chismecito.reddit" target='_blank' className='project-title'> @chismecito.reddit </a></span>allowed me to navigate new challenges that immersed me into a whole new set of skills, from editing and trend research to data analysis. All of them huge learning opportunities to practice creative problem solving. <span id='highlight'>I believe this reflects on my digital experience as an example of creativity, resilience, objective oriented execution and adaptability.</span></p>
                    </div>
                    <ul className='project-tech left'>
                        <li>Adobe Premiere</li>
                        <li>text2voice</li>
                        <li>Tik Tok</li>
                    </ul>
                    <div className='project-links'>
                        <a
                            href='https://www.tiktok.com/@chismecito.reddit'
                            target='_blank'
                        >
                            <i class="fa-solid fa-arrow-up-right-from-square"></i>
                        </a>
                    </div>
                </div>

                <div className='project-image-container right tiktok-adjustment'>
                    <a 
                        className=' project-image-link fade-effect'
                        href='https://www.tiktok.com/@chismecito.reddit'
                        target='_blank'
                    >
                        <img 
                            src={projectChismecito} 
                            alt='project-4-chismecito'
                            className='project-image'
                        />
                    </a>
                </div>

            </li>
            
        </ul>
        </div>

      </div>
    </section>
  );
};

export default Projects;