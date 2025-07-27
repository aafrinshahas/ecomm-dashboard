import { Dashboardcontext } from "../context/DashboardContextProvider";
import { useContext } from "react";

const Activities = () => {
  const { activities } = useContext(Dashboardcontext);

  return (
    <div className="text-sm font-normal mb-5">
      <div className="text-[#1C1C1C] py-2 mb-2 dark:text-[#FFFFFF] font-semibold">Activities</div>
      <div className="space-y-4 relative">
        {activities.map((activity, index) => {
          const isLast = index === activities.length - 1;
          return (
            <div className="flex items-start gap-2.5 relative" key={index}>
              <div className="relative w-6 h-6 flex-shrink-0">
                <img
                  src={activity.userimage}
                  alt="User"
                  className="w-full h-full object-cover"
                />
                {/* Line below the image (skip for last) */}
                {!isLast && (
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-px h-6 bg-[#1C1C1C1A] dark:bg-[#FFFFFF1A] mt-1"></div>
                )}
              </div>

              <div>
                <p className="text-[#1C1C1C] text-sm dark:text-[#FFFFFF]">{activity.activity}</p>
                <span className="text-[#1C1C1C66] text-xs dark:text-[#FFFFFF66]">{activity.time}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Activities;
