export const FancyButton = ({ children }: { children: React.ReactNode }) => {
  return (
    <button
      className="
        px-6 py-3 
        font-semibold text-white 
        bg-gradient-to-r from-purple-500 to-pink-500 
        rounded-full 
        shadow-lg 
        transform transition duration-300 ease-in-out 
        hover:scale-105 hover:shadow-xl 
        active:scale-95 
        focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50
      "
    >
      {children}
    </button>
  );
};
