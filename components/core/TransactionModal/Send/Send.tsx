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
  const [activeThirdwebToken, setActiveThirdwebToken] = useState(null);
  const [activeThirdwebTokenId, setActiveThirdwebTokenId] = useState(null);
  const [balance, setBalance] = useState('Fetching...');

  useEffect(() => {
    const activeToken = thirdwebTokens.find(
      (token) =>
        token.contractWrapper.readContract.address ===
        selectedToken.contractAddress
    );

    console.log(activeToken);
    setActiveThirdwebToken(activeToken);
    setActiveThirdwebTokenId(activeToken.contractWrapper.readContract.address);
  }, [thirdwebTokens, selectedToken]);

  useEffect(() => {
    const url = imageUrlBuilder(client).image(selectedToken.logo).url();
    setImageUrl(url);
  }, [selectedToken]);

  useEffect(() => {
    const getBalance = async () => {
      const balance = await activeThirdwebToken.balanceOf(walletAddress);
      setBalance(balance.displayValue);
      console.log(activeThirdwebToken);
    };

    if (activeThirdwebToken) {
      getBalance();
    }
  }, [activeThirdwebToken, walletAddress]);

  const sendCrypto = async (amount: string, recipient: string) => {
    console.log('Sending crypto...');

    if (activeThirdwebToken && activeThirdwebTokenId && amount && recipient) {
      const tx = await activeThirdwebToken.transfer(
        recipient,
        activeThirdwebTokenId,
        amount.toString().concat('000000000000000000')
      );
      console.log(tx);
      setAction('Transferred');
    } else {
      console.error('Missing data...');
    }
  };

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
        amount={amount}
        activeThirdwebTokenId={activeThirdwebTokenId}
        sendCrypto={sendCrypto}
        balance={balance}
        selectedToken={selectedToken}
        imageUrl={imageUrl}
        recipient={recipient}
        setRecipient={setRecipient}
      />
    </Flex>
  );
};
