import React, { useState } from "react";
import { isEmail, isEmpty } from "validator";
import axios from "axios";

import { useSelector, useDispatch } from "react-redux";
import { signup } from "./../store/action/auth";

const SignUp = () => {
  const dispatch = useDispatch();

  const [state, setState] = useState({
    firstname: "",
    lastname: "",
    emailaddress: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    firstname: "",
    lastname: "",
    emailaddress: "",
    password: "",
  });

  const [validateOnChange, setValidateOnChange] = useState(false);

  const handleChange = (evt) => {
    const value = evt.target.value;
    setState((state) => ({
      ...state,
      [evt.target.name]: value,
    }));

    if (validateOnChange) {
      validateForm();
    }
  };

  const validateForm = () => {
    let { firstname, lastname, emailaddress, password } = state;
    let errors = {
      firstname: "",
      lastname: "",
      emailaddress: "",
      password: "",
    };
    let valid = true;

    if (isEmpty(emailaddress) || !isEmail(emailaddress)) {
      errors.emailaddress = "Please provide a valid email address";
      valid = false;
    }

    if (isEmpty(password) || password.length < 5) {
      errors.password = "Passowrd should be at least 8 characters long";
      valid = false;
    }

    if (isEmpty(firstname)) {
      errors.firstname = "You need to write first name";
      valid = false;
    }

    if (isEmpty(lastname)) {
      errors.lastname = "You need to write last name";
      valid = false;
    }

    setErrors(errors);

    return valid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      let user = {
        firstname: state.firstname,
        lastname: state.lastname,
        emailaddress: state.emailaddress,
        password: state.password,
      };
      console.log("user", user);
      dispatch(signup(user));
    } else {
      setValidateOnChange(true);
    }
  };

  return (
    <div className="shadow  p-3 mb-10 bg-white rounded rounded-top rounded-bottom rounded  border m-auto w-25 mt-4">
      <form class="text-center loginform">
        <div>
          <h1 style={{ color: "#6748f0" }}>Sign Up </h1>
        </div>
        <hr />

        <div class="form-floating p-2">
          <input
            class="form-control "
            type="text"
            name="firstname"
            placeholder="First Name"
            value={state.firstname}
            onChange={handleChange}
          ></input>
          <label>First Name</label>
          <span style={{ color: "red" }}>
            {errors.firstname ? errors.firstname : null}
          </span>
        </div>

        <div class="form-floating  p-2">
          <input
            class="form-control"
            type="text"
            name="lastname"
            placeholder="Last Name"
            value={state.lastname}
            onChange={handleChange}
          ></input>
          <label>Last Name</label>
        </div>
        <span style={{ color: "red" }}>
          {errors.lastname ? errors.lastname : null}
        </span>

        <div class="form-floating p-2">
          <input
            class="form-control"
            type="email"
            name="emailaddress"
            placeholder="Email"
            value={state.emailaddress}
            onChange={handleChange}
          ></input>
          <label>Email</label>
        </div>
        <span style={{ color: "red" }}>
          {errors.emailaddress ? errors.emailaddress : null}
        </span>

        <div class="form-floating p-2">
          <input
            class="form-control"
            type="password"
            name="password"
            placeholder="Password"
            value={state.password}
            onChange={handleChange}
          ></input>
          <label>Password</label>
          <span style={{ color: "red" }}>
            {errors.password ? errors.password : null}
          </span>
        </div>

        <div class="d-grid gap-2 p-2">
          <button
            type="button"
            class="btn btn-secondary"
            onClick={handleSubmit}
            style={{ backgroundColor: "#6748f0" }}
          >
            <b>Submit</b>
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
