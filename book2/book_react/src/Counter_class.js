import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);
    //state의 초깃값
    this.state = {
      number: 0,
      word: "",
      changeYN: true,
    };
  }
  render() {
    const { number, word, changeYN } = this.state;
    return (
      <div>
        <h1>{number}</h1>
        <h1>{word}</h1>
        <div>
          <button
            onClick={() => {
              this.setState({ number: number + 1 });
            }}
          >
            +1
          </button>
          <button
            onClick={() => {
              this.setState({ number: 0 });
            }}
          >
            reset
          </button>
          <button
            onClick={() => {
              this.setState({ number: number - 1 });
            }}
          >
            -1
          </button>
        </div>
        <div>
          <button
            onClick={() => {
              this.setState({
                word: changeYN ? "비아" : "보리",
              });
            }}
          >
            {changeYN ? "비아" : "보리"}
          </button>
          {/* <button
            onClick={() => {
              this.setState((prevState) => {
                !prevState.changeYN;
              });
            }}
          > */}
          <button
            onClick={() => {
              this.setState((prevState) => ({
                changeYN: !prevState.changeYN,
              }));
            }}
          >
            교체
          </button>
          <button
            onClick={() => {
              this.setState((prevState) => ({
                word: prevState.word + "귀염둥이",
              }));
            }}
          >
            귀염둥이
          </button>
        </div>
      </div>
    );
  }
}
export default Counter;
