import {React, useRef, useState, useEffect} from 'react';

const Experience = () => {

  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  //fade animation logic

  const [isInViewport, setIsInViewport] = useState(false);
  const expRef = useRef()

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0].isIntersecting
      if (entry === true) {setIsInViewport(true)}
    })

    observer.observe(expRef.current)
  }, [])


  return (
    <section id="experience" className="section">
      <div ref={expRef} className={isInViewport ? 'fade-enter-active' : 'fade-enter'} style={{ transitionDelay: `400ms` }}>

        <h2 id="sectionTitle">
            <span id="codeFont">05. </span>
            Professional Experience
        </h2>

        <div className="experience-container">
            <div className='tab-button-container'>
              <button 
                id={activeTab === 0 ? 'active-button' : 'tab-button'} 
                onClick={() => handleTabClick(0)}            
                >
                Elevo
              </button>
              <button 
                id={activeTab === 1 ? 'active-button' : 'tab-button'} 
                onClick={() => handleTabClick(1)}            
                >
                Kuehne + Nagel
              </button>
              <button 
                id={activeTab === 2 ? 'active-button' : 'tab-button'} 
                onClick={() => handleTabClick(2)}            
                >
                Tijuana Innovadora
              </button>
              <button 
                id={activeTab === 3 ? 'active-button' : 'tab-button'} 
                onClick={() => handleTabClick(3)}            
                >
                Agencia AP
              </button>
          </div>

          <div className='all-workplaces'>

            <div className={`workplace ${activeTab === 0 ? 'active-workplace' : 'inactive-workplace'}`}>
              <h2>Talent Coordinator <a href="https://elevolearning.com/" target='_blank' id='highlightWork'>@ Elevo Learning</a></h2>
              <p>2022 - Present</p>
              <ul>
                <li>As a Talent Coordinator, managed end-to-end candidate recruitment, from proactive outreach to phone screenings, and oversaw their progression through the interview and onboarding processes.</li>
                <li>Skillfully navigated the challenge of staffing shortages in certain California areas, tailoring candidate engagement to meet specific needs while aligning with role expectations and objectives.</li>
                <li>Cultivated strong client relationships, addressing concerns and ensuring open lines of communication, leading to enhanced client satisfaction and fostering enduring partnerships.</li>
                <li>Achieved two promotions within a year, demonstrating exceptional performance and contribution to the team, and played a pivotal role in special client engagement initiatives and training sessions.</li>
                <li>Gained valuable soft skills in people management and communication, collaborated effectively with USA-based teams, and developed a unique perspective on candidate expectations in fulfilling various roles.</li>
              </ul>
            </div>

            <div className={`workplace ${activeTab === 1 ? 'active-workplace' : 'inactive-workplace'}`}>
              <h2>Logistics coordinator <a href="https://mx.kuehne-nagel.com/en/" target='_blank' id='highlightWork'>@ Kuehne+Nagel</a></h2>
              <p>2020 - 2022</p>
              <ul>
                <li>Managed a diverse client portfolio, fostering effective global communication and coordination to ensure smooth import/export operations for logistics, even during challenging events like the global container crisis of 2020-2022.</li>
                <li>Led a team through organizational changes, container crisis, and staffing challenges, exceeding company-set metrics by cultivating a collaborative and strategic approach, resulting in the team's historic #1 ranking among branches continent-wide.</li>
                <li>Navigated complex conversations and delivered challenging news to clients, developing strong interpersonal skills, empathy, and professionalism while maintaining client satisfaction and managing manufacturing plant engineering teams' expectations.</li>
                <li>Led quoting, billing, and profit calculations for shipments, showcasing financial acumen in a multifaceted role that required resourcefulness, quick learning, and objective-oriented problem-solving.</li>
                <li>Developed skills in multitasking, cross-functional collaboration, and fast-paced learning while managing simultaneous operations and collaborating with various stakeholders ranging from truckers to manufacturing plant directors.</li>
              </ul>
            </div>

            <div className={`workplace ${activeTab === 2 ? 'active-workplace' : 'inactive-workplace'}`}>
              <h2>Assistant PM <a href="https://tijuanainnovadora.org/" target='_blank' id='highlightWork'>@ TijuanaInnovadora</a></h2>
              <p>2018</p>
              <ul>
                <li>Played a pivotal role in facilitating professional development programs for students in digital marketing and entrepreneurship, from initial outreach and enrollment to ensuring a seamless classroom experience.</li>
                <li>Addressed challenges such as program dropouts by actively participating in lessons, setting an example of commitment, and motivating participants to stay engaged throughout the 6-month program.</li>
                <li>Collaborated closely with the curriculum team to translate program materials into presentation format, ensuring facilitators had effective tools for engaging classroom sessions.</li>
                <li>Cultivated strong rapport with company staff, resulting in impactful relationships and earning commendations in the form of recommendation letters.</li>
              </ul>
            </div>

            <div className={`workplace ${activeTab === 3 ? 'active-workplace' : 'inactive-workplace'}`}>
              <h2>Assistant PM @AP</h2>
              <p>2019</p>
              <ul>
                <li>Supported project management activities by coordinating with clients and service providers, ensuring smooth communication and resource availability for in-person events.</li>
                <li>Demonstrated adaptability and teamwork by collaborating with a diverse team, making myself available to assist and seeking clarifications through effective questioning.</li>
                <li>Assisted in managing budgets and resources, liaising with service providers ahead of client events to ensure seamless execution.</li>
                <li>Contributed to agency efficiency by offering assistance in various tasks, showcasing a proactive approach to team support.</li>
              </ul>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Experience;
