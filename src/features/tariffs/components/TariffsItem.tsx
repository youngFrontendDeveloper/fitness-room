import { useAppSelector } from '../../../app/store/hooks';

interface TariffsItemProps {
  period: string;
  price: number;
  full_price: number;
  text: string;
  is_best: boolean;
  isSelected: boolean;
}
export default function TariffsItem({
  period,
  price,
  full_price,
  text,
  is_best,
  isSelected,
}: TariffsItemProps) {
  const { isTimeFinished } = useAppSelector(state => state.timer);

  const getShortText = () => {
    switch (period) {
      case 'Навсегда':
        return 'Всегда быть в форме';
      case '1 месяц':
        return 'Получить первые результаты';
      default:
        return text;
    }
  };

  return (
    <div
      className={`
        flex w-full items-center justify-between gap-[30px] sm:gap-[50px] xl:gap-[40px] pr-[20px] pl-[20px] sm:px-[30px] xl:px-[40px] py-[20px] border-2 rounded-[20px] 
        transition-all duration-300 cursor-pointer
        hover:scale-[0.99] 
        ${
          isSelected
            ? 'border-[var(--attention)]'
            : 'border-[var(--border)] hover:border-[var(--attention)]/50'
        }
        ${is_best ? 'relative overflow-hidden' : ''}
      `}
    >
      <div className=" flex flex-col min-w-[120px] sm:min-w-[121px] xl:min-w-[178px] ">
        <h2 className="mb-[12px] sm:mb-[16px] text-center text-[16px] sm:text-[18px] xl:text-[26px] text-[var(--foreground)] font-medium leading-[1.2]">
          {period}
        </h2>
        <div className="relative min-h-[30px] sm:min-h-[34px] xl:min-h-[50px]">
          <span
            className={`
      absolute top-0 left-0
      text-[var(--attention)] text-[30px] sm:text-[34px] xl:text-[50px] font-semibold leading-[1]
      transition-opacity duration-0
      ${isTimeFinished ? 'opacity-0' : 'opacity-100'}
    `}
            style={{ transitionDuration: isTimeFinished ? '0ms' : '0ms' }}
          >
            {price} ₽
          </span>

          <span
            className={`
    absolute
    transition-all duration-500 ease-out
    will-change: transform, font-size, color;
    ${
      isTimeFinished
        ? `
         
          transform: translateX(0) translateY(0);
          text-[var(--attention)] 
          text-[30px] sm:text-[34px] xl:text-[50px] 
          font-semibold leading-[1]
        `
        : `
          
          transform: translateX(100%) translateY(30px);
          text-[var(--full-price)] 
          text-[14px] sm:text-[16px] xl:text-[24px] 
          line-through
          leading-[1.2]
        `
    }
  `}
            style={{
              transition: 'all 500ms ease-out',
              transform: isTimeFinished
                ? 'translateX(0) translateY(0)'
                : 'translateX(100%) translateY(30px)',
            }}
          >
            {full_price} ₽
          </span>
        </div>
      </div>

      <p className="block xl:hidden mb-[12px] sm:mb-[16px] text-[14px] xl:text-[16px] text-[var(--foreground)] leading-[1.3]">
        {getShortText()}
      </p>
      <p className="hidden xl:block mb-[12px] sm:mb-[16px] text-[14px] xl:text-[16px] text-[var(--foreground)] leading-[1.3]">
        {text}
      </p>
    </div>
  );
}
