import { Grid, GridProps, Icon } from '@chakra-ui/react';
import { FaWallet } from 'react-icons/fa';

export const SendWalletIcon = ({ ...restProps }: GridProps) => {
  return (
    <Grid
      placeItems="center"
      mr="1rem"
      h="1.8rem"
      w="1.8rem"
      borderRadius="50%"
      overflow="hidden"
      sx={{ '& > img': { h: '120%', w: '120%', objectFit: 'cover' } }}
      {...restProps}
    >
      <Icon as={FaWallet} />
    </Grid>
  );
};
