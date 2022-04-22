import { Flex, FlexProps } from '@chakra-ui/react';
import { CoinIcon } from '../../../CoinIcon/CoinIcon';
import { CoinName } from '../../../CoinName/CoinName';

export type Token = {
  contractAddress: string;
  logo: {};
  name: string;
  symbol: string;
  usdPrice: string;
};

interface ISelectedCoin extends FlexProps {
  selectedToken: Token;
  imageUrl: string;
}

export const SelectedCoin = ({
  selectedToken,
  imageUrl,
  ...restProps
}: ISelectedCoin) => {
  return (
    <Flex
      alignItems="center"
      flex="1.5"
      h="100%"
      _hover={{ cursor: 'pointer' }}
      {...restProps}
    >
      <CoinIcon imageUrl={imageUrl} selectedToken={selectedToken} />
      <CoinName>{selectedToken.name}</CoinName>
    </Flex>
  );
};
