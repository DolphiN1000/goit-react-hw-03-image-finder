import PropTypes from 'prop-types';
import { Component } from 'react';
import { createPortal } from 'react-dom';
import styles from './modal.module.scss';

const modalRoot = document.querySelector('#modal-root');

class Modal extends Component {
  closeModal = ({ target, currentTarget }) => {
    if (target === currentTarget) {
      this.props.close();
    }
  };
  render() {
    const { children, close } = this.props;
    const {closeModal} =this;
    return createPortal(
      <div className={styles.overlay} onClick={closeModal}>
        <div className={styles.modal}>
          <span className={styles.close} onClick={close}>
            x
          </span>
          {children}
        </div>
      </div>,
      modalRoot
    );
  }
}

export default Modal;
