import axios from "axios";
import React, { useState, useEffect } from "react";

//shift alt f fomrat
//margine su ti ono dole py-4
export default function Home() {
  const [users, setUsers] = useState([]);
  //use effect tell react component needs to do smth after render
  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = await axios.get("http://localhost:8080/users");
    console.log(result.data); //-> jer je console.log se ispisvalo samo u consoli
    setUsers(result.data);
  };
  return (
    <div className="container">
      <div className="py-4"></div>
      <table className="table table-bordered  ">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Username</th>
            <th scope="col">Mail</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr>
              <th scope="row" key={index}>
                {index + 1}
              </th>
              <td>{user.name}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>
                <button className="btn btn-primary mx-2">View</button>
                <button className="btn btn-outline-primary mx-2">Edit</button>
                <button className="btn btn-danger mx-2">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
