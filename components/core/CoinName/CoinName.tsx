import { Text, TextProps } from '@chakra-ui/react';

export const CoinName = ({ ...restProps }: TextProps) => {
  return (
    <Text
      flex="1"
      color="#fff"
      border="none"
      bg="none"
      outline="none"
      fontSize="1.2rem"
      mr="0.5rem"
      {...restProps}
    />
  );
};
