import { Grid, GridProps, Image } from '@chakra-ui/react';

interface ISendCoinIconProps extends GridProps {
  imageUrl: string;
}

export const SendCoinIcon = ({
  imageUrl,
  ...restProps
}: ISendCoinIconProps) => {
  return (
    <Grid
      placeItems="center"
      mr="2rem"
      h="1.8rem"
      w="1.8rem"
      borderRadius="50%"
      overflow="hidden"
      sx={{ '& > img': { h: '120%', w: '120%', objectFit: 'cover' } }}
      {...restProps}
    >
      <Image src={imageUrl} alt="Ethereum logo" />
    </Grid>
  );
};
