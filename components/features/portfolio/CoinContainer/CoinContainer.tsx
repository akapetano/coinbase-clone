import { Flex, FlexProps } from '@chakra-ui/react';
import Image from 'next/image';
import { BsThreeDotsVertical } from 'react-icons/bs';

export const CoinContainer = ({ children }: FlexProps) => {
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
    >
      {children}
    </Flex>
  );
};
