import { ImportanceColors } from '../../components/ImportanceSelector';
import { ViewFilter } from '../state';

export default function ui(state = {}, action) {
    switch (action.type) {
        case 'SET_TODO_TEXT':
            return {
                todoText: action.text,
                stickerColor: state.stickerColor,
                ascOrder: state.ascOrder,
                filter: state.filter,
            };
        case 'SET_COLOR':
            return {
                todoText: state.todoText,
                stickerColor: action.stickerColor,
                ascOrder: state.ascOrder,
                filter: state.filter,
            };
        case 'SET_COLOR_FILTER':
            return {
                todoText: state.todoText,
                stickerColor: state.stickerColor,
                ascOrder: state.ascOrder,
                filter: {
                    viewDone: state.filter.viewDone,
                    redVisible: action.color == ImportanceColors.RED ?
                            !state.filter.redVisible : state.filter.redVisible,
                    orangeVisible: action.color == ImportanceColors.ORANGE ?
                            !state.filter.orangeVisible : state.filter.orangeVisible,
                    greenVisible: action.color == ImportanceColors.GREEN ?
                            !state.filter.greenVisible : state.filter.greenVisible,
                }
            };
        case 'SET_ASC_ORDER':
            return {
                todoText: state.todoText,
                stickerColor: state.stickerColor,
                ascOrder: !state.ascOrder,
                filter: state.filter,
            };
        case 'SET_DONE_FILTER':
            return {
                todoText: state.todoText,
                stickerColor: state.stickerColor,
                ascOrder: state.ascOrder,
                filter: {
                    redVisible: state.filter.redVisible,
                    orangeVisible: state.filter.orangeVisible,
                    greenVisible: state.filter.greenVisible,
                    viewDone: (() => {
                        switch(state.filter.viewDone) {
                            case ViewFilter.ALL:
                                return ViewFilter.NOT_DONE;
                            case ViewFilter.NOT_DONE:
                                return ViewFilter.DONE;
                            case ViewFilter.DONE:
                                return ViewFilter.ALL;
                        }
                    })(),
                },
            };
        default:
            return state;
    }
}

