import { Flex, FlexProps } from '@chakra-ui/react';

export const NavItem = ({ children }: FlexProps) => {
  return (
    <Flex
      alignItems="center"
      fontSize="1.3rem"
      fontWeight="500"
      borderRadius="0.5rem"
      mb="1.5rem"
      height="4rem"
      transition="all .3s ease-in-out"
      _hover={{ bg: '#141519' }}
    >
      {children}
    </Flex>
  );
};
