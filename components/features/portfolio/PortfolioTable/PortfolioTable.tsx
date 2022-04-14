import { Box, Container, Table, TableProps } from '@chakra-ui/react';

export const PortfolioTable = ({ children }: TableProps) => {
  return (
    <Container width="100%" maxWidth="64rem" p="2rem 1rem">
      <Box mt="1rem" pb="1rem" border="1px solid #282b2f">
        <Table width="100%">{children}</Table>
      </Box>
    </Container>
  );
};
