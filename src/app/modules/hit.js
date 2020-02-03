import {createAction, handleActions} from 'redux-actions';
import {takeLatest} from 'redux-saga/effects';
import * as newsAPI from '../lib/api/news'; 
import createRequestSaga,{createRequestActionTypes} from '../lib/createRequestSaga';


const [NEWS,NEWS_SUCCESS,MEWS_FAILURE] = createRequestActionTypes(
    'news/NEWS',
);

export const check = createAction(NEWS);


const newsSaga = createRequestSaga(NEWS, newsAPI.check);
export function* userSaga(){
    yield takeLatest(NEWS,newsSaga);
}

const initialState = {
    data : null,
    checkError: null,
};

export default handleActions(
    {
        [NEWS_SUCCESS] : (state, {payload : data }) => ({
            ...state,
            data,
            checkError:null,
        }),
        [MEWS_FAILURE] : (state, {payload : error}) => ({
            ...state,
            checkError:error,
        }),
    },
    initialState,
)