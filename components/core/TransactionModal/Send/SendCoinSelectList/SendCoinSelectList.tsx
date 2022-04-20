import { Flex, FlexProps } from '@chakra-ui/react';
import { SendCoinIcon } from '../SendCoinIcon/SendCoinIcon';
import { SendCoinName } from '../SendCoinName/SendCoinName';

export type Token = {
  contractAddress: string;
  logo: {};
  name: string;
  symbol: string;
  usdPrice: string;
};

interface ISendCoinSelectList extends FlexProps {
  selectedToken: Token;
  imageUrl: string;
}

export const SendCoinSelectList = ({
  selectedToken,
  imageUrl,
  ...restProps
}: ISendCoinSelectList) => {
  console.log(selectedToken);

  return (
    <Flex
      alignItems="center"
      flex="1.5"
      h="100%"
      _hover={{ cursor: 'pointer' }}
      {...restProps}
    >
      <SendCoinIcon imageUrl={imageUrl} />
      <SendCoinName>{selectedToken.name}</SendCoinName>
    </Flex>
  );
};
