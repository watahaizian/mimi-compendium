import { FC, useEffect, useState } from 'react';

type Option = {
  value: string;
  label: string;
};

const Form: FC = () => {
  const [options, setOptions] = useState<Option[]>([
    { value: 'option-1', label: 'Option 1' },
    { value: 'option-2', label: 'Option 2' },
    { value: 'option-3', label: 'Option 3' },
  ]);

  useEffect(() => {
    fetch('/api/options')
      .then((res) => res.json())
      .then((data) => setOptions(data));
  }, []);

  return (
    <form>
      <div style={{ marginBottom: '1rem' }}>
        <select>
          {options.map((option, index) => (
            <option key={index} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};

export default Form;
