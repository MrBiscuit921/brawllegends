// Selector.tsx
interface SelectorProps {
  label: string;
  value: string;
  options: string[];
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const Selector: React.FC<SelectorProps> = ({
  label,
  value,
  options,
  onChange,
}) => {
  return (
    <div className="mb-4">
      <label className="block text-lg">
        {label}
        <br />
        <select
          value={value}
          onChange={onChange}
          className="mt-2 p-2 bg-gray-700 rounded-md text-base"
          id={label}
        >
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </label>
    </div>
  );
};

export default Selector;
