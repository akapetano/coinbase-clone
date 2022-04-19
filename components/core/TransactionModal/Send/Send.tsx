import { Flex } from '@chakra-ui/react';
import { SendAmount } from './SendAmount/SendAmount';
import { SendInput } from './SendInput/SendInput';
import { SendInputContainer } from './SendInputContainer/SendInputContainer';
import { SendWarning } from './SendWarning/SendWarning';
import { useState } from 'react';

export const Send = () => {
  const [amount, setAmount] = useState('');

  return (
    <Flex flex="1" flexDir="column" height="100%">
      <SendAmount>
        <SendInputContainer>
          <SendInput
            placeholder="0"
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
          <span>ETH</span>
        </SendInputContainer>
        <SendWarning
          text="Amount is a required field"
          color={amount ? '#0a0b0d' : ''}
        />
      </SendAmount>
    </Flex>
  );
};
