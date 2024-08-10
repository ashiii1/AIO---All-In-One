import { twMerge } from "tailwind-merge";

export const InputComponent = ({
  type = "text",
  name,
  label,
  touched,
  errors,
  inputClass,
  inputWrapper,
  labelClass,
  labelIconClass,
  id,
  placeholder,
  value,
  onChange,
  onBlur,
  requiredIcon = "",
  ...props
}) => {
  const InputMerged = twMerge(
    " text-[1rem] w-full text-primary-200 rounded-[0.3rem] p-3 mt-1 font-semibold placeholder:opacity-60 focus:border-white  active:border-white border-6  focus:outline-none focus:outline-white focus:outline-offset-0",
    inputClass
  );

  const LabelIconMerged = twMerge(
    "mr-1 text-red-500 text-5xl ",
    labelIconClass
  );
  const LabelMerged = twMerge(
    "flex font-semibold text-secondary-300",
    labelClass
  );
  const inputWrapperMerged = twMerge("mt-6 flex items-center", inputWrapper);

  return (
    <div className={inputWrapperMerged}>
      <label htmlFor={id} className={LabelMerged}>
        <span className={LabelIconMerged}>{requiredIcon}</span>
        {label}
      </label>

      <input
        type={type}
        className={InputMerged}
        name={name}
        placeholder={placeholder}
        id={id}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        autoFocus={true}
        {...props}
      />
    </div>
  );
};
