// Write your React code here.
import {Component} from 'react'

import './index.css'

class Feedback extends Component {
  state = {isTrue: false}

  buttonClick = () => {
    this.setState({isTrue: true})
  }

  render() {
    const {resources} = this.props
    const {isTrue} = this.state
    const {emojis, loveEmojiUrl} = resources
    return (
      <div className="main-container">
        {!isTrue && (
          <div className="inner-holder">
            <h1 className="para1">
              How satisfied are you with our customer support performance
            </h1>
            <ul className="emoji-holder">
              {emojis.map(eachObject => (
                <li className="emoji" key={eachObject.id}>
                  <button
                    type="button"
                    className="emoji-button"
                    onClick={this.buttonClick}
                  >
                    <img
                      src={eachObject.imageUrl}
                      className="image"
                      alt={eachObject.name}
                    />
                  </button>
                  <p className="emoji-name">{eachObject.name}</p>
                </li>
              ))}
            </ul>
          </div>
        )}
        {isTrue && (
          <div className="inner-holder2">
            <img src={loveEmojiUrl} className="red-emoji" alt="love emoji" />
            <h1 className="text">Thank You!</h1>
            <p className="para2">
              We will use your feedback to improve our customer support
              performance
            </p>
          </div>
        )}
      </div>
    )
  }
}
export default Feedback
