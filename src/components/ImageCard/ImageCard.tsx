import { FC } from 'react';
import { ImageCardProps } from './ImageCardProps';
import css from './ImageCard.module.css';

export const ImageCard: FC<ImageCardProps> = ({
  image: { urls, description, user },
  openModal,
}) => {
  return (
    <div onClick={() => openModal(urls.regular, description, user.name)}>
      <img
        className={css.img}
        src={urls.small}
        alt={description}
      ></img>
    </div>
  );
};
