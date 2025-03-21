
interface CustomProgressProps {
  value: number;
  bgColor: string;
  indicatorColor: string;
}

export const CustomProgress: React.FC<CustomProgressProps> = ({
  bgColor,
  indicatorColor,
  value,
}) => {
  return (
    <div className={`h-2 w-full ${bgColor} rounded-full overflow-hidden`}>
      <div
        className={`h-full ${indicatorColor} rounded-full`}
        style={{ width: `${value}%` }}
      ></div>
    </div>
  );
};
