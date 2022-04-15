import { Box, BoxProps } from '@chakra-ui/react';

export const Content = ({ ...restProps }: BoxProps) => {
  return <Box width="100%" maxWidth="1000px" p="2rem 1rem" {...restProps} />;
};
