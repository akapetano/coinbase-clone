import { Box, BoxProps } from '@chakra-ui/react';

interface ISendWarning extends BoxProps {
  text: string;
}

export const SendWarning = ({ text, ...restProps }: ISendWarning) => {
  return (
    <Box p="1rem 0 2rem 0" textAlign="center" {...restProps}>
      {text}
    </Box>
  );
};
