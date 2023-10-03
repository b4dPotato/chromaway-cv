import { CssBaseline, ThemeProvider } from '@mui/material';
import { Web3OnboardProvider } from '@web3-onboard/react';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import onboard from './shared/web3/onboard';
import theme from './theme';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Web3OnboardProvider web3Onboard={onboard}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <App />
      </ThemeProvider>
    </Web3OnboardProvider>
  </React.StrictMode>
);
