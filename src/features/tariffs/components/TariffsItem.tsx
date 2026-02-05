import { useAppSelector } from '../../../app/store/hooks';
import { tariff } from '../model/types';

interface TariffsItemProps {
  option: tariff;
  isChecked: boolean;
  handleTariffSelect: (tariff: tariff) => void;
}

export default function TariffsItem({ option, isChecked, handleTariffSelect }: TariffsItemProps) {
  const { isTimeFinished } = useAppSelector(state => state.timer);
  const discount = (100 - (option.price * 100) / option.full_price).toFixed(0);
  const itemId = `tariff-${option.period}`;

  const getShortText = () => {
    switch (option.period) {
      case 'Навсегда':
        return 'Всегда быть в форме';
      case '1 месяц':
        return 'Получить первые результаты';
      default:
        return option.text;
    }
  };

  return (
    <div
      className={`w-full 
        ${option.is_best ? 'xl:w-full' : 'xl:w-[210px] xl:flex-1'}`}
    >
      <div
        role="radio"
        id={itemId}
        aria-checked={isChecked}
        tabIndex={0}
        onClick={() => handleTariffSelect(option)}
        onKeyDown={e => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            handleTariffSelect(option);
          }
        }}
        className={`
          border-2 rounded-[20px] xl:rounded-[40px] bg-[var(--text-block-bg)]
          transition-all duration-300 cursor-pointer
          hover:scale-[0.99] 
          ${
            isChecked
              ? 'border-[var(--attention)]'
              : 'border-[var(--border)] hover:border-[var(--attention)]/50'
          }
          ${
            option.is_best
              ? 'relative overflow-hidden justify-start xl:justify-between xl:gap-[35px] xl:min-h-[190px] xl:px-[80px] xl:pt-[34px] xl:pb-[30px]'
              : 'xl:flex-col justify-start xl:flex-1 xl:gap-0 xl:w-[210px] xl:max-w-[240px] xl:min-h-[335px] xl:px-[18px] xl:pt-[70px] xl:pb-[23px]'
          }
          relative flex items-center gap-[30px] sm:gap-[45px] w-full min-h-[118px] sm:min-h-[131px] px-[20px] sm:pr-[20px] sm:pl-[30px] py-[20px]
        `}
      >
        {option.is_best && (
          <span className="absolute top-[6px] xl:top-[10px] right-[14px] xl:right-[20px] w-fit-content h-auto z-10 text-[var(--attention)] text-[13px] sm:text-[16px] xl:text-[22px] font-medium leading-[1.3] tracking-[0.4px]">
            хит!
          </span>
        )}

        <span
          className={`
            absolute top-[-1px] xl:left-[50px] w-[42px] sm:w-[48px] xl:w-[70px] h-[23px] sm:h-[27px] xl:h-[39px] 
            py-[3px] px-[6px] xl:py-[5px] xl:px-[8px] 
            text-[var(--foreground)] text-[13px] sm:text-[16px] xl:text-[22px] font-medium leading-[1.3]
            rounded-bl-[6px] sm:rounded-bl-[8px] rounded-br-[6px] sm:rounded-br-[8px] bg-[var(--warning)] z-10
            ${
              option.is_best
                ? 'left-auto right-[50px] sm:left-auto sm:right-[62px]'
                : 'right-[33px] sm:right-[30px]'
            }
          `}
        >
          -{discount}%
        </span>

        <div className="flex flex-col min-w-[130px] sm:min-w-[140px] xl:min-w-[200px]">
          <h2
            className={`
              mb-[12px] sm:mb-[16px] text-center text-[16px] sm:text-[18px] xl:text-[26px] text-[var(--foreground)] font-medium leading-[1.2]
              ${option.is_best ? 'xl:mb-[16px]' : 'xl:mb-[30px]'}
            `}
          >
            {option.period}
          </h2>
          <div className="relative min-h-[30px] sm:min-h-[34px] xl:min-h-[50px]">
            <span
              className={`
                absolute top-0 left-0
                text-[30px] sm:text-[34px] xl:text-[50px] font-semibold leading-[1]
                transition-opacity duration-0
                ${isTimeFinished ? 'opacity-0' : 'opacity-100'}
                ${
                  option.is_best
                    ? 'text-[var(--attention)]'
                    : 'block w-full text-center text-[var(--foreground)]'
                }
              `}
              style={{ transitionDuration: isTimeFinished ? '0ms' : '0ms' }}
            >
              {option.price} ₽
            </span>

            <span
              className={`
                absolute
                transition-all duration-500 ease-out
                will-change: transform, font-size, color;
                ${
                  isTimeFinished
                    ? `         
                      translate-x-0 translate-y-0          
                      text-[30px] sm:text-[34px] xl:text-[50px] 
                      font-semibold leading-[1]
                      ${option.is_best ? 'text-[var(--attention)] ' : 'text-[var(--foreground)]'}
                    `
                    : `          
                      translate-x-full translate-y-[30px] sm:translate-y-[34px] xl:translate-y-[45px]
                      text-[var(--full-price)] 
                      text-[14px] sm:text-[16px] xl:text-[24px] 
                      line-through
                      leading-[1.2]
                    `
                }
              `}
            >
              {option.full_price} ₽
            </span>
          </div>
        </div>

        <p className="block xl:hidden mb-[12px] sm:mb-[16px] text-[14px] xl:text-[16px] text-[var(--foreground)] leading-[1.3]">
          {getShortText()}
        </p>
        <p
          className={`
            hidden xl:block xl:min-h-[42px] mb-[12px] sm:mb-[16px] text-[14px] xl:text-[16px] text-[var(--foreground)] leading-[1.3]
            ${option.is_best ? '' : 'mt-auto'}
          `}
        >
          {option.text}
        </p>
      </div>
    </div>
  );
}
