import { Flex } from '@chakra-ui/react';
import { Portfolio } from '../../features/portfolio/Portfolio/Portfolio';
import { Promos } from '../../features/portfolio/Promos/Promos';
import { Chart } from 'react-chartjs-2';

export const Main = () => {
  return (
    <Flex
      p="0.5rem"
      className="mainContainer"
      maxHeight="calc(100vh - 64px)"
      overflow="hidden"
      overflowY="scroll"
      css={{
        '&::-webkit-scrollbar': {
          display: 'none',
        },
        '.mainContainer > div': { borderRadius: '0.5rem' },
      }}
    >
      <Portfolio />
      <Promos />
    </Flex>
  );
};
