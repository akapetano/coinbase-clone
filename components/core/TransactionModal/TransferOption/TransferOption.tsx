import { Grid, GridProps } from '@chakra-ui/react';

interface ITransferOption extends GridProps {
  text: string;
}

export const TransferOption = ({
  onClick,
  text,
  ...restProps
}: ITransferOption) => {
  return (
    <Grid
      h="100%"
      w="100%"
      placeItems="center"
      fontSize="1.2rem"
      fontWeight="600"
      _hover={{ cursor: 'pointer', bg: '#111214' }}
      onClick={onClick}
      {...restProps}
    >
      {text}
    </Grid>
  );
};
