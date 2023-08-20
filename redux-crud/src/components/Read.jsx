import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { showUser } from "../features/userDetailSlice";
import CustomModel from "./CustomModel";

const Read = () => {
    const dispatch = useDispatch();
    const {users , loading} = useSelector((state) => state.app);
    const [showPopup , setShowPopup] = useState(false)
    const [id ,setId] = useState(0)
    useEffect( () => {
        dispatch(showUser());
        console.log(users)
    },[]);

    if (loading){
        return <h2 className="mx-auto text-center w-100 my-5">LOADING...</h2>
    }
  return (
    <div className="mx-auto">
      {showPopup &&  <CustomModel id={id} showPopup={showPopup} setShowPopup={setShowPopup} /> }
      <h2>All Data</h2>
      <div className="row align-items-center w-100">
       {
        users && users.map( (ele) => (
            <div key={ele.id} className="card w-50 mx-auto my-5 col-5">
            <div className="card-body">
              <h5 className="card-title">{ele.name}</h5>
              <h6 className="card-subtitle mb-2 text-body-secondary">
                {ele.email}
              </h6>
              <p className="card-text">
                {ele.gender}
              </p>
              <button className="btn btn-primary" onClick={() => [setId(ele.id), setShowPopup(true)]}>
                View
              </button>
              <Link href="#" className="card-link">
                Edit
              </Link>
              <Link href="#" className="card-link">
                Delete
              </Link>
            </div>
          </div>
        ))
       }
      </div>
    </div>
  );
};

export default Read;
