import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useTypeSelector } from "../hooks/useTypeSelector";
import { fetchUsers } from "../store/actions/user";

const UserList = () => {
  const { users, error, loading } = useTypeSelector((state) => state.users);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUsers());
  }, []);
  if (loading) {
    <h1>Loading...</h1>;
  } else if (error) {
    <h1>{error}</h1>;
  }
  return (
    <div>
      {users.map((user) => (
        <div>{user.name}</div>
      ))}
    </div>
  );
};

export default UserList;
