import { useContext, useState } from "react";
import { Dashboardcontext } from "../context/DashboardContextProvider";


const Pages = () => {
  const { pageMenuItems, arrow } = useContext(Dashboardcontext);

  // Track which item is expanded
  const [expandedItems, setExpandedItems] = useState(() =>
    pageMenuItems.reduce((acc, item) => {
      acc[item.label] = Array.isArray(item.sublabel); // open if sublabel exists
      return acc;
    }, {})
  );

  const toggleExpand = (label) => {
    setExpandedItems((prev) => ({
      ...prev,
      [label]: !prev[label],
    }));
  };

  return (
    <div className="text-sm font-normal mb-3">
      <div className="text-[#1C1C1C66] py-1 px-2 mb-2 dark:text-[#FFFFFF66]">Pages</div>
      <ul className="space-y-1.5">
        {pageMenuItems.map((item) => {
          const hasSublabel = Array.isArray(item.sublabel);
          const isExpanded = expandedItems[item.label];

          return (
            <li key={item.label} className="flex flex-col px-2 py-1.5 cursor-pointer">
              <div className="flex items-start gap-1.5" onClick={() => hasSublabel && toggleExpand(item.label)}>
                <img
                  src={arrow}
                  alt="arrow"
                  className={`w-4 h-4 transition-transform duration-300 ${isExpanded ? "rotate-90" : ""}`}
                />
                <img src={item.icon} alt={item.label} className="w-5 h-5" />
                <span>{item.label}</span>
              </div>

              {hasSublabel && isExpanded && (
                <ul className="pl-10 mt-3">
                  {item.sublabel.map((sub, index) => (
                    <li key={index} className="px-2 py-1.5">
                      <span>{sub}</span>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Pages;
