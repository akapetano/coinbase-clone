import { Box, BoxProps } from '@chakra-ui/react';

export const FieldName = ({ ...restProps }: BoxProps) => {
  return <Box flex="0.5" pl="2rem" {...restProps} />;
};
