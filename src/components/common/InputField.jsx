const CustomInputField = ({ label, name, type = 'text', placeholder, value, onChange, required = true }) => (
    <div>
        <label className="block text-xs font-medium text-[#333] mb-1.5">{label}</label>
        <input
            name={name}
            type={type}
            required={required}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            className="w-full rounded-lg border border-[#E5E5E5] bg-white px-3.5 py-2.5 text-sm text-[#111] placeholder-[#999] outline-none focus:border-[#18392B]"
        />
    </div>
);

export default CustomInputField;