import appService from '../services/appServices';

export const initialState = {
    list: [],
    current: null
};

const listReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_IMAGE':
            return { ...state, current: action.data };
        case 'ADD_IMAGE':
            return {
                ...state,
                list: [...state.list, action.data]
            }
        case 'PREV_IMAGE':
            const idCurr = action.data;
            let index = state.list.findIndex(item => item.id === idCurr);
            if (index === 0) {
                return { ...state, current: state.current };
            } else {
                const imagePrev = state.list[index - 1];
                return { ...state, current: imagePrev };
            }
        case 'NEXT_IMAGE':
            const id = action.data;
            let indexNext = state.list.findIndex(item => item.id === id);
            if (indexNext === state.list.length - 1) {
                return { ...state, current: state.current };
            } else {
                const imageNext = state.list[indexNext + 1];
                return { ...state, current: imageNext };
            }
        default:
            return state;
    }
};

export const fetchImage = () => {
    return async dispatch => {
        const curr = await appService.getImage();
        dispatch({
            type: 'FETCH_IMAGE',
            data: curr
        });
        const list = await appService.addList(curr.url, curr.id);
        dispatch({
            type: 'ADD_IMAGE',
            data: list,
        });
    };
};

export const prevImage = (id) => {
    return async dispatch => {
        dispatch({
            type: 'PREV_IMAGE',
            data: id,
        });
    };
};

export const nextImage = (id) => {
    return async dispatch => {
        dispatch({
            type: 'NEXT_IMAGE',
            data: id,
        });
    };
};


export default listReducer;