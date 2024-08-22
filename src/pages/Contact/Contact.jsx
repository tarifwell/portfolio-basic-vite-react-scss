import './Contact.scss';
import Social from '../../components/Social/Social';

import github from "../../assets/social_github_1.png";
import linkedin from '../../assets/social_linkedin_1.png'
import whatsapp from '../../assets/social_whatsapp_1.png'
import facebook from '../../assets/social_facebook_1.png'
import discord from '../../assets/social_discord_1.png'
import twitter from '../../assets/social_twitter_1.png'

const Contact = () => {
  return (
    <div className='contact'>
      <h1>Get in touch</h1>
      <sapn>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae dolorum molestias eaque architecto adipisci necessitatibus, quas et blanditiis aperiam modi!</sapn>

      <div className="socials">
        
        <Social logo={github} title="GitHub" />
        <Social logo={linkedin} title="Linkedin" />
        <Social logo={whatsapp} title="Whatsapp" />
        <Social logo={facebook} title="Facebook" />
        <Social logo={discord} title="Discord" />
        <Social logo={twitter} title="Twitter" />
        
        {/* <a href="mailto:your_email@example.com">
          <i className="fas fa-envelope"></i>
        </a>
        <a href="https://www.linkedin.com/in/your-linkedin-username/">
          <i className="fab fa-linkedin"></i>
        </a>
        <a href="https://github.com/your-github-username/">
          <i className="fab fa-github"></i>
        </a> */}
      </div>

      <footer>
        <span>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat excepturi ipsam beatae consequatur? Sequi, rem.</span>
      </footer>
    </div>
  )
}

export default Contact