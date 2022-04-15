import { Box, Container, BoxProps } from '@chakra-ui/react';

export const PortfolioTable = ({ children }: BoxProps) => {
  return (
    <Container width="100%" maxWidth="64rem" p="1rem 0 1rem">
      <Box width="100%" mt="1rem" border="1px solid #282b2f">
        {children}
      </Box>
    </Container>
  );
};
