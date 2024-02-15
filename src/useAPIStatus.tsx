import { useState, useEffect } from 'react';

interface UseAPIStatusOptions {
  interval: number;
}

interface APIStatus {
  isOnline: boolean;
  lastChecked: Date | null;
}

const useAPIStatus = (url: string, { interval }: UseAPIStatusOptions): APIStatus => {
  const [isOnline, setIsOnline] = useState<boolean>(false);
  const [lastChecked, setLastChecked] = useState<Date | null>(null);

  useEffect(() => {
    const checkAPIStatus = async () => {
      try {
        const response = await fetch(url, { method: 'HEAD' });
        if (response.ok) {
          setIsOnline(true);
        } else {
          setIsOnline(false);
        }
      } catch (error) {
        setIsOnline(false);
      } finally {
        setLastChecked(new Date());
      }
    };

    const intervalId = setInterval(checkAPIStatus, interval);

    // Effectuer une vérification initiale au montage
    checkAPIStatus();

    return () => clearInterval(intervalId);
  }, [url, interval]);

  return { isOnline, lastChecked };
};

export default useAPIStatus;
