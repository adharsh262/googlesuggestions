// Write your code here

import './index.css'

const SuggestionItem = props => {
  const {eachSuggestion, onButtonClicked} = props

  const {id, suggestion} = eachSuggestion

  const isButtonClicked = () => {
    onButtonClicked(id)
  }

  return (
    <li className="listItem">
      <p>{suggestion}</p>
      <button type="button" className="buttonEl" onClick={isButtonClicked}>
        <img
          className="arrowEl"
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
          alt="arrow"
        />
      </button>
    </li>
  )
}

export default SuggestionItem
