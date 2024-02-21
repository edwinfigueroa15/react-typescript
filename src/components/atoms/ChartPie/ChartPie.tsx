import { PieChart, Pie, Tooltip } from 'recharts';
import { useNavigate } from 'react-router-dom';

const ChartPie = ({ data }: any) => {
  const navigate = useNavigate();

  const handlePieClick = (data: any) => {
    navigate('/', { state: { type: data.name } });
  };

  return (
    <PieChart width={500} height={500}>
      <Pie
        dataKey="value"
        isAnimationActive={false}
        data={data}
        cx={250}
        cy={250}
        outerRadius={200}
        onClick={handlePieClick}
        fill="#8884d8"
        label
      />
      <Tooltip />
    </PieChart>
  );
};

export default ChartPie;
