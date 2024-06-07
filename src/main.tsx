import React from 'react'
import ReactDOM from 'react-dom/client'
import { applyPolyfills, defineCustomElements } from '@telekom/scale-components/loader'
import App from './App.tsx'
import './index.css'
import '@telekom/scale-components/dist/scale-components/scale-components.css';

applyPolyfills().then(() => {
    defineCustomElements(window);
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
)
