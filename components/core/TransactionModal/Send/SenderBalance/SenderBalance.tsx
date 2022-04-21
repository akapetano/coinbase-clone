import { Text } from '@chakra-ui/react';
import { Row } from '../Row/Row';

export const SenderBalance = ({ balance, selectedToken }) => {
  return (
    <Row>
      <Text>{selectedToken.symbol} Balance</Text>
      <Text>
        {balance} {selectedToken.symbol}
      </Text>
    </Row>
  );
};
