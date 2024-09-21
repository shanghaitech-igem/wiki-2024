import * as React from "react";
import * as styles from "src/styles/modules/modal.module.scss";

const { modalTrigger, modal, overlayer, close, article, header, section } =
  styles;

interface ModalProps {
  id?: string; // Make id optional
  title: string;
  triggerText: string;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ id, title, triggerText, children }) => {
  const [generatedId, setGeneratedId] = React.useState<string>("");

  React.useEffect(() => {
    if (!id) {
      setGeneratedId(`modal-${Math.random().toString(36).substr(2, 9)}`);
    }
  }, [id]);

  const modalId = id || generatedId;

  return (
    <div>
      {/* Trigger Button */}
      <label htmlFor={modalId} className={modalTrigger}>
        {triggerText}
      </label>

      {/* Modal Structure */}
      <div className={modal}>
        <input id={modalId} type="checkbox" />
        <label htmlFor={modalId} className={overlayer}></label>
        <article className={article}>
          <header className={header}>
            <h3>{title}</h3>
            <label htmlFor={modalId} className={close}>
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
