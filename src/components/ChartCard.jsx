import PropTypes from 'prop-types';

const ChartCard = ({ title, children }) => {
  return (
    <div className="bg-white shadow-md rounded-lg text-[#424242]" style={{ maxHeight: '290px', maxWidth:'400px'}}>
      <h3 className="text-lg font-semibold mb-4">{title}</h3>
      <div className="h-full">
        {children}
      </div>
    </div>
  );
};



// تعریف نوع props ها
ChartCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default ChartCard;
