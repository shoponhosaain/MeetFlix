import { useState, useEffect } from 'react';

function useFetch(url) {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const fetchedData = await response.json();
        setData(fetchedData);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();

    // Cleanup function to cancel any pending requests if component unmounts
    return () => {
      setData(null); // Clear data when unmounting to avoid potential memory leaks
    };
  }, [url]); // Re-run effect when URL changes

  return { data, isLoading, error };
}

export default useFetch;
