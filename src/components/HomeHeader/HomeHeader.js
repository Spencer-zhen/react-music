import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import s from './HomeHeader.scss';

export default class HomeHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    console.log(window.location.pathname);
    return (
      <div className={s.header}>
        <div className={s.cityName}>
          <Link to="">
            <i className="icon-user-circle-o" />
          </Link>
        </div>
        <div className={s.searchBar}>
          <div className={s.searchInput}>
            <i className="icon-search" />
            <input
              type="text"
              className={`input ${s.input_search}`}
              placeholder="请输入关键字"
            />
          </div>
        </div>
        <div className={s.music_icon}>
          <Link to="">
            <div className={s.music_icon_animate}>
              {
                ['one', 'two', 'three', 'four'].map((item, i) => (
                  <span
                    key={i}
                    className={`${item} playing`}
                  />
                ))
              }
            </div>
          </Link>
        </div>
      </div>
    );
  }
}
