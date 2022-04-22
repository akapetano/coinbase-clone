import { Box, BoxProps } from '@chakra-ui/react';

export const Wrapper = ({ ...restProps }: BoxProps) => (
  <Box h="100%" {...restProps} />
);
