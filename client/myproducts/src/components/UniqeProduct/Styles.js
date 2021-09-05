import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    toolbar: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing(3),
    },
    root: {
        flexGrow: 1,
    },
    root: {
        maxWidth: '100%',
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    cardActions: {
        display: 'flex',
        justifyContent: 'flex-end',
    },
    cardContent: {
        display: 'flex',
        justifyContent: 'space-between',
    },
    pricestyle: {
        fontSize: '15px',
        color: 'blue',
    },
    namestyle: {
        fontSize: '20px',
    },
    ratestyle: {
        fontSize: '15px',
        color: 'pink',
    },
    detailName: {
        color: 'black',
        marginTop: '20px',
        marginBottom: '20px',
        fontFamily: 'Cursive',
    },
    detailMedia: {
        borderRadius: '10px'
    },
    descriptionsty: {
        color: 'gray',
        fontFamily: 'Monospace',
        border: '2px',
        margin: '20px',
    }

}));