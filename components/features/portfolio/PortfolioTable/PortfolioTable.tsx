import { Box, Container, BoxProps } from '@chakra-ui/react';

export const PortfolioTable = ({ children }: BoxProps) => {
  return (
    <Container width="100%" maxWidth="64rem" p="2rem 1rem">
      <Box mt="1rem" pb="1rem" border="1px solid #282b2f">
        <Box width="100%">{children}</Box>
      </Box>
    </Container>
  );
};
