
import { Link } from "react-router-dom";

const CustomButton = ({
  btnText = "BTN",
  children,
  to = "/auth",
  type = "button",

  variant = "primary",
  size = "md",

  rounded = "rounded-xl",
  fullWidth = false,
  disabled = false,

  className = "",
  onClick,
}) => {
  const variants = {
    primary: "bg-[#FFA300] text-gray-900 hover:bg-[#e69300]",
    secondary: "bg-gray-900 text-white hover:bg-gray-700",
    outline: "border border-gray-300 text-gray-800 hover:bg-gray-100",
    danger: "bg-red-600 text-white hover:bg-red-700",
    success: "bg-green-600 text-white hover:bg-green-700",
  };

  const sizes = {
    sm: "px-4 py-2 text-xs",
    md: "px-6 py-2.5 text-sm",
    lg: "px-8 py-3.5 text-base",
  };

  const baseClass = `
    inline-flex items-center justify-center gap-2
    font-semibold transition-all duration-200
    active:scale-95
    focus:outline-none focus:ring-2 focus:ring-offset-2
    disabled:opacity-50 disabled:cursor-not-allowed
    ${variants[variant] || variants.primary}
    ${sizes[size] || sizes.md}
    ${rounded}
    ${fullWidth ? "w-full" : ""}
    ${className}
  `;

  const content = children ?? btnText;

  // Link Button
  if (type === "link") {
    return (
      <Link
        to={disabled ? "#" : to}
        onClick={disabled ? (e) => e.preventDefault() : onClick}
        aria-disabled={disabled}
        tabIndex={disabled ? -1 : undefined}
        className={baseClass}
      >
        {content}
      </Link>
    );
  }

  // Normal and Submit Button
  return (
    <button
      type={type === "submit" ? "submit" : "button"}
      disabled={disabled}
      onClick={onClick}
      className={baseClass}
    >
      {content}
    </button>
  );
};

export default CustomButton;
