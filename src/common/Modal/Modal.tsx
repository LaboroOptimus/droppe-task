import React from "react";
import Modal from "react-modal";
import styles from "./Modal.module.scss";

Modal.setAppElement("#root");

interface Props {
  isOpen: boolean;
  children: any;
}

export const ModalWindow: React.FC<Props> = ({ isOpen, children }) => {
  return (
    <Modal
      isOpen={isOpen}
      className={styles.modal}
      overlayClassName={styles.overlay}
    >
      {children}
    </Modal>
  );
};
