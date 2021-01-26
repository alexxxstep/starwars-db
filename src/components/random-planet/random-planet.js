import React, {Component} from 'react'
import SwapiService from '../../services/swapi-service'
import Spinner from '../spinner'
import PlanetView from './planet-view'
import ErrorIndicator from '../../components/error-indicator'

import './random-planet.css'

export default class RandomPlanet extends Component {
  SwapiService = new SwapiService()

  state = {
    planet: {},
    loading: true,
    error: false,
  }

  componentDidMount() {
    this.updatePlanet()
    this.interval = setInterval(this.updatePlanet, 10000)
  }

  onPlanetLoaded = (planet) => {
    this.setState({planet, loading: false})
  }

  onError = (err) => {
    this.setState({error: true, loading: false})
  }

  updatePlanet = () => {
    const id = Math.floor(Math.random() * 25) + 2
    // const id = 2400

    this.SwapiService.getPlanet(id)
      .then(this.onPlanetLoaded)
      .catch(this.onError)
  }

  render() {
    const {planet, loading, error} = this.state

    const isData = !(loading || error)

    const errorMessage = error ? <ErrorIndicator /> : null
    const spinner = loading ? <Spinner /> : null
    const content = isData ? <PlanetView planet={planet} /> : null

    return (
      <>
        <div className="random-planet jumbotron rounded">
          {errorMessage}
          {spinner}
          {content}
        </div>
      </>
    )
  }
}
