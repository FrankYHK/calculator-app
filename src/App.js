import React, { Component } from 'react';
import { plus, minus, multiply, divide } from './util';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      firstValue : 0,
      secondValue : 0,
      mode: '+',
      result: 0
    }
  }

  render() {
    const { firstValue, secondValue, mode, result } = this.state;
    return (
      <div className="App">
        <main className="calculator-wrap">
          <div className="container">
            <div className="content">
              <select className="number-input" value={firstValue} onChange={this.changeFirstValue}>
                {this.createArray(100).map((value, index) => <option key={value} value={value}>{value}</option>)}
              </select>
              <select value={mode} onChange={this.changeMode}>
                <option value="+">+</option>
                <option value="-">-</option>
                <option value="*">*</option>
                <option value="/">/</option>
              </select>
              <select className="number-input" value={secondValue} onChange={this.changeSecondValue}>
                {this.createArray(100).map((value, index) => <option key={value} value={value}>{value}</option>)}
              </select>
            </div>
            <div className="footer">
              <button onClick={this.clearInput}>clear</button>
              <button onClick={this.calculate}>Calculate</button>
            </div>
          </div>

          <div className="aside">
            <p>Answer<span>{result ? result : 0}</span></p>
          </div>
        </main>
      </div>
    );
  }

  createArray = length => {
    return Array.from({length}).map((value, index) => index);
  }
  changeFirstValue = (e) => {
    const value = e.target.value;
    if (value !== this.state.firstValue) {
      this.setState({
        firstValue: value
      })
    }
  }
  changeSecondValue = (e) => {
    const value = e.target.value;
    if (value !== this.state.secondValue) {
      this.setState({
        secondValue: value
      })
    }
  }
  changeMode = (e) => {
    const value = e.target.value;
    if (value !== this.state.mode) {
      this.setState({
        mode: value
      })
    }
  }
  clearInput = () => {
    this.setState({
      firstValue: 0,
      secondValue: 0,
      result: 0
    })
  }
  calculate = () => {
    const { mode, firstValue, secondValue } = this.state;
    let result = 0;
    switch (mode) {
      case "+":
          result = plus(firstValue, secondValue)
        break;
      case "-":
          result = minus(firstValue, secondValue)
        break;
      case "*":
          result = multiply(firstValue, secondValue)
        break;
      case "/":
          result = divide(firstValue, secondValue)
        break;
      default:
        break;
    }
    this.setState({
      result
    })
  }
}

export default App;
