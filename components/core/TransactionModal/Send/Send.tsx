import { Flex } from '@chakra-ui/react';
import { SenderAmount } from './SenderAmount/SenderAmount';
import { SenderForm } from './SenderForm/SenderForm';
import { useEffect, useState } from 'react';
import imageUrlBuilder from '@sanity/image-url';
import { client } from '../../../../lib/sanity';
import { ContinueButton } from './ContinueButton/ContinueButton';
import { SenderBalance } from './SenderBalance/SenderBalance';

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
  const [balance, setBalance] = useState('Fetching...');

  useEffect(() => {
    const activeToken = thirdwebTokens.find((token) => {
      return (
        token.contractWrapper.readContract.address ===
        selectedToken.contractAddress
      );
    });

    setActiveThirdwebToken(activeToken);
  }, [thirdwebTokens, selectedToken]);

  useEffect(() => {
    const url = imageUrlBuilder(client).image(selectedToken.logo).url();
    setImageUrl(url);
  }, [selectedToken]);

  useEffect(() => {
    const getBalance = async () => {
      const balance = await activeThirdwebToken.balanceOf(walletAddress);
      setBalance(balance.displayValue);
    };

    if (activeThirdwebToken) {
      getBalance();
    }
  }, [activeThirdwebToken, walletAddress]);

  const sendCrypto = async (amount: string, recipient: string) => {
    try {
      console.log('Sending crypto...');
      if (activeThirdwebToken && amount && recipient) {
        setAction('Transferring');
        const transaction = await activeThirdwebToken.transfer(
          recipient,
          amount.toString().concat('000000000000000000')
        );
        console.log(transaction);
        setAction('Transferred');
      }
    } catch (error) {
      console.log(error.message);
      setAction('Failed');
    }
  };

  return (
    <Flex flex="1" flexDir="column" height="100%">
      <SenderAmount
        amount={amount}
        setAmount={setAmount}
        selectedToken={selectedToken}
      />
      <SenderForm
        selectedToken={selectedToken}
        imageUrl={imageUrl}
        recipient={recipient}
        setRecipient={setRecipient}
        setAction={setAction}
      />
      <ContinueButton
        sendCrypto={sendCrypto}
        amount={amount}
        recipient={recipient}
      />
      <SenderBalance balance={balance} selectedToken={selectedToken} />
    </Flex>
  );
};
