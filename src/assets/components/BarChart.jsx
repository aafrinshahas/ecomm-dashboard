import ProjectionChart from "./ProjectionChart";

const BarChart = () => {
    return(
        <div className="bg-[#F7F9FB] py-4 md:py-6 pl-4 pr-6 rounded-2xl dark:bg-[#FFFFFF0D] w-full h-full">
               <p className="text-[#1C1C1C] font-semibold text-sm mb-3 pl-4 dark:text-[#FFFFFF]">Projections vs Actuals</p>
               <ProjectionChart/>
        </div>
    )
}

export default BarChart;