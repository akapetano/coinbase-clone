import { Input, InputProps } from '@chakra-ui/react';

export const SenderInput = ({ ...restProps }: InputProps) => {
  return (
    <Input
      size="xs"
      border="none"
      bg="none"
      outline="none"
      textAlign="right"
      maxWidth="30%"
      mr="1rem"
      fontSize="4.5rem"
      color="#3773f5"
      h="5rem"
      {...restProps}
    />
  );
};
