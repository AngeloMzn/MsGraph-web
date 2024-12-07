'use client'
import React, { useState } from 'react';
import axios from 'axios';
import PieActiveArc from "../components/graphics/pizza";
import { BarChart } from '@mui/x-charts';
import LineGraphic from '../components/graphics/lineChart';

export default function Graficos() {
    type Data = any;
    const [data, setData] = useState<Data | null>(null);
    const [loading, setLoading] = useState(false);
    const [selectedRoute, setSelectedRoute] = useState('');

    const routes = [
        { label: 'Raça', path: '/familia/raca' },
        { label: 'Saneamento', path: '/familia/saneamento' },
        { label: 'Faixa Etária', path: '/familia/faixaEtaria' },
        { label: 'Moradia', path: '/familia/moradia' },
        { label: 'Serviços Sociais', path: '/familia/servicosSociais' },
        { label: 'Benefícios', path: '/familia/beneficios' },
        { label: 'Vulnerabilidade', path: '/familia/vulnerabilidade' },
        { label: 'Gênero Chefe Família', path: '/familia/generoChefeFamilia' },
        { label: 'Renda', path: '/familia/renda' },
        { label: 'Trabalho Infantil', path: '/familia/trabalhoInfantil' }
    ];

    const fetchData = async (path: string): Promise<void> => {
        setLoading(true);
        try {
            const response = await axios.get<Data>(path);
            const transformedData = Object.entries(response.data[0]).map(([key, value]) => ({
                id: key,
                value: Number(value)
            }));
            setData(transformedData);
        } catch (error) {
            console.error('Error fetching data', error);
        } finally {
            setLoading(false);
        }
    };

    const getTitle = (path: string): string => {
        const route = routes.find(route => route.path === path);
        return route ? route.label : '';
    };

    const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>): void => {
        const selectedPath: string = event.target.value;
        setSelectedRoute(selectedPath);
        fetchData("http://localhost:3001" + selectedPath);
    };

    return (
        <div>
            <select value={selectedRoute} onChange={handleSelectChange} style={{ marginBottom: '20px', padding: '10px', fontSize: '16px' }}>
            <option value="" disabled>Select a route</option>
            {routes.map((route: { label: string; path: string }) => (
                <option key={route.path} value={route.path}>{route.label}</option>
            ))}
            </select>

            {loading && <div>Loading...</div>}
            {data && (
            selectedRoute === '/familia/trabalhoInfantil' || 
            selectedRoute === '/familia/vulnerabilidade' || 
            selectedRoute === '/familia/servicosSociais' ? (
                <LineGraphic data={data.map((item: { id: string; value: number }, index: number) => ({ x: index + 1, y: item.value }))} title={getTitle(selectedRoute)} />

            ) : (
                <PieActiveArc data={data} title={getTitle(selectedRoute)} />
            )
            )}
        </div>
    );
}