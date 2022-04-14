import { Box, Heading, HeadingProps } from '@chakra-ui/react';

export const PortfolioTitle = ({ children }: HeadingProps) => {
  return (
    <Box p="1rem 2rem">
      <Heading as="h3" fontSize="1.5rem" fontWeight="600">
        Your assets
      </Heading>
    </Box>
  );
};
