import {
  Button,
  ButtonProps,
  CircularProgress,
  Paper,
  Popover,
  styled,
} from '@mui/material';
import { useConnectWallet } from '@web3-onboard/react';
import { useId, useRef } from 'react';
import useAccount from '../../hooks/useAccount';
import usePopupState from '../../hooks/usePopupState';
import { useWalletStore } from '../../state';
import concatAddress from 'src/utils/concat-address';

const StyledButton = styled(Button)(({ theme }) => ({
  width: 120,
  height: 40,
  fontWeight: 600,
  color: theme.palette.common.white,
  ':disabled': {
    opacity: 1,
  },
}));

const ConnectButton = (props: ButtonProps) => {
  const [{ wallet, connecting }, connect, disconnect] = useConnectWallet();
  const { clearWallet, setLastUsedWallet } = useWalletStore();
  const account = useAccount();

  const id = useId();
  const buttonEl = useRef<HTMLButtonElement | null>(null);
  const { isOpen, open, close } = usePopupState();

  const connectWallet = async () => {
    const wallets = await connect();
    const connectedWallet = wallets[0];
    setLastUsedWallet(connectedWallet.label);
  };

  const disconnectWallet = () => {
    if (wallet) {
      clearWallet();
      disconnect(wallet);
      close();
    }
  };

  if (account) {
    return (
      <>
        <StyledButton
          ref={buttonEl}
          onClick={open}
          variant="outlined"
          color="secondary"
          {...props}
        >
          {concatAddress(account)}
        </StyledButton>
        <Popover
          id={id}
          open={isOpen}
          anchorEl={buttonEl.current}
          onClose={close}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
        >
          <Paper sx={{ p: 1, width: 140, textAlign: 'center' }}>
            <Button
              size="small"
              onClick={disconnectWallet}
              variant="text"
              color="primary"
            >
              Disconnect
            </Button>
          </Paper>
        </Popover>
      </>
    );
  }

  return (
    <StyledButton
      onClick={connectWallet}
      variant="contained"
      color="secondary"
      disabled={connecting}
      {...props}
    >
      {connecting ? (
        <CircularProgress sx={{ color: 'white' }} size="1.3rem" />
      ) : (
        <>Connect</>
      )}
    </StyledButton>
  );
};

export default ConnectButton;
