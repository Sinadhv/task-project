
import { AiOutlineSearch } from 'react-icons/ai';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { AiOutlineMinus, AiOutlineClose } from 'react-icons/ai';
import { BsThreeDots } from 'react-icons/bs';
import { BiSquare } from 'react-icons/bi';


const Navbar = () => {
  return (
    <div className="fixed top-0 left-0 w-full bg-gray-50 h-14 flex items-center justify-between p-2 shadow-md text-[#424242] bg-[#f0f0f0]">
      {/* لوگو سمت چپ */}
      <div className="flex items-center space-x-2 ml-4">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg"
          alt="Logo"
          className="h-8"
        />
      </div>

      {/* فیلد جستجو */}
      <div className="flex max-w-xs text">
        {/* دکمه‌های pagination */}
        <button className="text-gray-600 hover:text-gray-800">
          <IoIosArrowBack size={16} />
        </button>
        <button className="text-gray-600 hover:text-gray-800">
          <IoIosArrowForward size={16} />
        </button>
        <div className="relative" >
          <input
            type="text"
            placeholder="Search"
            className="w-full h-full border border-gray-300 rounded-md pl-8 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 w-[468px] h-[32px] ml-2 bg-[#FFFFFF] text-[#ffffff]"
            style={{
              boxShadow: '0px 0px 3px rgba(0, 0, 0, 0.12), 0px 1px 2px rgba(0, 0, 0, 0.14)',
            }}
          />
          <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
            <AiOutlineSearch size={16} />
          </span>
        </div>
      </div>

      {/* آیکون سه نقطه و تصویر پروفایل سمت راست */}
      <div className="flex items-center space-x-4 mr-4">
        <button className="text-gray-600">
          <BsThreeDots size={16} />
        </button>
        <img
          src="https://via.placeholder.com/32"
          alt="Profile"
          className="w-8 h-8 rounded-full"
        />
        <button className="text-gray-600 w-[10px] h-[10px]"><AiOutlineMinus /></button>
        <button className="text-gray-600 w-[10px] h-[10px]"><BiSquare/></button>
        <button className="text-gray-600 w-[10px] h-[10px]"><AiOutlineClose/></button>
      </div>
    </div>
  );
};

export default Navbar;
