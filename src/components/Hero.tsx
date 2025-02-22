import React, { useState } from "react";

import { Box, ButtonGroup, Divider, IconButton, SvgIcon, Typography, Button } from "@mui/material";
import YouTubeIcon from '@mui/icons-material/YouTube';

import Logo2C from '../assets/doscomidas-logo-blanco.svg'
import { PDFModal } from '../components';
import { SocialMediaURL } from '../lib';


export const Hero: React.FC = () => {
    const [openModal, setOpenModal] = useState<boolean>(false);

    const socialMediaRedirect = (url: string): void => {
        window.open(url, '_blank');
    };

    return (
        <Box
            className='hero-content-container'
            sx={{
                height: 'auto',
                width: '100vw',
                backgroundColor: '#32BBEC',
                margin: '-10px 0px 0px -8px',
                paddingBottom: '20px'
            }}
        >
            <Box justifyContent={'center'} display={'flex'} paddingTop={'50px'}>
                <Box className='logo floating container' borderColor={'#F7F9FA'}
                    borderRadius={100}>
                    <img src={Logo2C} />
                </Box>
            </Box>

            <Typography
                fontWeight={700}
                variant="h2"
                color="primary.contrastText"
                align="center"
                component={'h1'} >
                dos domidas
            </Typography>

            {/* Una Revolución en Tu Mesa y en Tu Comunidad */}
            <Typography
                className='hero-text'
                variant="h5"
                color="primary.contrastText"
                align="center"
                component={'h2'}>
                Más que comida, La liberacion Humana.
                <br />Estamos creando un nuevo paradigma donde el hambre deja de existir. Cada comida transforma,
                cada plato abre caminos. Damos vida, fuerza y oportunidades a cada ser humano, impulsando una
                realidad en la que todos crecen y viven plenamente.
            </Typography>

            <Box
                justifyContent={'center'}
                display={'flex'}
                marginTop={'15px'}
            >
                <Button
                    variant="contained"
                    color="secondary"
                    onClick={() => setOpenModal(true)}>
                    Ver pdf del proyecto
                </Button>
            </Box>

            <Typography
                margin='20px 0px 0px 0px'
                fontWeight={700}
                variant="h5"
                color="primary.contrastText"
                align="center"
                component={'p'} >
                Nuestras redes
            </Typography>

            <Box justifyContent='center' display='flex' color='primary.contrastText'>
                <ButtonGroup color='inherit' variant="text" size="large" aria-label="redes sociales">

                    <IconButton aria-label="delete" color='inherit'
                        onClick={() => socialMediaRedirect(SocialMediaURL.YOUTUBE)}>
                        <YouTubeIcon sx={{ fontSize: '2em' }} />
                    </IconButton>

                    <Divider color='inherit' orientation="vertical" variant="middle" className="divider-button-group" flexItem />

                    <IconButton aria-label="delete" color='inherit'
                        onClick={() => socialMediaRedirect(SocialMediaURL.TIKTOK)}>
                        <SvgIcon sx={{ fontSize: '1.5em' }}>
                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0,0,256,256">
                                <g fill="#F7F9FA" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none"><g transform="scale(5.12,5.12)"><path d="M41,4h-32c-2.757,0 -5,2.243 -5,5v32c0,2.757 2.243,5 5,5h32c2.757,0 5,-2.243 5,-5v-32c0,-2.757 -2.243,-5 -5,-5zM37.006,22.323c-0.227,0.021 -0.457,0.035 -0.69,0.035c-2.623,0 -4.928,-1.349 -6.269,-3.388c0,5.349 0,11.435 0,11.537c0,4.709 -3.818,8.527 -8.527,8.527c-4.709,0 -8.527,-3.818 -8.527,-8.527c0,-4.709 3.818,-8.527 8.527,-8.527c0.178,0 0.352,0.016 0.527,0.027v4.202c-0.175,-0.021 -0.347,-0.053 -0.527,-0.053c-2.404,0 -4.352,1.948 -4.352,4.352c0,2.404 1.948,4.352 4.352,4.352c2.404,0 4.527,-1.894 4.527,-4.298c0,-0.095 0.042,-19.594 0.042,-19.594h4.016c0.378,3.591 3.277,6.425 6.901,6.685z"></path></g></g>
                            </svg>
                        </SvgIcon>
                    </IconButton>

                </ButtonGroup>
            </Box>

            <PDFModal open={openModal} handleOpen={setOpenModal} />

            <style>{`
                .container {
                    border: 14px solid #F7F9FA;
                    justify-content: center;
                    padding: 60px;
                    display:flex;
                }

                .hero-text {
                    margin-top:25px;
                    padding: 0px 20px;
                }
                
                @media screen and (min-width: 800px) {
                    .hero-text {
                        padding: 0px 20vw;
                    }
                }

                .logo {
                    width: 200px;
                    height: 200px;
                    margin-bottom: 2rem;
                    }

                @keyframes float {
                    0% { transform: translateY(0px); }
                    50% { transform: translateY(-10px); }
                    100% { transform: translateY(0px); }
                }
                .floating {
                    animation: float 3s ease-in-out infinite;
                }
                .divider-button-group  {
                    margin-left: 20px;
                    margin-right: 20px;
                    background-color:white;
                    height: 70%;
                }
            `}</style>
        </Box>
    );
};
