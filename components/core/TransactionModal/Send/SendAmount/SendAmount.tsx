import { Flex, FlexProps } from '@chakra-ui/react';

export const SendAmount = ({ ...restProps }: FlexProps) => {
  return <Flex flex="1" flexDir="column" {...restProps} />;
};
