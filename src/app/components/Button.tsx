interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  color:
    | "blue"
    | "green"
    | "cyan"
    | "teal"
    | "lime"
    | "red"
    | "pink"
    | "purple";
  href?: string;
  children?: React.ReactNode;
}

const colorClasses = {
  blue: "text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800",
  green:
    "text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800",
  cyan: "text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800",
  teal: "text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800",
  lime: "text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800",
  red: "text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800",
  pink: "text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800",
  purple:
    "text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800",
};

export default function Button({
  color,
  href,
  children,
  ...rest
}: ButtonProps) {
  const classes = `${colorClasses[color]} text-xl cursor-pointer font-medium rounded-lg text-sm px-5 py-2.5 text-center`;
  return (
    <a href={href}>
      <button type="button" className={classes} {...rest}>
        {children}
      </button>
    </a>
  );
}
