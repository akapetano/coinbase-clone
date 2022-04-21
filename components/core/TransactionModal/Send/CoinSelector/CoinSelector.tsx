import { useState } from 'react';
import { Box, Text } from '@chakra-ui/react';
import { CoinList } from '../CoinList/CoinList';
import { CoinItem } from '../CoinItem/CoinItem';

export const CoinSelector = ({
  setAction,
  selectedToken,
  setSelectedToken,
  sanityTokens,
  thirdwebTokens,
  walletAddress,
}) => {
  return (
    <Box>
      <Text w="100%" textAlign="center" fontSize="1.5rem" mb="1rem">
        Select Asset
      </Text>
      <CoinList>
        {sanityTokens.map((token, index) => (
          <CoinItem
            key={token + index}
            token={token}
            sender={walletAddress}
            selectedToken={selectedToken}
            setSelectedToken={setSelectedToken}
            thirdwebTokens={thirdwebTokens}
            sanityTokens={sanityTokens}
            setAction={setAction}
          />
        ))}
      </CoinList>
    </Box>
  );
};
