import { Flex, FlexProps } from '@chakra-ui/react';

export const CoinSelectList = ({ ...restProps }: FlexProps) => (
  <Flex flex="1.3" h="100%" _hover={{ cursor: 'pointer' }} {...restProps} />
);
