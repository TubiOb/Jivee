import { useState, useEffect } from 'react';

const useCountdown = (initialTime: number) => {
  const [timeLeft, setTimeLeft] = useState(initialTime);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (isActive && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft(prev => prev - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      setIsActive(false);
    }

    return () => clearInterval(interval);
  }, [isActive, timeLeft]);

  const startCountdown = () => {
    setTimeLeft(initialTime);
    setIsActive(true);
  };

  const resetCountdown = () => {
    setTimeLeft(initialTime);
    setIsActive(false);
  };

  return { timeLeft, isActive, startCountdown, resetCountdown };
};

export default useCountdown;