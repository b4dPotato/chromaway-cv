import { useSetChain } from '@web3-onboard/react';
import { useEffect, useLayoutEffect } from 'react';
import { networks } from 'src/constants/networks';
import isNetworkSupported from 'src/utils/is-network-supported';
import { useNetworkStore } from '../state';

const useAutoManageNetwork = () => {
  const [{ connectedChain }] = useSetChain();
  const { network, setNetwork } = useNetworkStore();
  console.log(connectedChain, isNetworkSupported(connectedChain?.id), connectedChain?.id === network.chainId, network)
  useEffect(() => {
    if (
      isNetworkSupported(connectedChain?.id) &&
      connectedChain &&
      connectedChain.id !== network.chainId
    ) {
      const newNetwork = networks.find(
        (network) => network.chainId === connectedChain.id
      )!;
      setNetwork(newNetwork);
    }
  }, [connectedChain, network.chainId, setNetwork]);

  useLayoutEffect(() => {
    if (!network) {
      setNetwork(networks[0]);
    }
  }, [network, setNetwork]);
};

export default useAutoManageNetwork;
