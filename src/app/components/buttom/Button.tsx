type ButtonProps = {
    children: React.ReactNode;
    type?: "button" | "submit" | "reset";
  };
  
  export const Button = ({ children }: ButtonProps) => {
    return (
      <button
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