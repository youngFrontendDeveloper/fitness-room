import TimerBlock from '../../features/timer/components/TimerBlock';

export default function Header() {
  return (
    <div className="sticky top-0 z-[50] bg-[var(--foreground)]">
    <header className="sticky top-0 z-[50] w-full h-[74px] sm:h-[85px] xl:h-[103px]  py-[8px] px-0 bg-[var(--header-bg)] md:rounded-tl-[60px] md:rounded-tr-[60px]">
      <p className="text-[14px] sm:text-[18px] xl:text-[24px] font-semibold text-[14px] text-center text-[var(--foreground)]        ">
        Успейте открыть пробную неделю
      </p>
      <TimerBlock initialTime={120} />
    </header>
    </div>
  );
}
