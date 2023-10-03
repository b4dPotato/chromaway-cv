import { createBrowserRouter } from 'react-router-dom';
import TransferPage from './pages/TransferPage';
import WalletPage from './pages/WalletPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <TransferPage />,
  },
  {
    path: 'about',
    element: <WalletPage />,
  },
]);

export default router;
