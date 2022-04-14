import { Box, Flex, FlexProps } from '@chakra-ui/react';
import { BsThreeDotsVertical } from 'react-icons/bs';

export const PortfolioTableHeadTitles = ({ ...restProps }: FlexProps) => {
  return (
    <Box p="1rem 2rem">
      <Flex
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
      </Flex>
    </Box>
  );
};
