import "./Header.scss";
import logo from "../../assets/logo_folio_7.png";
import profileImage from "../../assets/profile-1.jpg";
import { useRef, useEffect } from "react";

const Header = ({ activePageIndex, setActivePageIndex, isProfileVisible }) => {

  const indicatorRef = useRef(null);
  const navLinksRef = useRef([]);

  useEffect(() => {
    
    const link = navLinksRef.current[activePageIndex];

    if (link) {
      const { offsetWidth: width, offsetLeft: left} = link;

      indicatorRef.current.style.left = `${left}px`;      
      indicatorRef.current.style.width = `${width + 28}px`;
    }

  }, [activePageIndex]);  

  return (
    <header>
      <div className="logo">
        <img src={logo} alt="Portfolio Logo" />
        <h1>
          PORTFOLIO <i>@tarifwell</i>
        </h1>
      </div>

      <nav>
        <ul>
          <div className="indicator" ref={indicatorRef}></div>
          {["HOME", "ABOUT", "PROJECTS", "CONTACT"].map((text, index) => (
            <li
              key={index}
              className={index === activePageIndex ? "active" : ""}
              onClick={() => setActivePageIndex(index)}
              ref={(el) => (navLinksRef.current[index] = el)}
            >
              <a href={`#${text.toLowerCase().replace(" ", "")}`} aria-current={index === activePageIndex ? "page" : undefined}>{text}</a>
            </li>
          ))}
        </ul>
      </nav>

      <div className={`profile ${isProfileVisible ? 'active' : ''}`}>
        <img src={profileImage} alt="Profile" />
      </div>
    </header>
  );
};

export default Header;
