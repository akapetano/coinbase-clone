import { PortfolioWrapper } from '../PortfolioWrapper/PortfolioWrapper';
import { PortfolioTable } from '../PortfolioTable/PortfolioTable';
import { PortfolioTableItem } from '../PortfolioTableItem/PortfolioTableItem';
import { PortfolioTitle } from '../PortfolioTitle/PortfolioTitle';
import { Box, Divider, Tbody, Thead, Tr } from '@chakra-ui/react';
import { PortfolioTableHead } from '../PortfolioTableHead/PortfolioTableHead';

import { coins } from '../../../../static/coins';
import { Coin } from '../Coin/Coin';

export const Portfolio = () => {
  return (
    <PortfolioWrapper>
      <PortfolioTable>
        <PortfolioTitle />
        <Divider borderColor="#282b2f" />
        <PortfolioTableHead />
        <Divider borderColor="#282b2f" />
        <Tbody>
          <Tr>
            {coins.map((coin) => (
              <Box key={coin.name}>
                <Coin coin={coin} />
                <Divider borderColor="#282b2f" />
              </Box>
            ))}
          </Tr>
        </Tbody>
      </PortfolioTable>
    </PortfolioWrapper>
  );
};
