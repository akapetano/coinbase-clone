import { Flex, FlexProps } from '@chakra-ui/react';

export const HeaderWrapper = ({ children, ...restProps }: FlexProps) => {
  return (
    <Flex
      width="calc(100% - 3rem)"
      p="1rem 1.5rem"
      borderBottom="1px solid #282b2f"
      alignItems="center"
      {...restProps}
    >
      {children}
    </Flex>
  );
};
