import * as React from "react";

import * as styles from "src/styles/modules/modal.module.scss";

const Modal: React.FC = () => {
  return (
    <div>
      <label htmlFor="modal_1" className="button">
        Show modal
      </label>

      <div className="modal">
        <input id="modal_1" type="checkbox" />
        <label htmlFor="modal_1" className="overlay"></label>
        <article>
          <header>
            <h3>Great offer</h3>
            <label htmlFor="modal_1" className="close">
              &times;
            </label>
          </header>
          <section className="content">
            We have a special offer for you. I am sure you will love it! However
            this does look spammy...
          </section>
          <footer>
            <a className="button" href="#">
              See offer
            </a>
            <label htmlFor="modal_1" className="button dangerous">
              Cancel
            </label>
          </footer>
        </article>
      </div>
    </div>
  );
};

export default Modal;
