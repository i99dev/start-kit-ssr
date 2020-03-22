
export const FATCH_COMMENT = 'fetch_comment';


export const FatchComment = ()=> async (dispatch, getState, axiosInstance) =>{
  const res = await axiosInstance.get('/comments');
  dispatch({
    type: FATCH_COMMENT,
    payload: res,
  });
};
