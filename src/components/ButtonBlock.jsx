import React from "react";
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
/*icons*/
import AddIcon from '@material-ui/icons/Add';
import PlaylistAddCheck from '@material-ui/icons/PlaylistAddCheck';
import List from '@material-ui/icons/List';
import ViewHeadline from '@material-ui/icons/ViewHeadline';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
/*colors*/
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
    doneButton: {
        position: 'absolute',
        left: '9.65em',
    },
    orderButton: {
        position: 'absolute',
        left: '14.15em',
    },
};

class ButtonBlock extends React.Component {
    render() {
        const { classes } = this.props; 
        return (
            <div className={classes.buttonContainer}>
                <Button variant="fab" aria-label="red button"
                    onClick={this.handleRedBtnClick}
                    className={classes.redButton}>
                    <Visibility />  
                </Button>
                <Button variant="fab" aria-label="orange button"
                    onClick={this.handleOrangeBtnClick}
                    className={classes.orangeButton}>
                    <VisibilityOff />  
                </Button>
                <Button variant="fab" aria-label="green button"
                    onClick={this.handleGreenBtnClick}
                    className={classes.greenButton}>
                    <VisibilityOff />  
                </Button>
                <Button variant="fab" color="primary" aria-label="done filter button"
                        onClick={this.handleDoneBtnClick}
                        className={classes.doneButton}>
                    <PlaylistAddCheck />
                </Button>
                <Button variant="fab" color="primary" aria-label="add button"
                        onClick={this.handleOrderBtnClick}
                        className={classes.orderButton}>
                    <ExpandLess />
                </Button>
            </div>
        );
    }

    handleRedBtnClick() {
        console.log('red');
    }

    handleOrangeBtnClick() {
        console.log('orange');
    }

    handleGreenBtnClick() {
        console.log('green');
    }

    handleDoneBtnClick() {
        console.log('view done');
    }

    handleOrderBtnClick() {
        console.log('order');
    }
}

export default withStyles(styles)(ButtonBlock);
