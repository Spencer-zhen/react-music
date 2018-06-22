import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Layout from '~/components/Layout/Layout';
import SongPlayList from '~/components/SongPlayList/SongPlayList';
import {
  showLoading,
  hideLoading,
  resetLoading
} from '~/redux/actions/loading';
import { updateSongPlay } from '~/redux/actions/music';

class AlbumList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillMount() {
    this.props.updateSongPlay();
  }

  componentDidMount() {
  }

  render() {
    const { songPlay } = this.props;

    return (
      <Layout title="精选歌单">
        <ul className="clearfix pd-3">
          {
            songPlay.info && songPlay.info.map((res, i) => <SongPlayList {...res} key={i} />)
          }
        </ul>
      </Layout>
    );
  }
}

AlbumList.propTypes = {
  updateSongPlay: PropTypes.func,
  songPlay: PropTypes.array
}

export default connect(
  state => ({
    songPlay: state.music
  }),
  {
    updateSongPlay,
    showLoading,
    hideLoading,
    resetLoading
  }
)(AlbumList);

