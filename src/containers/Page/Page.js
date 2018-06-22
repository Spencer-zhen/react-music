import React, { Component } from 'react';

export default class Page extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    }
  }

  handleClick() {
    this.setState({
      count: ++this.state.count
    });
  }

  render() {
    return (
      <div>
        this is page～<br />
        当前计数： {this.state.count}<br />
        <button onClick={() => this.handleClick()}>自增</button><br />
      </div>
    )
  }
}