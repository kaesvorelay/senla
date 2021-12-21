import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useTypeSelector } from "../hooks/useTypeSelector";
import { fetchUsers } from "../store/actions/user";
import { connect } from "react-redux";
import { IUsersState } from "../types/typesUsers";

const UserList = (state: any) => {
  let { users, loading, error } = state;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUsers());
  }, []);
  if (loading) {
    return <h1>Loading...</h1>;
  } else if (error) {
    return <h1>{error}</h1>;
  } else if (users.length > 2) {
    return (
      <div>
        {users.map((user: any) => (
          <div>{user.name}</div>
        ))}
      </div>
    );
  } else {
    return <h2>Oooops</h2>;
  }
};

const mapDispatchToProps = (state: IUsersState) => {
  return state.users;
};

export default connect(mapDispatchToProps)(UserList);
