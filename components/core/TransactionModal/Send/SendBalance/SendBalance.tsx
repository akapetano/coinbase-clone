import { Text } from '@chakra-ui/react';

export const SendBalance = ({ balance, selectedToken }) => {
  return (
    <>
      <Text>{selectedToken.symbol} Balance</Text>
      <Text>
        {balance} {selectedToken.symbol}
      </Text>
    </>
  );
};
