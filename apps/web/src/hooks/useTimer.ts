import { useCallback, useEffect, useRef, useState } from 'react';

interface UseTimerProps {
  startFrom: number;
  onEnd?: () => void;
}

export const useTimer = (props: UseTimerProps) => {
  const { startFrom, onEnd } = props;

  const timer = useRef<ReturnType<typeof setInterval> | null>(null);
  const onEndRef = useRef(onEnd);

  const [seconds, setSeconds] = useState(startFrom);

  // onEnd 콜백을 항상 최신 값으로 유지
  useEffect(() => {
    onEndRef.current = onEnd;
  }, [onEnd]);

  // seconds가 0이 되었을 때 onEnd 콜백 호출
  useEffect(() => {
    if (seconds === 0 && onEndRef.current) {
      onEndRef.current();
    }
  }, [seconds]);

  const start = useCallback(() => {
    if (timer.current) {
      clearInterval(timer.current);
    }

    timer.current = setInterval(() => {
      setSeconds(prevSeconds => {
        const newSeconds = prevSeconds - 1;

        if (newSeconds <= 0) {
          if (timer.current) {
            clearInterval(timer.current);
          }
          return 0;
        }

        return newSeconds;
      });
    }, 1000);
  }, []);

  const pause = () => {
    if (timer.current) {
      clearInterval(timer.current);
    }
  };

  const stop = () => {
    if (timer.current) {
      clearInterval(timer.current);
    }
    setSeconds(0);
  };

  return {
    seconds,
    start,
    pause,
    stop,
  };
};
