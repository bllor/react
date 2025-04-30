import React, { Component } from "react";
class EventPractice extends Component {
  state = {
    message: "",
  };

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    // this.handleClick = this.handleClick.bind(this);
  }
  handleChange(e) {
    this.setState({
      message: e.target.value,
    });
  }
  render() {
    return (
      <div>
        <div>이벤트 연습</div>
        <input
          type="text"
          name="message"
          placeholder="아무거나 입력해 보세요."
          value={this.state.message}
          //   onChange={(e) => {
          //     //e객체는 syntheticevent로 웹 브라우저의 네이티브 이벤트를 감싸는 객체입니다.
          //     //syntheticEvent는 네이티브 이벤트와 달리 이벤트가 끝나고 나면 이벤트가 초기화되므로 정보를 참조할 수 없습니다
          //     //만약 비동기적으로 이벤트 객체를 참조할 일이 있다면 e.persist()함수를 호출해주어야 합니다.
          //     //리액트 버전 17이상부터는 이벤트가 초기화 되지 않으므로 e.persist()를 사용하지 않아도 된다.
          //     console.log("e", e.target.value);
          //     this.setState({ message: e.target.value });
          //   }}
          onChange={this.handleChange}
        ></input>
      </div>
    );
  }
}
export default EventPractice;
