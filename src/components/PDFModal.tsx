import React from "react";

import { Box, Dialog, DialogContent, Button } from "@mui/material";

import anexoFinanciamiento from '../assets/Anexo-financiamiento.pdf'

interface PDFModalProps {
    open: boolean;
    handleOpen?: any;
};

export const PDFModal: React.FC<PDFModalProps> = ({ open, handleOpen }) => {

    return (
        <Box justifyContent={'center'} display={'flex'}>
            <Dialog
                open={open}
                fullScreen
                onClose={() => handleOpen(false)}
                sx={{
                    width: '90%',
                    height: '90vh',
                    top: '5%',
                    left: '5%'
                }}
                className='modal-component'>
                <Button
                    sx={{ marginTop: '10px' }}
                    variant="text"
                    onClick={() => handleOpen(false)}>
                    Cerrar
                </Button>

                <DialogContent>
                    <div style={{ position: 'absolute', width: '100%', height: '100%' }}>
                        <object
                            data={anexoFinanciamiento}
                            type="application/pdf"
                            width="100%"
                            height="100%"
                        >
                            pdf del proyecto
                        </object>
                    </div>
                </DialogContent>

            </Dialog>
            <style>{`
                @media screen and (max-width: 800px) {
                    .modal-component {
                        width: 100%,
                        height: 50vh,
                        top: 5px,
                        left: 5px
                    }
                }
            `}</style>
        </Box>
    );
};
