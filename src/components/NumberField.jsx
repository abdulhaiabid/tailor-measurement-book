import { forwardRef, useId } from "react";

function NumberFieldRef({ titleEN, titleUR, inputValue, inputOnChange }, ref) {
  const id = useId();
  return (
    <div className="space-y-1 flex flex-col justify-end">
      <label
        htmlFor={id}
        className="text-xs font-medium">
        {titleEN}
        <span
          dir="rtl"
          className="mx-1 text-[0.65rem] leading-0 font-['Noto_Nastaliq_Urdu']">
          ({titleUR})
        </span>
      </label>
      <div className="w-full flex items-center text-sm bg-bg-high border border-accent-dark/20 rounded-lg transition-shadow duration-300 outline-none overflow-clip focus-within:ring-2 focus-within:ring-accent-light focus-within:border-transparent">
        <input
          value={inputValue}
          onChange={inputOnChange}
          id={id}
          type="number"
          step="0.2"
          placeholder="0.0"
          className="w-full pl-2 py-1.5 bg-bg-high outline-none placeholder:font-semibold" />
        <label
          htmlFor={id}
          className="pr-2 pl-1 font-medium select-none">in</label>
      </div>
    </div>
  );
}

export const NumberField = forwardRef(NumberFieldRef);