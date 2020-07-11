import React from 'react';
import {
    Link
} from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    navBar: {
        backgroundColor: '#202020'
    },
    title: {
        flexGrow: 1,
    },
}));

const NavBar = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <AppBar className={classes.navBar} position="static">
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        NTUEE Course System
                    </Typography>
                    {/* <Typography variant="h6" className={classes.title}>
                        <Link to='/course/123'>course</Link>
                    </Typography> */}
                    <Button color="inherit" component={Link}>login</Button>
                </Toolbar>
            </AppBar>
        </div>
    )

}

export default NavBar;