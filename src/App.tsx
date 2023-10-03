import { RouterProvider } from 'react-router-dom';
import Layout from './components/common/Layout';
import useAutoConnectWallet from './hooks/useAutoConnectWallet';
import useAutoDetectNetwork from './hooks/useAutoDetectNetwork';
import router from './router';

function App() {
  useAutoConnectWallet();
  useAutoDetectNetwork();

  return (
    <Layout>
      <RouterProvider router={router} />
    </Layout>
  );
}

export default App;
