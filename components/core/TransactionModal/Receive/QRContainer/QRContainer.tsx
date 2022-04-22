import { Grid, GridProps } from '@chakra-ui/react';

export const QRContainer = ({ ...restProps }: GridProps) => (
  <Grid flex="1" placeItems="center" {...restProps} />
);
