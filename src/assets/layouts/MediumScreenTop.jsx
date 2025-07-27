import { icons } from '../utilis/icons';
import { useTheme } from '../context/ThemeContext';
import { Link } from 'react-router-dom';
const MediumScreenTop = ({ toggleSidebar }) => {
    const { theme, toggleTheme } = useTheme();
    return(
        <div className="hidden max-[1023px]:block">
         <div className='flex items-center justify-between py-5 px-7 border-b border-b-[#1C1C1C1A] dark:border-b-[#FFFFFF1A]'>
  <div className='flex gap-2 items-center'>
          <p
            style={{ color: 'var(--breadcrumb)' }}
            className='font-normal text-sm hover:bg-[#1C1C1C0D] dark:hover:bg-[#FFFFFF1A] py-1 px-1.5 rounded-md'
          >
            <Link to="/">Dashboards</Link>
            
          </p>
          <p style={{ color: 'var(--breadcrumb-separator)' }}>/</p>
          <p
            style={{ color: 'var(--breadcrumb-active)' }}
            className='hover:bg-[#1C1C1C0D] dark:hover:bg-[#FFFFFF1A] py-1 px-1.5 rounded-md font-normal text-sm'
          >
            <Link to="/">Default</Link>
            
          </p>
        </div>

        <div className='flex items-center gap-4'>
                    {/* icons */}
        <img src={icons.theme[theme]} alt='Theme icon' 
        onClick={toggleTheme}
        className='cursor-pointer hover:bg-[#1C1C1C0D] dark:hover:bg-[#FFFFFF1A] p-1 rounded-md'
        />
        <div >
<div className="bg-[#E5ECF6] 
dark:bg-[#FFFFFF1A]
w-8 h-8 flex flex-col justify-center items-center gap-[3px] p-[4px] rounded-md cursor-pointer"
onClick={toggleSidebar}
>
  <div className="w-4 h-[1px] bg-[#1C1C1C] dark:bg-[#fff]"></div>
  <div className="w-4 h-[1px] bg-[#1C1C1C] dark:bg-[#fff]"></div>
  <div className="w-4 h-[1px] bg-[#1C1C1C] dark:bg-[#fff]"></div>
</div>
        </div>



        </div>
        </div>

        </div>
    )
}

export default MediumScreenTop;