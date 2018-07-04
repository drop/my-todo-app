import React from "react";
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import red from '@material-ui/core/colors/red';
import green from '@material-ui/core/colors/green';
import orange from '@material-ui/core/colors/orange';

const styles = {
    buttonContainer: {
        position: 'fixed',
        bottom: '4em',
        right: '17em',
    },
    redButton: {
        position: 'absolute',
        right: '0em',
        backgroundColor: red[600],
        '&:hover': {
            backgroundColor: red[800],
        },
    },
    orangeButton: {
        position: 'absolute',
        left: '0.6em',
        backgroundColor: orange[600],
        '&:hover': {
            backgroundColor: orange[800],
        },
    },
    greenButton: {
        position: 'absolute',
        left: '5.16em',
        backgroundColor: green[600],
        '&:hover': {
            backgroundColor: green[800],
        },
    },
    orderButton: {
        position: 'absolute',
        left: '9.64em',
    },
    addButton: {
        position: 'absolute',
        left: '14.2em',
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
                <Button variant="fab" color="primary" aria-label="add button" className={classes.orderButton}>
                    <ExpandLess />
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
