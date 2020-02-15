import { https } from '../https';
import { ActionTypes } from '../actionTypes';



export const fetchGenre = () => async (dispatch) => {
    const response = await https.get('/genre/movie/list', { params: { api_key: 'b52327a9c201390c336b46ebee1c395b', } });
    dispatch({
        type: ActionTypes.MENU_GENRE,
        payload: response.data.genres
    });
}