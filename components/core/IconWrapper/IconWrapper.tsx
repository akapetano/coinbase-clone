import { Grid, GridProps } from '@chakra-ui/react';

export const IconWrapper = ({ ...restProps }: GridProps) => {
  return (
    <Grid
      placeItems="center"
      mr="1rem"
      h="1.8rem"
      w="1.8rem"
      borderRadius="50%"
      overflow="hidden"
      sx={{ '& > img': { h: '120%', w: '120%', objectFit: 'cover' } }}
      {...restProps}
    />
  );
};
