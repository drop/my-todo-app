export function setStickerColor(stickerColor) {
    return {
        type: 'SET_COLOR',
        stickerColor,
    };
}

export function setColorFilter(color) {
    return {
        type: 'SET_COLOR_FILTER',
        color
    };
}

export function setDoneFilter() {
    return {
        type: 'SET_DONE_FILTER',
    };
}

export function setAscOrder() {
    return {
        type: 'SET_ASC_ORDER',
    };
}

export function setTodoText(text) {
    return {
        type: 'SET_TODO_TEXT',
        text,
    };
}
