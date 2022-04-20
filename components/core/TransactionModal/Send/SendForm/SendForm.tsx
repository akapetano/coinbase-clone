import { Box, BoxProps, Button, Divider, Text } from '@chakra-ui/react';
import { SendBalance } from '../SendBalance/SendBalance';
import {
  SendCoinSelectList,
  Token,
} from '../SendCoinSelectList/SendCoinSelectList';
import { SendFieldName } from '../SendFieldName/SendFieldName';
import { SendRecipient } from '../SendRecipient/SendRecipient';
import { SendRow } from '../SendRow/SendRow';
import { SendWalletIcon } from '../SendWalletIcon/SendWalletIcon';

interface ISendForm extends BoxProps {
  sendCrypto: (amount: string, id: string, recipient: string) => void;
  activeThirdwebTokenId: string;
  amount: string;
  balance: string;
  selectedToken: Token;
  imageUrl: string;
  recipient: string;
  setRecipient: (e: string) => void;
}

export const SendForm = ({
  sendCrypto,
  activeThirdwebTokenId,
  amount,
  balance,
  selectedToken,
  imageUrl,
  recipient,
  setRecipient,
  ...restProps
}: ISendForm) => {
  return (
    <>
      <Box border="1px solid #282b2f" borderRadius="0.4rem" {...restProps}>
        <SendRow>
          <SendFieldName>To</SendFieldName>
          <SendWalletIcon />
          <SendRecipient
            placeholder="Address"
            value={recipient}
            onChange={(e) => setRecipient(e.target.value)}
          />
        </SendRow>
        <Divider />
        <SendRow>
          <SendFieldName>Pay with</SendFieldName>
          <SendCoinSelectList
            selectedToken={selectedToken}
            imageUrl={imageUrl}
          />
        </SendRow>
      </Box>
      <SendRow>
        <Button
          onClick={() => sendCrypto(amount, activeThirdwebTokenId, recipient)}
          variant="continue"
          h="3rem"
        >
          Continue
        </Button>
      </SendRow>
      <SendRow>
        <SendBalance balance={balance} selectedToken={selectedToken} />
      </SendRow>
    </>
  );
};
