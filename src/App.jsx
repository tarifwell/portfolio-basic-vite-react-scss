import './App.scss'
import { useEffect, useRef, useState } from 'react'
import Header from './components/Header/Header'
import Social from './components/Social/Social'
import About from './pages/About/About'
import Home from './pages/Home/Home'
import Projects from './pages/Projects/Projects'
import Contact from './pages/Contact/Contact'

import github from './assets/social_github_1.png'
import linkedin from './assets/social_linkedin_1.png'
import whatsapp from './assets/social_whatsapp_1.png'
import facebook from './assets/social_facebook_1.png'
import discord from './assets/social_discord_1.png'
import twitter from './assets/social_twitter_1.png'

function App() {

  const [activePageIndex, setActivePageIndex] = useState(0);
  const [isProfileVisible, setIsProfileVisible] = useState(false);
  const pagesRef = useRef([]);

  useEffect(() => {

    const handleScroll = () => {

      const homePage = pagesRef.current[0];
      if (!homePage) return; // be sure that page exists

      let homeBottom = homePage.getBoundingClientRect().bottom;
      let homeHeight = homePage.offsetHeight;

      // to hide or show the profile element (of the navbar in the Header)
      if (homeBottom < (homeHeight / 2)) {
        setIsProfileVisible(true);       
      }else {
        setIsProfileVisible(false);
      }

      // Manage active page update and navigation indicator (in the Header)
      pagesRef.current.forEach((page, index) => {
        if (!page) return; // be sure that currentPage exists

        const pageTop = page.getBoundingClientRect().top;
        if (pageTop < 300) {
          setActivePageIndex(index);
        }
      });      
    }

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="App">
      <Header 
        activePageIndex={activePageIndex} 
        setActivePageIndex={setActivePageIndex}
        isProfileVisible={isProfileVisible}
      />

      <main>
        <div className="page" id="home" ref={el => (pagesRef.current[0] = el)}>
          <Home />
        </div>

        <div className="page" id="about" ref={el => (pagesRef.current[1] = el)}>
          <About />
        </div>

        <div className="socials-wrapper" id="quick-links">
          <h2 className="quick-links">Quick Links</h2>
          <div className="socials">
            <Social logo={github} title="GitHub" />
            <Social logo={linkedin} title="Linkedin" />
            <Social logo={whatsapp} title="Whatsapp" />
            <Social logo={facebook} title="Facebook" />
            <Social logo={discord} title="Discord" />
            <Social logo={twitter} title="Twitter" />
          </div>
        </div>

        <div className="page" id="projects" ref={el => (pagesRef.current[2] = el)}>
          <Projects />
        </div>

        <div className="page" id="contact" ref={el => (pagesRef.current[3] = el)}>
          <Contact />
        </div>

      </main>
    </div>
  )
}

export default App
