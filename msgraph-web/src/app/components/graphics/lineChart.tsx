import * as React from 'react';
import { LineChart } from '@mui/x-charts/LineChart';
import GraphicBox from '../ui/graphicBox';

interface LineGraphicProps {
  data: { x: number, y: number }[];
  title?: string;
}

export default function LineGraphic({ data, title }: LineGraphicProps) {
  const xAxisData = data.map(item => item.x);
  const seriesData = data.map(item => item.y);

  return (
    <GraphicBox>
      {title && <h2 className='text-2xl text-center'>{title}</h2>}
      <LineChart
        xAxis={[{ data: xAxisData }]}
        series={[{ data: seriesData, area: true }]}
        width={500}
        height={300}
      />
    </GraphicBox>
  );
}