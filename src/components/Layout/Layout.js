import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Header from '../Header/Header';
import Loading from '../Loading/Loading';
import s from './Layout.scss';

class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {
      hideHeader,
      children
    } = this.props;

    console.log(this.props);
    return (
      <div className={s.root}>
        {
          hideHeader ? null :
            <Header {...this.props} />
        }
        <section className={`${s.wrap}`}>
          {children}
        </section>
        {
          this.props.showLoading ?
            <Loading /> : null
        }
      </div>
    );
  }
}

Layout.propTypes = {
  showLoading: PropTypes.func,
  hideHeader: PropTypes.bool,
  children: PropTypes.node
};

export default connect(state => ({ showLoading: state.loading > 0 }))(Layout);
