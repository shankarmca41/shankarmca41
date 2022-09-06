import React from "react";
import "./users.css";

const Users = ({ id, user, onDelete, onEdit }) => {
  const handleDelete = () => {
    onDelete(id);
  };

  return (
    <div className="list">
      <span>{user?.name}</span>
      <span>{user?.email}</span>
      <span>{user?.address?.city}</span>
      <span>
        <button>edit</button>
        <button onClick={handleDelete}>delete</button>
      </span>
    </div>
  );
};
export default Users;
