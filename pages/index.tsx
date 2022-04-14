import { useAddress, useMetamask } from '@thirdweb-dev/react';
import { ConnectWalletButton } from '../components/core/ConnectWalletButton/ConnectWalletButton';
import { Details } from '../components/core/Details/Details';
import { WalletConnect } from '../components/core/WalletConnect/WalletConnect';
import { IndexPageWrapper } from '../components/shared/IndexPageWrapper/IndexPageWrapper';
import Dashboard from './dashboard';

export default function Home() {
  const address = useAddress();
  const connectWithMetask = useMetamask();

  return (
    <IndexPageWrapper>
      {address ? (
        <Dashboard />
      ) : (
        <WalletConnect>
          <ConnectWalletButton onClick={connectWithMetask} />
          <Details />
        </WalletConnect>
      )}
    </IndexPageWrapper>
  );
}
