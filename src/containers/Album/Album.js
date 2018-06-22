import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { parse } from 'query-string';

import Layout from '../../components/Layout/Layout';
import { showLoading, hideLoading, resetLoading } from '~/redux/actions/loading';
import { getNewSong, playList } from '~/service';
import s from  './Album.scss';

class Album extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      loaded: false,
      albumInfo: '',
      albumList: ''
    }
  }

  componentWillMount() {
    //this.props.showLoading();
    this.handlePlayList();
    console.log(parse(this.props.location.search).id);
  }

  handlePlayList = () => {
    this.props.resetLoading();
    this.props.showLoading();
    playList(parse(this.props.location.search).id).then((res) => {
      this.props.hideLoading();
      this.setState({
        albumInfo: res.info,
        albumList: res.list
      });
      console.log(res.list);
    }).catch((err) => {
      this.props.hideLoading();
    })
  }

  handleClick() {
    this.setState({
      count: ++this.state.count
    });
  }

  render() {
    const { loaded, new_song, albumInfo, albumList } = this.state;
    console.log(albumInfo && albumInfo.list.imgurl);
    return (
      <div>
        <Layout title="歌单">
          <div className={s.album_top}>
            <div
              className={s.album_bg}
              style={{
                backgroundImage: `url(${albumInfo && albumInfo.list.imgurl.replace(/\{size\}/g, 400)})`
              }}
            />
            <div className={s.album_info}>
              <img
                className={s.album_img}
                src={albumInfo && albumInfo.list.imgurl.replace(/\{size\}/g, 400)}
              />
              <div className={s.album_text}>
                <p>名称：{albumInfo && albumInfo.list.specialname}</p>
                <p>创建人：{albumInfo && albumInfo.list.nickname}</p>
                <p>更新时间:{albumInfo && albumInfo.list.publishtime.split(/\s/)[0]}</p>
              </div>
            </div>
            <div className={s.play_all}>
              <span>播放全部</span>
              <i className="icon-playlist_add" />
            </div>
            <div className={s.album_list}>
              <ul>
                {
                  albumList && albumList.list.info.map((ele, i) => {
                    return (
                      <li key={i}>
                        <Link to={`/play/#${ele.hash}`}>
                          <span>{ele.filename}</span>
                          <p className={s.album_remark}>{ele.remark}</p>
                        </Link>
                        <i className="icon-favorite" />
                      </li>
                    )
                  })
                }
              </ul>
            </div>
          </div>
        </Layout>
        {/* this is home～<br />
        当前计数： {this.state.count}<br />
        <button onClick={() => this.handleClick()}>自增</button><br />
        <div>react</div> */}
      </div>
    )
  }
}

export default connect(
  (state) => ({ songPlay: state.music }),
  { showLoading, hideLoading, resetLoading }
)(Album);