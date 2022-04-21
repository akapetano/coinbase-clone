import { Flex, FlexProps } from '@chakra-ui/react';

export const Row = ({ ...restProps }: FlexProps) => {
  return (
    <Flex
      color="#8a919e"
      p="1rem 0"
      fontSize="1.2rem"
      alignItems="center"
      justifyContent="space-between"
      {...restProps}
    />
  );
};
