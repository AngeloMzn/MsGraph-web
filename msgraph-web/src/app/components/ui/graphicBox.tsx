'use client';
import { Box } from "@mui/material";

interface GraphicBoxProps {
    children: React.ReactNode;
}

export default function GraphicBox({ children }: GraphicBoxProps) {
    return (
        <>
            <Box sx={{
                border: '1px solid lightgray', borderRadius: '8px',
                width: '100%', maxWidth: '600px', margin: '0 auto', minHeight: '465px', height: '100%',
                display: 'flex', justifyItems: 'center', alignItems: 'center',
                flexDirection: 'column'
            }}>
                {children}
            </Box>
        </>
    );
}