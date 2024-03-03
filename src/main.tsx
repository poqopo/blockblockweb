import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import { MetaMaskContextProvider } from './hooks/useMetaMask';

import './styles/index.css';

import App from './App';

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(
  <React.StrictMode>
    <MetaMaskContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </MetaMaskContextProvider>
  </React.StrictMode>,
);
