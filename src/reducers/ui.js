import createActionCreator from 'utils/redux';

const TOGGLE_DIALOG = 'TOGGLE_DIALOG';
const TOGGLE_LOADING = 'TOGGLE_LOADING';

export const initialState = {
  dialog: {
    show: false,
    component: null,
  },
  isLoading: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_DIALOG: return {
      ...state,
      dialog: {
        show: !!action.payload,
        component: action.payload || null,
      },
    };
    case TOGGLE_LOADING: return {
      ...state,
      isLoading: action.payload || false,
    };
    default: return state;
  }
};

export const toggleDialog = createActionCreator(TOGGLE_DIALOG);
export const toggleLoading = createActionCreator(TOGGLE_LOADING);
