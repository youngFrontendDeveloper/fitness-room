'use client';
import { useState } from 'react';
import Tariffs from '../../features/tariffs/components/Tariffs';
import { tariff } from '../../features/tariffs/model/types';
import CheckBox from '../CheckBox/CheckBox';
import SloganBlock from '../SloganBlock/SloganBlock';
import Button from '../Button/Button';

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
    console.log(selectedTariff); 
  };

  return (
    <form id="buyForm" className="w-full mb-[22px]" onSubmit={handleSubmit}>
      <Tariffs onChange={handleChange} />

      <SloganBlock />

      <CheckBox setChecked={setChecked} isChecked={isChecked} isSubmitting={isSubmitting} />

      <Button />

      <p className="text-[10px] xl:text-[14px] text-[var(--payment-agreement)] leading-[1.2]">
        Нажимая кнопку «Купить», Пользователь соглашается на разовое списание денежных средств для
        получения пожизненного доступа к приложению. Пользователь соглашается, что данные
        кредитной/дебетовой карты будут сохранены для осуществления покупок дополнительных услуг
        сервиса в случае желания пользователя.
      </p>
    </form>
  );
}
