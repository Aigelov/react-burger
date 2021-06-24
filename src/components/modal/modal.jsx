import React, { useCallback, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { ModalOverlay } from "../modal-overlay/modal-overlay";
import ModalStyles from "./modal.module.css";

const modalRoot = document.getElementById("react-modals");

export const Modal = ({ children, header, onClose }) => {
  const modalStyle = `${ModalStyles.modal} p-10 pb-25`;
  const headerStyle = `${ModalStyles.header} mb-10`;

  const modalRef = useRef(null);

  const keyDownHandler = useCallback(
    ({ keyCode }) => {
      if (keyCode === 27) {
        onClose();
      }
    },
    [onClose]
  );

  const clickHandler = useCallback(
    ({ target }) => {
      if (!modalRef?.current?.contains(target)) {
        onClose();
      }
    },
    [onClose]
  );

  useEffect(() => {
    document.addEventListener("keydown", keyDownHandler, false);
    document.addEventListener("click", clickHandler, false);

    return () => {
      document.removeEventListener("keydown", keyDownHandler, false);
      document.removeEventListener("click", clickHandler, false);
    };
  }, [clickHandler, keyDownHandler]);

  return createPortal(
    <ModalOverlay>
      <div className={modalStyle} ref={modalRef}>
        <header className={headerStyle}>
          <span className={ModalStyles.close} onClick={onClose}>
            <CloseIcon type="primary" />
          </span>
          {header && (
            <span className="text text_type_main-medium">{header}</span>
          )}
        </header>
        {children}
      </div>
    </ModalOverlay>,
    modalRoot
  );
};