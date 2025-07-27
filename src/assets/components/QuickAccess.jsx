import { Link } from "react-router-dom";

const QuickAccess = () => {
    return(
        <div className="pb-3 mb-1 text-sm font-normal">
            <div className="flex items-center gap-2.5 mb-1.5">
                <p className="p-1 rounded-lg text-[#1C1C1C66] dark:text-[#FFFFFF66]">Favorites</p>
                <p className="p-1 rounded-lg text-[#1C1C1C33] dark:text-[#FFFFFF66]">Recently</p>
            </div>
            <ul className="text-[#1C1C1C] list-disc list-inside dark:text-[#FFFFFF]">
                <li className="custom-disc py-1 px-2"><Link to="/">Overview</Link></li>
                <li className="custom-disc py-1 px-2"><Link to="/">Projects</Link></li>
            </ul>
        </div>
    )
}

export default QuickAccess;