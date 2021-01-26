import React from 'react'

const PlanetView = ({planet}) => {
  const {id, name, population, rotationPeriod, diameter} = planet

  const imgPlanet = `https://starwars-visualguide.com/assets/img/planets/${id}.jpg`

  // if (!imgPlanet) {
  //   imgPlanet = '../error-indicator/death-star.png'
  // }

  return (
    <>
      {imgPlanet && (
        <img
          className="planet-image"
          src={imgPlanet}
          alt="description of image"
        />
      )}
      <div>
        <h4>{name}</h4>
        <ul className="list-group list-group-flush">
          {population && (
            <li className="list-group-item">
              <span className="term">Population</span>
              <span>{population}</span>
            </li>
          )}
          {rotationPeriod && (
            <li className="list-group-item">
              <span className="term">Rotation Period</span>
              <span>{rotationPeriod}</span>
            </li>
          )}
          {diameter && (
            <li className="list-group-item">
              <span className="term">Diameter</span>
              <span>{diameter}</span>
            </li>
          )}
        </ul>
      </div>
    </>
  )
}

export default PlanetView
