import { PortfolioTableContainer } from '../PortfolioTableContainer/PortfolioTableContainer';
import { PortfolioWrapper } from '../PortfolioWrapper/PortfolioWrapper';
import { PortfolioTable } from '../PortfolioTable/PortfolioTable';
import { PortfolioTableItem } from '../PortfolioTableItem/PortfolioTableItem';
import { PortfolioTitle } from '../PortfolioTitle/PortfolioTitle';
import { Box, Divider, Table, Heading } from '@chakra-ui/react';
import { PortfolioTableRow } from '../PortfolioTableRow/PortfolioTableRow';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { coins } from '../../../../static/coins';

export const Portfolio = () => {
  return (
    <PortfolioWrapper>
      <PortfolioTableContainer>
        <PortfolioTable>
          <PortfolioTableItem>
            <PortfolioTitle>Your Assets</PortfolioTitle>
          </PortfolioTableItem>
          <Divider />
          <Table>
            <PortfolioTableItem>
              <PortfolioTableRow>
                <Box>Name</Box>
                <Box>Balance</Box>
                <Box>Price</Box>
                <Box>Allocation</Box>
                <Box>Allocation</Box>
                <Box>
                  <BsThreeDotsVertical />
                </Box>
              </PortfolioTableRow>
            </PortfolioTableItem>
            <Divider />
            <Box>
              {coins.map((coin) => (
                <Box key={coin.name}>
                  <Heading>{coin.name}</Heading>
                  {/* <Coin coin={coin} />  */}
                  <Divider />
                </Box>
              ))}
            </Box>
          </Table>
        </PortfolioTable>
      </PortfolioTableContainer>
    </PortfolioWrapper>
  );
};
