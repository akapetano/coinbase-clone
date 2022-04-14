import { Flex, FlexProps } from '@chakra-ui/react';

export const PortfolioWrapper = ({ children, ...restProps }: FlexProps) => {
  return (
    <Flex justifyContent="center" {...restProps}>
      {children}
    </Flex>
  );
};
