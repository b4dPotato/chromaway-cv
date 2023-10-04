import {
  Avatar,
  CircularProgress,
  List,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
  Paper,
  Typography,
  styled,
  useTheme,
} from '@mui/material';
import { ethers } from 'ethers';
import { useEffect, useState } from 'react';
import { DEFAULT_DECIMALS } from 'src/constants/decimals';
import useAccount from 'src/hooks/useAccount';
import useTokens from 'src/hooks/useTokens';
import { balanceOfNativeToken, balanceOf } from 'src/shared/web3/events';
import { IToken } from 'src/types/token';
import isNativeToken from 'src/utils/is-native-token';

const StyledPaper = styled(Paper)(({ theme }) => ({
  maxWidth: 700,
  margin: '0 auto',
  background: theme.palette.primary.main,
  padding: '40px 80px',
}));

const WalletFunds = () => {
  const theme = useTheme();
  const { tokens, loading } = useTokens();
  const account = useAccount();
  const [balances, setBalances] = useState<Record<string, string>>({});

  useEffect(() => {
    if (loading || !tokens.length) return;
    const fetchBalance = async (token: IToken) => {
      let balance = isNativeToken(token.symbol)
        ? await balanceOfNativeToken(account)
        : await balanceOf(token.address, account);

      let decimals = isNativeToken(token.symbol)
        ? DEFAULT_DECIMALS
        : token.decimals;

      let formattedBalance = ethers.utils.formatUnits(
        balance.toString(),
        decimals
      );

      setBalances((prevValue) => {
        const newValue = {
          ...prevValue,
          [token.address]: formattedBalance,
        };
        return newValue;
      });
    };

    const fetchAllBalances = async () => {
      await Promise.all(tokens.map((token) => fetchBalance(token)));
    };

    fetchAllBalances();
  }, [account, loading, tokens]);

  if (loading) {
    return (
      <StyledPaper sx={{ textAlign: 'center' }}>
        <Typography
          color="white"
          variant="h5"
          align="center"
          fontWeight={600}
          mb={2}
        >
          Your Funds
        </Typography>
        <CircularProgress color="secondary" size={50} sx={{ my: 2 }} />
      </StyledPaper>
    );
  }

  return (
    <StyledPaper>
      <Typography
        color="white"
        variant="h5"
        align="center"
        fontWeight={600}
        mb={2}
      >
        Your Funds
      </Typography>

      <List
        sx={{
          borderRadius: 2,
          overflow: 'hidden',
          background: theme.palette.common.white,
        }}
      >
        {tokens.map((token) => (
          <ListItem disablePadding key={`token-list_${token.address}`}>
            <ListItemButton color="white">
              <ListItemAvatar>
                <Avatar
                  alt={token.name}
                  src={token.logo}
                  sx={{ width: 30, height: 30 }}
                />
              </ListItemAvatar>
              <ListItemText
                sx={{ width: 100 }}
                primary={token.name}
                secondary={`Balance: ${balances[token.address] || '--'} ${
                  token.symbol
                }`}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </StyledPaper>
  );
};

export default WalletFunds;
