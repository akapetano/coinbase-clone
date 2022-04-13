import { Button } from '@chakra-ui/react';

export const ConnectWalletButton = ({ onClick }) => {
  return (
    <Button variant="primary" onClick={onClick}>
      Connect Wallet
    </Button>
  );
};
