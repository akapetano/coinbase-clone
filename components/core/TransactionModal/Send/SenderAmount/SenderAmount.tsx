import { Flex, FlexProps } from '@chakra-ui/react';
import { SenderInputContainer } from '../SenderInputContainer/SenderInputContainer';
import { SenderInput } from '../SenderInput/SenderInput';
import { WarningToSender } from '../WarningToSender/WarningToSender';
import { Token } from '../CoinSelectList/CoinSelectList';

interface ISenderAmountProps extends FlexProps {
  amount: string;
  setAmount: (e: string) => void;
  selectedToken: Token;
}

export const SenderAmount = ({
  amount,
  setAmount,
  selectedToken,
  ...restProps
}: ISenderAmountProps) => {
  return (
    <Flex flex="1" flexDir="column" {...restProps}>
      <SenderInputContainer>
        <SenderInput
          placeholder="0"
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <span>{selectedToken.symbol}</span>
      </SenderInputContainer>
      <WarningToSender
        text="Amount is a required field"
        color={amount ? 'transparent' : '#8a919e'}
      />
    </Flex>
  );
};
