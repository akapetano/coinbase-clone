import { Container, ContainerProps } from '@chakra-ui/react';

export const PortfolioTableContainer = ({ children }: ContainerProps) => {
  return (
    <Container mt="1rem" border="1px solid #282b2f">
      {children}
    </Container>
  );
};
