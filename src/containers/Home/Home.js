import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import HomeHeader from '~/components/HomeHeader/HomeHeader';
import Nav from '~/components/Nav/Nav';
import Recommend from '~/components/Recommend/Recommend';
import Loading from '~/components/Loading/Loading';
import { updateSongPlay, fetchMusic } from '~/redux/actions/music';
import { getNewSong } from '~/service';
import s from './Home.scss';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      loaded: false
    };
  }

  componentWillMount() {
    this.props.updateSongPlay();
    this.props.fetchMusic('A8C97F40843D3E9EBC67E37322466B32');
    getNewSong().then((res) => {
      this.setState({
        new_song: res,
        loaded: true
      });
    });
  }

  handleClick() {
    this.setState({
      count: ++this.state.count
    });
  }

  render() {
    const { loaded, new_song } = this.state;
    const { songPlay } = this.props;
    const propsData = {
      new_song,
      songPlay: songPlay.info
    };
    // console.log(this.props);
    return (
      <div>
        <HomeHeader />
        <Nav />
        {
          loaded ?
            <Recommend {...propsData} /> :
            <Loading />
        }
        {/* this is home～<br />
        当前计数： {this.state.count}<br />
        <button onClick={() => this.handleClick()}>自增</button><br />
        <div>react</div> */}
      </div>
    );
  }
}

Home.propTypes = {
  songPlay: PropTypes.object,
  updateSongPlay: PropTypes.func,
  fetchMusic: PropTypes.func
};

export default connect(
  state => ({ songPlay: state.music }),
  { updateSongPlay, fetchMusic }
)(Home);
