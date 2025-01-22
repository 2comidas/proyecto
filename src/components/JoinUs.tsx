import React from "react";

import { Box, Typography } from "@mui/material";

export const JoinUs: React.FC = () => {
    return (
        <Box padding='20px' margin='30px 20px'>

            <Typography
                //fontFamily={'asap'}
                variant="h4"
                component={'h3'} >
                Juntos, Alimentamos el Futuro
            </Typography>

            <Typography
                className=''
                variant="body1"
                component={'p'}>
                Sé parte del cambio.
                Al unirte a Dos Comidas (2C), no solo estás eligiendo comidas saludables y convenientes. Estás formando parte de un movimiento que está redefiniendo el futuro alimentario de Argentina.
                Dos Comidas nace del pueblo y para el pueblo. Es la certeza de que cada día, dos comidas nutritivas estarán al alcance de todos. No es caridad, es dignidad. No es un gasto, es una inversión en nuestro futuro colectivo.
                ¿Listo para Ser Parte de la Revolución?
                No esperes más. Sumate a Dos Comidas hoy y sé parte del cambio que Argentina necesita.
            </Typography>

            <style>{`
                
            `}</style>
        </Box>
    );
};