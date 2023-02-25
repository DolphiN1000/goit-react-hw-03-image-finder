import PropTypes from 'prop-types';
import {Component} from 'react';
import { createPortal } from 'react-dom';
import styles from './modal.module.scss';

const modalRoot = document.querySelector('#modal-root')

class Modal extends Component {
  render(){
    const {children} = this.props;
    return(
    createPortal(
    <div className={styles.overlay}>
    <div className={styles.modal}>
      <span className={styles.close}>x</span>
      {children}
    </div>
  </div>), modalRoot)
}}

export default Modal;
