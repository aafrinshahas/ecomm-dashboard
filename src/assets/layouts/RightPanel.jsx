import Activities from "../components/Activities";
import Notification from "../components/Notification";
import Contacts from "../components/Contacts";

const RightPanel = () => {
    return(
        <div>
                <Notification/>
               <Activities/>
               <Contacts/>
        </div>
    )
}

export default RightPanel;