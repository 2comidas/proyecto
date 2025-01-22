import DinnerDiningIcon from '@mui/icons-material/DinnerDining';
import TouchAppIcon from '@mui/icons-material/TouchApp';
import GroupsIcon from '@mui/icons-material/Groups';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';

interface CardInformation {
    id: number;
    icon?: JSX.Element;
    title: string;
    content: string;
};

export const cards: CardInformation[] =
    [
        {
            id: 1,
            icon: <DinnerDiningIcon color="primary" sx={{ fontSize: '3em' }} />,
            title: 'Alimentación garantizada',
            content: 'Por el solo hecho de trabajar, los ciudadanos tienen derecho (y de manera opcional) a dos comidas diarias, nutritivas y de calidad. Los nioñs, personas de capacidad reducida y ancianos, las recibirán de manera incondicional.'
        }, {
            id: 2,
            icon: <TouchAppIcon color="primary" sx={{ fontSize: '3em' }} />,
            title: 'Plataforma digital',
            content: 'App móvil y página web para facilitar el acceso.'
        }, {
            id: 3,
            icon: <GroupsIcon color="primary" sx={{ fontSize: '3em' }} />,
            title: 'Impacto social',
            content: 'Generación de empleos, reducción de enfermedades y motor de crecimiento económico. No se trata de una renta básica universal, de asistencialismo, ni donaciones. El financiamiento se logra mediante una eficiente redistribución de las partidas presupuestarias del estado.'
        }, {
            id: 4,
            icon: <EmojiEmotionsIcon color="primary" sx={{ fontSize: '3em' }} />,
            title: 'Un futuro sin hambre',
            content: '¿Alguna vez soñaste con un mundo donde nadie tenga que preocuparse por su próxima comida? Bienvenido a "Proyecto Dos Comidas", el proyecto revolucionario que transformaría la Argentina. Es más que una App, es un movimiento. "Dos Comidas" no es solo una aplicación de comida más, es un puente digital que una a familias ocupadas, amantes de la salud y miembros de la comunidad con una nutrición de calidad y un sentido de pertenencia.'
        },
    ]

