interface ToggleBtnProps {
  label: string;
  checked: boolean;
  handleChange: () => void;
  id: string;
}

const ToggleBtn: React.FC<ToggleBtnProps> = ({
  label,
  checked,
  handleChange,
  id,
}) => {
  return (
    <label className='toggle' htmlFor={id}>
      {label}
      <input
        type='checkbox'
        name={id}
        id={id}
        className='toggle__input'
        checked={checked}
        onChange={handleChange}
      />
      <span className='toggle__display' hidden></span>
    </label>
  );
};

export default ToggleBtn;
