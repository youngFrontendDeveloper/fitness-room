export default function Button() {
  return (
    <button
      type="submit"
      style={{
        position: 'relative',
        overflow: 'hidden',
      }}
      className="
        flex justify-center items-center 
        w-full max-w-[352px] h-[55px] sm:h-[63px] xl:h-[66px]
        mb-[10px] sm:mb-[20px] xl:mb-[14px] 
        text-[18px] xl:text-[20px] text-[var(--button-text)] font-bold leading-[1.3]
        bg-[var(--attention)] rounded-[20px]  
        transition-all duration-200 
        cursor-pointer 
        hover:scale-[0.99]
        "
    >
      <span
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent)',
          animation: 'shimmer 2s infinite linear',
        }}
      />

      <span style={{ position: 'relative', zIndex: 10 }}>Купить</span>
    </button>
  );
}
