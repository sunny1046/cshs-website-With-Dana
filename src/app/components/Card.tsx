import { IconType } from "react-icons";

interface CardProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  color:
    | "blue"
    | "green"
    | "cyan"
    | "teal"
    | "lime"
    | "red"
    | "pink"
    | "purple";
  title: string;
  icon: IconType
  children?: React.ReactNode;
}

const colorClasses = {
  blue: "bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700",
  green: "bg-gradient-to-r from-green-400 via-green-500 to-green-600",
  cyan: "bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600",
  teal: "bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600",
  lime: "bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500",
  red: "bg-gradient-to-r from-red-400 via-red-500 to-red-600",
  pink: "bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600",
  purple: "bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700",
};

export default function Card({
  color,
  title,
  icon: Icon,
  children,
}: CardProps) {
  const classes = `${colorClasses[color]} p-5 mr-5 rounded-2xl flex-shrink-0 w-20 h-20 flex items-center justify-center self-center`;
  return (
    <div className="p-5 bg-white rounded-2xl flex w-full transition-transform duration-300 ease-in-out hover:scale-105">
      <div className={classes}>
        <Icon className="text-4xl text-white" />
      </div>

      <div className="goal">
        <h1 className="text-3xl font-bold">
          {title}
        </h1>
        <p className="text-lg self-center text-gray-700">
          {children}
        </p>
      </div>
    </div>
  );
}
