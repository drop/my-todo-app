import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper'; 
import Button from '@material-ui/core/Button'; 
import Delete from '@material-ui/icons/Delete'; 
import Done from '@material-ui/icons/Done'; 
import red from '@material-ui/core/colors/red';
import green from '@material-ui/core/colors/green';
import orange from '@material-ui/core/colors/orange';

const styles = {
    redPaper: {
        backgroundColor: red[200],
        margin: '0.5em 0',
    },
    orangePaper: {
        backgroundColor: orange[200],
        margin: '0.5em 0',
    },
    greenPaper: {
        backgroundColor: green[200],
        margin: '0.5em 0',
    },
    redButton: {
        backgroundColor: red[300],
        '&:hover': {
            backgroundColor: red[400],
        },
    },
    orangeButton: {
        backgroundColor: orange[300],
        '&:hover': {
            backgroundColor: orange[400],
        },
    },
    greenButton: {
        backgroundColor: green[300],
        '&:hover': {
            backgroundColor: green[400],
        },
    },
    todoContent: {
        display: 'inline',
        margin: '0 0.3em',
        height: '50px',
        overflowY: 'hidden',
    },
    todoContentDone: {
        //composes: ['$todoContent'],
        display: 'inline',
        margin: '0 0.3em',
        height: '50px',
        overflowY: 'hidden',
        textDecoration: 'line-through',
    },
    btnBlock: {
        margin: '5px',
    },
};

class TodoSticker extends React.Component {
    render() {
        const { classes, todo, onDone, onDelete } = this.props; 
        const contentClass = todo.done ?
            classes.todoContentDone :
            classes.todoContent;
        const btnClass = classes[todo.color + 'Button'];
        const paperClass = classes[todo.color + 'Paper'];
        return (
            <div>
                <Paper className={paperClass} elevation={1}>
                    <div className={classes.btnBlock} style={{float: 'left'}}>
                        <Button variant="fab" aria-label="done"
                            mini
                            onClick={() => {onDone()}}
                            className={btnClass}>
                            <Done />
                        </Button>
                        <Button variant="fab" aria-label="delete"
                            mini
                            onClick={() => {onDelete()}}
                            className={btnClass}>
                            <Delete />
                        </Button>
                    </div>
                    <div className={contentClass}>
                        <Typography component="span">
                            {todo.text}
                        </Typography>
                    </div>
                </Paper>
            </div>
        );
    }

}

export default withStyles(styles)(TodoSticker);
