import { Modal, ModalOverlay, ModalContent, ModalBody } from '@chakra-ui/react';
import { TransferModal } from './TransferModal/TransferModal';

export const TransactionModal = ({
  isOpen,
  onClose,
  sanityTokens,
  thirdwebTokens,
  walletAddress,
}) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay bg="rgba(10, 11, 13, 0.75)" />
      <ModalContent bg="#0a0b0d" border="none">
        <ModalBody>
          <TransferModal
            sanityTokens={sanityTokens}
            thirdwebTokens={thirdwebTokens}
            walletAddress={walletAddress}
          />
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};
