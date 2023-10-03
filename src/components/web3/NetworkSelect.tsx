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
import { useSetChain } from '@web3-onboard/react';
import { useEffect, useState } from 'react';
import { networks } from 'src/constants/networks';
import useAccount from 'src/hooks/useAccount';
import { useNetworkStore } from 'src/state';
import isNetworkSupported from 'src/utils/is-network-supported';

const StyledNetworkSelect = styled(Select)(({ theme }) => ({
  background: theme.palette.common.white,
}));

const StyledTypography = styled(Typography)({
  overflow: 'hidden',
  textOverflow: 'ellipsis',
});

const NetworkSelect = () => {
  const [{ connectedChain }, setChain] = useSetChain();
  const account = useAccount();
  const { network, setNetwork } = useNetworkStore();

  const [selectedChainId, setChainId] = useState<string | null>(
    network?.chainId || ''
  );

  useEffect(() => {
    if (
      connectedChain &&
      connectedChain.id !== selectedChainId &&
      isNetworkSupported(connectedChain.id)
    ) {
      setChainId(connectedChain.id);
    }
  }, [connectedChain, selectedChainId]);

  const handleChangeChain = async (event: SelectChangeEvent<unknown>) => {
    const newChainId = event.target.value as string;
    if (!account) {
      setChainId(newChainId);
      setNetwork(networks.find((network) => network.chainId === newChainId)!);
      return;
    }

    const chainChanged = await setChain({ chainId: newChainId });
    if (chainChanged) {
      setChainId(newChainId);
      setNetwork(networks.find((network) => network.chainId === newChainId)!);
    }
  };

  return (
    <FormControl fullWidth sx={{ width: 230 }} size="small">
      <StyledNetworkSelect
        displayEmpty
        id="select-chain-id"
        input={<OutlinedInput sx={{ borderRadius: '4px', height: 44 }} />}
        value={selectedChainId}
        label="Chain Id"
        onChange={handleChangeChain}
        size="small"
        inputProps={{ 'aria-label': 'Without label' }}
      >
        <MenuItem disabled value="">
          <em>Select Network</em>
        </MenuItem>
        {networks.map((network) => (
          <MenuItem
            key={`network-select_${network.chainId}`}
            value={network.chainId}
          >
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
