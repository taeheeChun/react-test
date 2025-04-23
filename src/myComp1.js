import React, { Component } from 'react';
// 클래스 컴포넌트 처리 방식
// es6 문법으로 처리
class MyClassComponent extends Component {
  // 생성자
  constructor(props) {
    super(props);
    this.state = {
      message: 'Hello from MyClassComponent1 !'
    };
  }

  // 렌더러
  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
      </div>
    );
  }
}

export default MyClassComponent;
