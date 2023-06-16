import React from 'react';
import { Image, Modal } from 'react-bootstrap';

interface CustomModalProps {
  showModal: boolean;
  setShowModal: (value: boolean) => void;
  imageUrl: string;
  title: string;
}

export const CustomModal = ({
  showModal,
  setShowModal,
  title,
  imageUrl
}: CustomModalProps) => {
  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <Modal show={showModal} onHide={handleCloseModal} centered>
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Image src={imageUrl} style={{ maxWidth: '100%' }} />
      </Modal.Body>
    </Modal>
  );
};
