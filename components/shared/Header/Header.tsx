import { Heading, Flex, Button } from '@chakra-ui/react';
import { HeaderWrapper } from '../../core/HeaderWrapper/HeaderWrapper';
import { WalletConnectionStatus } from '../../core/WalletConnectionStatus/WalletConnectionStatus';

export const Header = ({ walletAddress }) => {
  return (
    <HeaderWrapper>
      <Heading as="h2" fontSize="2rem" fontWeight="600" flex="1">
        Assets
      </Heading>
      <Flex>
        <WalletConnectionStatus walletAddress={walletAddress} />
        <Button variant="primary">Buy / Sell</Button>
        <Button variant="secondary">Send / Receive</Button>
      </Flex>
    </HeaderWrapper>
  );
};
