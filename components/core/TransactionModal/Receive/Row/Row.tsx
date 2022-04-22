import { Flex, FlexProps } from '@chakra-ui/react';

export const Row = ({ ...restProps }: FlexProps) => (
  <Flex
    w="100%"
    p="1rem"
    alignItems="center"
    justifyContent="space-between"
    color="#8a919e"
    fontSize="1.2rem"
    {...restProps}
  />
);
