import React, { useEffect, useState } from "react";

export default function GithubUsers() {
  const [users, setUsers] = useState([
    { id: 1, name: "shankar", website: "123@123.com" },
    { id: 2, name: "Rajesh", website: "123@123.com" },
    { id: 3, name: "raju", website: "123@123.com" },
  ]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
      });
  }, []);
  const addUser = () => {
    let newUser = { id: 1, name: "shankar", website: "123@123.com" };
    fetch("https://jsonplaceholder.typicode.com/users", {
      method: "POST",
      body: JSON.stringify(newUser),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

  const updateUser = () => {
    let newUser = { id: 1, name: "shankar", website: "123@123.com" };
    fetch("https://jsonplaceholder.typicode.com/users/10", {
      method: "PUT",
      body: JSON.stringify(newUser),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

  const deleteUser = () => {
    //let newUser = { id: 1, name: "shankar", website: "123@123.com" };
    fetch("https://jsonplaceholder.typicode.com/users/10", {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };
  return (
    <div style={{ textAlign: "center" }}>
      <h1>GithubUsers</h1>
      <button className="p-2" onClick={addUser}>
        Add User
      </button>
      <button className="p-2" onClick={updateUser}>
        Update User
      </button>
      <button className="p-2" onClick={deleteUser}>
        delete User
      </button>

      <div className="d-flex justify-content-center flex-wrap">
        {users.map((user) => (
          <div className="m-3 p-3">
            <img src="./logo192.png" alt="profile"></img>
            <ul>
              <li>{user.name}</li>
            </ul>

            <a href={`http://${user.website}`} target="_blank">
              Website Link
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
