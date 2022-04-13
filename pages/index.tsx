import { useAddress, useMetamask } from '@thirdweb-dev/react';
import { ConnectWalletButton } from '../components/core/ConnectWalletButton/ConnectWalletButton';
import { Details } from '../components/core/Details/Details';
import { WalletConnect } from '../components/core/WalletConnect/WalletConnect';
import { Wrapper } from '../components/shared/Wrapper/Wrapper';
import Dashboard from './dashboard';

export default function Home() {
  const address = useAddress();
  const connectWithMetask = useMetamask();

  return (
    <Wrapper>
      {address ? (
        <Dashboard />
      ) : (
        <WalletConnect>
          <ConnectWalletButton onClick={connectWithMetask} />
          <Details />
        </WalletConnect>
      )}
    </Wrapper>
  );
}
