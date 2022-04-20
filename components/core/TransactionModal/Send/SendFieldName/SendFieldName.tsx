import { Box, BoxProps } from '@chakra-ui/react';

export const SendFieldName = ({ ...restProps }: BoxProps) => {
  return <Box flex="0.5" pl="2rem" {...restProps} />;
};
