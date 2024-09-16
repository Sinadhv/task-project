import { useState } from 'react';
import { FaEllipsisH, FaExternalLinkAlt } from 'react-icons/fa';

const AppHeader = () => {
  // مدیریت تب فعال
  const [activeTab, setActiveTab] = useState('Home');

  const handleTabClick = (tab) => {
    setActiveTab(tab); // تنظیم تب فعال
  };

  return (
    <div className="flex items-center justify-between px-4 py-2 bg-white shadow-sm w-[calc(100%-4rem)] h-16 fixed top-14 left-16 text-[#242424]">
      {/* بخش سمت چپ: آواتار، عنوان و تب‌ها */}
      <div className="flex items-center space-x-4">
        {/* آواتار */}
        <img
          src="https://via.placeholder.com/32"
          alt="Avatar"
          className="w-10 h-10 rounded-full"
        />
        {/* عنوان */}
        <h1 className="text-lg font-bold">Van Arsdel</h1>
        
        {/* تب‌ها */}
        <div className="flex space-x-4 ml-8">
          <button 
            onClick={() => handleTabClick('Home')}
            className={`text-sm ${activeTab === 'Home' ? 'font-bold text-black border-b-2 border-blue-500' : 'text-gray-700'} hover:text-blue-500 focus:outline-none`}
          >
            Home
          </button>
          <button 
            onClick={() => handleTabClick('Timeline')}
            className={`text-sm ${activeTab === 'Timeline' ? 'font-bold text-black border-b-2 border-blue-500' : 'text-gray-700'} hover:text-blue-500 focus:outline-none`}
          >
            Timeline
          </button>
          <button 
            onClick={() => handleTabClick('Chat')}
            className={`text-sm ${activeTab === 'Chat' ? 'font-bold text-black border-b-2 border-blue-500' : 'text-gray-700'} hover:text-blue-500 focus:outline-none`}
          >
            Chat
          </button>
          <button 
            onClick={() => handleTabClick('Assigned')}
            className={`text-sm ${activeTab === 'Assigned' ? 'font-bold text-black border-b-2 border-blue-500' : 'text-gray-700'} hover:text-blue-500 focus:outline-none`}
          >
            Assigned to you
          </button>
        </div>
      </div>

      {/* بخش سمت راست: آیکون‌ها */}
      <div className="flex items-center space-x-4">
        <button className="text-gray-600 hover:text-blue-500 focus:outline-none">
          <FaExternalLinkAlt size={18} />
        </button>
        <button className="text-gray-600 hover:text-blue-500 focus:outline-none">
          <FaEllipsisH size={18} />
        </button>
      </div>
    </div>
  );
};

export default AppHeader;
