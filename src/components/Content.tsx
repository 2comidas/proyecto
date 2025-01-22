import React from "react";

import { Grid2, Card, CardContent, Typography, Box } from "@mui/material";


import { cards } from "../lib";

export const Content: React.FC = () => {
    return (
        <Grid2 padding='20px' margin='30px 20px 0px 20px'
            container spacing={6}
            justifyContent={'center'}>
            {cards.map(i => {
                return (
                    <Grid2 size={{ xs: 12, sm: 10, md: 6, lg: 5 }}>
                        <Card key={i.id} sx={{ height: '100%' }}>
                            <CardContent>
                                {i.icon &&
                                    <Box
                                        justifyContent={'center'}
                                        display={'flex'}
                                        margin={'15px 0px 20px 0px'}>
                                        {i.icon}
                                    </Box>
                                }

                                <Typography
                                    variant="h5"
                                    align="center"
                                    component={'h3'}
                                    marginBottom={'15px'}>
                                    {i.title}
                                </Typography>

                                <Typography
                                    variant="body1"
                                    component={'p'}>
                                    {i.content}
                                </Typography>

                            </CardContent>
                        </Card>
                    </Grid2>
                )
            })}
        </Grid2>
    );
};