import { Text, Flex } from '@chakra-ui/react';
import { WalletConnectionStatusTitle } from '../WalletConnectionStatusTitle/WalletConnectionStatusTitle';

export const WalletConnectionStatus = ({ walletAddress }) => {
  return (
    <Flex
      fontSize="1.2rem"
      border="1px solid #282b2f"
      borderRadius="50rem"
      mr="1rem"
      p="0 1rem"
      flexDir="column"
      alignItems="flex-start"
      justifyContent="center"
    >
      <WalletConnectionStatusTitle title="Wallet Connected" />
      <Text fontSize="0.8rem">
        {walletAddress?.slice(0, 7)} ... {walletAddress?.slice(35)}
      </Text>
    </Flex>
  );
};
