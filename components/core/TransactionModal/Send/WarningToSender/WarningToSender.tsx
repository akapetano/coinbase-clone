import { Box, BoxProps } from '@chakra-ui/react';

interface IWarningToSender extends BoxProps {
  text: string;
}

export const WarningToSender = ({ text, ...restProps }: IWarningToSender) => {
  return (
    <Box p="1rem 0 2rem 0" textAlign="center" {...restProps}>
      {text}
    </Box>
  );
};
