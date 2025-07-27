
import { icons } from '../utilis/icons';
import { useTheme } from '../context/ThemeContext';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const TopNav = () => {
  const { theme, toggleTheme } = useTheme();
  const { search } = useLocation();
 const location = useLocation();
  const pathname = location.pathname;
  console.log(pathname)
  const pathSegments = pathname.split('/').filter(Boolean); // ["order"]
  const value = pathSegments[pathSegments.length - 1];

  return (
    <div className='hidden min-[1023px]:block'>
    <div className='flex items-center justify-between py-5 px-7 border-b border-b-[#1C1C1C1A] dark:border-b-[#FFFFFF1A]'>
      {/* left */}
      <div className='flex items-center gap-2'>
        <div className='flex items-center gap-1.5'>
          <img
            src={icons.leftSide[theme]}
            alt='Left side bar'
            className='hover:bg-[#1C1C1C0D] dark:hover:bg-[#FFFFFF1A] p-1 rounded-md w-[20] h-[20] cursor-pointer'
          />
          <img
            src={icons.star[theme]}
            alt='Star'
            className='hover:bg-[#1C1C1C0D] dark:hover:bg-[#FFFFFF1A] p-1 rounded-md w-[20] h-[20] cursor-pointer'
          />
        </div>

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
            {
              value ? <Link to="/">{value}</Link> : 'Default'
            }
            
            
          </p>
        </div>
      </div>

      {/* right */}
      <div className='flex items-center gap-4'>
        {/* search */}
        <div
          className='flex items-center py-1 px-2 text-black dark:text-white rounded-lg w-40 h-full'
          style={{ background: 'var(--search-bg)' }}
        >
          <div className='flex gap-1 justify-between items-center w-full h-full'>
            <img src={icons.search[theme]} alt='Search icon' />
            <input
              type='text'
              placeholder='Search'
              className='bg-transparent outline-none w-full h-full text-sm placeholder:text-[#1C1C1C33] dark:placeholder:text-[#FFFFFF33]'
            />
          </div>
          <img src={icons.text[theme]} />
        </div>

        {/* icons */}
        <img src={icons.theme[theme]} alt='Theme icon' 
        onClick={toggleTheme}
        className='cursor-pointer hover:bg-[#1C1C1C0D] dark:hover:bg-[#FFFFFF1A] p-1 rounded-md'
        />
        <img src={icons.clockwise[theme]} alt='Clockwise' 
         className='cursor-pointer hover:bg-[#1C1C1C0D] dark:hover:bg-[#FFFFFF1A] p-1 rounded-md'
        />
        <img src={icons.notification[theme]} alt='Notification' 
         className='cursor-pointer hover:bg-[#1C1C1C0D] dark:hover:bg-[#FFFFFF1A] p-1 rounded-md'
        />
        <img src={icons.rightSide[theme]} alt='Right side' 
         className='cursor-pointer hover:bg-[#1C1C1C0D] dark:hover:bg-[#FFFFFF1A] p-1 rounded-md'
        />
      </div>
    </div>
    </div>

  );
};

export default TopNav;
