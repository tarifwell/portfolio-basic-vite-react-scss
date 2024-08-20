import "./Header.scss";
import logo from "../../assets/logo_folio8.png";
import profile from "../../assets/profile-1.jpg";
import { useState, useEffect, useRef } from "react";

const Header = () => {

  const [activeIndex, setActiveIndex] = useState(0);
  const indicatorRef = useRef(null);
  const navLinksRef = useRef([]);

  useEffect(() => {
    
    const link = navLinksRef.current[activeIndex];

    if (link) {
      const { offsetWidth: width, offsetLeft: left} = link;

      indicatorRef.current.style.left = `${left}px`;
      //indicatorRef.current.style.width = `${width + 28}px`;
      indicatorRef.current.style.width = `${width + 28}px`;
    }

  }, [activeIndex]);  

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
          {["HOME", "ABOUT", "ALL PROJECTS", "CONTACT"].map((text, index) => (
            <li
              key={index}
              className={index === activeIndex ? "active" : ""}
              onClick={() => setActiveIndex(index)}
              ref={(el) => (navLinksRef.current[index] = el)}
            >
              <a href={`#${text.toLowerCase().replace(" ", "")}`} aria-current={index === activeIndex ? "page" : undefined}>{text}</a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="profile">
        <img src={profile} alt="Profile" />
      </div>
    </header>
  );
};

export default Header;
