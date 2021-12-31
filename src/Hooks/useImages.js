import { useCallback, useEffect, useState } from "react";
import { searchImage } from "../Services/images";

export function useImages({ query, page }) {
  const [images, setImages] = useState([]);

  useEffect(() => {
    if (images.length > 0) return;

    searchImage().then((data) => {
      setImages(data.results);
    });
  }, []);

  const getImages = useCallback(() => {
    searchImage().then((data) => {
      setImages(data.results);
    });
  }, []);

  return {
    images,
    getImages,
  };
}
