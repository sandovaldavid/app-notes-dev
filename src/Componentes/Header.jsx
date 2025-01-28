import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { StickyNote2 } from '@mui/icons-material';
import './Header.css';
export default function Header() {
  return (

        <AppBar >
            <Toolbar >
                <StickyNote2 sx={{mr : 2}}/>
                <Typography variant='h6' component="div" sx={{flexGrow : 1}}>
                    Crear Notas
                </Typography>
            </Toolbar>
        </AppBar>

    
  );
}