import { Box, Thead, TableHeadProps } from '@chakra-ui/react';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { PortfolioTitle } from '../PortfolioTitle/PortfolioTitle';

export const PortfolioTableHead = ({ ...restProps }: TableHeadProps) => {
  return (
    <Box p="1rem 2rem">
      <Thead
        display="flex"
        width="100%"
        alignItems="center"
        justifyContent="space-between"
        {...restProps}
      >
        <Box flex="3">Name</Box>
        <Box flex="2">Balance</Box>
        <Box flex="1">Price</Box>
        <Box flex="1">Allocation</Box>
        <Box flex="0">
          <BsThreeDotsVertical />
        </Box>
      </Thead>
    </Box>
  );
};
