'use client';
import { useState } from 'react';
import Tariffs from '../../features/tariffs/components/Tariffs';
import { tariff } from '../../features/tariffs/model/types';
import CheckBox from '../CheckBox/CheckBox';
import SloganBlock from '../SloganBlock/SloganBlock';

export default function Form() {
  const [isChecked, setChecked] = useState(true);
  const [selectedTariff, setSelectedTariff] = useState({} as tariff);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const handleChange = (value: tariff) => {
    setSelectedTariff(value);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setIsSubmitting(true);
    console.log(selectedTariff, isChecked);
  };

  return (
    <form id="buyForm" className="w-full mb-[22px]" onSubmit={handleSubmit}>
      <Tariffs onChange={handleChange} />

      <SloganBlock />

      <CheckBox setChecked={setChecked} isChecked={isChecked} isSubmitting={isSubmitting} />

      <button
        type="submit"
        style={{
          position: 'relative',
          overflow: 'hidden',
        }}
        className="
    flex justify-center items-center 
    w-full max-w-[352px] h-[55px] sm:h-[63px] xl:h-[66px]
    mb-[10px] sm:mb-[20px] xl:mb-[14px] 
    text-[18px] xl:text-[20px] text-[var(--button-text)] font-bold leading-[1.3]
    bg-[var(--attention)] rounded-[20px]  
    transition-all duration-200 
    cursor-pointer 
    hover:scale-[0.99]
  "
      >
        <span
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background:
              'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent)',
            animation: 'shimmer 2s infinite linear',
          }}
        />

        <span style={{ position: 'relative', zIndex: 10 }}>Купить</span>
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
