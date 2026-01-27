'use client';

import { useEffect, useId, useState } from 'react';
import { useGetTariffsQuery } from '../../tariffsApi';
import { tariff } from '../../types';
import TariffsItem from '../TariffsItem/TariffsItem';

interface TariffsProps {
  onChange: (value: tariff) => void;
  value?: tariff; // Текущее выбранное значение
}

export default function Tariffs({ onChange, value }: TariffsProps) {
  const tariffId = useId();
  const { data, error, isLoading } = useGetTariffsQuery();
  const [options, setOptions] = useState<tariff[]>([]);
  const [selectedTariff, setSelectedTariff] = useState<tariff | null>(value || null);

  console.log('data', data);
  console.log(typeof data);

  useEffect(() => {
    if (value) {
      setSelectedTariff(value);
    }
  }, [value]);

  useEffect(() => {
    if (!data) return;
    try {
      const parsedData: tariff[] = JSON.parse(data);
      const sortedData = parsedData.sort((a, b) => b.price - a.price);
      setOptions(sortedData);

      if (!value && sortedData.length > 0) {
        const firstTariff = sortedData[0];
        setSelectedTariff(firstTariff);
        onChange(firstTariff); // Сообщаем родителю
      }
    } catch (err) {
      console.error('Ошибка парсинга данных тарифов:', err);
    }
  }, [data]);

  const handleTariffSelect = (tariff: tariff) => {
    setSelectedTariff(tariff);
    onChange(tariff);
  };

  if (isLoading) {
    return <div className="py-8 text-center text-gray-500">Загрузка тарифов...</div>;
  }

  if (error) {
    return <div className="py-8 text-center text-red-500">Ошибка загрузки тарифов</div>;
  }

  return (
    <div
      role="radiogroup"
      aria-labelledby={`label-${tariffId}`}
      className="flex flex-wrap gap-[6px] sm:gap-[8px] xl:gap-[14px] w-full mb-[10px] sm:mb-[12px] xl:mb-[20px]"
    >
      {options?.map(option => {
        const isChecked = selectedTariff?.period === option.period;

        return (
          <div key={option.period} className="w-full">
            <input
              id={`tariff-${option.period}`}
              type="radio"
              name="tariff" // Все радио-кнопки должны иметь одинаковое name!
              value={option.period}
              checked={isChecked}
              onChange={() => handleTariffSelect(option)}
              className="absolute opacity-0 w-0 h-0"
              aria-describedby={`description-${option.period}`}
            />
            <label htmlFor={`tariff-${option.period}`} className="cursor-pointer block">
              <TariffsItem
                period={option.period}
                price={option.price}
                full_price={option.full_price}
                text={option.text}
                is_best={option.is_best}
                isSelected={isChecked}
              />
            </label>
          </div>
        );
      })}
    </div>
  );
}
