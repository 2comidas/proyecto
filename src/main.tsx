import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { ThemeProvider } from '@mui/material/styles';

import { theme } from './muitheme';
import { Home } from './containers';




createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <ThemeProvider theme={theme}>
            <Home />
        </ThemeProvider>
    </StrictMode>,
)
