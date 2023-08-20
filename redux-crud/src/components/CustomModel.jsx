import React from 'react';
import "../index.css"
import { useSelector } from 'react-redux';

const CustomModel = ({id , showPopup , setShowPopup}) => {
    const allUsers = useSelector( (state) => state.app.users);
    const singleUser = allUsers.filter((ele) => ele.id === id)
    console.log(singleUser)

  return (
    <div className="modalBackground">
        <div className="modalContainer">
            <button className="btn btn-sm btn-danger"
            onClick={() => setShowPopup(false)}
            >Close</button>
            <h2>{singleUser[0].name}</h2>
            <h3>{singleUser[0].email}</h3>
            <h4>{singleUser[0].age}</h4>
            <p>{singleUser[0].gender}</p>
        </div>
    </div>
  )
}

export default CustomModel