import { Row } from '../Row/Row';
import { FieldName } from '../FieldName/FieldName';
import { WalletIcon } from '../WalletIcon/WalletIcon';
import { Recipient } from '../Recipient/Recipient';

export const SendTo = ({ recipient, setRecipient }) => {
  return (
    <Row>
      <FieldName>To</FieldName>
      <WalletIcon />
      <Recipient
        placeholder="Address"
        value={recipient}
        onChange={(e) => setRecipient(e.target.value)}
      />
    </Row>
  );
};
