import { Box } from '@mui/material';
import TransferForm from 'src/components/TransferPage/TranferForm';
import WalletFunds from 'src/components/TransferPage/WalletFunds';
import useAccount from 'src/hooks/useAccount';

const TransferPage = () => {
  const account = useAccount();

  return (
    <Box pt={10}>
      <TransferForm />

      {account ? (
        <>
          <Box py={4} />
          <WalletFunds />
        </>
      ) : null}
    </Box>
  );
};

export default TransferPage;
