import React, { Component } from 'react';
import PropTypes from 'prop-types';

import s from './Header.scss';

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  handleBack = () => {
    window.history.back();
  }
  render() {
    const {
      style, title, rightIcon, rightIconStyle, rightAction
    } = this.props;
    return (
      <div className={s.header} style={style || null}>
        <div
          className={s.header_back}
          onClick={this.handleBack}
        >
          <i className="icon-keyboard_arrow_left" />
        </div>
        <div className={s.title}>
          {title}
        </div>
        <div className={s.header_right}>
          {
            rightIcon ?
              <i
                className={rightIcon}
                style={rightIconStyle}
                onClick={rightAction}
              /> : null
          }
        </div>
      </div>
    );
  }
}

Header.propTypes = {
  style: PropTypes.object,
  title: PropTypes.string,
  rightIcon: PropTypes.bool,
  rightIconStyle: PropTypes.object,
  rightAction: PropTypes.func
};

Header.defaultProps = {};
