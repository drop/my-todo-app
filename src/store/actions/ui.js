export function setStickerColor(color) {
    return {
        type: 'SET_COLOR',
        color,
    };
}

export function setColorFilter(color, visible) {
    return {
        type: 'SET_COLOR_FILTER',
        color,
        visible,
    };
}

export function setDoneFilter(filter) {
    return {
        type: 'SET_DONE_FILTER',
        filter,
    };
}

export function setAscOrder(ascOrder) {
    return {
        type: 'SET_ASC_ORDER',
        ascOrder,
    };
}

export function setTodoText(text) {
    return {
        type: 'SET_TODO_TEXT',
        text,
    };
}
