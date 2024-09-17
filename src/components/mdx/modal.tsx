import * as React from "react";
import * as styles from "src/styles/modules/modal.module.scss";

const { modalTrigger, modal, overlayer, close } = styles;

const Modal: React.FC = () => {
  return (
    <div>
      {/* Trigger Button */}
      <label htmlFor="modal_1" className={modalTrigger}>
        Show modal
      </label>

      {/* Modal Structure */}
      <div className={modal}>
        <input id="modal_1" type="checkbox" />
        <label htmlFor="modal_1" className={overlayer}></label>
        <article>
          <header>
            <h3>Great offer</h3>
            <label htmlFor="modal_1" className={close}>
              &times;
            </label>
          </header>
          <section>
            We have a special offer for you. I am sure you will love it! However
            this does look spammy...
          </section>
        </article>
      </div>
    </div>
  );
};

export default Modal;
