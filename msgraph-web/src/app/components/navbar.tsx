"use client";
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Box, Button } from '@mui/material';
import { useRouter } from 'next/navigation';

const pages = ['inicio', 'sobre', 'tutorial', 'gráficos'];

export default function Navbar() {
    const router = useRouter();

    function register() {
        router.push('/register');
    }

    function login() {
        router.push('/login');
    }

    const goto = (page: string) => {
        let route = '';
        switch (page) {
            case 'inicio':
                route = '/';
                break;
            case 'sobre':
                route = '/aboutUs';
                break;
            case 'tutorial':
                route = '/tutorial';
                break;
            default:
                route = '/graph';
                break;
        }
        router.push(route);
    };

  return (
    <AppBar sx={{ backgroundColor: 'white' }} position="static">
      <div className='mx-2'>
        <Toolbar className='w-100' disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              width: '50px',
              height: '50px',
              paddingTop: '10px',
              paddingLeft: '2px',
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              borderRadius: '5%',
              color: 'inherit',
              textDecoration: 'none',
              backgroundColor: 'black',
            }}
          >
            MSG
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                {pages.map((page) => (
                    <Button
                        key={page}
                        onClick={() => goto(page)}
                        sx={{ my: 2, color: 'black', display: 'block' }}
                    >
                        {page}
                    </Button>
                ))}
            </Box>
            <Button color="inherit" onClick={register}>Registrar</Button>
            <Button color="inherit" onClick={login}>Login</Button>
        </Toolbar>
      </div>
    </AppBar>
  );
}
