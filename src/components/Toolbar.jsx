import { FaSearch , FaBars } from 'react-icons/fa';
import { useState } from 'react';

const Toolbar = () => {
  const [selected, setSelected] = useState("text1");

  return (
    <div className="flex items-center justify-between px-4 py-2 bg-white shadow-sm w-[calc(100%-4rem)] h-12 fixed top-[7rem] left-16 text-[#242424] border-t border-[#E0E0E0]">
      {/* بخش دکمه‌های رادیویی و آیکون منو */}
      <div className="flex items-center space-x-4">
        {/* آیکون منو */}
        <button className="text-black">
          <FaBars size={18} />
        </button>
      
      
      {/* بخش دکمه‌های رادیویی */}
      <div className="flex space-x-4">
        <button
          className={`px-4 py-1 rounded-full flex items-center justify-center space-x-1 ${
            selected === "text1" ? "bg-[#5B5FC7] text-white rounded-[4px]" : "text-black"
          }`}
          onClick={() => setSelected("text1")}
        >
          <input
            type="radio"
            name="option"
            className="mr-2"
            checked={selected === "text1"}
          />
          Text
        </button>

        <button
          className={`px-4 py-1 rounded-full flex items-center justify-center space-x-1 ${
            selected === "text2" ? "bg-[#5B5FC7] text-white rounded-[4px]" : "text-black"
          }`}
          onClick={() => setSelected("text2")}
        >
          <input
            type="radio"
            name="option"
            className="mr-2"
            checked={selected === "text2"}
          />
          Text
        </button>

        <button
          className={`px-4 py-1 rounded-full flex items-center justify-center space-x-1 ${
            selected === "text3" ? "bg-[#5B5FC7] text-white rounded-[4px]" : "text-black"
          }`}
          onClick={() => setSelected("text3")}
        >
          <input
            type="radio"
            name="option"
            className="mr-2"
            checked={selected === "text3"}
          />
          Text
        </button>
          <div/>
      

        <button
          className={`px-4 py-1 rounded-full flex items-center justify-center space-x-1 ${
            selected === "text4" ? "bg-[#5B5FC7] text-white rounded-[4px]" : "text-black"
          }`}
          onClick={() => setSelected("text4")}
        >
          <input
            type="radio"
            name="option"
            className="mr-2"
            checked={selected === "text4"}
          />
          Text
        </button>

        <button
          className={`px-4 py-1 rounded-full flex items-center justify-center space-x-1 ${
            selected === "text5" ? "bg-[#5B5FC7] text-white rounded-[4px]" : "text-black"
          }`}
          onClick={() => setSelected("text5")}
        >
          <input
            type="radio"
            name="option"
            className="mr-2"
            checked={selected === "text5"}
          />
          Text
        </button>

        <button
          className={`px-4 py-1 rounded-full flex items-center justify-center space-x-1 ${
            selected === "text6" ? "bg-[#5B5FC7] text-white rounded-[4px]" : "text-black"
          }`}
          onClick={() => setSelected("text6")}
        >
          <input
            type="radio"
            name="option"
            className="mr-2"
            checked={selected === "text6"}
          />
          Text
        </button>

        <button
          className={`px-4 py-1 rounded-full flex items-center justify-center space-x-1 ${
            selected === "text7" ? "bg-[#5B5FC7] text-white rounded-[4px]" : "text-black"
          }`}
          onClick={() => setSelected("text7")}
        >
          <input
            type="radio"
            name="option"
            className="mr-2"
            checked={selected === "text7"}
          />
          Text
        </button>

        <button
          className={`px-4 py-1 rounded-full flex items-center justify-center space-x-1 ${
            selected === "text8" ? "bg-[#5B5FC7] text-white rounded-[4px]" : "text-black"
          }`}
          onClick={() => setSelected("text8")}
        >
          <input
            type="radio"
            name="option"
            className="mr-2"
            checked={selected === "text8"}
          />
          Text
        </button>
        </div>
      </div>

      {/* بخش سمت راست: دکمه فیلتر و جستجو */}
      <div className="flex items-center space-x-4">
        <button className="text-gray-600 hover:text-blue-500 focus:outline-none flex items-center">
          <span className="ml-2">Filter</span> 
        </button>
        <div className="relative">
          <FaSearch className="absolute left-3 top-2 text-gray-400 w-[10px] h-[10px]" />
          <input
            type="text"
            placeholder="Find"
            className="pl-10 pr-4 py-1 border border-silver rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
          />
        </div>
      </div>
    </div>
  );
};

export default Toolbar;
