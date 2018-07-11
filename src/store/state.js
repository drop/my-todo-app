import { ImportanceColors } from '../components/ImportanceSelector';

export const ViewFilter = {
    ALL: 'all',
    DONE: 'done',
    NOT_DONE: 'not-done'
}

export const initialState = {
    ui: {
        todoText: '',
        stickerColor: ImportanceColors.GREEN,
        ascOrder: false,
        filter: {
            viewDone: ViewFilter.ALL,
            redVisible: true,
            orangeVisible: true,
            greenVisible: true,
        }
    },
    todos: {
        '000': {
            color: ImportanceColors.GREEN,
            text: 'To do various small deeds...',
            done: false,
        },

        '0001': {
            color: ImportanceColors.ORANGE,
            text: 'To do task N45',
            done: false,
        },

        '02': {
            color: ImportanceColors.RED,
            text: 'To do task N2!',
            done: true,
        },

        '0003': {
            color: ImportanceColors.RED,
            text: 'To do TASK N1 now!!!',
            done: false,
        },

        '4': {
            color: ImportanceColors.GREEN,
            text: 'To do not really important tasks that was shifted from yesterday.',
            done: false,
        },
        '005': {
            color: ImportanceColors.GREEN,
            text: 'Plan new tasks for tomorrow day...',
            done: true,
        },

    },
};
