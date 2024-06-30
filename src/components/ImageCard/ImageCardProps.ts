import { Image } from '../../types';

export interface ImageCardProps {
  image: Image;
  openModal: (imageUrl: string, imageAlt: string, imageAuthor: string) => void;
}
