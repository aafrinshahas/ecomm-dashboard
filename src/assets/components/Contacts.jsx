import { Dashboardcontext } from "../context/DashboardContextProvider";
import { useContext } from "react";

const Contacts = () => {
const {contacts} = useContext(Dashboardcontext)

    return (
      <div className="text-sm font-normal mb-5">
             <div className="text-[#1C1C1C] py-2 mb-2 dark:text-[#FFFFFF] font-semibold">Contacts</div>
  <div className="space-y-4">
        {contacts.map((contact)=>{
            return(
                <div className="flex items-start gap-2.5">
                    <div className="w-6 h-6">
                    <img src={contact.profileimage} alt="Profile Image"/>
                    </div>
                    
                    <div className="text-[#1C1C1C] text-sm dark:text-[#FFFFFF]">
                        <p>{contact.username}</p>
                
                    </div>
                </div>
            )
        })}
       </div>

        </div>
    )
}

export default Contacts;