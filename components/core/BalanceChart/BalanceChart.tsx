import { Box } from '@chakra-ui/react';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';

export const BalanceChart = ({ data, options }) => {
  return (
    <Box>
      <Line data={data} options={options} width={400} height={150} />
    </Box>
  );
};
