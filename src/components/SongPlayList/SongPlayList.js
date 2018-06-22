import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import s from './SongPlayList.scss';

export default class SongPlayList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {
      imgurl, specialname, playcount, specialid
    } = this.props;
    return (
      <li className={s.item}>
        <Link to={`/album?id=${specialid}`}>
          <img src={imgurl.replace(/\{size\}/g, 400)} alt="" />
          <p>{specialname}</p>
          <div className={s.album_tips}>
            <i className="icon-headset" />
            <span>
              {
                playcount > 9999 ?
                  `${(playcount / 10000).toFixed(2)}万` :
                  playcount
              }
            </span>
          </div>
        </Link>
      </li>
    );
  }
}

SongPlayList.propTypes = {
  imgurl: PropTypes.string,
  specialname: PropTypes.string,
  playcount: PropTypes.number,
  specialid: PropTypes.string
};
