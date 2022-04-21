import { UnorderedList } from '@chakra-ui/react';
import { ListProps } from '@chakra-ui/react';

export const CoinList = ({ ...restProps }: ListProps) => {
  return <UnorderedList listStyleType="none" {...restProps} />;
};
