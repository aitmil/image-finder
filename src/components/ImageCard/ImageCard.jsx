import css from "./ImageCard.module.css";

export default function ImageCard({
  image: { urls, description, user },
  openModal,
}) {
  return (
    <div onClick={() => openModal(urls.regular, description, user.name)}>
      <img className={css.img} src={urls.small} alt={description}></img>
    </div>
  );
}
