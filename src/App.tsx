import { CssBaseline, ThemeProvider } from '@mui/material';
import Layout from './components/common/Layout';
import theme from './theme';
import onboard from './shared/web3/onboard';
import { Web3OnboardProvider } from '@web3-onboard/react';
import useAutoConnectWallet from './hooks/useAutoConnectWallet';
import { RouterProvider } from 'react-router-dom';
import router from './router';

function App() {
  useAutoConnectWallet();

  return (
    <Web3OnboardProvider web3Onboard={onboard}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Layout>
          <RouterProvider router={router} />
        </Layout>
      </ThemeProvider>
    </Web3OnboardProvider>
  );
}

export default App;
