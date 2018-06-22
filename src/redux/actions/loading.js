export function showLoading() {
  return {
    type: 'LOADING_SHOW'
  }
}

export function hideLoading() {
  return {
    type: 'LOADING_HIDE'
  }
}

export function resetLoading() {
  return {
    type: 'LOADING_RESET'
  }
}