import React, { useState } from 'react';

import Content from './Content';

import '@styles/components/home/Modal.scss';

interface Props {
  visible: boolean;
  onClose: any;
}

const Modal = (props: Props) => {
  if (!props.visible) {
    return null;
  }
  return (
    <>
      <div className="modal-outer" onClick={props.onClose}></div>
      <div className="modal-inner">
        <div className="modal-inner-close" onClick={props.onClose} />
        <Content onClose={props.onClose} />
      </div>
    </>
  );
};

export default Modal;
