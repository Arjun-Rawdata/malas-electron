interface InputProps {
  placeholder: string;
  label: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({ placeholder, label, onChange }: InputProps) => {
  return (
    <div className="relative">
      <input
        className="border-[4px]  rounded-[64px] text-lg text-primary border-primary placeholder:text-primary/60 w-full px-10 py-3 bg-transparent font-[500]"
        type="text"
        placeholder={placeholder}
        disabled
        onChange={onChange}
      />
      <label className="absolute font-[500] text-sm left-8 px-3 -top-7 bg-[#FFF7E6] text-primary">
        {label}
      </label>
    </div>
  );
};

export default Input;
