import React, {Component} from 'react'

import Header from '../header'
import RandomPlanet from '../random-planet'
import ItemList from '../item-list'
import PersonDetails from '../person-details'

import './app.css'
import ErrorIndicator from '../error-indicator'

export default class App extends Component {
  state = {
    showRandomPlanet: true,
    hasError: false,
    selectedPerson: null,
  }

  toggleRandomPlanet = () => {
    this.setState((state) => {
      return {
        showRandomPlanet: !state.showRandomPlanet,
      }
    })
  }

  componentDidCatch() {
    this.setState({hasError: true})
  }

  onPersonSelected = (id) => {
    console.log('selectedPerson ', id)
    this.setState({
      selectedPerson: id,
    })

    console.log(this.state)
  }

  render() {
    if (this.state.hasError) {
      return <ErrorIndicator />
    }

    const planet = this.state.showRandomPlanet ? <RandomPlanet /> : null

    return (
      <div>
        <Header />
        {planet}

        <div className="row mb2 button-row">
          <button
            className="toggle-planet btn btn-warning btn-lg"
            onClick={this.toggleRandomPlanet}
          >
            Toggle Random Planet
          </button>
        </div>

        <div className="row mb2">
          <div className="col-md-6">
            <ItemList onItemSelected={this.onPersonSelected} />
          </div>
          <div className="col-md-6">
            <PersonDetails personId={this.state.selectedPerson} />
          </div>
        </div>
      </div>
    )
  }
}
