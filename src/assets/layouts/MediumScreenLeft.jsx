import { icons } from "../utilis/icons";
import { useTheme } from "../context/ThemeContext";
import { images } from "../utilis/images";
import { Link } from "react-router-dom";

const MediumScreenLeft = () => {
const { theme } = useTheme();

return (

<div className="bg-[#F7F9FB] p-4 flex flex-col justify-between dark:bg-[#000] h-full">
<div>
<div className="my-4">
<img src={icons.search[theme]} alt="Default icon" width={20} height={20} />
</div>
<div className="my-4">
<Link to='/order'><img src={icons.default[theme]} alt="Default icon" width={20} height={20} /></Link>

</div>
<div className="my-4">
<Link to='/'><img src={icons.ecomm[theme]} alt="Ecomm" width={20} height={20} /></Link>

</div>
<div className="my-4">
<img src={icons.project[theme]} alt="project" width={20} height={20} />
</div>
<div className="my-4">
<img src={icons.course[theme]} alt="course" width={20} height={20} />
</div>
<div className="my-4">
<img src={icons.profile[theme]} alt="profile" width={20} height={20} />
</div>
<div className="my-4">
<img src={icons.account[theme]} alt="account" width={20} height={20} />
</div>
<div className="my-4">
<img src={icons.corporate[theme]} alt="corporate" width={20} height={20} />
</div>
<div className="my-4">
<img src={icons.blog[theme]} alt="blog" width={20} height={20} />
</div>
<div className="my-4">
<img src={icons.social[theme]} alt="social" width={20} height={20} />
</div>
<div>
      <div className="my-4">
<img src={icons.star[theme]} alt="star" width={20} height={20} />
</div>

    <div className="my-4">
<img src={icons.clockwise[theme]} alt="clockwise" width={20} height={20} />
</div>

          <div className="my-4">
<img src={icons.notification[theme]} alt="clockwise" width={20} height={20} />
</div>
</div>
</div>
<div className="my-4">
<img src={images.profile} alt="social" width={20} height={20} />
</div>
</div>

);
};

export default MediumScreenLeft;
