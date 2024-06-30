import { Image } from '../../types';

export interface ImageGalleryProps {
  images: Image[];
  onImageClick: (
    imageUrl: string,
    imageAlt: string,
    imageAuthor: string
  ) => void;
}
