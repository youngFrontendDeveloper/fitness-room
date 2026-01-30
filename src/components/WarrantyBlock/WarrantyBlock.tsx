export default function WarrantyBlock() {
  return (
    <section className="w-full h-max p-[12px] xl:p-[20px] border  border-[var(--border)]  rounded-[20px] xl:rounded-[30px]">
      <h3
        className=" xl:max-w-max mb-[10px]  xl:mb-[30px]
         px-[18px] pt-[10px] pb-[12px]  xl:px-[30px]  xl:pt-[16px]  xl:pb-[18px]  
         text-[16px] sm:text-[18px] md:text-[20px] xl:text-[28px] 
         text-[var(--warranty)]
         font-medium text-center leading-[1.2]
         border border-[var(--warranty)]
         rounded-[30px] 
         "
      >
        гарантия возврата 30 дней
      </h3>
      <p
        className="text-[13px] sm:text-[14px] md:text-[18px] xl:text-[24px] 
         text-[var(--warranty-text)] leading-[1.3]"
      >
        Мы уверены, что наш план сработает для тебя и ты увидишь видимые результаты уже через 4
        недели! Мы даже готовы полностью вернуть твои деньги в течение 30 дней с момента покупки,
        если ты не получишь видимых результатов.
      </p>
    </section>
  );
}
