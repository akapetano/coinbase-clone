import { Grid, Icon, IconProps } from '@chakra-ui/react';
import { IconType } from 'react-icons';

interface INavIcon extends IconProps {
  icon: IconType;
}

export const NavIcon = ({ icon, ...restProps }: INavIcon) => {
  return (
    <Grid
      bg="#141519"
      p="0.7rem"
      borderRadius="50%"
      m="0 1rem"
      place-items="center"
    >
      <Icon as={icon} {...restProps} />
    </Grid>
  );
};
