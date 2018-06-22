import React, { Component } from 'react';
import s from './Loading.scss';

export default class extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className={s.loading}>
        <i className="icon-loading" />
      </div>
    );
  }
}
