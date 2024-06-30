import css from "./ErrorMessage.module.css";

export default function ErrorMessage() {
  return <p className={css.text}>HTTP request error. Please try again!</p>;
}
