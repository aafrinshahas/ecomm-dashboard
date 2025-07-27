import { useState, useContext, useEffect } from "react";
import { Dashboardcontext } from "../context/DashboardContextProvider";
import { useTheme } from "../context/ThemeContext";
import { icons } from "../utilis/icons";
import OrderFunctionality from "./OrderFuctionality";

const OrderList = () => {
  const { orderlist } = useContext(Dashboardcontext);
  const { theme } = useTheme();

  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1); // Reset to page 1 on new search
  };

  const flatOrderList = orderlist.flat();
  const filteredOrders = flatOrderList.filter((order) =>
    order.orderId.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const itemsPerPage = 10;
  const totalPages = Math.ceil(filteredOrders.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentOrders = filteredOrders.slice(startIndex, startIndex + itemsPerPage);

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handlePageClick = (page) => {
    setCurrentPage(page);
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];
    const maxPages = 5;
    let start = Math.max(1, currentPage - Math.floor(maxPages / 2));
    let end = Math.min(totalPages, start + maxPages - 1);

    if (end - start < maxPages - 1) {
      start = Math.max(1, end - maxPages + 1);
    }

    for (let i = start; i <= end; i++) {
      pageNumbers.push(
        <button
          key={i}
          onClick={() => handlePageClick(i)}
          className={`w-7 h-7 rounded-lg text-sm ${
            currentPage === i
              ? "bg-[#1C1C1C0D] text-[#1C1C1C] dark:bg-[#FFFFFF1A] dark:text-[#FFFFFF]"
              : "bg-transparent text-[#1C1C1C] dark:text-white"
          }`}
        >
          {i}
        </button>
      );
    }

    return pageNumbers;
  };

  return (
    <div >
      <div className="order-list">

 
      <OrderFunctionality
        searchTerm={searchTerm}
        onSearchChange={handleSearchChange}
      />

      {/* Table */}
      <table className="w-full border-collapse">
        <thead className="border-b border-b-[#1C1C1C33] dark:border-b-[#FFFFFF33]">
          <tr>
            <th className="w-[24px] py-3 px-1"></th>
            <th className="w-[100px] py-3 px-2 text-xs text-left">Order ID</th>
            <th className="w-[214px] py-3 px-2 text-xs text-left">User</th>
            <th className="w-[215px] py-3 px-2 text-xs text-left">Project</th>
            <th className="w-[270px] py-3 px-2 text-xs text-left">Address</th>
            <th className="w-[191px] py-3 px-2 text-xs text-left">Date</th>
            <th className="w-[110px] py-3 px-2 text-xs text-left">Status</th>
            <th className="w-[48px] py-3 px-2 text-xs text-left"></th>
          </tr>
        </thead>

        <tbody>
          {currentOrders.map((order, index) => (
            <tr
              key={index}
              className="group border-b border-b-[#1C1C1C0D] cursor-pointer hover:bg-[#F7F9FB] dark:hover:bg-[#FFFFFF0D] hover:border-b-0"
            >
              <td className="py-3 px-1 group-hover:rounded-l-xl transition-all duration-200">
                <label className="flex items-center cursor-pointer">
                  <input type="checkbox" className="peer hidden" />
                  <div
                    className="w-4 h-4 border border-[#1C1C1C33] dark:border-[#FFFFFF33] rounded-sm 
                      flex items-center justify-center invisible group-hover:visible transition-opacity duration-200
                      peer-checked:visible peer-checked:bg-[#1C1C1C] peer-checked:dark:bg-[#C6C7F8] peer-checked:border-none
                      peer-checked:after:content-['✓'] peer-checked:after:text-[10px] peer-checked:after:text-black peer-checked:after:dark:text-black"
                  ></div>
                </label>
              </td>

              <td className="py-3 px-2 text-xs text-left">{order.orderId}</td>

              <td className="py-3 px-2 text-xs text-left">
                <div className="flex items-center gap-2">
                  <img
                    src={order.userProfile}
                    alt="user"
                    className="w-6 h-6 rounded-full object-cover"
                  />
                  {order.user}
                </div>
              </td>

              <td className="py-3 px-2 text-xs text-left">{order.project}</td>

              <td className="py-3 px-2 text-xs text-left">
                <div className="flex items-center gap-1.5">
                  {order.address}
                  <button className="w-4 h-4 invisible group-hover:visible transition-opacity duration-200">
                    <img src={icons.clipboard[theme]} className="w-full h-full" />
                  </button>
                </div>
              </td>

              <td className="py-3 px-2 text-xs text-left">
                <div className="flex items-center gap-1.5">
                  <img src={icons.date[theme]} />
                  {order.date}
                </div>
              </td>

              <td
                className="py-3 px-2 text-xs text-left"
                style={{
                  color:
                    theme === "dark" ? order.statusColorDark : order.statusColor,
                }}
              >
                <div className="flex items-center gap-1.5">
                  <div
                    style={{
                      background:
                        theme === "dark"
                          ? order.statusColorDark
                          : order.statusColor,
                    }}
                    className="w-1.5 h-1.5 rounded-full"
                  ></div>
                  {order.status}
                </div>
              </td>

              <td className="py-3 px-2 group-hover:rounded-r-xl transition-all duration-200">
                <button>
                  <img src={icons.dots[theme]} alt="options" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
     </div>
      {/* Pagination */}
      {filteredOrders.length > itemsPerPage && (
        <div className="flex justify-end items-center mt-6 gap-1">
          <button
            onClick={handlePrev}
            disabled={currentPage === 1}
            className="w-7 h-7"
          >
            <img src={icons.arrowleft[theme]} />
          </button>

          {renderPageNumbers()}

          <button
            onClick={handleNext}
            disabled={currentPage === totalPages}
            className="w-7 h-7"
          >
            <img src={icons.arrowRight[theme]} />
          </button>
        </div>
      )}
    </div>
  );
};

export default OrderList;
