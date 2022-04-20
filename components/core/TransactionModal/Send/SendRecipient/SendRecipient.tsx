import { Input, InputProps } from '@chakra-ui/react';

export const SendRecipient = ({ ...restProps }: InputProps) => {
  return (
    <Input
      flex="1"
      border="none"
      bg="none"
      outline="none"
      color="#fff"
      fontSize="1.2rem"
      mr="0.5rem"
      {...restProps}
    />
  );
};
