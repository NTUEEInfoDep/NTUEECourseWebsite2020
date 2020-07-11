import {
    createMuiTheme
} from '@material-ui/core/styles';

const theme = createMuiTheme({
    palette: {
        primary: {
            light: '#534bae',
            main: '#1a237e',
            dark: '#000051',
            contrastText: '#fff',
        },
        secondary: {
            light: '#63a4ff',
            main: '#1976d2',
            dark: '#004ba0',
            contrastText: '#fff',
        },
    },
});

export default theme