import React from "react";
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Radio from '@material-ui/core/Radio';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import RadioButtonCheckedIcon from '@material-ui/icons/RadioButtonChecked';

const styles = {
    root: {
        flexGrow: 1,
    },
    flex: {
        flex: 1,
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
    radioSize: {
    }
};

export class App extends React.Component {
    render() {

        return (
            <div>
                <AppBar position="static">
                    <Toolbar>
                        <Typography variant="title" color="inherit" className={styles.flex}>
                            My todo list
                        </Typography>
                    </Toolbar>
                    <Radio
                        checked={false}
                        onChange={this.handleChange}
                        value="e"
                        color="default"
                        name="radio-button-demo"
                        aria-label="E"
                        className={styles.radioSize}
                        icon={<RadioButtonUncheckedIcon />}
                        checkedIcon={<RadioButtonCheckedIcon />}
                    />
              </AppBar>
            </div>
        );
    }

    handleChange() {
    } 
}
