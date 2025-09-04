import {React, useState, useEffect, useRef} from 'react';
import projectCoaches from '../assets/project-coaches.png'
import projectBreweries from '../assets/project-breweries-photo.png'
import projectScrapetron from '../assets/scrapetron.png'
import projectChismecito from '../assets/chismecito.png'
import projectHostBerries from '../assets/hostberries.png'
import projectGetMyInstants from '../assets/getmyinstants.png'

const Projects = () => {

    const [isInViewport, setIsInViewport] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const projRef = useRef()

    useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
        const entry = entries[0].isIntersecting
        if (entry === true) {setIsInViewport(true)}
    })

    observer.observe(projRef.current)
    }, [])

    // Mobile detection
    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth <= 768);
        };
        
        checkMobile();
        window.addEventListener('resize', checkMobile);
        
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    // Project data
    const mainProjects = [
        {
            title: "HostBerries",
            url: "https://www.hostberries.com/",
            description: "A digital welcome guide platform for Airbnb and short-term rentals. I developed a SaaS tool that allows hosts to create custom digital guidebooks for their guests. Each guide centralizes important information like house rules, WiFi details, check-in instructions, and local recommendations. Built with React and Node.js, the app uses Supabase for data storage and Vercel for deployment, making it simple, fast, and mobile-friendly for guests.",
            tech: ["React", "Node.js", "Supabase", "Vercel", "SaaS", "Mobile-First"],
            image: projectHostBerries,
            alt: "project-1-hostberries"
        },
        {
            title: "GetMyInstants",
            url: "https://www.getmyinstants.com/",
            description: "A full-stack platform where creators can upload instant-film photos, list them as collectible items, and sell directly to fans. The app integrates Stripe Checkout with escrow logic, Supabase/Postgres for authentication and database management, and is deployed on Vercel + Render.",
            tech: ["React", "Node.js", "Stripe", "Supabase", "PostgreSQL", "Vercel", "Render"],
            image: projectGetMyInstants,
            alt: "project-2-getmyinstants"
        },
        {
            title: "Recruiting coaches!",
            url: "https://coachrecruiters.com/",
            description: "A website made for recruiters in a company that especializes in staffing after school programs. Prospecting candidates can use it to gain more insights on the job description as well as apply for one of the available roles through a form that uses the Google sheets API to submit their contact info to a sheet on Google Drive.",
            tech: ["React", "Tailwind", "Javascript", "CSS", "Google Sheets API"],
            image: projectCoaches,
            alt: "project-3-coaches",
            github: "https://github.com/rochindev/recruiting-website/tree/main/recruiting_success"
        }
    ];

    const additionalProjects = [
        {
            title: "Find Local Breweries",
            url: "https://rochindev.github.io/local-breweries-react-app/",
            description: "Interactive brewery finder using Google Maps API",
            tech: ["React", "Google Maps API", "JavaScript"],
            github: "https://github.com/rochindev/local-breweries-react-app"
        },
        {
            title: "Web Scraper & Data Cleaner",
            url: "https://rochindev.github.io/scrapetron/",
            description: "Data scraping tool with OpenAI-powered cleaning",
            tech: ["React", "Puppeteer", "OpenAI API"],
            github: "https://github.com/rochindev/scrapetron"
        },
        {
            title: "@chismecito.reddit",
            url: "https://www.tiktok.com/@chismecito.reddit",
            description: "Creative content creation and digital experience",
            tech: ["Adobe Premiere", "Content Creation", "TikTok"]
        }
    ];

    // Mobile Project Card Component
    const MobileProjectCard = ({ project, index }) => (
        <div className="mobile-project-card">
            <div className="mobile-project-header">
                <p id="codeFont">Project</p>
                <h3><a href={project.url} target="_blank" className="project-title">{project.title}</a></h3>
            </div>
            
            <div className="mobile-project-description">
                <p>{project.description}</p>
            </div>
            
            <div className="mobile-project-image">
                <a className="project-image-link fade-effect" href={project.url} target="_blank">
                    <img src={project.image} alt={project.alt} className="project-image" />
                </a>
            </div>
            
            <div className="mobile-project-tech">
                {project.tech.map((tech, i) => (
                    <span key={i} className={tech === "Supabase" || tech === "Google Sheets API" ? "special-tech" : ""}>
                        {tech}
                    </span>
                ))}
            </div>
            
            <div className="mobile-project-links">
                {project.github && (
                    <a href={project.github} target="_blank">
                        <i className="fa-brands fa-github"></i>
                    </a>
                )}
                <a href={project.url} target="_blank">
                    <i className="fa-solid fa-arrow-up-right-from-square"></i>
                </a>
            </div>
        </div>
    );

    // Desktop Project Card Component
    const DesktopProjectCard = ({ project, index }) => (
        <li className="project">
            <div className={`project-content ${index % 2 === 0 ? 'right' : 'left'}`}>
                <p id="codeFont">Project</p>
                <h3><a href={project.url} target="_blank" className="project-title">{project.title}</a></h3>
                <div className="project-description">
                    <p>{project.description}</p>
                </div>
                <ul className={`project-tech ${index % 2 === 0 ? 'right' : 'left'}`}>
                    {project.tech.map((tech, i) => (
                        <li key={i} className={tech === "Supabase" || tech === "Google Sheets API" ? "special-tech" : ""}>
                            {tech}
                        </li>
                    ))}
                </ul>
                <div className="project-links">
                    {project.github && (
                        <a href={project.github} target="_blank">
                            <i className="fa-brands fa-github"></i>
                        </a>
                    )}
                    <a href={project.url} target="_blank">
                        <i className="fa-solid fa-arrow-up-right-from-square"></i>
                    </a>
                </div>
            </div>

            <div className={`project-image-container ${index % 2 === 0 ? 'left' : 'right'}`}>
                <a className="project-image-link fade-effect" href={project.url} target="_blank">
                    <img src={project.image} alt={project.alt} className="project-image" />
                </a>
            </div>
        </li>
    );

  return (
    <section id="projects" className="section project-section-container">
      <div className="project-container">
        <h2 id="sectionTitle">
            <span id="codeFont">03. </span>
            Projects I've worked on
        </h2>

        <div ref={projRef} className={isInViewport ? 'fadeup-enter-done' : 'fadeup-enter'} style={{ transitionDelay: `400ms` }}>

        {isMobile ? (
            // Mobile Layout
            <div className="mobile-projects-container">
                {mainProjects.map((project, index) => (
                    <MobileProjectCard key={index} project={project} index={index} />
                ))}
            </div>
        ) : (
            // Desktop Layout
            <ul className="project-list">
                {mainProjects.map((project, index) => (
                    <DesktopProjectCard key={index} project={project} index={index} />
                ))}
            </ul>
        )}

        {/* Additional Projects Strip */}
        <div className="additional-projects-strip">
          <h3 className="strip-title" id="codeFont">Other Projects</h3>
          <div className="projects-grid">
            
            {additionalProjects.map((project, index) => (
                <div key={index} className="mini-project-card">
                    <div className="mini-project-content">
                        <h4><a href={project.url} target="_blank" className="mini-project-title">{project.title}</a></h4>
                        <p>{project.description}</p>
                        <div className="mini-tech-stack">
                            {project.tech.map((tech, i) => (
                                <span key={i}>{tech}</span>
                            ))}
                        </div>
                        <div className="mini-project-links">
                            {project.github && (
                                <a href={project.github} target="_blank">
                                    <i className="fa-brands fa-github"></i>
                                </a>
                            )}
                            <a href={project.url} target="_blank">
                                <i className="fa-solid fa-arrow-up-right-from-square"></i>
                            </a>
                        </div>
                    </div>
                </div>
            ))}

          </div>
        </div>
        </div>

      </div>
    </section>
  );
};

export default Projects;