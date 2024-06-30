import { FC } from 'react';
import { ImageCard } from '../ImageCard/ImageCard';
import { ImageGalleryProps } from './ImageGalleryProps';
import css from './ImageGallery.module.css';

export const ImageGallery: FC<ImageGalleryProps> = ({
  images,
  onImageClick,
}) => {
  return (
    <ul className={css.list}>
      {images.map(image => (
        <li
          className={css.item}
          key={image.id}
        >
          <ImageCard
            image={image}
            openModal={onImageClick}
          />
        </li>
      ))}
    </ul>
  );
};
