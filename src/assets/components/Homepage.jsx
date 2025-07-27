import TopNav from "../layouts/TopNav";
import LeftPanel from "../layouts/LeftPanel";
import RightPanel from "../layouts/RightPanel";
import { Outlet } from "react-router-dom";
import MediumScreenLeft from "../layouts/MediumScreenLeft";
import MediumScreenTop from "../layouts/MediumScreenTop";
import { useState, useEffect } from "react";

const HomePage = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

 
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setSidebarOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="flex flex-col md:flex-row relative">
      {/* Left Panel for large screens */}
      <div className="hidden lg:block lg:w-[16%] p-4 py-5 px-4 border-r border-[#1C1C1C1A] dark:border-[#FFFFFF1A]">
        <LeftPanel />
      </div>

      {/* Medium Screen Sidebar (toggle controlled) */}
      {sidebarOpen && (
        <div className="min-[840px]:block max-[1023px]:block hidden fixed w-14 top-0 bottom-0 overflow-y-auto shadow-xl z-50">
          <MediumScreenLeft />
        </div>
      )}

      {/* Center Content */}
      <div className="lg:w-[64%] md:w-[73%] w-full">
        <TopNav />
        <MediumScreenTop toggleSidebar={() => setSidebarOpen((prev) => !prev)} />
        <Outlet />
      </div>

      {/* Right Panel */}
      <div className="lg:w-[20%] md:w-[27%] w-full py-5 px-4 border-l border-[#1C1C1C1A] dark:border-[#FFFFFF1A] hidden md:block">
        <RightPanel />
      </div>
    </div>
  );
};

export default HomePage;
