import { Box, BoxProps } from '@chakra-ui/react';
import { BalanceChart } from '../BalanceChart/BalanceChart';
import { chartData, chartOptions } from '../../../static/chart';
import { Balance } from '../Balance/Balance';

interface IChartProps extends BoxProps {
  walletBalance: number;
}

export const Chart = ({ walletBalance, ...restProps }: IChartProps) => {
  return (
    <Box border="1px solid #282b2f" p="1rem 2rem" {...restProps}>
      <Balance walletBalance={walletBalance} />
      <BalanceChart data={chartData} options={chartOptions} />
    </Box>
  );
};
