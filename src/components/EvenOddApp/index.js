// Write your code here
import {Component} from 'react'
import './index.css'

class EvenOddApp extends Component {
  state = {count: 0}

  onIncrement = () => {
    this.setState(prevState => ({
      count: prevState.count + Math.ceil(Math.random() * 100),
    }))
  }

  render() {
    const {count} = this.state
    const evenOddState = count % 2 === 0 ? 'Even' : 'Odd'
    return (
      <div className="bg-container">
        <h1 className="heading">Count {count}</h1>
        <p className="state">Count is {evenOddState}</p>
        <button className="button" type="button" onClick={this.onIncrement}>
          Increment
        </button>
        <p className="description">
          *Increase By Random Number Between 0 to 100
        </p>
      </div>
    )
  }
}

export default EvenOddApp
