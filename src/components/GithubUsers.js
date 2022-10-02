import React, { useEffect, useState } from "react";

export default function GithubUsers() {
  const [users, setUsers] = useState([]);
  const [filters, setFilters] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
      });
  }, []);

  useEffect(() => {
    if (users && users.length > 0) {
      let filter = users.filter((item) => item.username.length > 10);
      filter.sort(function (a, b) {
        if (a.name < b.name) {
          return -1;
        }
        if (a.name > b.name) {
          return 1;
        }
        return 0;
      });
      setFilters([...filters, ...filter]);
    }
  }, [users]);

  const addUser = () => {
    let newUser = { id: 1, name: "shankar", website: "123@123.com" };
    fetch("https://jsonplaceholder.typicode.com/users", {
      headers: {},
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

  const deleteUser = (user) => {
    //let newUser = { id: 1, name: "shankar", website: "123@123.com" };
    fetch(`https://jsonplaceholder.typicode.com/users/${user.id}`, {
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
        {filters &&
          filters.map((user) => (
            <div className="m-3 p-3">
              <img src="./logo192.png" alt="profile"></img>
              <ul>
                <li>{user.name}</li>
                <li>
                  <button
                    className="p-2"
                    onClick={() => {
                      deleteUser(user);
                    }}
                  >
                    delete User
                  </button>
                </li>
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
