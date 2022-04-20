import { Flex } from '@chakra-ui/react';
import { SendAmount } from './SendAmount/SendAmount';
import { SendInput } from './SendInput/SendInput';
import { SendInputContainer } from './SendInputContainer/SendInputContainer';
import { SendWarning } from './SendWarning/SendWarning';
import { useEffect, useState } from 'react';
import { SendForm } from './SendForm/SendForm';
import imageUrlBuilder from '@sanity/image-url';
import { client } from '../../../../lib/sanity';

export const Send = ({
  selectedToken,
  setAction,
  thirdwebTokens,
  walletAddress,
}) => {
  const [amount, setAmount] = useState('');
  const [recipient, setRecipient] = useState('');
  const [imageUrl, setImageUrl] = useState(null);
  const [activeThirdwebToken, setActiveThirdwebToken] = useState('');

  useEffect(() => {
    const activeToken = thirdwebTokens.find(
      (token) => token.address === selectedToken.contractAddress
    );

    setActiveThirdwebToken(activeToken);
  }, [thirdwebTokens, selectedToken]);

  useEffect(() => {
    const url = imageUrlBuilder(client).image(selectedToken.logo).url();
    setImageUrl(url);
  }, [selectedToken, imageUrl]);

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
          <span>{selectedToken.symbol}</span>
        </SendInputContainer>
        <SendWarning
          text="Amount is a required field"
          color={amount ? 'transparent' : '#8a919e'}
        />
      </SendAmount>
      <SendForm
        selectedToken={selectedToken}
        imageUrl={imageUrl}
        recipient={recipient}
        setRecipient={setRecipient}
      />
    </Flex>
  );
};
