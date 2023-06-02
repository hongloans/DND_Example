type theme = "default" | "error";
type themeProvider = {
  [key in theme]: string;
};
interface IProps {
  title: string;
  theme?: theme;
  onClick: () => void;
}

const TextButton = ({ title, theme = "default", onClick }: IProps) => {
  const themeProvider: themeProvider = {
    default: "dark:bg-sky-400",
    error: "dark:bg-orange-400 ",
  };
  return (
    <button
      type="button"
      className={`w-[12rem] h-[4rem] px-8 py-3 font-semibold rounded dark:text-gray-900 hover:opacity-50 ${themeProvider[theme]}`}
      onClick={onClick}
    >
      {title}
    </button>
  );
};

export default TextButton;
