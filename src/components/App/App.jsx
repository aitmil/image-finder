import { useState, useEffect } from "react";
import "modern-normalize";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import ImageGallery from "../ImageGallery/ImageGallery";
import ImageModal from "../ImageModal/ImageModal";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import Loader from "../Loader/Loader";
import SearchBar from "../SearchBar/SearchBar";
import { getImages } from "../../image-api";
import css from "./App.module.css";

export default function App() {
  const [images, setImages] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [page, setPage] = useState(1);
  const [showBtn, setShowBtn] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedImageUrl, setImageUrl] = useState("");
  const [selectedImageAlt, setImageAlt] = useState("");
  const [selectedImageAuthor, setImageAuthor] = useState("");

  useEffect(() => {
    async function fetchImages() {
      setIsError(false);
      setIsLoading(true);
      try {
        const { results, total_pages } = await getImages(searchQuery, page);
        setImages((prevState) => [...prevState, ...results]);
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

  const handleSearch = async (query) => {
    setSearchQuery(query);
    setPage(1);
    setImages([]);
  };

  const handleLoadMore = async () => setPage(page + 1);

  const handleOpenModal = (imageUrl, imageAlt, imageAuthor) => {
    setImageUrl(imageUrl);
    setImageAlt(() => (imageAlt !== null ? imageAlt : `${searchQuery} image`));
    setImageAuthor(() => (imageAuthor !== null ? imageAuthor : "Unknown"));
    setModalIsOpen(true);
  };

  const handleCloseModal = () => setModalIsOpen(false);

  return (
    <div className={css.container}>
      <SearchBar onSubmit={handleSearch} />
      {isError && <ErrorMessage />}
      {images.length > 0 && (
        <ImageGallery images={images} onImageClick={handleOpenModal} />
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
