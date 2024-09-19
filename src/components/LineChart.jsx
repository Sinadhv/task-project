import { ResponsiveLine } from '@nivo/line';

const LineChart = () => {
  const data = [
    {
      id: 'Line 1',
      data: [
        { x: 'Jan', y: 40 },
        { x: 'Feb', y: 30 },
        { x: 'Mar', y: 50 },
      ],
    },
    {
      id: 'Line 2',
      data: [
        { x: 'Jan', y: 30 },
        { x: 'Feb', y: 20 },
        { x: 'Mar', y: 40 },
      ],
    },
  ];

  return (
    <div className=" flex items-center justify-center">
      <div style={{ height: '170px', width: '400px' }}>
        <ResponsiveLine
          data={data}
          margin={{ top: 0, right: 20, bottom: 0, left: 60 }}
          xScale={{ type: 'point' }}
          yScale={{ type: 'linear', min: 'auto', max: 'auto', stacked: true }}
          axisBottom={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'X-axis',
            legendPosition: 'middle',
            legendOffset: 36,
          }}
          axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'Y-axis',
            legendPosition: 'middle',
            legendOffset: -40,
          }}
          colors={{ scheme: 'nivo' }}
          pointSize={10}
          pointColor={{ theme: 'background' }}
          pointBorderWidth={2}
          pointBorderColor={{ from: 'serieColor' }}
          pointLabelYOffset={-12}
        />
      </div>
    </div>
  );
};

export default LineChart;
