import RevenueChart from "./RevenueChart";

const LineChart = () => {
    return(
<div className="bg-[#F7F9FB] py-4 md:py-6 pl-4 pr-6 rounded-2xl dark:bg-[#FFFFFF0D] w-full h-full">
<div className="flex items-center gap-5">
    <p className="text-[#1C1C1C] font-semibold text-sm mb-1 dark:text-[#FFFFFF] pl-4">Revenue</p>
    <p className="mb-1 dark:text-[#FFFFFF33] text-[#1C1C1C33]">|</p>
    <div className="flex items-center gap-1.5 mr-3">
        <div className="inline-block w-1.5 h-1.5 bg-[#1C1C1C] rounded-full dark:bg-[#C6C7F8]"></div>
        <p className="text-[#1C1C1C] text-xs font-normal dark:text-[#FFFFFF]">Current Week  <span className="font-semibold">$58,211</span></p>
    </div>
        <div className="flex items-center gap-1.5">
        <div className="w-1.5 h-1.5 bg-[#A8C5DA] rounded-full"></div>
        <p className="text-[#1C1C1C] text-xs font-normal dark:text-[#FFFFFF]">Previous Week  <span className="font-semibold">$68,768</span></p>
    </div>
</div>
<RevenueChart/>
</div>
    )
}

export default LineChart;