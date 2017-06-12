import React, { Component } from 'react';
import calculatorImg from "./../calculator.png";

// create a constructor and invoke the super method 
class Calculator extends Component {
    constructor() {
        super();
        this.state = { // set the initial state of the header to "Calculator", etc.
            header: "Calculator",
            display: "0",
            operator: "",
            temp: 0,
            resetDisplay: false
        } 
}
    // class method that sets the header property to the value of val
    updateHeader(val) {
        this.setState({
            header: val
        });
    }

    // class method that allows the clicked button to display on output
    setDisplay(num) {
        // removes the initial zero to add the clicked numbers

        if (this.state.display === "0") {
            this.setState({
                display: num
            });
        }
        // doesn't allow the dnumbers to break out of the display
        else if (this.state.display.length > 12) {
                this.setState({
                    display: this.state.display
            });
        }
        // otherwise concats the next clicked val to the display state
        else {
            this.setState({
                display: this.state.display + num
            });
        }
    }

    // class method that will handle setting the math operator 
    setOperator(operator) {
        if (!this.state.operator) {
            this.setState({
                temp: parseInt(this.state.display, 10),
                display: "0",
                operator: operator
            });
        }
    }

    // class method that will perform the user selected operation 
    calculate() {
        var result; 
        // check if the operator has been set
        if (this.state.operator === "") {
            return;
        }

        // do the requested operation beased on user input
        switch(this.state.operator) {
            case "*":
                result = this.state.temp * parseInt(this.state.display, 10);
                break
            case "/":
                result = this.state.temp / parseInt(this.state.display, 10);
                break;
            case "+":
                result = this.state.temp + parseInt(this.state.display, 10);
                break;
            case "-":
                result = this.state.temp - parseInt(this.state.display, 10);
                break;
            default:
            break;
        }

        // to make sure the result won't break out of the box
        if (String(result).length > 13) {
            result = result.toExponential(8);
            this.setState({display: result});
        }
        else {
            // return the result on the display in string format with max length of 13
            this.setState({display: result});
        }

        
    }

    // class method to clear display by resetting the properties to their default state
    clearDisplay() {
        this.setState({
            display: "0",
            operator: "",
            temp: 0,
            resetDisplay: false
        })

    }


    render() {
        return (
  <div id="calculator-container">
    <input id="header-input"
    // this method tracks changes to the header. e represents the changeEvent object
    onChange={ (e) => {this.updateHeader(e.target.value); }}/>
    <h1 id="header"  // change Calculator to the value of the header property on state
    > {this.state.header} </h1> 
    <img className="remove-highlight" src={calculatorImg} alt="calculator" />
    <div id="calculator-mask" className="remove-highlight">
      <div className="output">
        <span className="total" // change the value to the value of the display property
        >{this.state.display}</span>
      </div>

      <div className="btn clear" onClick={ () => {this.clearDisplay();}}></div>

      <div // all buttons are calling the setDisplay method onClick to set the number in string format
      className="btn zero" onClick={ () => {this.setDisplay("0");}}></div>
      <div className="btn one" onClick={ () => {this.setDisplay("1");}}></div>
      <div className="btn two" onClick={ () => {this.setDisplay("2");}}></div>
      <div className="btn three" onClick={ () => {this.setDisplay("3");}}></div>
      <div className="btn four" onClick={ () => {this.setDisplay("4");}}></div>
      <div className="btn five" onClick={ () => {this.setDisplay("5");}}></div>
      <div className="btn six" onClick={ () => {this.setDisplay("6");}}></div>
      <div className="btn seven" onClick={ () => {this.setDisplay("7");}}></div>
      <div className="btn eight" onClick={ () => {this.setDisplay("8");}}></div>
      <div className="btn nine" onClick={ () => {this.setDisplay("9");}}></div>

      <div className="btn equal" onClick={ () => {this.calculate();}}></div>

      <div className="btn multiply" onClick={ () => {this.setOperator("*");}}></div>
      <div className="btn divide" onClick={ () => {this.setOperator("/");}}></div>
      <div className="btn subtract" onClick={ () => {this.setOperator("-");}}></div>
      <div className="btn add" onClick={ () => {this.setOperator("+");}}></div>
    </div>
  </div>
)
    }
}
export default Calculator;

