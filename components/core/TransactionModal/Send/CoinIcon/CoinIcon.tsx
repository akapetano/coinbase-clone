import { IconWrapper } from '../IconWrapper/IconWrapper';
import { Image } from '@chakra-ui/react';
import { Token } from '../SelectedCoin/SelectedCoin';

interface ICoinIconProps {
  imageUrl: string;
  selectedToken: Token;
}

export const CoinIcon = ({ imageUrl, selectedToken }: ICoinIconProps) => {
  return (
    <IconWrapper>
      <Image src={imageUrl} alt={selectedToken.name} />
    </IconWrapper>
  );
};
