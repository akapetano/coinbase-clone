import { Box, Divider } from '@chakra-ui/react';
import { PortfolioTableHeadTitles } from '../PortfolioTableHeadTitles/PortfolioTableHeadTitles';
import { PortfolioTitle } from '../PortfolioTitle/PortfolioTitle';

export const PortfolioTableHead = () => {
  return (
    <Box>
      <PortfolioTitle />
      <Divider borderColor="#282b2f" />
      <PortfolioTableHeadTitles />
      <Divider borderColor="#282b2f" />
    </Box>
  );
};
