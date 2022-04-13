import { Flex, FlexProps } from '@chakra-ui/react';

export const PortfolioWrapper = ({ children, ...restProps }: FlexProps) => {
  return (
    <Flex flex="1" justifyContent="center" {...restProps}>
      {children}
    </Flex>
  );
};
