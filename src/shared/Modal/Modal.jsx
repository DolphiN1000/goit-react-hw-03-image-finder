import PropTypes from 'prop-types';
import { Component } from 'react';
import { createPortal } from 'react-dom';

import styles from './modal.module.scss';

const modalRoot = document.querySelector('#modal-root');

class Modal extends Component {

  componentDidMount() {
    document.addEventListener('keydown', this.closeModal)
  }

componentWillUnmount() {
  document.removeEventListener('keydown', this.closeModal)
}

  closeModal = ({ target, currentTarget, code }) => {
    if (target === currentTarget || code === "Escape") {
      this.props.close();
    }
  };
  render() {
    const { children, close, showModal } = this.props;
    const { closeModal } = this;
    return createPortal(
      <div className={styles.overlay} onClick={closeModal}>
        <div className={styles.modal}>
          {showModal && (
            <span className={styles.close} onClick={close}>
              x
            </span>
          )}
          {children}
        </div>
      </div>,
      modalRoot
    );
  }
}

export default Modal;

Modal.propTypes = {
  children: PropTypes.array.isRequired,
  close: PropTypes.func.isRequired,
  showModal: PropTypes.bool.isRequired,
};
