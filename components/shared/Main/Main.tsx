import { Flex } from '@chakra-ui/react';
import { Portfolio } from '../../features/portfolio/Portfolio/Portfolio';

export const Main = () => {
  return (
    <Flex
      className="mainContainer"
      maxHeight="calc(100vh - 64px)"
      overflow="scroll"
      sx={{ '.mainContainer > div': { borderRadius: '0.4rem' } }}
    >
      <Portfolio />
    </Flex>
  );
};
