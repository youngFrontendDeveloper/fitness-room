import { useId } from "react";
import RadioGroupItem from "../RadioGroupItem/RadioGroupItem";

export default function RadioGroup () {
  const groupId = useId();
  const options=[];
  return (
      <>
        <div role="radiogroup" aria-labelledby={`label-${groupId}`}>
        {options.map((option) => {
          const optionId = `${name}-${option.value}`;
          const isChecked = value === option.value;

          return (
            <>
             <input
                id={optionId}
                type="radio"
                name={name}
                value={option.value}
                checked={isChecked}
                onChange={(e) => onChange(e.target.value)}
                className="absolute opacity-0 w-0 h-0"
                aria-describedby={`description-${optionId}`}
              />
              <label
                htmlFor={optionId}>
                  <RadioGroupItem />
                </label>
              
            </>
          )
        })}
        </div>
      </>
  );
};