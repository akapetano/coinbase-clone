import { Grid, Icon } from '@chakra-ui/react';

export const NavIcon = ({ icon }) => {
  return (
    <Grid
      bg="#141519"
      p="0.7rem"
      borderRadius="50%"
      m="0 1rem"
      place-items="center"
    >
      <Icon as={icon} />
    </Grid>
  );
};
