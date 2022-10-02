import React, { useEffect, useState } from "react";
const Userdata = new Request("./data.json");
const Tododata = new Request("./todo.txt");

export default function User1() {
  const [users, setUsers] = useState([
    { id: 1, name: "shankar", website: "123@123.com" },
    { id: 2, name: "Rajesh", website: "123@123.com" },
    { id: 3, name: "raju", website: "123@123.com" },
  ]);
  const [todo, setTodo] = useState("");

  useEffect(() => {
    fetch(Userdata)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setUsers((prevData) => {
          return [...prevData, data];
        });
      });
  }, []);
  useEffect(() => {
    fetch(Tododata)
      .then((res) => res.text())
      .then((data) => {
        console.log(data);
        setTodo(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [users]);

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>New User</h1>
      <p
        dangerouslySetInnerHTML={{ __html: todo }}
        style={{ textAlign: "center" }}
      ></p>
      <div className="d-flex justify-content-center flex-wrap">
        {users &&
          users.map((user) => (
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
