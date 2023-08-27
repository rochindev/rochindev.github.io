import {React, useState, useEffect, useRef} from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { Link } from 'react-scroll';

const Navbar = () => {

  const refresh = () => {
    const mainContent = document.querySelector('.main');
    mainContent.classList.add('hide-content');

    setTimeout(() => {
      window.scrollTo(0, 0);
      location.reload();
    }, 30);
  }

  //Setting up the sticking is and visibility on scroll down/up
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  const handleScroll = () => {
    const currentScrollPos = window.scrollY;
    setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
    setPrevScrollPos(currentScrollPos);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos, visible]);

  //Fade animations//
  //Small pause so it loads after the navbar
  const [isMounted, setIsMounted] = useState(false);
  //Creates a timer to set is mounted after navbar loads
  useEffect(() => {
    const timeout = setTimeout(() => {setIsMounted(true)}, 100);
    return () => clearTimeout(timeout)
  }, [])

  //Elements and their Refs (there must be an easier way)
  const logoRef = useRef()
  const logo = (
    <div onClick={refresh} className='refresh-btn'>
      <div className='logo' ref={logoRef} style={{ transitionDelay: `100ms` }}>
          <p>ROCHINDEV</p>
      </div>
    </div>
  ); 

  const logoRef2 = useRef()
  const logo2 = (
    <div onClick={refresh} className='refresh-btn'>
      <div className='logo' ref={logoRef2} style={{ transitionDelay: `100ms` }}>
          <p>ROCHINDEV</p>
      </div>
    </div>
  ); 

  const burgerRef = useRef()

  //MOBILE NAVBAR 

  const [burgerClass, setBurgerClass] = useState('burger-bar unclicked')
  const [menuClass, setMenuClass] = useState('menu hidden-burger')
  const [blurClass, setBlurClass] = useState('menu-blur hidden')
  const [isMenuClicked, setisMenuClicked] = useState(false)

  const updateMenu = () => {
    if(!isMenuClicked) {
      setBurgerClass('burger-bar clicked')
      setMenuClass('menu visible-burger')
      setBlurClass('menu-blur visible-burger')

      document.body.classList.add('lock-menu')
    }
    else {
      setBurgerClass('burger-bar unclicked')
      setMenuClass('menu hidden-burger')
      setBlurClass('menu-blur hidden')

      document.body.classList.remove('lock-menu')
    }

    setisMenuClicked(!isMenuClicked)
  }

  //created to not interfere with wide screen display
  const closeMenu = () => {
      setBurgerClass('burger-bar unclicked')
      setMenuClass('menu hidden-burger')
      setBlurClass('menu-blur hidden')

      document.body.classList.remove('lock-menu')
  }

  //LI ELEMENTS COME AFTER BECAUSE THEY USE UPDATE MENU

  const li1Ref = useRef();
  const li1 = (
    <li className="navbar-item">
      <Link
        className='navLink-item'
        activeClass="active"
        to="about"
        smooth={true}
        offset={0}
        duration={500} onClick={closeMenu}>
          <span id='codeFont'>01.</span>
          About
      </Link>
    </li>
  )
  const li2Ref = useRef();
  const li2 = (
    <li className="navbar-item " ref={li2Ref}>
      <Link
        className='navLink-item'
        activeClass="active"
        to="experience"
        smooth={true}
        offset={0}
        duration={500}
        onClick={closeMenu}>
        <span id='codeFont'>02.</span>
        Experience
      </Link>
    </li>
  )
  const li3Ref = useRef();
  const li3 = (
    <li className="navbar-item">
      <Link
        className='navLink-item'
        activeClass="active"
        to="projects"
        smooth={true}
        offset={0}
        duration={500}
        onClick={closeMenu}
      >
        <span id='codeFont'>03.</span>
        Projects
      </Link>
    </li>
  )
  const li4Ref = useRef();
  const li4 = (
    <li className="navbar-item">
      <Link
        className='navLink-item'
        activeClass="active"
        to="contact"
        smooth={true}
        offset={-70}
        duration={500}
        onClick={closeMenu}
      >
        <span id='codeFont'>04.</span>
        Contact
      </Link>
    </li>
  )
  const li5Ref = useRef();
  const li5 = (
    <li className="navbar-item">
      <a href="/Victor-Resume.pdf" target="_blank"><button className='CTA-button' id="resume" onClick={closeMenu}>
        Resume
      </button></a>
    </li>
  )

  const navElements = [[li1,li1Ref,],[li2,li2Ref],[li3,li3Ref],[li4,li4Ref],[li5,li5Ref]]

  

  return (
    <>
      <nav className={`navbar ${visible ? 'visible' : 'hidden'} ${prevScrollPos <= 10 ? 'at-top' : ''}`}>
        <TransitionGroup component={null}>
          {isMounted && (
            <>
            <CSSTransition in={isMounted} nodeRef={logoRef} classNames="fade" timeout={1000}>
              {logo}
            </CSSTransition>
            
            <ul className="navbar-list">
              {navElements.map(([navLi,ref], i) => {
                return (
                  <CSSTransition key={i} in={isMounted} classNames="fadedown" timeout={600} nodeRef={ref}>
                    <span style={{ transitionDelay: `${i + 1}00ms`}} ref={ref}>
                      {navLi}
                    </span>
                  </CSSTransition>
                )
              })}
            </ul>
          </>
          )}
        </TransitionGroup>

      </nav>
      
      {/*DIVIDE FOR NORMAL NAVBAR AND MOBILE NAVBAR*/}

      <nav className={`stick-it-top`}>
        
        <div className={`burger-nav ${visible ? 'visible-nav-mobile' : 'hidden'} ${prevScrollPos <= 10 ? 'at-top' : ''}`}>
          <TransitionGroup component={null}>
            {isMounted && (
            <>
              <CSSTransition in={isMounted} nodeRef={logoRef2} classNames="fade" timeout={1000}>
                {logo2}
              </CSSTransition>

              <CSSTransition in={isMounted} nodeRef={burgerRef} classNames="fade" timeout={1000}>
                <div className='burger-menu' onClick={updateMenu} ref={burgerRef} style={{ transitionDelay: `500ms`}}>
                  <div className={burgerClass}></div>
                  <div className={burgerClass}></div>
                  <div className={burgerClass}></div>
                </div>
              </CSSTransition>
            </>
            )}
          </TransitionGroup>
        </div>

        <div className={menuClass}>
          <ul className="navbar-list-mobile burger-menu">
            {navElements.map(([navLi,ref], i) => {
              return (
                <CSSTransition key={i} in={isMounted} classNames="fadedown" timeout={600} nodeRef={ref}>

                  <span style={{ transitionDelay: `${i + 1}00ms`}} ref={ref}>

                    {navLi}

                  </span>

                </CSSTransition>
              )
            })}
          </ul>
        </div>

        <div className={blurClass} onClick={updateMenu}></div>

        
      </nav>
    </>
  );
};

export default Navbar;
