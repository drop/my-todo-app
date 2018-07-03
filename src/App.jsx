import React from "react";
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import IconButton from '@material-ui/core/IconButton';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import ImportanceSelector from './components/ImportanceSelector';

const styles = {
    flex: {
        flex: 1,
        color: '#fff',
    },
    button: {
        position: 'fixed',
        bottom: '1.5em',
        right: '1.5em',
    },
    textField: {
        color: '#fff',
    },
};

class App extends React.Component {
    render() {
        const { classes } = this.props; 
        return (
            <div>
                <AppBar position="static">
                    <Toolbar>
                        <Typography variant="title" className={classes.flex}>
                            <TextField
                                fullWidth
                                id="todo"
                                label="To do"
                                className={classes.textField}
                                onChange={this.handleInputText}
                            />
                        </Typography>

                        <ImportanceSelector />
                    </Toolbar>
                </AppBar>
                <Button variant="fab" color="primary" aria-label="add" className={classes.button}>
                    <AddIcon />
                </Button>
            </div>
        );
    }

    handleInputText() {
        console.log(this);
    }

}

export default withStyles(styles)(App);
