import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './routes.js';
import * as serviceWorker from './serviceWorker';
import './styles/reset.css';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faRedo} from '@fortawesome/free-solid-svg-icons';

library.add(faArrowLeft, faRedo);

ReactDOM.render(<Routes />, document.getElementById('root'));

serviceWorker.unregister();
