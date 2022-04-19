import { Flex, Heading } from '@chakra-ui/react';
import { useState } from 'react';
import { TransferModalMain } from '../TransferModalMain/TransferModalMain';
import { TransferOption } from '../TransferOption/TransferOption';
import { Send } from '../Send/Send';
import { Receive } from '../Receive/Receive';

export const TransferModal = () => {
  const [action, setAction] = useState('Send');

  const selectedStyle = {
    color: '#3773f5',
  };

  const unselectedStyle = {
    border: '1px solid #282b2f',
  };

  const selectedModal = (option) => {
    switch (option) {
      case 'Send':
        return <Send />;
      case 'Receive':
        return <Receive />;
      default:
        return <Send />;
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
