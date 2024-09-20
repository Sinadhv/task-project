import { useState, useEffect } from 'react';


import AppHeader from './components/AppHeader';
import Dashboard from './components/Dashboard';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Sidebar2 from './components/Sidebar2';
import Toolbar from './components/Toolbar';
import MobileUi from './components/MobileUi';




const App = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 600);

  // این effect سایز صفحه را هنگام تغییر بروزرسانی می‌کند
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 600);
    };

    window.addEventListener('resize', handleResize);

    // Clean up listener to avoid memory leaks
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div>
      {isMobile ? (
        // نمایش کامپوننت موبایل
        <MobileUi />
      ) : (
        // نمایش کامپوننت دسکتاپ
        <>
       <Navbar />
        <Sidebar/>
          <AppHeader/>
            <Toolbar/>
              <Sidebar2/>
                <Dashboard/>
        </>
      )}
    </div>
  );
};

export default App;
