import { Box, BoxProps, Divider } from '@chakra-ui/react';
import { Token } from '../SelectedCoin/SelectedCoin';
import { PayWith } from '../PayWith/PayWith';
import { SendTo } from '../SendTo/SendTo';

interface ISenderForm extends BoxProps {
  recipient: string;
  setRecipient: (e: string) => void;
  selectedToken: Token;
  imageUrl: string;
  setAction: (action: string) => void;
}

export const SenderForm = ({
  recipient,
  setRecipient,
  selectedToken,
  imageUrl,
  setAction,
}: ISenderForm) => {
  return (
    <Box border="1px solid #282b2f" borderRadius="0.4rem">
      <SendTo recipient={recipient} setRecipient={setRecipient} />
      <Divider />
      <PayWith
        setAction={setAction}
        selectedToken={selectedToken}
        imageUrl={imageUrl}
      />
    </Box>
  );
};
