import './Tag.scss';

const Tag = ({ title, akey }) => {
  return (
    <div className="tag" key={akey}>
        <h2 className="title">{title}</h2>
    </div>
  )
}

export default Tag