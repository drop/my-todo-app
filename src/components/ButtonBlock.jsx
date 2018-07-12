import React from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import PlaylistAddCheck from '@material-ui/icons/PlaylistAddCheck';
import List from '@material-ui/icons/List';
import ViewHeadline from '@material-ui/icons/ViewHeadline';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import red from '@material-ui/core/colors/red';
import green from '@material-ui/core/colors/green';
import orange from '@material-ui/core/colors/orange';
import { setStickerColor, setColorFilter, setDoneFilter,
    setAscOrder, setTodoText } from '../store/actions/ui';
import { ImportanceColors } from '../components/ImportanceSelector';
import { ViewFilter } from '../store/state';

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
        const { ascOrder, classes, greenVisible,
            orangeVisible, redVisible, setAscOrder,
            setColorFilter, setDoneFilter, viewDone } = this.props; 
        return (
            <div className={classes.buttonContainer}>
                <Button variant="fab" aria-label="red button"
                    onClick={() => {setColorFilter(ImportanceColors.RED)}}
                    className={classes.redButton}>
                    {redVisible ? <Visibility /> : <VisibilityOff />}
                </Button>
                <Button variant="fab" aria-label="orange button"
                    onClick={() => {setColorFilter(ImportanceColors.ORANGE)}}
                    className={classes.orangeButton}>
                    {orangeVisible ? <Visibility /> : <VisibilityOff />}
                </Button>
                <Button variant="fab" aria-label="green button"
                    onClick={() => {setColorFilter(ImportanceColors.GREEN)}}
                    className={classes.greenButton}>
                    {greenVisible ? <Visibility /> : <VisibilityOff />}
                </Button>
                <Button variant="fab" color="primary" aria-label="done filter button"
                        onClick={setDoneFilter}
                        className={classes.doneButton}>
                        {viewDone == ViewFilter.DONE ? <PlaylistAddCheck /> : null}
                        {viewDone == ViewFilter.NOT_DONE ? <List /> : null}
                        {viewDone == ViewFilter.ALL ? <ViewHeadline /> : null}
                </Button>
                <Button variant="fab" color="primary" aria-label="order button"
                        onClick={setAscOrder}
                        className={classes.orderButton}>
                        {ascOrder ? <ExpandMore /> : <ExpandLess />}
                </Button>
            </div>
        );
    }

    handleDoneBtnClick() {
        console.log('view done');
    }

}

function mapStateToProps(state) {
    return {
        redVisible: state.ui.filter.redVisible,
        orangeVisible: state.ui.filter.orangeVisible,
        greenVisible: state.ui.filter.greenVisible,
        viewDone: state.ui.filter.viewDone,
        ascOrder: state.ui.ascOrder,
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        setColorFilter,
        setDoneFilter,
        setAscOrder,
        setTodoText,
    }, dispatch);
}

const component = connect(mapStateToProps, mapDispatchToProps)(ButtonBlock);
export default withStyles(styles)(component);
