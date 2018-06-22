import Request from '../core/request';

export const getNewSong = () => {
  return Request.get({
    url: '/kugou/?json=true'
  })
}

export const songPlay = () => {
  return Request.get({
    url: '/kugou/plist/index&json=true'
  });
}

export const playList = (id) => {
  return Request.get({
    url: `/kugou/plist/list/${id}?json=true`
  })
}

export const songDetail = (hash) => {
  return Request.asyncGet(`/kugou/app/i/getSongInfo.php?cmd=playInfo&hash=${hash}`)
}