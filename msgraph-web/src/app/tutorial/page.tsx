'use client';
import { useState } from 'react';
import Filter1Icon from '@mui/icons-material/Filter1';
import Filter2Icon from '@mui/icons-material/Filter2';
import PrimeiraSecao from '../components/tutorial/primeiraSecao';
import SegundaSecao from '../components/tutorial/segundaSecao';
export default function tutorial() {
    
    const [tutorialSection, setTutorialSection] = useState(1);

    function toggleTutorial(section: number){
        
        setTutorialSection(section);

    }

    
    return (<>
        <div className='flex'>
            <aside className="border border-gray-400 w-60 h-svh">
                <div className="border border-gray-400 flex items-center justify-center">
                    <h1 className="text-2xl">Tutorial</h1>
                </div>
                <ul className="fle">
                    <li onClick={() => toggleTutorial(1)} className="pl-2 border border-gray-400 cursor-pointer hover:bg-gray-200"><span><Filter1Icon sx={{ paddingRight: '1px' }} /> Como usar os gráficos?</span></li>
                    <li onClick={() => toggleTutorial(2)} className="pl-2 border border-gray-400 cursor-pointer hover:bg-gray-200"><Filter2Icon sx={{ paddingRight: '1px' }} /> Qual indicador devo usar ?</li>
                </ul>
            </aside>
            {
                tutorialSection === 1 ? <PrimeiraSecao /> 
                : tutorialSection === 2 ? <SegundaSecao /> :
                <PrimeiraSecao />
                
            }
            
        </div>
    </>)
}