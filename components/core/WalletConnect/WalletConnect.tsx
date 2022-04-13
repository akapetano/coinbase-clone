import { Flex, FlexProps } from '@chakra-ui/react';

export const WalletConnect = ({ children }: FlexProps) => {
  return (
    <Flex flexDir="column" justifyContent="center" alignItems="space-between">
      {children}
    </Flex>
  );
};
