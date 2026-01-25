import ExclamationMark from "../icons/ExclamationMark";

export default function SloganBlock () {

  return (
    <div className='flex items-start gap-[6px] xl-[8px]
    mb-[16px] sm:mb-[24px] xl:mb-[30px] 
    py-[14px] pr-[30px] pl-[12px]  sm:pr-[36px] xl:px-[20px] xl:py-[18px]       
    rounded-[16px] sm:rounded-[20px] bg-[var(--slogan-bg)]'>
      <ExclamationMark className='w-[22px] xl:w-[24px] h-[24px] xl:h-[26px]' />
      <p className='text-[var(--checkbox-text)] text-[12px] xl:text-[16px] leading-[1.3]'>Следуя плану на 3 месяца и более, люди получают в 2 раза лучший результат, чем за 1 месяц</p>
    </div>
  );
};