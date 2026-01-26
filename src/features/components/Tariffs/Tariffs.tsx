"use client";

import { useEffect, useId, useState } from "react";
import { useGetTariffsQuery } from "../../tariffsApi";
import { tariff } from "../../types";
import TariffsItem from "../TariffsItem/TariffsItem";


interface TariffsProps {
  // label: string;
  // name: string;
  // options: Array<{
  //   value: string;
  //   label: string;
  //   description?: string;
  // }>;
  // value: string;
  onChange: (value: tariff) => void;
}

export default function Tariffs ({
  onChange,
}: TariffsProps) {
  const tariffId = useId();
  const { data, error, isLoading } = useGetTariffsQuery();
  const [options, setOptions] = useState<tariff[]>([]);
  const [isChecked, setIsChecked] = useState(false);

  console.log(isChecked);
  // console.log(typeof data);

  useEffect(()=>{
    if(!data) return;
    const options = JSON.parse(data); 
    setOptions(options);
  },[data])  

  if (isLoading) {
    return <div>Загрузка тарифов...</div>;
  }

  if (error) {
    return <div>Ошибка загрузки тарифов</div>;
  }



  if (isLoading) return <div>Загрузка...</div>;
  if (error) return <div>Ошибка загрузки</div>;

  return (     
        <div role="radiogroup" aria-labelledby={`label-${tariffId}`} className='flex flex-wrap gap-[6px] sm:gap-[8px] xl:gap-[14px] w-full mb-[10px] sm:mb-[12px] xl:mb-[20px]'>
        {options?.map((option) => {
          // const optionId = `${name}-${option.value}`;
          // const isChecked = value === option.value;

          const handleClick =() => {
            setIsChecked(!isChecked);
          }

          return (
            <div key={option.period} className='w-full'>
             <input
                id={option.period}
                type="radio"
                name={option.period}
                // value={option.value}
                checked={isChecked}
                onChange={() => onChange(option)}
                className="absolute opacity-0 w-0 h-0"
                aria-describedby={`description-${option.period}`}
              />
              <label
                htmlFor={option.period}>
                  <TariffsItem 
                  period={option.period}
                  price={option.price} 
                  full_price={option.full_price} 
                  text={option.text}
                  is_best={option.is_best} 
                  handleClick={handleClick}
                  />
                </label>
              
            </div>
          )
        })}
        </div>      
  );
};