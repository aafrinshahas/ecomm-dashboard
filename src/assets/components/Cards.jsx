import { icons } from "../utilis/icons";
import { useTheme } from "../context/ThemeContext";

const Cards = () => {
  const { theme } = useTheme();

  const cardData = [
    {
      title: "Customers",
      value: "3,781",
      percentage: "+11.01%",
      icon: icons.blackUpStock,
      bg: "bg-[#E3F5FF]",
      darkBg: "dark:bg-[#E3F5FF]",
      textColor: "text-[#1C1C1C]",
    },
    {
      title: "Orders",
      value: "1,219",
      percentage: "-0.03%",
      icon: icons.order[theme],
      bg: "bg-[#F7F9FB]",
      darkBg: "dark:bg-[#FFFFFF0D]",
      textColor: "text-[#1C1C1C] dark:text-[#FFFFFF]",
    },
    {
      title: "Revenue",
      value: "$695",
      percentage: "+15.03%",
      icon: icons.revenue[theme],
      bg: "bg-[#F7F9FB]",
      darkBg: "dark:bg-[#FFFFFF0D]",
      textColor: "text-[#1C1C1C] dark:text-[#FFFFFF]",
    },
    {
      title: "Growth",
      value: "30.1%",
      percentage: "+6.08%",
      icon: icons.blackUpStock,
      bg: "bg-[#E5ECF6]",
      darkBg: "",
      textColor: "text-[#1C1C1C]",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-2 gap-4 w-full h-full">
      {cardData.map((card, index) => (
        <div
          key={index}
          className={`rounded-2xl p-4 lg:p-4 xl:p-6 ${card.bg} ${card.darkBg} ${card.textColor}`}
        >
          <p className="font-semibold text-sm mb-2.5">{card.title}</p>
          <div className="group">
            <div className="flex items-center justify-between group-hover:flex-row-reverse transition-all duration-300 hover:bg-[#1C1C1C0D] hover:rounded-lg dark:hover:bg-[#FFFFFF1A] px-1 lg:px-1 xl:px-2 py-1">
              <p className="xl:text-2xl lg:text-md text-md font-semibold">{card.value}</p>
              <div className="flex items-center gap-1">
                <p className="text-xs font-normal">{card.percentage}</p>
                <img src={card.icon} alt={`${card.title} Arrow`} />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cards;
