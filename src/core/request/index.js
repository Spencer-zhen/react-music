import 'whatwg-fetch';
import 'es6-promise';
import { stringify } from 'query-string';

const _fetch = (requestPromise, timeout) => {
  let timeoutAction = null;
  const timerPromise = new Promise((resolve, reject) => {
    timeoutAction = () => {
      reject('请求超时')
    }
  })
  setTimeout(() => {
    timeoutAction();
  }, timeout);
  return Promise.race([requestPromise, timerPromise]);
}

const get = (params) => {
  const { url } = params;
  const myFetch = fetch(url);
  return new Promise((resolve, reject) => {
    _fetch(myFetch, 20000)
    .then(response => {
      return response.json();
    })
    .then(responseData => {
      resolve(responseData)
    })
    .catch(error => {
      reject(error);
    })
  })
}

const post = (params) => {
  const { url, body } = params;
  const jsonBody = stringify(body);
  const myFetch = fetch(url, {
    method: 'post',
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/x-www-form-urlencoded;charset=utf-8"
    },
    body: jsonBody,
  });

  return new Promise((resolve, reject) => {
    _fetch(myFetch, 20000)
    .then(response => {
      return response.json();
    })
    .then(responseData => {
      resolve(responseData)
    })
    .catch(error => {
      reject(error);
    })
  })
}

// const asyncGet = (params) => {
//   const { url } = params;
//   return new Promise((resolve, reject) => {
//     fetch(url)
//     .then(response => {
//         return response.json();
//     })
//     .then(responseData=>{
//         resolve(responseData)
//     })
//     .catch(error=>{
//         reject(error);
//      });
//   });
// };

const asyncGet = (url) => {
  return fetch(url)
}

export default { get, post, asyncGet };