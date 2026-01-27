import Timer from '../Timer/Timer';

export default function Header() {
  return (
    <header className="h-[74px] sm:h-[85px] xl:h-[103px]  py-[8px] px-0 bg-[var(--header-bg)]">
      <p className="text-[14px] sm:text-[18px] xl:text-[24px] font-semibold text-[14px] text-center text-[var(--foreground)]        ">
        Успейте открыть пробную неделю
      </p>
      <Timer />
    </header>
  );
}
