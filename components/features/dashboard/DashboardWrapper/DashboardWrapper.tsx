import { Flex, FlexProps } from '@chakra-ui/react';

export const DashboardWrapper = ({ children, ...restProps }: FlexProps) => {
  return (
    <Flex h="100vh" w="100vw" bg="#0a0b0d" {...restProps}>
      {children}
    </Flex>
  );
};
