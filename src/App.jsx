import './App.scss'
import Header from './components/Header/Header'
import Social from './components/Social/Social'
import About from './pages/About/About'
import Home from './pages/Home/Home'
import Projects from './pages/Projects/Projects'

import github from './assets/social_github_1.png'
import linkedin from './assets/social_linkedin_1.png'
import whatsapp from './assets/social_whatsapp_1.png'
import facebook from './assets/social_facebook_1.png'
import discord from './assets/social_discord_1.png'
import twitter from './assets/social_twitter_1.png'


function App() {

  return (
    <div className="App">
      <Header />

      <main>
        <div className="page" id="home">
          <Home />
        </div>

        <div className="page" id="about">
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

        <div className="page" id="projects">
          <Projects />
        </div>

      </main>

    </div>
  )
}

export default App
