import { Text, TextProps } from '@chakra-ui/react';

export const Title = ({ ...restProps }: TextProps) => (
  <Text color="#fff" mb="0.5rem" {...restProps} />
);
