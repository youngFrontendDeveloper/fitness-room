

interface TariffsItemProps {
  period: string;
  price: number;
  full_price: number;
  text: string;
  is_best: boolean;
  handleClick?: () => void
}
export default function TariffsItem ({period,price, full_price, text, is_best, handleClick}:TariffsItemProps) {

  return (
      <div 
      onClick = {handleClick}
      className='flex w-full items-center justify-between gap-[30px] sm:gap-[50px] xl:gap-[40px] pr-[20px] pl-[20px] sm:px-[30px] xl:px-[40px] py-[20px] border-2 border-[var(--border)] peer-checked:border-[var(--attention)] rounded-[20px]'>
        <div className=' flex flex-col min-w-[107px] sm:min-w-[121px] xl:min-w-[178px] '>
        <h2 className='mb-[12px] sm:mb-[16px] text-center text-[16px] sm:text-[18px] xl:text-[26px] text-[var(--foreground)] font-medium leading-[1.2]'>{period}</h2>
        <span className='text-[var(--attention)] text-[30px] sm:text-[34px] xl:text-[50px] font-semibold leading-[1]'>{price} ₽</span>
        <span className='text-[var(--full-price)] text-[14px] sm:text-[16px] xl:text-[24px] line-through text-right leading-[1.2]'>{full_price} ₽</span>
        </div>  
       
       {
        period==='Навсегда' ? (
<>
<p className='block xl:hidden mb-[12px] sm:mb-[16px] text-[14px] xl:text-[16px] text-[var(--foreground)] leading-[1.3]'>Всегда быть в форме</p>
<p className='hidden xl:block mb-[12px] sm:mb-[16px] text-[14px] xl:text-[16px] text-[var(--foreground)] leading-[1.3]'>{text}</p>
</>
        ) :         period==='1 месяц' ? (
<>
<p className='block xl:hidden mb-[12px] sm:mb-[16px] text-[14px] xl:text-[16px] text-[var(--foreground)] leading-[1.3]'>Получить первые результаты</p>
<p className='hidden xl:block mb-[12px] sm:mb-[16px] text-[14px] xl:text-[16px] text-[var(--foreground)] leading-[1.3]'>{text}</p>
</>
        ) : <p className='block mb-[12px] sm:mb-[16px] text-[14px] xl:text-[16px] text-[var(--foreground)] leading-[1.3]'>{text}</p>
       }
       
      </div>
     
  );
};