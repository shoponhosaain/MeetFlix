// useMovieInfo.js
import { useState, useEffect } from 'react';
import axios from 'axios';

const useMovieInfo = (imdbUrl) => {
  const [movieData, setMovieData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const imdbId = extractIMDbId(imdbUrl);
        const response = await axios.get(`https://www.omdbapi.com/?i=${imdbId}&apikey=d0cbd3a2`);
        setMovieData(response.data);
      } catch (error) {
        console.error('Error fetching movie data:', error);
      }
    };

    fetchData();
  }, [imdbUrl]);

  const extractIMDbId = (url) => {
    const match = url.match(/(?:tt\d{7})/);
    return match ? match[0] : null;
  };

  return movieData;
};

export default useMovieInfo;
