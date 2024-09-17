import * as React from "react";
import * as styles from "src/styles/modules/modal.module.scss";

const { modalTrigger, modal, overlayer, close, article, header, section } = styles;

interface ModalProps {
  id: string;
  title: string;
  triggerText: string;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ id, title, triggerText, children }) => {
  return (
    <div>
      {/* Trigger Button */}
      <label htmlFor={id} className={modalTrigger}>
        {triggerText}
      </label>

      {/* Modal Structure */}
      <div className={modal}>
        <input id={id} type="checkbox" />
        <label htmlFor={id} className={overlayer}></label>
        <article className={article}>
          <header className={header}>
            <h3>{title}</h3>
            <label htmlFor={id} className={close}>
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
