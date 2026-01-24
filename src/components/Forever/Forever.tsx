
export default function Forever () {

  return (
      <div className='flex w-full items-center justify-between gap-[30px] sm:gap-[50px] xl:gap-[40px] pr-[20px] pl-[20px] sm:px-[30px] xl:px-[40px] py-[20px] border-2 border-[var(--attention)] rounded-[20px]'>
        <div className=' flex flex-col min-w-[107px] sm:min-w-[121px] xl:min-w-[178px] '>
        <h2 className='mb-[12px] sm:mb-[16px] text-center text-[16px] sm:text-[18px] xl:text-[26px] font-medium leading-[1.2]'>Навсегда</h2>
        <span className='text-[var(--attention)] text-[30px] sm:text-[34px] xl:text-[50px] font-semibold leading-[1]'>5990 ₽</span>
        <span className='text-[var(--old-price)] text-[14px] sm:text-[16px] xl:text-[24px] line-through text-right leading-[1.2]'>18990 ₽</span>
        </div>  
       
        <p className='block xl:hidden mb-[12px] sm:mb-[16px] text-[14px] xl:text-[16px] leading-[1.3]'>Всегда быть в форме</p>
        <p className='hidden xl:block mb-[12px] sm:mb-[16px] text-[14px] xl:text-[16px] leading-[1.3]'>Для тех, кто хочет всегда быть в форме и поддерживать здоровье</p>
      </div>
  );
};