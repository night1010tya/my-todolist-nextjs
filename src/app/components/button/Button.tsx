type ButtonProps = {
    children: React.ReactNode;
    type?: "button" | "submit" | "reset";
    onClick?: ()=>void
  };
  
  export const Button = ({ children, type, onClick}: ButtonProps) => {
    return (
      <button
      type={type}
      onClick={onClick}
        className="
          bg-gray-700
          text-white
          px-4
          py-2
          rounded-[50%]
          hover:bg-gray-500
        "
      >
        {children}
      </button>
    );
  };