import "./InfoCard.scss";

const InfoCard = ({ title, details }) => {
  return (
    <div className="info-card">
        <h2 className="title">{title}</h2>            
        <h2 className="details">{details}</h2>
    </div>
  )
}

export default InfoCard

