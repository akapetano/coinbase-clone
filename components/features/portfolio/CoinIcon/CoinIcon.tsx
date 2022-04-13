import { Box, BoxProps } from '@chakra-ui/react';

export const CoinIcon = ({ children }: BoxProps) => {
  return (
    <Box width="1.8rem" mr="1rem">
      {children}
    </Box>
  );
};
