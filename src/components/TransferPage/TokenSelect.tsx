import {
  Avatar,
  CircularProgress,
  FormControl,
  Grid,
  MenuItem,
  OutlinedInput,
  Select,
  SelectChangeEvent,
  Typography,
  styled,
} from '@mui/material';
import { useState } from 'react';
import useTokens from 'src/hooks/useTokens';
import { IToken } from 'src/types/token';

const StyledTokenSelect = styled(Select)(({ theme }) => ({
  background: theme.palette.common.white,
  boxShadow: 'none',
  '.MuiOutlinedInput-notchedOutline': { border: 0 },
  '&.MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline': {
    border: 0,
  },
  '&.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
    border: 0,
  },
}));

const StyledTypography = styled(Typography)({
  overflow: 'hidden',
  textOverflow: 'ellipsis',
});

interface Props {
  onSelect(token: IToken): void;
}

const TokenSelect = ({ onSelect }: Props) => {
  const [selectedToken, setSelectedToken] = useState<IToken | null>();
  const { tokens, loading } = useTokens();

  const handleTokenChange = (event: SelectChangeEvent<unknown>) => {
    const newAddress = event.target.value;
    const newToken = tokens.find((token) => token.address === newAddress);
    if (newToken) {
      setSelectedToken(newToken);
      onSelect(newToken);
    }
  };

  if (loading) {
    return (
      <FormControl fullWidth sx={{ width: 230 }}>
        <StyledTokenSelect
          disabled
          displayEmpty
          renderValue={() => {
            return (
              <MenuItem disabled value="">
                <CircularProgress size={28} sx={{ margin: '0 auto' }} />
              </MenuItem>
            );
          }}
          input={<OutlinedInput sx={{ borderRadius: '4px', height: 53 }} />}
          value=""
          inputProps={{ 'aria-label': 'Without label' }}
        />
      </FormControl>
    );
  }

  return (
    <FormControl fullWidth sx={{ width: 230 }}>
      <StyledTokenSelect
        id="select-token-id"
        displayEmpty
        input={
          <OutlinedInput
            sx={{ borderRadius: '4px', height: 53 }}
            placeholder="Select Token"
          />
        }
        value={selectedToken?.address || ''}
        label="Token"
        onChange={handleTokenChange}
        inputProps={{ 'aria-label': 'Without label' }}
      >
        <MenuItem disabled value="">
          <em>Select Token</em>
        </MenuItem>
        {tokens.map((token) => (
          <MenuItem key={`token-select_${token.address}`} value={token.address}>
            <Grid container wrap="nowrap" alignItems="center">
              <Avatar
                alt={token.name}
                src={token.logo}
                sx={{ width: 30, height: 30 }}
              />
              <StyledTypography ml={2} fontSize={14} fontWeight={700}>
                {token.symbol}
              </StyledTypography>
            </Grid>
          </MenuItem>
        ))}
      </StyledTokenSelect>
    </FormControl>
  );
};

export default TokenSelect;
