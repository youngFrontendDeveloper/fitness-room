import Check from '../icons/Check';

interface CheckBoxProps {
  setChecked: (value: boolean) => void;
  isChecked: boolean;
  isSubmitting: boolean;
}

export default function CheckBox({ setChecked, isChecked, isSubmitting }: CheckBoxProps) {
  return (
    <div className="mb-[16px] sm:mb-[20px] xl:mb-[16px]">
      <input
        type="checkbox"
        id="agreement"
        name="agreement"
        className="hidden"
        defaultChecked={true}
        onChange={e => setChecked(e.target.checked)}
      />

      <label htmlFor="agreement" className="flex items-start cursor-pointer group">
        <span
          className={`
          flex-shrink-0 flex items-center justify-center w-[30px] h-[30px] border-[2px] rounded-[3px]
          ${isSubmitting && !isChecked ? 'border-[var(--warning)]' : 'border-[var(--checkbox-border)]'}
          `}
        >
          {isChecked && <Check className="w-[19px] xl:w-[20px] h-[14px] xl:h-[15px]" />}
        </span>

        <span
          className="w-full xl:w-[640px] ml-[10px] sm:ml-[12px] text-[var(--checkbox-text)] text-[12px] xl:text-[16px] leading-[1.2]
                      select-none"
        >
          Я согласен с&nbsp;
          <a href="#" className="hover:no-underline text-inherit underline ">
            офертой рекуррентных платежей
          </a>
          &nbsp; и&nbsp;
          <a href="#" className="hover:no-underline  text-inherit underline ">
            Политикой конфиденциальности
          </a>
        </span>
      </label>
    </div>
  );
}
