import { Box } from '@chakra-ui/react';
import CoinbaseLogo from '../../../assets/cb-logo.png';
import Image from 'next/image';

export const Logo = () => {
  return (
    <Box width="44%" marginLeft="1.5rem" objectFit="contain">
      <Image src={CoinbaseLogo} alt="Coinbase logo" />
    </Box>
  );
};
