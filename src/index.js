import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';
import store from './redux/store';

import RouterMap from './router/router';

// 初始化
renderWithHotReload(RouterMap());

if (module.hot) {
  module.hot.accept('./router/router', () => {
    const RouterMap = require('./router/router').default;
    renderWithHotReload(RouterMap());
  });
}

function renderWithHotReload(RootElement) {
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        {RootElement}
      </Provider>
    </AppContainer>,
    document.getElementById('app')
  );
}