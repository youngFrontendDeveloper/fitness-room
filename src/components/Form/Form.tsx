'use client';
import { tariff } from '../../features/tariffs/model/types';
import Tariffs from '../../features/tariffs/components/Tariffs';
import Check from '../icons/Check';
import SloganBlock from '../SloganBlock/SloganBlock';

export default function Form() {
  const handleChange = (value: tariff) => {
    console.log(value);
  };

  return (
    <form id="buyForm" className="w-full mb-[22px]">
      <Tariffs onChange={handleChange} />
      <SloganBlock />

      {/* <!-- Кастомизированный чекбокс --> */}
      <div className="mb-6">
        <input type="checkbox" id="agreement" name="agreement" className="hidden" required />

        {/* <!-- Кастомная визуальная часть чекбокса --> */}
        <label htmlFor="agreement" className="flex items-start cursor-pointer group">
          {/* <!-- Кастомный квадратик чекбокса --> */}
          <span className="flex-shrink-0 flex items-center justify-center w-[30px] h-[30px] border-[2px] border-[var(--checkbox-border)] rounded-[3px] ">
            {/* <!-- Галочка (появляется при checked) --> */}
            <Check className="w-[19px] xl:w-[20px] h-[14px] xl:h-[15px]" />
          </span>

          <span
            className="ml-[10px] sm:ml-[12px] text-[var(--checkbox-text)] text-[12px] xl:text-[16px] leading-[1.2]
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

      <button
        type="submit"
        id="buyButton"
        // disabled
        className="flex justify-center items-center w-full max-w-[352px] h-[55px] sm:h-[63px] xl:h-[66px]
            mb-[10px] sm:mb-[20px] xl:mb-[40px] 
            text-[18px] xl:text-[20px] text-[var(--button-text)] font-bold leading-[1.3]
           bg-[var(--attention)] rounded-[20px]  transition-all duration-300 cursor-pointer hover:scale-[0.99] "
      >
        Купить
      </button>

      <p className="text-[10px] xl:text-[14px] text-[var(--payment-agreement)] leading-[1.2]">
        Нажимая кнопку «Купить», Пользователь соглашается на разовое списание денежных средств для
        получения пожизненного доступа к приложению. Пользователь соглашается, что данные
        кредитной/дебетовой карты будут сохранены для осуществления покупок дополнительных услуг
        сервиса в случае желания пользователя.
      </p>
    </form>
  );
}
