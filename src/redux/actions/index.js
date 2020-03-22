import {Json} from '../../config/JsonApi';

export const FATCH_COMMENT = 'fetch_comment';


export const FatchComment = ()=> async (dispatch) =>{
  const res = await Json.get('/comments');
  dispatch({
    type: FATCH_COMMENT,
    payload: res,
  });
};
