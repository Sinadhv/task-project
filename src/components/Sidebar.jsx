import { useState } from 'react';
import { FaBell, FaComments, FaUsers, FaCalendarAlt, FaPhone, FaFolderOpen, FaEllipsisH, FaPlus } from 'react-icons/fa';

const Sidebar = () => {
  const [active, setActive] = useState('Van Arsdel'); // آیتم فعال پیش‌فرض

  const handleSetActive = (item) => {
    setActive(item); // آیتم فعال تنظیم می‌شود
  };

  return (
    <div className="fixed top-14 left-0 h-[calc(100%-56px)] w-16 bg-[#f0f0f0] text-[#616161] flex flex-col items-center">
      {/* آیتم‌های ناوبری */}
      <div className="flex flex-col space-y-6 mt-4">
        <button
          onClick={() => handleSetActive('Activity')}
          className={`flex flex-col items-center ${active === 'Activity' ? 'text-[#5B5FC7]' : 'text-gray-700'} hover:text-blue-500 focus:outline-none`}
        >
          <FaBell size={24} />
          <p className="text-xs mt-1">Activity</p>
        </button>

        <button
          onClick={() => handleSetActive('Chat')}
          className={`flex flex-col items-center ${active === 'Chat' ? 'text-[#5B5FC7]' : 'text-gray-700'} hover:text-blue-500 focus:outline-none`}
        >
          <FaComments size={24} />
          <p className="text-xs mt-1">Chat</p>
        </button>

        <button
          onClick={() => handleSetActive('Teams')}
          className={`flex flex-col items-center ${active === 'Teams' ? 'text-[#5B5FC7]' : 'text-gray-700'} hover:text-blue-500 focus:outline-none`}
        >
          <FaUsers size={24} />
          <p className="text-xs mt-1">Teams</p>
        </button>

        <button
          onClick={() => handleSetActive('Calendar')}
          className={`flex flex-col items-center ${active === 'Calendar' ? 'text-[#5B5FC7]' : 'text-gray-700'} hover:text-blue-500 focus:outline-none`}
        >
          <FaCalendarAlt size={24} />
          <p className="text-xs mt-1">Calendar</p>
        </button>

        <button
          onClick={() => handleSetActive('Calls')}
          className={`flex flex-col items-center ${active === 'Calls' ? 'text-[#5B5FC7]' : 'text-gray-700'} hover:text-blue-500 focus:outline-none`}
        >
          <FaPhone size={24} />
          <p className="text-xs mt-1">Calls</p>
        </button>

        <button
          onClick={() => handleSetActive('Files')}
          className={`flex flex-col items-center ${active === 'Files' ? 'text-[#5B5FC7]' : 'text-gray-700'} hover:text-blue-500 focus:outline-none`}
        >
          <FaFolderOpen size={24} />
          <p className="text-xs mt-1">Files</p>
        </button>


        {/* آیتم‌های دوم */}
        <button
          onClick={() => handleSetActive('Van Arsdel')}
          className={`flex flex-col items-center ${active === 'Van Arsdel' ? 'text-[#5B5FC7]' : 'text-gray-700'} hover:text-blue-500 focus:outline-none`}
        >
          <FaUsers size={24} />
          <p className="text-xs mt-1">Van Arsdel</p>
        </button>

        <button
          onClick={() => handleSetActive('More')}
          className={`flex flex-col items-center ${active === 'More' ? 'text-[#5B5FC7]' : 'text-gray-700'} hover:text-blue-500 focus:outline-none`}
        >
          <FaEllipsisH size={24} />
        </button>

        <button
          onClick={() => handleSetActive('Apps')}
          className={`flex flex-col items-center ${active === 'Apps' ? 'text-[#5B5FC7]' : 'text-gray-700'} hover:text-blue-500 focus:outline-none`}
        >
          <FaPlus size={24} />
          <p className="text-xs mt-1">Apps</p>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
