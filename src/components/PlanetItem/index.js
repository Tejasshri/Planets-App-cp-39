import './index.css'

const PlanetItem = props => {
  const {planetDetails} = props
  const {description, id, imageUrl, name} = planetDetails
  console.log(description, id, imageUrl, name)

  return (
    <li className="planet-item">
      <img
        className="planet-item-image"
        alt={`planet ${name}`}
        src={imageUrl}
      />
      <h1 className="planet-item-title">{name}</h1>
      <p className="planet-item-description">{description}</p>
    </li>
  )
}

export default PlanetItem
