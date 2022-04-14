import { Flex } from '@chakra-ui/react';
import { BalanceChart } from '../../core/BalanceChart/BalanceChart';
import { Portfolio } from '../../features/portfolio/Portfolio/Portfolio';
import { Promos } from '../../features/portfolio/Promos/Promos';
import { chartData, chartOptions } from '../../../static/chart';

export const Main = () => {
  return (
    <Flex
      className="mainContainer"
      maxHeight="calc(100vh - 64px)"
      overflow="hidden"
      sx={{ '.mainContainer > div': { borderRadius: '0.4rem' } }}
    >
      <Portfolio />
      <Promos />
    </Flex>
  );
};
