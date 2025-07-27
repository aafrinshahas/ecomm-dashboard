import Sales from './Sales.jsx'

const PieChart = () => {
    return(
          <div class=" bg-[#F7F9FB] rounded-xl md:p-6 
          lg:p-4
          p-4
          w-full h-full
          dark:bg-[#FFFFFF0D]
          ">
  <h2 class="text-[#1C1C1C] text-sm font-semibold mb-3 dark:text-[#FFFFFF]">Total Sales</h2>
 
<Sales/>


  <div class="space-y-3.5 text-xs">
    <div class="flex items-center justify-between">
      <div class="flex items-center space-x-2">
        <span class="w-1.5 h-1.5 rounded-full bg-[#1C1C1C] dark:bg-[#C6C7F8]"></span>
        <span class="text-[#1C1C1C] dark:text-[#FFFFFF]">Direct</span>
      </div>
      <span class="text-[#1C1C1C] font-medium  dark:text-[#FFFFFF]">$300.56</span>
    </div>

    <div class="flex items-center justify-between">
      <div class="flex items-center space-x-2">
        <span class="w-1.5 h-1.5 rounded-full bg-[#BAEDBD] dark:bg-[#BAEDBD]"></span>
        <span class="text-[#1C1C1C] dark:text-[#FFFFFF]">Affiliate</span>
      </div>
      <span class="text-[#1C1C1C] font-medium dark:text-[#FFFFFF]">$135.18</span>
    </div>

    <div class="flex items-center justify-between">
      <div class="flex items-center space-x-2">
        <span class="w-1.5 h-1.5 rounded-full bg-[#95A4FC] dark:bg-[#95A4FC]"></span>
        <span class="text-[#1C1C1C] dark:text-[#FFFFFF]">Sponsored</span>
      </div>
      <span class="text-[#1C1C1C] font-medium dark:text-[#FFFFFF]">$154.02</span>
    </div>

    <div class="flex items-center justify-between">
      <div class="flex items-center space-x-2">
        <span class="w-1.5 h-1.5 rounded-full bg-[#B1E3FF] dark:bg-[#B1E3FF]"></span>
        <span class="text-[#1C1C1C] dark:text-[#FFFFFF]">E-mail</span>
      </div>
      <span class="text-[#1C1C1C] font-medium dark:text-[#FFFFFF]">$48.96</span>
    </div>
  </div>
</div>
    )
}

export default PieChart;