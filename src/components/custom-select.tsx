import ChevronDown from "./icons/chevron-down";

const CustomSelector: React.FC<
  React.SelectHTMLAttributes<HTMLSelectElement>
> = ({ children, ...props }) => {
  return (
    <div className="relative">
      <select
        {...props}
        className="rounded-full pl-4 pr-5 py-0.5 bg-gray-0 appearance-none focus-visible:outline-none focus:ring-2 focus:ring-gray-500 hover:bg-gray-400 hover:dark:bg-gray-100 transition-colors"
      >
        {children}
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-1">
        <ChevronDown />
      </div>
    </div>
  );
};

export default CustomSelector;
