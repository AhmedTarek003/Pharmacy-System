const FormField = ({ label, type, name, placeholder, value, onChange }) => {
  return (
    <div className="flex flex-col mb-2">
      <label className="text-slate-100 mb-[2px]">{label}</label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="focus:outline-none p-[7px] rounded-md"
      />
    </div>
  );
};

export default FormField;
