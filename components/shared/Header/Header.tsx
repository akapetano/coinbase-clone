import { useMetamask } from '@thirdweb-dev/react';
import { Heading, HStack, Button } from '@chakra-ui/react';
import { HeaderWrapper } from '../../core/HeaderWrapper/HeaderWrapper';
import { WalletConnectionStatus } from '../../core/WalletConnectionStatus/WalletConnectionStatus';
import { useRouter } from 'next/router';
import NextLink from 'next/link';
import { TransactionModal } from '../../core/TransactionModal/TransactionModal';
import { ConnectWalletButton } from '../../core/ConnectWalletButton/ConnectWalletButton';

export const Header = ({ walletAddress, sanityTokens, thirdwebTokens }) => {
  const router = useRouter();
  const connectWithMetamask = useMetamask();

  return (
    <HeaderWrapper>
      <Heading as="h2" fontSize="2rem" fontWeight="600" flex="1">
        Assets
      </Heading>
      <HStack spacing="1rem">
        {walletAddress ? (
          <WalletConnectionStatus walletAddress={walletAddress} />
        ) : (
          <ConnectWalletButton onClick={connectWithMetamask} />
        )}
        <Button variant="primary">Buy / Sell</Button>
        <NextLink href={'/?transfer=1'} passHref>
          <Button variant="secondary">Send / Receive</Button>
        </NextLink>
      </HStack>
      <TransactionModal
        sanityTokens={sanityTokens}
        thirdwebTokens={thirdwebTokens}
        walletAddress={walletAddress}
        isOpen={Boolean(router.query.transfer)}
        onClose={() => router.push('/')}
      />
    </HeaderWrapper>
  );
};
