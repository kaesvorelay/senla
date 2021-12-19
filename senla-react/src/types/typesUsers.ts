export interface IUsersState {
  users: any[];
  loading: boolean;
  error: null | string;
}

export enum UserActionTypes {
  FETCH_USERS = "FETCH_USERS",
  FETCH_USERS_SUCCSESS = "FETCH_USERS_SUCCSESS",
  FETCH_USERS_ERROR = "FETCH_USERS_ERROR",
}

interface IFetchUsersAction {
  type: UserActionTypes.FETCH_USERS;
}

interface IFetchUsersSuccsessAction {
  type: UserActionTypes.FETCH_USERS_SUCCSESS;
  payload: any[];
}

interface IFetchUsersErrorAction {
  type: UserActionTypes.FETCH_USERS_ERROR;
  payload: string;
}

export type IUserAction =
  | IFetchUsersAction
  | IFetchUsersSuccsessAction
  | IFetchUsersErrorAction;
