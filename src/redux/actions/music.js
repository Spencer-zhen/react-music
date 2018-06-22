import { songPlay, songDetail } from '~/service';

export function updateSongPlay() {
  return dispatch => {
    songPlay()
    .then((resp) => {
      dispatch({
        type: 'SONGPLAY_UPDATE',
        payload: resp.plist.list,
      });
      })
      .catch(err => {
      });
  };
}

//请求数据
export const fetchMusic = (hash) => {
  return dispatch => {
    // try {
    //   // const song_detail = songDetail(hash)
    //   // console.log(song_detail);
    // } catch (error) {
    //   console.log(error);
    // }
    Promise.all([
      songDetail(hash),
    ]).then((param) => {
      const homeres = param[0];
    })
  }
}