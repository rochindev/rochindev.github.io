import {React, useRef, useState, useEffect} from 'react';
import { 
  Code2, 
  Server, 
  Cloud
} from 'lucide-react';

const Skills = () => {
  const [isInViewport, setIsInViewport] = useState(false);
  const skillsRef = useRef()

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0].isIntersecting
      if (entry === true) {setIsInViewport(true)}
    })

    observer.observe(skillsRef.current)
  }, [])

  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <Code2 size={20} />,
      skills: [
        { name: "React", description: "Hooks, Context, Advanced Patterns" },
        { name: "TypeScript", description: "Applied to new projects" },
        { name: "TailwindCSS", description: "Responsive Design" },
        { name: "Vite", description: "Fast builds & optimization" }
      ]
    },
    {
      title: "Backend & APIs",
      icon: <Server size={20} />,
      skills: [
        { name: "Node.js", description: "Express, REST APIs" },
        { name: "Supabase", description: "Auth, RLS, DB design" },
        { name: "Stripe", description: "Checkout, Connect, Escrow" },
        { name: "Google APIs", description: "Sheets, Maps" },
        { name: "OpenAI API", description: "AI-driven tools" }
      ]
    },
    {
      title: "DevOps & Tools",
      icon: <Cloud size={20} />,
      skills: [
        { name: "Git & GitHub", description: "Collaboration, workflows" },
        { name: "Vercel", description: "Deployment pipelines" },
        { name: "Docker", description: "Containerization" },
        { name: "Puppeteer", description: "Automation & scraping" }
      ]
    }
  ];

  return (
    <section id="skills" className="section">
      <div ref={skillsRef} className={isInViewport ? 'fade-enter-active' : 'fade-enter'} style={{ transitionDelay: `400ms` }}>
        <h2 id="sectionTitle">
          <span id="codeFont">02. </span>
          Skills & Technologies
        </h2>

        <div className="skills-container">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="skill-category-card">
              <div className="category-header">
                <div className="category-icon">
                  {category.icon}
                </div>
                <h3 className="category-title" id="codeFont">{category.title}</h3>
              </div>
              <div className="skills-grid">
                {category.skills.map((skill, skillIndex) => (
                  <div 
                    key={skillIndex} 
                    className="skill-badge"
                    style={{ 
                      animationDelay: `${(categoryIndex * 100) + (skillIndex * 50)}ms`
                    }}
                  >
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-description">{skill.description}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
