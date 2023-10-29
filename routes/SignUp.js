import React from "react";
import { useState, useEffect } from "react";
import "./App.css";

// export default function SignUp() {
//   return (
//     <div>
//       <h1>Sign up for things</h1>
//     </div>
//   );
// }

export default function SignUp() {
  const MOCK_API_URL = "https://650f7f5554d18aabfe9a149f.mockapi.io/Week15Lab";

  const [users, setUsers] = useState([]);

  const [newUserName, setNewUserName] = useState("");
  const [newUserJobTitle, setNewUserJobTitle] = useState("");
  const [newUserCompanyName, setNewUserCompanyName] = useState("");

  const [updatedUserName, setUpdatedUserName] = useState("");
  const [updatedJobTitle, setUpdatedJobTitle] = useState("");
  const [updatedCompanyName, setUpdatedCompanyName] = useState("");

  function getUsers() {
    fetch(MOCK_API_URL)
      .then((data) => data.json())
      .then((data) => setUsers(data));
  }

  useEffect(() => {
    getUsers();
  }, []);

  function deleteUser(id) {
    fetch(`${MOCK_API_URL}/${id}`, {
      method: "DELETE",
    }).then(() => getUsers());
  }

  function postNewUser(e) {
    e.preventDefault();

    fetch(MOCK_API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        userName: newUserName,
        jobTitle: newUserJobTitle,
        companyName: newUserCompanyName,
      }),
    }).then(() => getUsers());
  }

  function updateUser(e, userObject) {
    e.preventDefault();

    const updatedUserObject = {
      ...userObject,
      userName: updatedUserName,
      jobTitle: updatedJobTitle,
      companyName: updatedCompanyName,
    };

    fetch(`${MOCK_API_URL}/${userObject.id}`, {
      method: "PUT",
      body: JSON.stringify(updatedUserObject),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(() => getUsers());
  }

  return (
    <div className="App bold-text form-border">
      <form>
        <h3>POST New Job</h3>
        <label>Name</label>
        <input onChange={(e) => setNewUserName(e.target.value)}></input>
        <label>Job Title</label>
        <input onChange={(e) => setNewUserJobTitle(e.target.value)}></input>
        <label>Company Name</label>
        <input onChange={(e) => setNewUserCompanyName(e.target.value)}></input>
        <button onClick={(e) => postNewUser(e)}>Submit</button>
      </form>

      {users.map((user, index) => (
        <div className="userContainer form-border" key={index}>
          <div>
            User Name: {user.userName} <br></br>
            Job Title: {user.jobTitle} <br></br>
            Company Name: {user.companyName} <br></br>
            <button onClick={() => deleteUser(user.id)}>Delete</button>
          </div>
          <form>
            <h3>Update This Post</h3>
            <label>Update User Name</label>
            <input
              onChange={(e) => setUpdatedUserName(e.target.value)}
            ></input>{" "}
            <br></br>
            <label>Update Job Title</label>
            <input
              onChange={(e) => setUpdatedJobTitle(e.target.value)}
            ></input>{" "}
            <br></br>
            <label>Update Company Name</label>
            <input
              onChange={(e) => setUpdatedCompanyName(e.target.value)}
            ></input>{" "}
            <br></br>
            <button onClick={(e) => updateUser(e, user)}>Update</button>
          </form>
        </div>
      ))}
    </div>
  );
}
