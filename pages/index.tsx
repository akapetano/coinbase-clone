import { Button } from '@chakra-ui/react';
import { useAddress, useMetamask } from '@thirdweb-dev/react';
import { ConnectWalletButton } from '../components/core/ConnectWalletButton/ConnectWalletButton';
import { Details } from '../components/core/Details/Details';
import { WalletConnect } from '../components/core/WalletConnect/WalletConnect';
import { Wrapper } from '../components/shared/Wrapper/Wrapper';

export default function Home() {
  const address = useAddress();
  const connectWithMetask = useMetamask();

  return (
    <Wrapper>
      {address ? (
        <h2>{address}</h2>
      ) : (
        <WalletConnect>
          <ConnectWalletButton onClick={connectWithMetask} />
          <Details />
        </WalletConnect>
      )}
    </Wrapper>
  );
}
