import { useId } from 'react';
import { ChevronDown } from 'lucide-react';

const SelectField = ({
  label,
  options,
  value,
  onChange,
  placeholder,
  className = '',
}) => {
  const id = useId();

  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      {label && (
        <label htmlFor={id} className="text-sm font-semibold text-[#111111]">
          {label}
        </label>
      )}
      <div className="relative flex h-12 items-center rounded-xl bg-[#EFEFEF]/70 px-4">
        <select
          id={id}
          value={value}
          onChange={onChange}
          className="w-full cursor-pointer appearance-none border-none bg-transparent p-0 pr-6 text-sm font-normal text-[#666666] focus:outline-none"
        >
          {placeholder && (
            <option value="" disabled>
              {placeholder}
            </option>
          )}
          {options.map((option) => {
            const item = typeof option === 'string'
              ? { label: option, value: option }
              : option;
            return (
              <option key={item.value} value={item.value} disabled={item.disabled}>
                {item.label}
              </option>
            );
          })}
        </select>
        <ChevronDown
          aria-hidden="true"
          className="pointer-events-none absolute right-4 h-4 w-4 text-[#333333]"
        />
      </div>
    </div>
  );
};

export default SelectField;
