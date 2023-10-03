import { Button, ButtonProps, styled } from '@mui/material';
import useAccount from 'src/hooks/useAccount';
import ConnectButton from './ConnectButton';

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

  if (!account) {
    return <ConnectButton fullWidth {...props} />;
  }

  return (
    <StyledButton onClick={onClick} {...props}>
      {children}
    </StyledButton>
  );
};

export default SmartButton;
