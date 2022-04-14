import { Box, Flex, Text } from '@chakra-ui/react';
import Image from 'next/image';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { CoinIcon } from '../CoinIcon/CoinIcon';
import { CoinWrapper } from '../CoinWrapper/CoinWrapper';

export const Coin = ({ coin }) => {
  return (
    <CoinWrapper>
      <Flex
        width="100%"
        justifyContent="space-between"
        alignItems="center"
        p="1rem 2rem"
      >
        <Box flex="3">
          <Flex alignItems="center">
            <CoinIcon>
              <Image src={coin.logo} alt={coin.name} />
            </CoinIcon>
            <Box>
              <Text variant="primary">{coin.name}</Text>
              <Text variant="secondary">{coin.sign}</Text>
            </Box>
          </Flex>
        </Box>
        <Box flex="2">
          <Text variant="primary">
            {'$'}
            {coin.balanceUsd}
          </Text>
          <Text variant="secondary">
            {coin.balanceCoin} {coin.sign}
          </Text>
        </Box>
        <Box flex="1">
          <Text variant="primary">
            {'$'}
            {coin.priceUsd}
          </Text>
          <Box color={coin.change < 0 ? '#f0616d' : '#26ad75'}>
            {coin.change > 0 ? '+' : ''}
            {coin.change}%
          </Box>
        </Box>
        <Box flex="1">{coin.allocation}%</Box>
        <Box flex="0">
          <BsThreeDotsVertical />
        </Box>
      </Flex>
    </CoinWrapper>
  );
};
