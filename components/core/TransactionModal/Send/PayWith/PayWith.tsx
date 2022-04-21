import { Row } from '../Row/Row';
import { FieldName } from '../FieldName/FieldName';
import { SelectedCoin } from '../SelectedCoin/SelectedCoin';

export const PayWith = ({ setAction, selectedToken, imageUrl }) => {
  return (
    <Row>
      <FieldName>Pay with</FieldName>
      <SelectedCoin
        onClick={() => setAction('Select')}
        selectedToken={selectedToken}
        imageUrl={imageUrl}
      />
    </Row>
  );
};
