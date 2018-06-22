import React, { Component } from 'react';
import Header from '~/components/Header/Header';

import s from './Play.scss';

class Play extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className={s.container_full}>
        <div className={s.container_bg} />
        <div className={s.container_play}>
          <Header style={{ background: 'transparent' }} />
          <div className={s.container_inner}>
            <div className={s.player_title}>
              <div className={s.song_name}>
                currentSong.songName
              </div>
              <div className={s.singer_name}>
                - currentSong.singer_name -
              </div>
              <div className={s.dot}>
                <i className="icon-more_horiz" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Play;
