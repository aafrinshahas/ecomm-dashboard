import Profile from "../components/Profile";
import QuickAccess from "../components/QuickAccess";
import DashboardMenu from "../components/DashboardMenu";
import Pages from "../components/Pages";
import MediumScreenLeft from "./MediumScreenLeft";

const LeftPanel = () => {
    return(
        <div>
          
                         <Profile/>
              <QuickAccess/>
              <DashboardMenu/>
              <Pages/>
    
            

        </div>
    )
}

export default LeftPanel;