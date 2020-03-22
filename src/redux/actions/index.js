
export const FATCH_COMMENT = 'fetch_comment';


export const FatchComment = ()=> async (dispatch, getState, axiosInstance) =>{
  const res = await axiosInstance.get('/recipes/');
  dispatch({
    type: FATCH_COMMENT,
    payload: res,
  });
};


export const AUTH_USER = 'auth_user';


export const AuthUser = ()=> async (dispatch, getState, axiosInstance) =>{
  const res = await axiosInstance.get('/users/');
  dispatch({
    type: AUTH_USER,
    payload: res,
  });
};

