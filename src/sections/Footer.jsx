import {React, useState, useEffect, useRef} from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

const Footer = () => {

    function openEmailPrompt() {
        var recipient = 'victor.rochin97@gmail.com'; 
        var subject = 'Hey Victor! I just checked out your portfolio...';
      
        var mailtoLink = 'mailto:' + encodeURIComponent(recipient) +
                         '?subject=' + encodeURIComponent(subject) 
        window.location.href = mailtoLink;

    }

    //Small pause so it loads after timeout (used for wide screen since it never goes away)
    const [isMounted, setIsMounted] = useState();
    const refEmail = useRef()
    //Creates a timer to set is mounted after navbar loads
    useEffect(() => {
    const timeout = setTimeout(() => {setIsMounted(true)}, 2600);
    return () => clearTimeout(timeout)
    }, [])

    //Slide in on mobile (used for mobile because it only appears on footer and homepage)
    const [isInViewport, setIsInViewport] = useState(false);
    const footerRef = useRef()
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            const entry = entries[0].isIntersecting;
            entry === true ? setIsInViewport(true) : setIsInViewport(false);
            }
        )
        observer.observe(footerRef.current)
    }, [])

    return (
        <section id="footer" className="section footer">
            <div ref={footerRef}>
                <p>Built by Victor Rochin, inspired by Brittany Chiang's designs</p>
            </div>

            <TransitionGroup component={null} >
                {isMounted && (<CSSTransition in={isMounted} nodeRef={refEmail} classNames="fade" timeout={200} appear={true}>
                    <div className={`sticky-email ${isMounted && !isInViewport ? 'slide-in-mobile-start':'slide-in-mobile-end'}`} ref={refEmail}>
                        <span onClick={openEmailPrompt} className="email">victor.rochin97@gmail.com</span>
                        <div className="fine-line"></div>
                    </div>
                </CSSTransition>)}
            </ TransitionGroup>
        </section>
    )
}

export default Footer