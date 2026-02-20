'use client';

import { useEffect, useId, useState } from 'react';
import { tariffs } from '../../../constants/tariffs';
import { useGetTariffsQuery } from '../model/tariffsApi';
import { tariff } from '../model/types';
import TariffsItem from './TariffsItem';

interface TariffsProps {
  onChange: (value: tariff) => void;
  value?: tariff;
}

export default function Tariffs({ onChange, value }: TariffsProps) {
  const tariffId = useId();
  const { data, error, isLoading } = useGetTariffsQuery();
  const [options, setOptions] = useState<tariff[]>([]);
  const [selectedTariff, setSelectedTariff] = useState<tariff | null>(value || null);

  useEffect(() => {
    if (value) {
      setSelectedTariff(value);
    }
  }, [value]);

  useEffect(() => {
    try {
      const parsedData: tariff[] = data ? JSON.parse(data) : tariffs;

      const sortedData = parsedData.sort((a, b) => {
        if (a.is_best && !b.is_best) return -1;
        if (!a.is_best && b.is_best) return 1;

        return b.price - a.price;
      });

      setOptions(sortedData);

      if (!value && sortedData.length > 0) {
        const firstTariff = sortedData[0];
        setSelectedTariff(firstTariff);
        onChange(firstTariff);
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

  return (
    <div
      role="radiogroup"
      aria-labelledby={`label-${tariffId}`}
      className="flex flex-wrap justify-between gap-[6px] sm:gap-[8px] xl:gap-[14px] w-full mb-[10px] sm:mb-[12px] xl:mb-[20px]"
    >
      {options?.map(option => {
        const isChecked = selectedTariff?.period === option.period;

        return (
          <TariffsItem
            key={option.period}
            option={option}
            isChecked={isChecked}
            handleTariffSelect={handleTariffSelect}
          />
        );
      })}
    </div>
  );
}
