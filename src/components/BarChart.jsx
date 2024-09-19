import { ResponsiveBar } from '@nivo/bar';

const BarChart = () => {
  const data = [
    { category: 'Jan', value1: 40, value2: 30 },
    { category: 'Feb', value1: 50, value2: 20 },
    { category: 'Mar', value1: 60, value2: 90 },
  ];

  return (
    <div className="w-full h-full flex items-center justify-center">
      <div style={{ height: '290px', width: '400px' }}>
        <ResponsiveBar
          data={data}
          keys={['value1', 'value2']}
          indexBy="category"
          margin={{ top: 20, right: 20, bottom: 50, left: 60 }}
          padding={0.3}
          valueScale={{ type: 'linear' }}
          indexScale={{ type: 'band', round: true }}
          colors={{ scheme: 'nivo' }}
          axisBottom={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'Category',
            legendPosition: 'middle',
            legendOffset: 32,
          }}
          axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'Value',
            legendPosition: 'middle',
            legendOffset: -40,
          }}
        />
      </div>
    </div>
  );
};

export default BarChart;
