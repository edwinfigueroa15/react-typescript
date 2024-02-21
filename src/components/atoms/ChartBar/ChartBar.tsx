import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { useNavigate } from 'react-router-dom';

const ChartBar = ({ data }: any) => {
  const navigate = useNavigate();

  const handleBarClick = (bar: any) => {
    navigate('/', { state: { type: bar.name } });
  };

  return (
    <BarChart
      width={800}
      height={500}
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5,
      }}
      barSize={20}
    >
      <XAxis dataKey="name" scale="point" padding={{ left: 10, right: 10 }} />
      <YAxis />
      <Tooltip />
      <Legend />
      <CartesianGrid strokeDasharray="3 3" />
      <Bar dataKey="value" fill="#8884d8" background={{ fill: '#eee' }} onClick={handleBarClick} />
    </BarChart>
  );
};

export default ChartBar;
