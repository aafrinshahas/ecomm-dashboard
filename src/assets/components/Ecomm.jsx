import BarChart from "./BarChart";
import Cards from "./Cards";
import LineChart from "./LineChart";
import Map from "./Map";
import PieChart from "./PieChart";
import ProductList from "./ProductList";

const Ecomm = () => {
return (
<div className="pt-7 px-4 md:px-7">
<h2 className="text-[#1C1C1C] text-sm mb-4 font-semibold dark:text-[#FFFFFF]">
eCommerce
</h2>

{/* Top Row: Cards and Bar Chart */}
<div className="flex flex-col lg:flex-row justify-between flex-wrap gap-4">
<div className="w-full lg:w-[48%] mb-6">
<Cards />
</div>
<div className="w-full lg:w-[48%] lg:h-[250px] xl:h-[250px] h-full  mb-6">
<BarChart />
</div>
</div>

{/* Middle Row: Line Chart and Map */}
<div className="flex flex-col lg:flex-row justify-between flex-wrap gap-4">
<div className="w-full lg:w-[71%] lg:h-[318px] xl:h-[318px] h-full  mb-6">
<LineChart />
</div>
<div className="w-full lg:w-[25%] lg:h-[318px] xl:h-[318px] h-full mb-6">
<Map />
</div>
</div>

{/* Bottom Row: Product List and Pie Chart */}
<div className="flex flex-col lg:flex-row justify-between flex-wrap gap-4">
<div className="w-full lg:w-[71%] lg:h-[336px] xl:h-[336px] h-full mb-6">
<ProductList />
</div>
<div className="w-full lg:w-[25%] mb-6">
<PieChart />
</div>
</div>
</div>
);
};

export default Ecomm;
