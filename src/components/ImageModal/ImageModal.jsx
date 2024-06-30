import Modal from "react-modal";
import css from "./ImageModal.module.css";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
  overlay: {
    backgroundColor: "rgba(15, 15, 16, 0.6)",
  },
};

Modal.setAppElement("#root");

export default function ImageModal({
  isOpen,
  isClose,
  imageUrl,
  imageAlt,
  imageAuthor,
}) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={isClose}
      style={customStyles}
      contentLabel="Image Modal"
      closeTimeoutMS={400}
    >
      <img className={css.img} src={imageUrl} alt={imageAlt} />
      <div className={css.box}>
        <p className={css.text}>{imageAlt}</p>
        <p className={css.text}>Author: {imageAuthor}</p>
      </div>
    </Modal>
  );
}
