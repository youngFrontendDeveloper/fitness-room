export const formatTime = (secs: number) => {
  const minutes = Math.floor(secs / 60);
  const seconds = secs % 60;
 
  return {
    minutes: `${String(minutes).padStart(2, '0')}`,
    seconds: `${String(seconds).padStart(2, '0')}`,
  };
};
