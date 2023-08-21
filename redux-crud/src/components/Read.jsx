import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { showUser, deleteUser } from "../features/userDetailSlice";
import CustomModel from "./CustomModel";
import { Link } from "react-router-dom";

const Read = () => {
  const dispatch = useDispatch();
  const { users, loading, searchData } = useSelector((state) => state.app);
  const [showPopup, setShowPopup] = useState(false);
  const [radioData , setRadioData] = useState("")
  const [id, setId] = useState(0);
  useEffect(() => {
    dispatch(showUser());
    console.log(users);
  }, []);

  if (loading) {
    return <h2 className="mx-auto text-center w-100 my-5">LOADING...</h2>;
  }
  return (
    <div className="mx-auto">
      {showPopup && (
        <CustomModel
          id={id}
          showPopup={showPopup}
          setShowPopup={setShowPopup}
        />
      )}
      <h2 className="w-100 mt-5 text-center">All Data</h2>
      <div className="w-100 text-center">
      <input
        className="form-check-input"
        type="radio"
        name="gender"
        checked={radioData === ""}
        onChange={(e) => setRadioData()}
      />
      <label className="form-check-label" htmlFor="flexRadioDefault1">
        All
      </label>

      <input
        className="form-check-input"
        type="radio"
        name="gender"
        value="Male"
        checked={radioData === "Male"}
        onChange={(e) => setRadioData(e.target.value)}
      />
      <label className="form-check-label" htmlFor="flexRadioDefault1">
        Male
      </label>

      <input
        className="form-check-input"
        type="radio"
        name="gender"
        value="Female"
        checked={radioData === "Female"}
        onChange={(e) => setRadioData(e.target.value)}
      />
      <label className="form-check-label" htmlFor="flexRadioDefault1">
        Female
      </label>
      </div>
      <div className="row align-items-center w-100">
        {users &&
          users
            .filter((ele) => {
              if (searchData.length === 0) {
                return ele;
              } else {
                return ele.name
                  .toLowerCase()
                  .includes(searchData.toLowerCase());
              }
            })
            .filter( (ele) => {
              // if (radioData?.length === 0){
              //   return ele;
              // }
              // else{
              //   return ele.gender.toLowerCase()
              //   .includes(radioData.toLocaleLowerCase());
              // }
              if (radioData === "Male"){
                return ele.gender === radioData
              }
              else if (radioData === "Female"){
                return ele.gender === radioData
              }
              else  return ele;
            })
            .map((ele) => (
              <div key={ele.id} className="card w-50 mx-auto my-5 col-5">
                <div className="card-body">
                  <h5 className="card-title">{ele.name}</h5>
                  <h6 className="card-subtitle mb-2 text-body-secondary">
                    {ele.email}
                  </h6>
                  <p className="card-text">{ele.gender}</p>
                  <button
                    className="btn btn-primary"
                    onClick={() => [setId(ele.id), setShowPopup(true)]}
                  >
                    View
                  </button>
                  <Link to={`/edit/${ele.id}`} className="card-link">
                    Edit
                  </Link>
                  <Link
                    onClick={() => dispatch(deleteUser(ele.id))}
                    className="card-link"
                  >
                    Delete
                  </Link>
                </div>
              </div>
            ))}
      </div>
    </div>
  );
};

export default Read;
