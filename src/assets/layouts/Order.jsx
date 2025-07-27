import OrderFuctionality from "../components/OrderFuctionality";
import OrderList from "../components/OrderList";
const Order = () => {

    return(
        <div className="pt-7 px-7 ">
            <h2 className="text-[#1C1C1C] text-sm mb-5 font-semibold dark:text-[#FFFFFF]">Order List</h2>
            {/* <OrderFuctionality/> */}
            <OrderList/>
        </div>
    )
}

export default Order;