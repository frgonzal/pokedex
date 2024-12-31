import BorderDecorator from "./BorderDecorator";

interface SearchInputProps {
  value: string;
  onChange: (newValue: string) => void;
}

function SearchInput({ value, onChange }: SearchInputProps) {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value.trimStart().toLowerCase();
    onChange(value);
  };

  return (
    <div className="mb-5">
      <BorderDecorator>
        <input
          type="text"
          className="flex font-ps2p text-sm w-full outline-none justify-center items-center bg-inherit"
          placeholder="Search Pokemon..."
          onChange={handleChange}
          value={value}/>
      </BorderDecorator>
    </div>
  );
}

export default SearchInput;