import { Flex } from '@chakra-ui/react';
import { useState } from 'react';
import { TransferModalMain } from '../TransferModalMain/TransferModalMain';
import { TransferOption } from '../TransferOption/TransferOption';
import { Send } from '../Send/Send';
import { Receive } from '../Receive/Receive';

export const TransferModal = ({
  sanityTokens,
  thirdwebTokens,
  walletAddress,
}) => {
  const [action, setAction] = useState('Send');
  const [selectedToken, setSelectedToken] = useState(sanityTokens[2]);

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
          />
        );
      case 'Receive':
        return <Receive />;
      default:
        return (
          <Send
            selectedToken={selectedToken}
            setAction={setAction}
            thirdwebTokens={thirdwebTokens}
            walletAddress={walletAddress}
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
