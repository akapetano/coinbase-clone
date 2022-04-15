import { Box, BoxProps } from '@chakra-ui/react';
import { BalanceChart } from '../BalanceChart/BalanceChart';
import { chartData, chartOptions } from '../../../static/chart';
import { Balance } from '../Balance/Balance';

export const Chart = ({ ...restProps }: BoxProps) => {
  return (
    <Box border="1px solid #282b2f" p="1rem 2rem" {...restProps}>
      <Balance />
      <BalanceChart data={chartData} options={chartOptions} />
    </Box>
  );
};
