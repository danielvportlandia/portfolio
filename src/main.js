'use strict';

import React from 'react';
import { hydrate, render } from 'react-dom';
import App from './components/app/app';

const app = document.createElement('div');
document.body.appendChild(app);

if (app.hasChildNodes()) {
  hydrate(<App/>, app);
} else {
  render(<App/>, app);
}
