import { Box } from '@chakra-ui/react';

export const MainContainer = ({ children, ...restProps }) => {
  return (
    <Box flex="1" {...restProps}>
      {children}
    </Box>
  );
};
