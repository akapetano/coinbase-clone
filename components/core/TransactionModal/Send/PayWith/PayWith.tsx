import { Row } from '../Row/Row';
import { FieldName } from '../FieldName/FieldName';
import { CoinSelectList } from '../CoinSelectList/CoinSelectList';

export const PayWith = ({ selectedToken, imageUrl }) => {
  return (
    <Row>
      <FieldName>Pay with</FieldName>
      <CoinSelectList selectedToken={selectedToken} imageUrl={imageUrl} />
    </Row>
  );
};
