'use client';

import { useEffect, useRef, useState } from 'react';
import { useAppDispatch } from '../../../app/store/hooks';
import { setTimeFinished } from '../../timer/model/slices/timerSlice';
import { formatTime } from '../model/lib/formatTime';

export default function Timer({ initialTime }: { initialTime: number }) {
  const [time, setTime] = useState(initialTime);
  const [timeRunningOut, setTimeRunningOut] = useState(false);
  const dispatch = useAppDispatch();
  const { minutes, seconds } = formatTime(time);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setTime(prev => {
        const newTime = prev - 1;

        if (newTime <= 0) {
          if (timerRef.current) {
            clearInterval(timerRef.current);
            timerRef.current = null;
          }
          return 0;
        }

        return newTime;
      });
    }, 1000);

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (time === 30) {   
      setTimeRunningOut(true);
    }
  });

  // useEffect(() => {
  //   if (time === 0) {   
  //     setTimeRunningOut(false);
  //     dispatch(setTimeFinished(true));
  //   }
  // });

  useEffect(() => {
    if (time <= 0) {
      setTime(0);
    }
  });

  return (
    <time
      dateTime="PT6M54S"
      className="flex flex-nowrap justify-center  mx-[8px] text-[28px] sm:text-[32px] xl:text-[40px]"
    >
      <span
        className={`flex justify-start w-[35px] sm:w-[40px] xl:w-[50px] 
          ${timeRunningOut ? 'text-[var(--warning)] animate-pulse animate-infinite animate-duration-800' : 'text-[var(--timer)]'}
          `}
      >
        {minutes}
      </span>
      <span className="mx-[6px] text-[var(--timer)]">:</span>
      <span
        className={`
          flex justify-start w-[35px] sm:w-[40px] xl:w-[50px] 
         ${timeRunningOut ? 'text-[var(--warning)] animate-pulse animate-infinite animate-duration-800' : 'text-[var(--timer)]'}
          `}
      >
        {seconds}
      </span>
    </time>
  );
}
