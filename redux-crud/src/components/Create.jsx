import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createUser } from "../features/userDetailSlice";
import { useNavigate } from "react-router-dom";

const Create = () => {

    const [users , setUsers] = useState({});
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const getUsersData = (e) => {
      setUsers({
        ...users, 
        [e.target.name]: e.target.value,
  })
  }

  const handledSubmit = (e) => {
    e.preventDefault()
    console.log(users)
    dispatch(createUser(users))
    navigate("/read")
  }
  return (
    <div>
      
      <form className="col-7 mt-5 mx-auto my-5" onSubmit={handledSubmit}>
        <div className="mb-3">
          <label htmlFor="exampleInputName" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputName"
            aria-describedby="emailHelp"
            name="name"
            onChange={getUsersData}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            name="email"
            onChange={getUsersData}
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputAge" className="form-label">
            Age
          </label>
          <input
            type="number"
            className="form-control"
            id="exampleInputAge"
            aria-describedby="emailHelp"
            name="age"
            onChange={getUsersData}
          />
        </div>

        <div className="form-check mb-3">
          <input
            className="form-check-input"
            type="radio"
            name="gender"
            value="Male"
            onChange={getUsersData}
          />
          <label className="form-check-label" htmlFor="flexRadioDefault1">
            Male
          </label>
        </div>
        <div className="form-check mb-3">
          <input
            className="form-check-input"
            type="radio"
            value="Female"
            name="gender"
            onChange={getUsersData}
          />
          <label className="form-check-label" htmlFor="flexRadioDefault2">
            Female
          </label>
        </div>

        {/* <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
          />
        </div> */}
        {/* <div className="mb-3 form-check">
          <input type="checkbox" className="form-check-input" id="exampleCheck1" />
          <label className="form-check-label" for="exampleCheck1">
            Check me out
          </label>
        </div> */}
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Create;
