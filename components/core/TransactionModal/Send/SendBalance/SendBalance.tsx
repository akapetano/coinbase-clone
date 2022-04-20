import { Text } from '@chakra-ui/react';

export const SendBalance = ({ selectedToken }) => {
  return (
    <>
      <Text>{selectedToken.symbol} Balance</Text>
      <Text>1.2 {selectedToken.symbol}</Text>
    </>
  );
};
