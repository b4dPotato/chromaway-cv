import { CssBaseline, ThemeProvider } from '@mui/material';
import Layout from './components/common/Layout';
import theme from './theme';
import onboard from './shared/web3/onboard';
import { Web3OnboardProvider } from '@web3-onboard/react';
import useAutoConnectWallet from './hooks/useAutoConnectWallet';
import { RouterProvider } from 'react-router-dom';
import router from './router';
import { useNetworkStore } from './state';
import { useLayoutEffect } from 'react';
import { networks } from './constants/networks';

function App() {
  const { network, setNetwork } = useNetworkStore();
  useAutoConnectWallet();

  useLayoutEffect(() => {
    if (!network) {
      setNetwork(networks[0]);
    }
  }, [network, setNetwork]);

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
