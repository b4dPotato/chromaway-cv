import { Button, ButtonProps, styled } from '@mui/material';
import useAccount from 'src/hooks/useAccount';
import ConnectButton from './ConnectButton';
import { useSetChain } from '@web3-onboard/react';
import isNetworkSupported from 'src/utils/is-network-supported';
import { useNetworkStore } from 'src/state';

interface Props extends ButtonProps {
  onClick(): void;
  children?: React.ReactNode;
}

const StyledButton = styled(Button)(({ theme }) => ({
  height: 40,
  fontWeight: 600,
  color: theme.palette.common.white,
  ':disabled': {
    opacity: 1,
    color: theme.palette.grey[300],
    background: theme.palette.secondary.main,
  },
}));

const SmartButton = ({ onClick, children, ...props }: Props) => {
  const account = useAccount();
  const [{ connectedChain }, setChain] = useSetChain();
  const { network } = useNetworkStore();

  const handleChangeChain = async () => {
    await setChain({ chainId: network.chainId });
  };

  if (!account) {
    return <ConnectButton fullWidth {...props} />;
  }

  if (!isNetworkSupported(connectedChain?.id)) {
    return (
      <StyledButton onClick={handleChangeChain} {...props} disabled={false}>
        Change Network
      </StyledButton>
    );
  }

  return (
    <StyledButton onClick={onClick} {...props}>
      {children}
    </StyledButton>
  );
};

export default SmartButton;
