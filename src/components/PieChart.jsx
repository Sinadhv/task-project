import { ResponsivePie } from '@nivo/pie';

const PieChart = () => {
  const data = [
    { id: 'JavaScript', value: 29 },
    { id: 'Python', value: 45 },
    { id: 'Java', value: 15 },
  ];

  return (
    <div className=" flex items-center justify-center ">
      <div style={{ height: '290px', width: '400px' }}>
        <ResponsivePie
          data={data}
          margin={{ top: 20, right: 80, bottom: 80, left: 80 }}
          innerRadius={0.5}
          padAngle={0.7}
          cornerRadius={3}
          colors={{ scheme: 'nivo' }}
          borderWidth={1}
          borderColor={{ from: 'color', modifiers: [['darker', 0.2]] }}
          radialLabelsSkipAngle={10}
          radialLabelsTextXOffset={6}
          radialLabelsTextColor="#333333"
          radialLabelsLinkColor={{ from: 'color' }}
          sliceLabelsSkipAngle={10}
          sliceLabelsTextColor="#333333"
        />
      </div>
    </div>
  );
};

export default PieChart;
