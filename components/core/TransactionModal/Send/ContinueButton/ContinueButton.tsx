import { Row } from '../Row/Row';
import { Button } from '@chakra-ui/react';

interface IContinueButtonProps {
  sendCrypto: (amount: string, recipient: string) => void;
  amount: string;
  recipient: string;
}

export const ContinueButton = ({
  sendCrypto,
  amount,
  recipient,
}: IContinueButtonProps) => {
  return (
    <Row>
      <Button
        onClick={() => sendCrypto(amount, recipient)}
        variant="continue"
        h="3rem"
      >
        Continue
      </Button>
    </Row>
  );
};
