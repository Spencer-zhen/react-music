import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import SongPlayList from '../SongPlayList/SongPlayList';

import s from './Recommend.scss';

class Recommend extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    console.log(this.props);
    const setting = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true
    };
    const { new_song, songPlay } = this.props;
    const carousel = new_song && new_song.banner.map((ele, i) => (
      <div key={i}>
        <img src={ele.imgurl} alt={ele.title} />
      </div>
    ));
    return (
      <div className={s.content}>
        <div className={s.content_inner}>
          <Slider {...setting}>
            { carousel }
          </Slider>
          <Link to="/albumlist" className={s.title}>
            <span>推荐歌单</span>
            <i className="icon-keyboard_arrow_right" />
          </Link>
          <ul className="clearfix pd-3">
            {
              songPlay && songPlay.map((res, i) => <SongPlayList {...res} key={i} />)
            }
          </ul>
        </div>
      </div>
    );
  }
}

Recommend.propTypes = {
  new_song: PropTypes.object,
  songPlay: PropTypes.array
};

Recommend.defaultProps = {
  new_song: {}
};

export default Recommend;
