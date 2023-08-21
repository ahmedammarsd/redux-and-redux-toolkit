import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom'
import { updateUser } from '../features/userDetailSlice';

const Update = () => {
    const { id } = useParams();
    const [updateData , setUpdateData] = useState();
    const navigate = useNavigate()
    const dispatch = useDispatch();
    const {users , loading} = useSelector( (state) => state.app);
    useEffect( () => {
        if(id){
           // console.log(" users ",users)
           const singleUser = users?.filter((ele) => ele.id === id)
           setUpdateData(singleUser)
          // console.log("single user:"  , singleUser)
        }
    },[])
    console.log(updateData)
    const newData = (e) => {
        setUpdateData({
            ...updateData , [e.target.name] : e.target.value
        })
    }
    const handledUpdate = (e) => {
        e.preventDefault();
        dispatch(updateUser(updateData))
        navigate("/read")
    }
  return (
    <div>
      <h4 className="w-100 mt-5 text-center">Edit The Data</h4>
      <form className="col-7 mt-5 mx-auto my-5" onSubmit={handledUpdate}>
        <div className="mb-3">
          <label htmlFor="exampleInputName" className="form-label">
            Name
          </label>
          <input
          id='exampleInputName'
            type="text"
            className="form-control"
            name="name"
            onChange={(e) => newData(e)}
            value={updateData && updateData[0].name}
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
            value={updateData && updateData[0].email}
            onChange={newData}
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
            value={updateData && updateData[0].age}
            onChange={newData}
          />
        </div>

        <div className="form-check mb-3">
          <input
            className="form-check-input"
            type="radio"
            name="gender"
            value="Male"
            onChange={newData}
            checked={updateData && updateData[0].gender === "Male"}
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
            onChange={newData}
            checked={updateData && updateData[0].gender === "Female"}
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
  )
}

export default Update