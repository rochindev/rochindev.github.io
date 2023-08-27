import {React, useState, useEffect, useRef} from 'react';

const Contact = () => {

    function openEmailPrompt() {
        var recipient = 'victor.rochin97@gmail.com'; 
        var subject = 'Hey Victor! I just checked out your portfolio...';
      
        var mailtoLink = 'mailto:' + encodeURIComponent(recipient) +
                         '?subject=' + encodeURIComponent(subject) 
        window.location.href = mailtoLink;

    }

    const [isInViewport, setIsInViewport] = useState(false);
    const contactRef = useRef()

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            const entry = entries[0].isIntersecting
            if (entry === true) {setIsInViewport(true)}
        })
    
        observer.observe(contactRef.current)
    }, [])
    

    return(
        <section id="contact" className="section">
            <div ref={contactRef} className={isInViewport ? 'fadeup-enter-done' : 'fadeup-enter'} style={{ transitionDelay: `500ms` }}>
            <div className='contact-container'>
                <span>04. What's next?</span>
                <h1>Get In Touch</h1>
                <p>{`Hope some of this aligns with your team's goals. Please let me know when would be the best time to have a chat :)`}</p>
                <button className='CTA-button' id='codeFont' onClick={openEmailPrompt}>Send Email</button>
            </div>
            </div>
        </section>
    );
}


export default Contact;