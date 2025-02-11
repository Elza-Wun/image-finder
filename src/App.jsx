import { useState, useEffect } from "react";
import "./App.css";
import { fetchData } from "./api/fetchData";
import ImageGallery from "./Components/ImageGallery";
import Searchbar from "./components/Searchbar";
// import notFound from "./assets/not-found.jpg";
import NotFound from "./Components/NotFound";
import Modal from "./Components/Modal";
import Button from "./Components/Button";
import arrow from "./assets/arrow.png";

const App = () => {
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState("cats");
  const [largeImg, setLargeImg] = useState(null);
  const [page, setPage] = useState(1);
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    if (page > 1) {
      fetchData(query, page).then((data) =>
        setImages([...images, ...data.hits])
      );
    } else {
      fetchData(query, page).then((data) => setImages(data.hits));
    }
  }, [query, page]);

  const handleQuery = (value) => {
    setImages("");
    setQuery(value);
  };

  const handleLargeImg = (image) => {
    setLargeImg(image);
  };

  const handleDelete = () => {
    setLargeImg(null);
  };

  const handleLoadMore = () => {
    setPage(page + 1);
  };

  const handleScroll = () => {
    window.scrollTo(0, 0);
  };

  window.addEventListener("scroll", () => {
    setScroll(true);
  });

  return (
    <main className="App">
      <Searchbar handleQuery={handleQuery} />

      {images.length > 0 ? (
        <>
          <ImageGallery handleLargeImg={handleLargeImg} images={images} />
          <Button handleLoadMore={handleLoadMore} />
          {scroll ? (
            <button
              onScroll={() => setScroll(true)}
              className="btn-scroll"
              onClick={handleScroll}
            >
              <img width={50} src={arrow} alt="Вверх" />
            </button>
          ) : (
            ""
          )}
        </>
      ) : (
        <NotFound />
      )}
      {largeImg ? (
        <Modal largeImg={largeImg} handleDelete={handleDelete} />
      ) : (
        ""
      )}
    </main>
  );
};

export default App;
