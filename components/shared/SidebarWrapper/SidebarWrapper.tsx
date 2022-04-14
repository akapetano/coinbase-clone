import { Box, BoxProps } from '@chakra-ui/react';

export const SidebarWrapper = ({ children }: BoxProps) => {
  return (
    <Box
      height="calc(100vh)"
      borderRight="1px solid #282b2f"
      width="calc(22rem - 16px - 16px)"
      p="0 1rem"
    >
      {children}
    </Box>
  );
};
