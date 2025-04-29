import React, { Component } from "react";
import propTypes from "prop-types";
class MyComponent extends Component {
  render() {
    const { name, favoriteNumber, children } = this.props;
    //클래스형 컴포넌트에서 props를 사용할 때는 render함수에서 this.props를 조회하면 된다.
    return (
      <>
        <div>안녕하세요 제 이름은 {name}입니다.</div>
        <div>childeren 값은 {children}입니다.</div>
        <div>favoriteNumber 값은 {favoriteNumber}입니다.</div>
      </>
    );
  }
}
MyComponent.defaultProps = {
  name: "기본이름",
  favoriteNumber: 77,
};

MyComponent.propTypes = {
  name: propTypes.string,
  favoriteNumber: propTypes.number.isRequired,
};
export default MyComponent;
