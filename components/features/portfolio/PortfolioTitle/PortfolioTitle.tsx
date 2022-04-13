import { Heading, HeadingProps } from '@chakra-ui/react';

export const PortfolioTitle = ({ children }: HeadingProps) => {
  return (
    <Heading as="h3" fontSize="1.5rem" fontWeight="600">
      {children}
    </Heading>
  );
};
