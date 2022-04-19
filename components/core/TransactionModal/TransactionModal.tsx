import {
  Modal,
  ModalProps,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
} from '@chakra-ui/react';
import { TransferModal } from './TransferModal/TransferModal';

export const TransactionModal = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay bg="rgba(10, 11, 13, 0.75)" />
      <ModalContent bg="#0a0b0d" border="none">
        <ModalBody height="100%">
          <TransferModal />
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};
