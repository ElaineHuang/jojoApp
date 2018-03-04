import createActionCreator from 'utils/redux';

export const GET_USER = 'GET_USER';
export const GET_USER_SUCCESS = 'GET_USER_SUCCESS';

export const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_USER_SUCCESS: return action.payload;
    default: return state;
  }
};

export const getUser = createActionCreator(GET_USER);
export const getUserSuccess = createActionCreator(GET_USER_SUCCESS);
