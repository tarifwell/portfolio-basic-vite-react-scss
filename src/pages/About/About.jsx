import InfoCard from "../../components/InfoCard/InfoCard";
import "./About.scss";

const About = () => {
  let mock_text = "Mock text:: Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus vel laborum quas delectus obcaecati magnam expedita labore, odit excepturi ab doloribus aliquam dignissimos cupiditate veritatis tempora error aliquid voluptate repellat maxime quo aut ratione. Cumque, perspiciatis vero harum fuga earum soluta reprehenderit, nobis enim magnam ab, itaque cupiditate ex expedita.";

  return (
    <div className='about'>
        <div className="name">
          <div>
            <h1 className="txt">AB <br /> OU </h1>
          </div>
          <h1 className="txt lg">T</h1>
          <div className="me">ME</div>
        </div>

        <div className="info">
          <InfoCard title="About me" details={mock_text} />
          <InfoCard title="Education" details={mock_text} />
          <InfoCard title="Skills" details={mock_text} />
          <InfoCard title="Social life" details={mock_text} />
        </div>

        
    </div>
  )
}

export default About