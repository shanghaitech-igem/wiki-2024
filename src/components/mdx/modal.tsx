import * as React from "react";
import * as styles from "src/styles/modules/modal.module.scss";

const { modalTrigger, modal, overlayer, close, article, header, section } =
  styles;

interface ModalProps {
  title: string;
  triggerText: string;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ title, triggerText, children }) => {
  return (
    <div>
      {/* Trigger Button */}
      <label htmlFor="modal_1" className={modalTrigger}>
        {triggerText}
      </label>

      {/* Modal Structure */}
      <div className={modal}>
        <input id="modal_1" type="checkbox" />
        <label htmlFor="modal_1" className={overlayer}></label>
        <article className={article}>
          <header className={header}>
            <h3>{title}</h3>
            <label htmlFor="modal_1" className={close}>
              &times;
            </label>
          </header>
          <section className={section}>{children}</section>
        </article>
      </div>
    </div>
  );
};

export default Modal;
