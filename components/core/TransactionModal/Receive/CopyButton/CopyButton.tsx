import { Box, BoxProps } from '@chakra-ui/react';

export const CopyButton = ({ ...restProps }: BoxProps) => (
  <Box cursor="pointer" {...restProps} />
);
