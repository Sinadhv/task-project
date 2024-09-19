import BarChart from './BarChart';  // نمودار میله‌ای
import LineChart from './LineChart'; // نمودار خطی
import PieChart from './PieChart';   // نمودار دایره‌ای
import ChartCard from './ChartCard'; // کارت برای نمایش نمودار

const Dashboard = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 ml-[250px] mt-[150px]">
      {/* Bar Chart */}
      <ChartCard title="Bar Chart">
        <BarChart />
      </ChartCard>


      {/* Pie Chart */}
      <ChartCard title="Pie Chart">
        <PieChart />
      </ChartCard>


        {/* Line Chart */}
        <ChartCard title="Line Chart">
        <LineChart />
      </ChartCard>

       {/* Bar Chart */}
       <ChartCard title="Bar Chart">
        <BarChart />
      </ChartCard>


      {/* Pie Chart */}
      <ChartCard title="Pie Chart">
        <PieChart />
      </ChartCard>


        {/* Line Chart */}
        <ChartCard title="Line Chart">
        <LineChart />
      </ChartCard>
    </div>
  );
};

export default Dashboard;
