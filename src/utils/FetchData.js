
import { useQuery } from 'react-query';

const fetchData = async (url) => {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error('Failed to fetch data');
  }
  return response.json();
};

const useDataFetching = (url) => {
  const { isLoading, error, data } = useQuery('data', () => fetchData(url));

 

  return {
    isLoading,
    error,
    data,
  };
};

export default useDataFetching;