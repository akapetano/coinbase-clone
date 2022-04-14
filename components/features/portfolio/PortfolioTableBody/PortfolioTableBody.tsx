import { Box, Divider } from '@chakra-ui/react';
import { coins } from '../../../../static/coins';
import { Coin } from '../Coin/Coin';

export const PortfolioTableBody = () => {
  return (
    <Box>
      <Box>
        {coins.map((coin) => (
          <Box key={coin.name}>
            <Coin coin={coin} />
            <Divider borderColor="#282b2f" />
          </Box>
        ))}
      </Box>
    </Box>
  );
};
