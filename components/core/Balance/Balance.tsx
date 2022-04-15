import { Box, BoxProps, Heading, Text } from '@chakra-ui/react';

interface IBalanceProps extends BoxProps {
  walletBalance?: string;
}

export const Balance = ({ walletBalance }: IBalanceProps) => {
  return (
    <Box>
      <Box>
        <Heading as="h4" color="#8a919e" fontSize="0.9rem">
          Portfolio balance
        </Heading>
        <Text fontSize="1.8rem" fontWeight="700" m="0.5rem 0">
          {'$'}
          {/* {walletBalance.toLocaleString('US')} */}
          46,000
        </Text>
      </Box>
    </Box>
  );
};
