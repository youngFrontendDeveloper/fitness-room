import BuyBlock from "../BuyBlock/BuyBlock";
import PricesBlock from "../PricesBlock/PricesBlock";


export default function ContentBlock() {
  return (
    <section className='w-full xl:w-[748px]'>
    <PricesBlock />
    <BuyBlock />
    </section>
  );
};