import { Flex, FlexProps } from '@chakra-ui/react';

export const IndexPageWrapper = ({ children, ...restProps }: FlexProps) => {
  return (
    <Flex
      h="100vh"
      maxWidth="100vw"
      bg="#0a0b0d"
      color="white"
      align="center"
      justify="center"
      {...restProps}
    >
      {children}
    </Flex>
  );
};
