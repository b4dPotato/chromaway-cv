import {
  Avatar,
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
import networks from 'src/constants/networks';

const StyledNetworkSelect = styled(Select)(({ theme }) => ({
  background: theme.palette.common.white,
}));

const StyledTypography = styled(Typography)({
  overflow: 'hidden',
  textOverflow: 'ellipsis',
});

const NetworkSelect = () => {
  const [selectedChainId, setChainId] = useState<string | null>(
    networks[0].chainId
  );

  const handleSelectChainId = (event: SelectChangeEvent<unknown>) => {
    setChainId(event.target.value as string);
  };

  return (
    <FormControl fullWidth sx={{ width: 230 }} size="small">
      <StyledNetworkSelect
        displayEmpty
        id="select-chain-id"
        input={<OutlinedInput sx={{ borderRadius: '4px', height: 44 }} />}
        value={selectedChainId}
        label="Chain Id"
        onChange={handleSelectChainId}
        size="small"
        inputProps={{ 'aria-label': 'Without label' }}
      >
        <MenuItem disabled value="">
          <em>Select Network</em>
        </MenuItem>
        {networks.map((network) => (
          <MenuItem value={network.chainId}>
            <Grid container wrap="nowrap" alignItems="center">
              <Avatar
                alt={network.networkName}
                src={network.logo}
                sx={{ width: 30, height: 30 }}
              />
              <StyledTypography variant="h6" ml={2} fontSize={14}>
                {network.networkName}
              </StyledTypography>
            </Grid>
          </MenuItem>
        ))}
      </StyledNetworkSelect>
    </FormControl>
  );
};

export default NetworkSelect;
