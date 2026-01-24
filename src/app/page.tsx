import Image from "next/image";
import ContentBlock from "../components/ContentBlock/ContentBlock";

export default function Home() {
    return (
      
        <div className=" py-[20px] px-[16] md:py-[30px] md:px-[100px] xl:py-[50px] xl:px-[352px]">
            <h1 className="mb-[24px] sm:mb-[20px] xl:mb-[110px] xl:mb-[50px] text-[22px] sm:text-[24px] md:text-[30px] xl:text-[40px] font-bold md:text-center">Выбери
                подходящий для
                себя <span
                    className="text-[var(--attention)]"
                >тариф</span></h1>
            <div className='flex flex-wrap md:flex-nowrap justify-center md:justify-between md:gap-[40px] xl:gap-[87px]'>               
                <div
                    className="relative w-full
                max-w-[100px] sm:max-w-[124px] md:max-w-[200px] xl:max-w-[380px]
                h-[202px] sm:h-[250px] md:h-[404px] xl:h-[768px]"
                > 
                    <Image
                        src='/images/man.png'
                        alt='man'
                        fill
                        sizes="(max-width: 320px) 100px, (max-width: 375px) 124px, (max-width: 768px) 200px, 380px"
                        className="object-cover"
                        priority
                    />
                   
                </div>  
                <ContentBlock />                
            </div>  
            
        </div>
        
    );
}

