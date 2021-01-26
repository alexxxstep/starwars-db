import React, {Component} from 'react'
import SwapiService from '../../services/swapi-service'
import ErrorIndicator from '../error-indicator'
import Spinner from '../spinner'
import PersonView from './person-view'

import './person-details.css'

export default class PersonDetails extends Component {
  swapiService = new SwapiService()

  state = {
    person: null,
    loading: true,
    error: false,
  }

  componentDidMount() {
    this.updatePerson()
  }

  componentDidUpdate(prevProps) {
    if (this.props.personId !== prevProps.personId) {
      this.updatePerson()
    }
  }

  onError = (err) => {
    this.setState({error: true, loading: false})
  }

  updatePerson = () => {
    const {personId} = this.props
    // debugger

    if (!personId) {
      return
    }

    this.swapiService
      .getPerson(personId)
      .then((person) => {
        this.setState({person, loading: false})
      })
      .catch(this.onError)
  }

  render() {
    const {person, loading, error} = this.state

    if (!person) {
      return <span>Select a person from list</span>
    }

    const isData = !(loading || error)

    const errorMessage = error ? <ErrorIndicator /> : null
    const spinner = loading ? <Spinner /> : null
    const content = isData ? <PersonView person={person} /> : null

    return (
      <div className="person-details card">
        {errorMessage}
        {spinner}
        {content}
      </div>
    )
  }
}
