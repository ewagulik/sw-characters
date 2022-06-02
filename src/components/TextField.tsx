interface TextFieldProps {
  label: string;
  value: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  id: string;
}

const TextField: React.FC<TextFieldProps> = ({
  label,
  value,
  handleChange,
  id,
}) => {
  return (
    <div>
      <label htmlFor={id} className='u-visually-hidden'>
        {label}
      </label>
      <input
        className='textfield'
        autoFocus
        id={id}
        name={id}
        placeholder={label}
        type='text'
        value={value}
        onChange={handleChange}
      />
    </div>
  );
};

export default TextField;
