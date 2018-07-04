import React from "react";
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import red from '@material-ui/core/colors/red';
import green from '@material-ui/core/colors/green';
import orange from '@material-ui/core/colors/orange';

const styles = {
    buttonContainer: {
        position: 'fixed',
        bottom: '20 px',
        right: '200 px',
    },
    redButton: {
        position: 'absolute',
        top: '0px',
        left: '0px',
        backgroundColor: red[600],
        '&:hover': {
            backgroundColor: red[800],
        },
    },
    orangeButton: {
        position: 'absolute',
        top: '0px',
        left: '0px',
        backgroundColor: orange[600],
        '&:hover': {
            backgroundColor: orange[800],
        },
    },
    greenButton: {
        position: 'absolute',
        top: '0px',
        left: '0px',
        backgroundColor: green[600],
        '&:hover': {
            backgroundColor: green[800],
        },
    },
    addButton: {
        position: 'absolute',
        top: '0px',
        left: '25px',
    },
};

class ButtonBlock extends React.Component {
    render() {
        const { classes } = this.props; 
        return (
            <div className={classes.buttonContainer}>
                <Button variant="fab" color="primary" aria-label="add button" className={classes.addButton}>
                    <AddIcon />
                </Button>
                <Button variant="fab" aria-label="red button" className={classes.redButton}>
                    {''}  
                </Button>
                <Button variant="fab" aria-label="orange button" className={classes.orangeButton}>
                    {''}  
                </Button>
                <Button variant="fab" aria-label="green button" className={classes.greenButton}>
                    {''}  
                </Button>
            </div>
        );
    }
}

export default withStyles(styles)(ButtonBlock);
