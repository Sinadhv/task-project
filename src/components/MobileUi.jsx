import { AiOutlineEllipsis } from "react-icons/ai";
import { FaBell, FaComments, FaUsers, FaCalendarAlt } from "react-icons/fa";
import BarChart from "./BarChart";  // فرض بر این است که این کامپوننت‌ها موجود هستند
import LineChart from "./LineChart";
import PieChart from "./PieChart";

const MobileUi = () => {
  return (
    <div className="flex flex-col h-screen w-full">
      {/* Header ثابت */}
      <header className="flex-col justify-between items-center p-4 bg-white shadow-md w-full text-[#424242]">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <img
              src="https://via.placeholder.com/32"
              alt="Avatar"
              className="w-8 h-8 rounded-full mr-2"
            />
            <h1 className="text-lg font-bold">Van Arsdel</h1>
          </div>
          <div className="flex items-center space-x-2">
            <FaUsers size={24} className="text-[#5B5FC7]" />
            <AiOutlineEllipsis size={24} className="text-gray-600" />
          </div>
        </div>

        <div className="flex justify-center space-x-4 mt-2">
          <button className="text-gray-500">Tab 1</button>
          <button className="text-gray-500">Tab 2</button>
          <button className="text-gray-500">Tab 3</button>
        </div>
      </header>

      {/* محتوای قابل اسکرول */}
      <main className="flex-1 overflow-y-auto p-4 bg-gray-100 w-full">
        {/* اضافه کردن چارت‌ها */}
        <div className="bg-white shadow-md rounded-lg p-4 mb-4 w-full">
          <h2 className="text-xl font-semibold mb-2">Bar Chart</h2>
          <BarChart />
        </div>
        <div className="bg-white shadow-md rounded-lg p-4 mb-4 w-full">
          <h2 className="text-xl font-semibold mb-2">Line Chart</h2>
          <LineChart />
        </div>
        <div className="bg-white shadow-md rounded-lg p-4 mb-4 w-full">
          <h2 className="text-xl font-semibold mb-2">Pie Chart</h2>
          <PieChart />
        </div>
      </main>

      {/* Footer ثابت */}
      <footer className="flex justify-between items-center bg-white p-4 shadow-md w-full text-[#424242] border-t border-[#f0f0f0] shadow-lg">
        <button className="flex flex-col items-center text-gray-500">
          <FaBell size={24} />
          <span className="text-sm">Activity</span>
        </button>
        <button className="flex flex-col items-center text-gray-500">
          <FaComments size={24} />
          <span className="text-sm">Chat</span>
        </button>
        <button className="flex flex-col items-center text-gray-500">
          <FaUsers size={24} />
          <span className="text-sm">Teams</span>
        </button>
        <button className="flex flex-col items-center text-gray-500">
          <FaCalendarAlt size={24} />
          <span className="text-sm">Calendar</span>
        </button>
        <button className="flex flex-col items-center text-gray-500">
          <AiOutlineEllipsis size={24} />
          <span className="text-sm">More</span>
        </button>
      </footer>
    </div>
  );
};

export default MobileUi;
