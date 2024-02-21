// Write your code here

import {Component} from 'react'

import SuggestionItem from '../SuggestionItem'

import './index.css'

class GoogleSuggestions extends Component {
  state = {inputElement: '', suggestionsList: this.props}

  onChangingInput = event => {
    this.setState({inputElement: event.target.value})
  }

  onButtonClicked = val => {
    const {suggestionsList} = this.state
    const suggList = suggestionsList.suggestionsList
    const reqSuggestion = suggList.filter(each => each.id === val)
    const {id, suggestion} = reqSuggestion[0]
    this.setState({suggestionsList: suggestion})
  }

  render() {
    const {inputElement, suggestionsList} = this.state

    const searchResults = suggestionsList.filter(eachSug =>
      eachSug.suggestion.toLowerCase().includes(inputElement),
    )

    return (
      <div className="bgContainer">
        <div>
          <div className="cardContainer">
            <div className="inputContainer">
              <img
                alt="search icon"
                src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png "
              />
              <input
                type="text"
                className="inputEl"
                onChange={this.onChangingInput}
                value={inputElement}
              />
            </div>

            <ul>
              {searchResults.map(eachSuggestion => (
                <SuggestionItem
                  eachSuggestion={eachSuggestion}
                  key={eachSuggestion.id}
                  onButtonClicked={this.onButtonClicked}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions
