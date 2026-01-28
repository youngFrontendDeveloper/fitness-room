import Star from '../../../components/icons/Star';
import Timer from './Timer';

export default function TimerBlock({ initialTime }: { initialTime: number }) {
  return (
    <div className="flex justify-center items-center ">
      <Star className="text-[var(--timer)] w-[14px] h-[14px]" />
      <Timer initialTime={initialTime} />
      <Star className="text-[var(--timer)] w-[14px] h-[14px]" />
    </div>
  );
}
