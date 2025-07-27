import { Link } from "react-router-dom";
import { Dashboardcontext } from "../context/DashboardContextProvider";
import { useContext } from "react";

const DashboardMenu = () => {
  const { menuItems, active, setActive, arrow } = useContext(Dashboardcontext);

  return (
    <div className="text-sm font-normal mb-3">
      <div className="text-[#1C1C1C66] py-1 px-2 mb-2 dark:text-[#FFFFFF66]">Dashboards</div>
      <ul className="space-y-1.5">
        {menuItems.map((item) => (
          <Link key={item.label} to={item.path}>
            <li
              onClick={() => setActive(item.label)}
              className={`flex items-start gap-1.5 cursor-pointer px-1 py-1.5 rounded-lg relative ${
                active === item.label
                  ? "bg-[#1C1C1C0D] text-[#1C1C1C] dark:text-[#FFFFFF] dark:bg-[#FFFFFF1A]"
                  : "text-[#1C1C1C] hover:bg-gray-50 dark:text-[#FFFFFF] dark:hover:bg-[#FFFFFF0F]"
              }`}
            >
              <div
                className={`h-4 w-1 rounded-full ${
                  active === item.label ? "bg-[#1C1C1C] dark:bg-[#C6C7F8]" : "bg-transparent"
                }`}
              ></div>

              <img
                src={arrow}
                className={`${active === item.label ? "invisible" : "visible"} w-4 h-4`}
                alt="arrow"
              />
              <img src={item.icon} alt={item.label} className="w-5 h-5" />
              <span>{item.label}</span>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default DashboardMenu;
