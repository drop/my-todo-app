import React from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import ImportanceSelector from './components/ImportanceSelector';
import ButtonBlock from './components/ButtonBlock';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import TodoSticker from './components/TodoSticker';
import { ViewFilter }  from './store/state';
import { ImportanceColors } from './components/ImportanceSelector';
import { addTodo, removeTodo, setDone } from './store/actions/todos';
import { setStickerColor, setColorFilter, setDoneFilter, setAscOrder, setTodoText } from './store/actions/ui';

const white = '#fff';
const styles = {
    flex: {
        flex: 1,
        color: white,
    },
    button: {
        position: 'fixed',
        bottom: '1.5em',
        right: '1.5em',
    },
    textField: {
        color: white,
    },
    barContainer: {
        marginBottom: '0.5em',
    },
};

const WHITE_SPACES_REGEXP = /^\s*$/;

class App extends React.Component {
    render() {
        const { classes, todos, todoText, filter, ascOrder } = this.props; 
        return (
            <div>
                <div className={classes.barContainer}>
                    <AppBar position="static" color="default">
                        <Toolbar>
                            <Typography variant="title" className={classes.flex}>
                                <TextField
                                    fullWidth
                                    id="todo"
                                    label="To do"
                                    value={todoText}
                                    className={classes.textField}
                                    onChange={this.handleInputText.bind(this)}
                                />
                            </Typography>
                            <ImportanceSelector />
                            <Button variant="fab" color="primary" aria-label="add button"
                                onClick={() => {this.handleAddButtonClick()}}
                                    className={classes.addButton}>
                                <AddIcon />
                            </Button>
                        </Toolbar>
                    </AppBar>
                </div>
                { this.createTodoList(todos, filter, ascOrder) }
                <ButtonBlock />
            </div>
        );
    }

    createTodoList(todos, filter, ascOrder) {
        let list = [];
        for (let timestamp in todos) {
            let todo = todos[timestamp];
            if (isNotFiltered(todo, filter)) {
                list.push(Object.assign({
                    id: timestamp,
                    timestamp: +timestamp
                }, todo));
            }
        }
        const compare = ascOrder ?
            (a, b) => (a.timestamp - b.timestamp) : 
            (a, b) => (b.timestamp - a.timestamp); 
        return list.sort(compare).map((todo, i) => (
            <TodoSticker key={i} todo={todo}
                onDone={() => {this.props.setDone(todo)}}
                onDelete={() => {this.props.removeTodo(todo)}} />
            ));
    }

    handleInputText(event) {
        this.props.setTodoText(event.target.value);
    }

    handleAddButtonClick() {
        if (!WHITE_SPACES_REGEXP.test(this.props.todoText)) {
            this.props.addTodo({
                color: this.props.stickerColor,
                text: this.props.todoText,
                done: false,
            });
        }
        this.props.setTodoText('');
    }
}

function isNotFiltered(todo, filter) {
    return (
        (filter.viewDone == ViewFilter.ALL)
        || (todo.done && filter.viewDone == ViewFilter.DONE)
        || (!todo.done && filter.viewDone == ViewFilter.NOT_DONE)
    ) && (
        (todo.color == ImportanceColors.GREEN && filter.greenVisible)
        ||  (todo.color == ImportanceColors.ORANGE && filter.orangeVisible)
        ||  (todo.color == ImportanceColors.RED && filter.redVisible)
    );
}

function mapStateToProps(state) {
    return {
        todoText: state.ui.todoText,
        stickerColor: state.ui.stickerColor,
        todos: state.todos,
        ascOrder: state.ui.ascOrder,
        filter: state.ui.filter,
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        addTodo,
        removeTodo,
        setDone,
        setTodoText,
    }, dispatch);
}

const component = connect(mapStateToProps, mapDispatchToProps)(App);
export default withStyles(styles)(component);
