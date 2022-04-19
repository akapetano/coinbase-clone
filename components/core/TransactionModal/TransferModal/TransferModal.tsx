import { Flex } from '@chakra-ui/react';
import { useState } from 'react';
import { TransferOption } from '../TransferOption/TransferOption';

export const TransferModal = () => {
  const [action, setAction] = useState('Send');

  const selectedStyle = {
    color: '#3773f5',
  };

  const unselectedStyle = {
    border: '1px solid #282b2f',
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
    </Flex>
  );
};
