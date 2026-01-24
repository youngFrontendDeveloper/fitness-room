
export default function Container ({children}: { children: React.ReactNode }) {

  return (
      <div className={'max-w-[1920px] md:max-w-[95%] mx-auto'}>
        {children}
      </div>
  );
};