import { Icon } from '@chakra-ui/react';
import { IconWrapper } from '../../../IconWrapper/IconWrapper';
import { FaWallet } from 'react-icons/fa';

export const WalletIcon = () => {
  return (
    <IconWrapper>
      <Icon as={FaWallet} />
    </IconWrapper>
  );
};
