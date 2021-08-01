import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';


export default function Title() {
    const useStyles = makeStyles((theme) => ({
        appBar: {
            position: 'relative',
        }
    }))
    const classes = useStyles();
    return (
        <AppBar position="absolute" color="default" className={classes.appBar}>
            <Toolbar>
                <Typography variant="h6" color="inherit" noWrap>
                    Co-Op Coding Challenge - Zendesk Ticket Viewer.
          </Typography>
            </Toolbar>
        </AppBar>
    );
}