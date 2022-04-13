import { Flex } from '@chakra-ui/react';
import Image from 'next/image';
import { BsThreeDotsVertical } from 'react-icons/bs';

export const Coin = () => {
  return (
    <Flex
      className="coinContainer"
      width="100%"
      justifyContent="space-between"
      alignItems="center"
      sx={{
        '.coinContainer > div': {
          display: 'flex',
          width: '100%',
          justifyContent: 'space-between',
          alignItems: 'center',
          p: '1rem 2rem',
        },
      }}
    ></Flex>
  );
};
