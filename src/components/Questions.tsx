import React from "react";

import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Typography,
    Box
} from "@mui/material";
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

import { questions } from '../lib';

export const Questions: React.FC = () => {
    const [expanded, setExpanded] = React.useState<number | false>();

    const handleChange = (panel: number) => (event: React.SyntheticEvent, newExpanded: boolean) => {
        setExpanded(newExpanded ? panel : false);
        return event;
    };

    return (
        <Box padding='20px' margin='30px 20px 200px 20px'>

            <Typography
                component="h2"
                variant='h5'
                margin={'0px 0px 30px 0px'}>
                Preguntas frecuentes
            </Typography>

            {questions.map(i => {
                return (
                    <Accordion expanded={expanded === i.panel} onChange={handleChange(i.panel)}>

                        <AccordionSummary aria-controls={`panel${i.panel}d-content`} id={`panel${i.panel}d-content`}>
                            <Typography
                                component="span"
                                sx={{ fontSize: '1.5em' }}
                            >
                                {i.question}
                            </Typography>
                        </AccordionSummary>

                        <AccordionDetails>
                            <Typography>{i.response}</Typography>

                            {i.items && i.items.length > 0 &&
                                <List>
                                    {i.items.map((i, ix) => {
                                        return (
                                            <ListItem key={ix}>
                                                <ListItemIcon>
                                                    <ArrowRightIcon />
                                                </ListItemIcon>
                                                <ListItemText
                                                    primary={i}
                                                />
                                            </ListItem>
                                        )
                                    }
                                    )}
                                </List>
                            }

                            {i.additionalText && <Typography>{i.additionalText}</Typography>}
                        </AccordionDetails>
                    </Accordion>

                )
            })}

        </Box>
    );
};