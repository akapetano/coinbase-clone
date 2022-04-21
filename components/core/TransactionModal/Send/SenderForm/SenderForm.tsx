import { Box, BoxProps, Divider } from '@chakra-ui/react';
import { Token } from '../CoinSelectList/CoinSelectList';
import { PayWith } from '../PayWith/PayWith';
import { SendTo } from '../SendTo/SendTo';

interface ISenderForm extends BoxProps {
  sendCrypto: (amount: string, recipient: string) => void;
  amount: string;
  balance: string;
  selectedToken: Token;
  imageUrl: string;
  recipient: string;
  setRecipient: (e: string) => void;
}

export const SenderForm = ({
  sendCrypto,
  amount,
  balance,
  selectedToken,
  imageUrl,
  recipient,
  setRecipient,
  ...restProps
}: ISenderForm) => {
  return (
    <Box border="1px solid #282b2f" borderRadius="0.4rem" {...restProps}>
      <SendTo recipient={recipient} setRecipient={setRecipient} />
      <Divider />
      <PayWith selectedToken={selectedToken} imageUrl={imageUrl} />
    </Box>
  );
};
