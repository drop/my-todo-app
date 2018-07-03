import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import RadioButtonCheckedIcon from '@material-ui/icons/RadioButtonChecked';
import red from '@material-ui/core/colors/red';
import green from '@material-ui/core/colors/green';
import orange from '@material-ui/core/colors/orange';

const styles = {
    radioSize: {
    },
    root: {
        color: green[600],
        '&$checked': {
            color: green[500],
        },
    },
    checked: {},
    green: {
        color: green[600],
        '&$checked': {
            color: green[500],
        },
    },
    orange: {
        color: orange[600],
        '&$checked': {
            color: orange[500],
        },
    },
    red: {
        color: red[600],
        '&$checked': {
            color: red[500],
        },
    }
};

export class ImportanceSelector extends React.Component {

    render() {
        const { classes } = this.props; 
        return (
            <div>
                <Radio
                    checked={false}
                    onChange={this.handleChange}
                    value="1"
                    name="red"
                    aria-label="Red radio button."
                    icon={<RadioButtonUncheckedIcon />}
                    checkedIcon={<RadioButtonCheckedIcon />}
                    classes={{
                        root: classes.red,
                        checked: classes.checked,
                    }}
                />
                <Radio
                    checked={false}
                    onChange={this.handleChange}
                    value="2"
                    name="orange"
                    aria-label="Orange radio button."
                    icon={<RadioButtonUncheckedIcon />}
                    checkedIcon={<RadioButtonCheckedIcon />}
                    classes={{
                        root: classes.orange,
                        checked: classes.checked,
                    }}
                />
                <Radio
                    checked={false}
                    onChange={this.handleChange}
                    value="3"
                    name="green"
                    aria-label="Green radio button."
                    icon={<RadioButtonUncheckedIcon />}
                    checkedIcon={<RadioButtonCheckedIcon />}
                    classes={{
                        root: classes.green,
                        checked: classes.checked,
                    }}

                />

            </div>
        );
    }

    handleChange(event) {
        console.log(this.name);
    } 
}

export default withStyles(styles)(ImportanceSelector);
