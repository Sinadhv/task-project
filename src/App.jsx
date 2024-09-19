
import AppHeader from './components/AppHeader';
import Dashboard from './components/Dashboard';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Sidebar2 from './components/Sidebar2';
import Toolbar from './components/Toolbar';


const App = () => {
  return (
   <>
        <Navbar />
        <Sidebar/>
        <AppHeader/>
        <Toolbar/>
        <Sidebar2/>
        <Dashboard/>
        </>
  )
};

export default App;
