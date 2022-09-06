//import Button from "./my programs/props";
//import Button1 from "./my programs/state";
//import Form from "./my programs/form";
import React, { useEffect, useState } from "react";
import AddUser from "./components/AddUser";
import User from "./components/users";

function App() {
  const [users, setUsers] = useState([]);
  const [msg, setMsg] = useState("");

  useEffect(() => {
    // fetchData();
  }, []);

  useEffect(() => {
    if (users.length > 10) alert("users increased");
  }, [users]);

  const fetchData = async () => {
    await fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((err) => {
        console.log(err);
      });
  };

  const onAdd = async (name, email) => {
    await fetch("https://jsonplaceholder.typicode.com/users", {
      method: "POST",
      body: JSON.stringify({
        name: name,
        email: email,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((res) => {
        if (res.status !== 201) {
          return;
        } else {
          return res.json();
        }
      })
      .then((data) => {
        setUsers((users) => [...users, data]);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const onDelete = async (id) => {
    await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
      method: "DELETE",
    })
      .then((res) => {
        if (res.status !== 200) {
          return;
        } else {
          setMsg(`${id} user successfully deleted !!!`);
          setUsers(
            users.filter((user) => {
              return user.id !== id;
            })
          );
          setTimeout(() => {
            setMsg("");
          }, 3000);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const getDetailes = (e) => {
    e.preventDefault();
    fetchData();
  };
  return (
    <div className="App">
      <center>
        <h3> React Curd Using Jsonpalceholder</h3>
        <br />
        <h3>{msg}</h3>
        <AddUser onAdd={onAdd} getDetailes={getDetailes} />

        <div>
          {users.length == 0 ? "Loading....." : ""}
          {users &&
            users.map((user) => (
              <User
                id={user.id}
                key={user.id}
                user={user}
                onDelete={onDelete}
              />
            ))}
        </div>
      </center>
    </div>
  );
}

export default App;
