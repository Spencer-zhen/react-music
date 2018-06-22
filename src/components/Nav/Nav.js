import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import s from './Nav.scss';

export default class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    console.log(window.location.pathname);
    return (
      <ul className={s.nav}>
        {
          this.props.tabs.map((item, i) => (
            <li
              className={window.location.pathname === item.path ? 'nav-active' : ''}
              key={i}
            >
              <Link to={`${item.path}`}>
                {item.text}
              </Link>
            </li>
          ))
        }
      </ul>
    );
  }
}

Nav.propTypes = {
  tabs: PropTypes.array
};

Nav.defaultProps = {
  tabs: [
    {
      text: '个性推荐',
      path: '/'
    },
    {
      text: '新歌',
      path: '/new'
    },
    {
      text: '排行榜',
      path: '/rank'
    },
    {
      text: '歌手',
      path: '/artist'
    }
  ]
};
