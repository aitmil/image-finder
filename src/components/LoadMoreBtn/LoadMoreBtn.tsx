import css from "./LoadMoreBtn.module.css";

export default function LoadMoreBtn({ onLoadMore }) {
  return (
    <button type="button" className={css.btn} onClick={onLoadMore}>
      Load More
    </button>
  );
}
