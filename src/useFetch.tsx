import { useState, useEffect } from 'react';

interface UseFetchOptions {
  url: string;
  options?: RequestInit;
}

interface UseFetchState<T> {
  data: T | null;
  error: Error | null;
  loading: boolean;
}

export default function useFetch<T = unknown>({
  url,
  options = {}
}: UseFetchOptions): UseFetchState<T> {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url, options);
        const parsedData: T = await response.json();
        setData(parsedData);
      } catch (err: Error | unknown) {
        setError(err as Error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url, JSON.stringify(options)]);

  return { data, error, loading };
}
