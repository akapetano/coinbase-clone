import { Flex, Heading, Text } from '@chakra-ui/react';
import { useState } from 'react';
import { TransferModalMain } from '../TransferModalMain/TransferModalMain';
import { TransferOption } from '../TransferOption/TransferOption';
import { Send } from '../Send/Send';
import { Receive } from '../Receive/Receive';
import { CoinSelector } from '../Send/CoinSelector/CoinSelector';
import { TailSpin } from 'react-loader-spinner';

export const TransferModal = ({
  sanityTokens,
  thirdwebTokens,
  walletAddress,
}) => {
  const [action, setAction] = useState('Send');
  const [selectedToken, setSelectedToken] = useState(sanityTokens[2]);
  const [sendError, setSendError] = useState('');

  const selectedStyle = {
    color: '#3773f5',
  };

  const unselectedStyle = {
    border: '1px solid #282b2f',
  };

  const selectedModal = (option: string) => {
    switch (option) {
      case 'Send':
        return (
          <Send
            selectedToken={selectedToken}
            setAction={setAction}
            thirdwebTokens={thirdwebTokens}
            walletAddress={walletAddress}
            setSendError={setSendError}
          />
        );
      case 'Receive':
        return (
          <Receive
            setAction={setAction}
            selectedToken={selectedToken}
            walletAddress={walletAddress}
          />
        );
      case 'Select':
        return (
          <CoinSelector
            setAction={setAction}
            selectedToken={selectedToken}
            setSelectedToken={setSelectedToken}
            sanityTokens={sanityTokens}
            thirdwebTokens={thirdwebTokens}
            walletAddress={walletAddress}
          />
        );
      case 'Transferring':
        return (
          <Flex
            alignItems="center"
            justifyContent="center"
            flexDir="column"
            w="100%"
            h="100%"
            fontSize="1.5"
          >
            <Heading as="h2" mb="1rem">
              Transfer in progress...
            </Heading>
            <TailSpin
              width="100"
              height="100"
              color="#3773f5"
              ariaLabel="loading"
            />
          </Flex>
        );
      case 'Transferred':
        return (
          <Heading as="h2" color="#27ad75">
            Transfer complete. 🚀
          </Heading>
        );
      case 'Failed':
        return (
          <Flex
            w="100%"
            h="100%"
            alignItems="center"
            justifyContent="center"
            flexDir="column"
            fontSize="1.5rem"
            textAlign="center"
          >
            <Heading as="h2" color="red.500">
              Transfer failed.
            </Heading>
            <Text fontSize="1rem" color="red.600">
              {sendError}
            </Text>
          </Flex>
        );
      default:
        return (
          <Send
            selectedToken={selectedToken}
            setAction={setAction}
            thirdwebTokens={thirdwebTokens}
            walletAddress={walletAddress}
            setSendError={setSendError}
          />
        );
    }
  };

  return (
    <Flex
      flexDir="column"
      h="35rem"
      w="27rem"
      color="white"
      border="1px solid #282b2f"
    >
      <Flex justifyContent="space-evenly" alignItems="center" h="5rem">
        <TransferOption
          onClick={() => setAction('Send')}
          style={action === 'Send' ? selectedStyle : unselectedStyle}
          text="Send"
        />
        <TransferOption
          onClick={() => setAction('Receive')}
          style={action === 'Receive' ? selectedStyle : unselectedStyle}
          text="Receive"
        />
      </Flex>
      <TransferModalMain>{selectedModal(action)}</TransferModalMain>
    </Flex>
  );
};
