import { Dashboardcontext } from "../context/DashboardContextProvider";
import { useContext } from "react";
import profile from '../images/common/profile.png'

const Profile = () => {
    const {user} = useContext(Dashboardcontext)
    return(
       <div className="flex items-center gap-2.5 py-1 mb-3 text-sm font-normal">
        <img
        src={profile}
        alt="profile"
        />
        <p className="text-[#1C1C1C] dark:text-[#FFFFFF]">{user}</p>
       </div>
    )
}

export default Profile;