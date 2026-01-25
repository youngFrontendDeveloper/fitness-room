
import Image from "next/image";

export default function ImageBlock () {

  return (
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
  );
};