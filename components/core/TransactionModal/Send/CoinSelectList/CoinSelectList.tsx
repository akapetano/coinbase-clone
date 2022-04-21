import { Flex, FlexProps } from '@chakra-ui/react';
import { CoinIcon } from '../CoinIcon/CoinIcon';
import { CoinName } from '../CoinName/CoinName';

export type Token = {
  contractAddress: string;
  logo: {};
  name: string;
  symbol: string;
  usdPrice: string;
};

interface ICoinSelectList extends FlexProps {
  selectedToken: Token;
  imageUrl: string;
}

export const CoinSelectList = ({
  selectedToken,
  imageUrl,
  ...restProps
}: ICoinSelectList) => {
  return (
    <Flex
      alignItems="center"
      flex="1.5"
      h="100%"
      _hover={{ cursor: 'pointer' }}
      {...restProps}
    >
      <CoinIcon imageUrl={imageUrl} />
      <CoinName>{selectedToken.name}</CoinName>
    </Flex>
  );
};
