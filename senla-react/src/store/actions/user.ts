import axios from "axios";
import { Dispatch } from "redux";
import { IUserAction, UserActionTypes } from "../../types/typesUsers";

export const fetchUsers = () => {
  return async (dispatch: Dispatch<IUserAction>) => {
    try {
      dispatch({ type: UserActionTypes.FETCH_USERS });
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      dispatch({
        type: UserActionTypes.FETCH_USERS_SUCCSESS,
        payload: response.data,
      });
    } catch (e) {
      dispatch({ type: UserActionTypes.FETCH_USERS_ERROR, payload: "Error" });
    }
  };
};
