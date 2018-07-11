export default function ui(state = {}, action) {
    switch (action.type) {
        case 'SET_TODO_TEXT':
            return {
                todoText: action.text,
                stickerColor: state.stickerColor,
                ascOrder: state.ascOrder,
                filter: state.filter,
            };
        default:
            return state;
    }
}

