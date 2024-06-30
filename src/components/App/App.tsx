import { useState, useEffect } from 'react';
import 'modern-normalize';
import { ErrorMessage } from '../ErrorMessage/ErrorMessage';
import { ImageGallery } from '../ImageGallery/ImageGallery';
import { ImageModal } from '../ImageModal/ImageModal';
import { LoadMoreBtn } from '../LoadMoreBtn/LoadMoreBtn';
import { Loader } from '../Loader/Loader';
import { SearchBar } from '../SearchBar/SearchBar';
import { getImages } from '../../api/image-api';
import { Image } from '../../types';
import css from './App.module.css';

export default function App() {
  const [images, setImages] = useState<Image[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [page, setPage] = useState<number>(1);
  const [showBtn, setShowBtn] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
  const [selectedImageUrl, setImageUrl] = useState<string>('');
  const [selectedImageAlt, setImageAlt] = useState<string>('');
  const [selectedImageAuthor, setImageAuthor] = useState<string>('');

  useEffect(() => {
    async function fetchImages() {
      setIsError(false);
      setIsLoading(true);
      try {
        const { results, total_pages } = await getImages(searchQuery, page);
        setImages(prevState => [...prevState, ...results]);
        setShowBtn(total_pages !== page);
      } catch {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    }
    if (searchQuery) {
      fetchImages();
    }
  }, [searchQuery, page]);

  const handleSearch = async (query: string): Promise<void> => {
    setSearchQuery(query);
    setPage(1);
    setImages([]);
  };

  const handleLoadMore = async (): Promise<void> => setPage(page + 1);

  const handleOpenModal = (
    imageUrl: string,
    imageAlt: string,
    imageAuthor: string
  ): void => {
    setImageUrl(imageUrl);
    setImageAlt((): string =>
      typeof imageAlt === 'string' ? imageAlt : `${searchQuery} image`
    );
    setImageAuthor((): string =>
      typeof imageAuthor === 'string' ? imageAuthor : 'Unknown'
    );
    setModalIsOpen(true);
  };

  const handleCloseModal = (): void => setModalIsOpen(false);

  return (
    <div className={css.container}>
      <SearchBar onSubmit={handleSearch} />
      {isError && <ErrorMessage />}
      {images.length > 0 && (
        <ImageGallery
          images={images}
          onImageClick={handleOpenModal}
        />
      )}
      {isLoading && <Loader />}
      {showBtn && images.length > 0 && !isLoading && (
        <LoadMoreBtn onLoadMore={handleLoadMore} />
      )}
      <ImageModal
        isOpen={modalIsOpen}
        isClose={handleCloseModal}
        imageUrl={selectedImageUrl}
        imageAlt={selectedImageAlt}
        imageAuthor={selectedImageAuthor}
      />
    </div>
  );
}
