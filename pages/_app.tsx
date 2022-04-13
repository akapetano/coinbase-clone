import '../styles/globals.css';
import { ChainId, ThirdwebProvider } from '@thirdweb-dev/react';

const supportedChainIds = 4;
// const connectors = {
//   injected: {},
// };

function MyApp({ Component, pageProps }) {
  return (
    <ThirdwebProvider
      desiredChainId={supportedChainIds}
      // connectors={connectors}
    >
      <Component {...pageProps} />
    </ThirdwebProvider>
  );
}

export default MyApp;
