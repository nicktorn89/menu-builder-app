import { library } from '@fortawesome/fontawesome-svg-core';
import { faArrowLeft, faRedo } from '@fortawesome/free-solid-svg-icons';

import React from 'react';
import ReactDOM from 'react-dom';

import { ThemeProvider } from 'styled-components';
import './styles/reset.css';
import * as serviceWorker from './serviceWorker';
import Routes from './routes';

library.add(faArrowLeft, faRedo);

const colorPallete = {
  sandBrown: '#f2aa7a',
  darkSlate: '#121514',
  lightSteel: '#d9dfe1',
  slateGray: '#7d97a0',
  sandBrownTransparent: '#f2aa7a80',
  peru: '#c28a5d'
};

ReactDOM.render(
  <ThemeProvider theme={colorPallete}>
    <Routes />
  </ThemeProvider>,
  document.getElementById('root')
);

serviceWorker.unregister();
