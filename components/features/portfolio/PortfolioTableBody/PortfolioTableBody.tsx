import { Box, Divider, Tbody, Tr } from '@chakra-ui/react';
import { coins } from '../../../../static/coins';
import { Coin } from '../Coin/Coin';

export const PortfolioTableBody = () => {
  return (
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
  );
};
