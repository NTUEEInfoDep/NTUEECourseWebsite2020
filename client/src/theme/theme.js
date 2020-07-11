import {
    createMuiTheme
} from '@material-ui/core/styles';

const theme = createMuiTheme({
    palette: {
        type: 'dark',
        primary: {
            light: '#534bae',
            main: '#202020',
            dark: '#202020',
            contrastText: '#fff',
        },
        secondary: {
            light: '#63a4ff',
            main: '#bbe1fa',
            dark: '#bbe1fa',
            contrastText: '#fff',
        },
        background: {
            default: '#121212',
        }
    },
});

export default theme