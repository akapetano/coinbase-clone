import { Flex, FlexProps } from '@chakra-ui/react';

export const CoinWrapper = ({ children }: FlexProps) => {
  return (
    <Flex width="100%" justifyContent="space-between" alignItems="center">
      {children}
    </Flex>
  );
};
