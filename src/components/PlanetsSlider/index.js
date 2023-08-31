import Slider from 'react-slick'
import './index.css'

import PlanetItem from '../PlanetItem'

const PlanetsSlider = props => {
  const {planetsList} = props

  const setting = {
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
  }

  return (
    <div className="slider-container" data-testid="planets">
      <h1 className="main-heading">Planets</h1>
      <Slider {...setting}>
        {planetsList.map(each => (
          <PlanetItem planetDetails={each} key={each.id} />
        ))}
      </Slider>
    </div>
  )
}

export default PlanetsSlider
