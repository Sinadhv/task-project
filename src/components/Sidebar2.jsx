import { useState } from 'react';
import { FaChevronDown, FaChevronRight } from 'react-icons/fa';

const Sidebar2 = () => {
  const [isGroupOpen, setGroupOpen] = useState(true);
  const [isOptionOpen, setOptionOpen] = useState(true);

  return (
    <div className="fixed top-40 bg-white text-[#424242] left-16 w-64 shadow-lg h-[calc(100%-56px)] p-4 w-[183px] border-r border-t border-[#e0e0e0] font-normal">
      {/* Group Title */}
      <div>
        <button
          onClick={() => setGroupOpen(!isGroupOpen)}
          className="flex items-center w-full text-left focus:outline-none"
        >
          {isGroupOpen ? <FaChevronDown /> : <FaChevronRight />}
          <span className="ml-2 font-bold">Group title</span>
        </button>

        {isGroupOpen && (
          <div className="ml-4 mt-2">
            {/* Option 1 */}
            <button
              className="flex items-center w-full text-left focus:outline-none mt-2"
              onClick={() => setOptionOpen(!isOptionOpen)}
            >
              {isOptionOpen ? <FaChevronDown /> : <FaChevronRight />}
              <span className="ml-2">Option</span>
            </button>

            {isOptionOpen && (
              <div className="ml-4 mt-2">
                {/* Items in Option 1 */}
                <div className="flex items-center">
                  <FaChevronRight className="text-gray-400" />
                  <span className="ml-2">Item</span>
                </div>
                <div className="flex items-center mt-2">
                  <FaChevronRight className="text-gray-400" />
                  <span className="ml-2">Item</span>
                </div>
                <div className="flex items-center mt-2">
                  <FaChevronRight className="text-gray-400" />
                  <span className="ml-2">Item</span>
                </div>
                <div className="flex items-center mt-2">
                  <FaChevronRight className="text-gray-400" />
                  <span className="ml-2">Item</span>
                </div>
                <div className="flex items-center mt-2">
                  <FaChevronRight className="text-gray-400" />
                  <span className="ml-2">Item</span>
                </div>
              </div>
            )}

            {/* Option 2 */}
            <div className="flex items-center mt-4">
              <FaChevronRight className="text-gray-400" />
              <span className="ml-2">Option</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Sidebar2;
