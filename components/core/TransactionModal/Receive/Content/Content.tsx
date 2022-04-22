import { Flex, FlexProps } from '@chakra-ui/react';

export const Content = ({ ...restProps }: FlexProps) => (
  <Flex
    flexDir="column"
    h="100%"
    border="1px solid #282b2f"
    borderRadius="0.5rem"
    {...restProps}
  />
);
