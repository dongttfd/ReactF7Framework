import * as React from 'react';
import ReactDOM from 'react-dom/client';
import '@/assets/scss/style.scss';
import { App } from './App';
import { f7Bootstrap } from './boot';

f7Bootstrap();

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />,
  </React.StrictMode>
);
