'use client'
import * as React from 'react';
import { PieChart } from '@mui/x-charts/PieChart';
import { Box } from '@mui/material';
import GraphicBox from '../ui/graphicBox';



interface Data {
    data: { id: string, value: number }[];
    title?: string;
}

export default function PieActiveArc({ data, title }: Data) {
    console.log('Rendering PieActiveArc with data:', data);
    const totalValue = data.reduce((acc, item) => acc + item.value, 0);
    const valueFormatter = (item: { value: number }) => `${((item.value / totalValue) * 100).toFixed(2)}%`;
    return (
        <GraphicBox>
            {title && <h2 className='text-2xl text-center'>Famílias por {title}</h2>}
            <PieChart
                series={[
                    {
                        data: data.map(item => ({ label: item.id, value: item.value })),
                        highlightScope: { fade: 'global', highlight: 'item' },
                        faded: { innerRadius: 30, additionalRadius: -30, color: 'gray' },
                        valueFormatter,
                    },
                ]}
                height={200}
                width={600}
                sx={{ display: 'flex', justifyContent: 'center', padding: '0px 20px' }}
            />
        </GraphicBox>

    );
}

