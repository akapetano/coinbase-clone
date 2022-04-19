import { Flex, FlexProps } from '@chakra-ui/react';

export const SendInputContainer = ({ ...restProps }: FlexProps) => {
  return (
    <Flex
      flex="1"
      flexDir="row"
      alignItems="flex-end"
      justifyContent="center"
      sx={{ '& > span': { fontSize: '3rem', color: '#3773f5' } }}
      {...restProps}
    />
  );
};
