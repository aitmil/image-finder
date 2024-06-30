export interface ImageModalProps {
  isOpen: boolean;
  isClose: () => void;
  imageUrl: string;
  imageAlt: string;
  imageAuthor: string;
}
