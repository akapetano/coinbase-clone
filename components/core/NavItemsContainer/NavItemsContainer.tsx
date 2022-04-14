import { Box, BoxProps } from '@chakra-ui/react';

export const NavItemsContainer = ({ children }: BoxProps) => {
  return (
    <Box marginTop="3rem" _hover={{ cursor: 'pointer' }}>
      {children}
    </Box>
  );
};
