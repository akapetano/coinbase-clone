import { Flex, FlexProps } from '@chakra-ui/react';

interface INavItem extends FlexProps {
  transform: string;
  onClick: () => void;
}

export const NavItem = ({ children, transform, onClick }: INavItem) => {
  return (
    <Flex
      alignItems="center"
      fontSize="1.3rem"
      fontWeight="500"
      borderRadius="0.5rem"
      mb="1.5rem"
      height="4rem"
      transform={transform}
      transition="all .2s ease-in-out"
      _hover={{ bg: '#141519', transform: 'scale(1.05)' }}
      onClick={onClick}
    >
      {children}
    </Flex>
  );
};
