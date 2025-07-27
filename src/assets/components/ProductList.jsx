import { Dashboardcontext } from "../context/DashboardContextProvider";
import { useContext } from "react";
const ProductList = () => {
    const {productlist} = useContext(Dashboardcontext)
    return(
        <div className="bg-[#F7F9FB] p-4 md:p-6 rounded-2xl dark:bg-[#FFFFFF0D] w-full h-full">
           <p className="font-semibold text-sm mb-1 dark:text-[#FFFFFF]">Top Selling Products</p>
           <div>

           </div>
           <table className="w-full">
    
                        <thead className="border-b border-[#1C1C1C33] dark:border-[#FFFFFF33]">
                            <tr>
<th className="text-[#1C1C1C66] py-2.5 text-sm font-normal text-left w-[40%] dark:text-[#FFFFFF66] px-1">Name</th>
<th className="text-[#1C1C1C66] py-2.5 text-sm font-normal text-left w-[20%] dark:text-[#FFFFFF66] px-1">Price</th>
<th className="text-[#1C1C1C66] py-2.5 text-sm font-normal text-left w-[20%] dark:text-[#FFFFFF66] px-1">Quantity</th>
<th className="text-[#1C1C1C66] py-2.5 text-sm font-normal text-left w-[20%] dark:text-[#FFFFFF66] px-1">Amount</th>
                            </tr>
                        
                        </thead>
                        <tbody>
                            {productlist.map((list)=>{
                                return(
                                    <tr>
                                        <td className="text-[#1C1C1C] text-xs py-3 text-left dark:text-[#FFFFFF] px-1">{list.name}</td>
                                        <td className="text-[#1C1C1C] text-xs py-3 text-left dark:text-[#FFFFFF] px-1">{list.price}</td>
                                        <td className="text-[#1C1C1C] text-xs py-3 text-left dark:text-[#FFFFFF] px-1">{list.quantity}</td>
                                        <td className="text-[#1C1C1C] text-xs py-3 text-left dark:text-[#FFFFFF] px-1">{list.amount}</td>
                            
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>

        </div>
    )
}

export default ProductList