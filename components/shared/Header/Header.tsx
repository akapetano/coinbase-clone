import { Heading, Flex, Button } from '@chakra-ui/react';
import { HeaderWrapper } from '../../core/HeaderWrapper/HeaderWrapper';

export const Header = () => {
  return (
    <HeaderWrapper>
      <Heading as="h2" fontSize="2rem" fontWeight="600" flex="1">
        Assets
      </Heading>
      <Flex>
        <Button variant="primary">Buy / Sell</Button>
        <Button variant="secondary">Send / Receive</Button>
      </Flex>
    </HeaderWrapper>
  );
};
