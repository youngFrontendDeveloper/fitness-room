import Star from "../icons/Star";


export default function Timer() {
    return (
        <div className="flex justify-center items-center text-[var(--timer)]">
            <Star className="text-[var(--timer)] w-[14px] h-[14px]" />
            <time dateTime="PT6M54S" className="mx-[8px] text-[28px] sm:text-[32px] xl:text-[40px]"> 15:59</time>
            <Star className="text-[var(--timer)] w-[14px] h-[14px]" />
        </div>
    );
};