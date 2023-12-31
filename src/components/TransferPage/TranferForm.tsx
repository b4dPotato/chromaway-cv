import {
  Box,
  FilledInput,
  Grid,
  Paper,
  Typography,
  styled,
} from '@mui/material';
import { ethers } from 'ethers';
import { useCallback, useEffect, useMemo, useState } from 'react';
import TokenSelect from 'src/components/TransferPage/TokenSelect';
import SmartButton from 'src/components/web3/SmartButton';
import { DEFAULT_DECIMALS } from 'src/constants/decimals';
import useAccount from 'src/hooks/useAccount';
import {
  balanceOf,
  balanceOfNativeToken,
  transferNativeToken,
  transferToken,
} from 'src/shared/web3/events';
import { useNetworkStore } from 'src/state';
import { IToken } from 'src/types/token';
import isNativeToken from 'src/utils/is-native-token';

const StyledPaper = styled(Paper)(({ theme }) => ({
  maxWidth: 700,
  margin: '0 auto',
  background: theme.palette.primary.main,
  padding: '40px 80px',
  [theme.breakpoints.down('md')]: {
    padding: '20px',
  },
}));

const TransferForm = () => {
  const [address, setAddress] = useState<string>();
  const [amount, setAmount] = useState<number>();
  const [balance, setBalance] = useState<string | null>();
  const account = useAccount();
  const { network } = useNetworkStore();

  const [selectedToken, setSelectedToken] = useState<IToken | null>();

  const handleTokenSelect = async (token: IToken) => {
    setSelectedToken(token);
    fetchBalance(token);
  };

  const fetchBalance = useCallback(
    async (token: IToken) => {
      if (!account) return;
      let balance = isNativeToken(token.symbol)
        ? await balanceOfNativeToken(account)
        : await balanceOf(token.address, account);

      let decimals = isNativeToken(token.symbol)
        ? DEFAULT_DECIMALS
        : token.decimals;

      setBalance(ethers.utils.formatUnits(balance.toString(), decimals));
    },
    [account]
  );

  useEffect(() => {
    if (selectedToken) {
      fetchBalance(selectedToken);
    } else {
      setBalance(null);
    }
  }, [fetchBalance, network, selectedToken]);

  const sendCrypto = async () => {
    if (!selectedToken?.decimals || !account || !address || !amount) return;
    try {
      if (isNativeToken(selectedToken.symbol)) {
        await transferNativeToken(account, address, amount);
      } else {
        await transferToken(selectedToken.address, address, amount);
      }
    } catch (e) {}
  };

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setAmount(parseFloat(value));
  };

  const handleAddressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setAddress(value);
  };

  const { isValid, error } = useMemo(() => {
    return {
      isValid: address && amount && selectedToken,
      error: 'Fill all the fields',
    };
  }, [address, amount, selectedToken]);

  return (
    <StyledPaper elevation={3}>
      <Typography
        color="white"
        variant="h5"
        align="center"
        fontWeight={600}
        mb={4}
      >
        Send Crypto in One Click!
      </Typography>

      <Box>
        <FilledInput
          onChange={handleAddressChange}
          fullWidth
          disableUnderline
          placeholder="Address you want to send a crypto 0xef1..."
        />

        <Grid
          container
          mt={2}
          flexDirection="row"
          flexWrap="nowrap"
          alignItems="flex-start"
        >
          <Grid container flexDirection="column" mr={2}>
            <FilledInput
              onChange={handleAmountChange}
              fullWidth
              disableUnderline
              placeholder="How much? ... 3 ETH"
            />
            <Typography mt={1} color="white">
              Balance: {balance || '--'}
            </Typography>
          </Grid>
          <TokenSelect onSelect={handleTokenSelect} />
        </Grid>
        <SmartButton
          disabled={!isValid}
          sx={{ mt: 2, width: '100%' }}
          fullWidth
          variant="contained"
          color="secondary"
          onClick={sendCrypto}
        >
          {isValid ? 'Send' : error}
        </SmartButton>
      </Box>
    </StyledPaper>
  );
};

export default TransferForm;
