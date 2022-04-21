import { IconWrapper } from '../IconWrapper/IconWrapper';
import { Image } from '@chakra-ui/react';

interface ICoinIconProps {
  imageUrl: string;
}

export const CoinIcon = ({ imageUrl }: ICoinIconProps) => {
  return (
    <IconWrapper>
      <Image src={imageUrl} alt="Ethereum logo" />
    </IconWrapper>
  );
};
