import { Grid } from '@chakra-ui/react';
import { Portfolio } from '../../features/portfolio/Portfolio/Portfolio';
import { Promos } from '../../features/portfolio/Promos/Promos';

export const Main = () => {
  return (
    <Grid
      gridTemplateColumns={[
        'fit-content',
        'fit-content',
        'fit-content',
        '3fr 1fr',
        '3fr 1fr',
      ]}
      p="0.5rem"
      className="mainContainer"
      maxHeight="calc(100vh - 64px)"
      overflow="hidden"
      overflowY="scroll"
      css={{
        '&::-webkit-scrollbar': {
          display: 'none',
        },
      }}
    >
      <Portfolio />
      <Promos />
    </Grid>
  );
};
