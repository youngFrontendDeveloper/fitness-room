import WarrantyBlock from '../components/WarrantyBlock/WarrantyBlock';
import Form from '../components/Form/Form';
import ImageBlock from '../components/ImageBlock/ImageBlock';

export default function Home() {
  return (
    <section className=" py-[20px] px-[16] md:py-[30px] md:px-[100px] xl:py-[50px] xl:px-[352px]">
      <h1 className="mb-[24px] sm:mb-[20px] xl:mb-[110px] xl:mb-[50px] text-[22px] sm:text-[24px] md:text-[30px] xl:text-[40px] text-[var(--foreground)] font-bold md:text-center">
        Выбери подходящий для себя <span className="text-[var(--attention)]">тариф</span>
      </h1>
      <div className="flex flex-wrap md:flex-nowrap justify-center md:justify-between md:gap-[40px] xl:gap-[87px]">
        <ImageBlock />
        <Form />
      </div>
      <WarrantyBlock />
    </section>
  );
}
