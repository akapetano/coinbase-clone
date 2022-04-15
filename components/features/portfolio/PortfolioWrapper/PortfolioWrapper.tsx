import { Flex, FlexProps } from '@chakra-ui/react';

export const PortfolioWrapper = ({ children, ...restProps }: FlexProps) => {
  return (
    <Flex
      justifyContent="center"
      borderRadius="0.4rem"
      p="0 1rem "
      {...restProps}
    >
      {children}
    </Flex>
  );
};
