import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { loginform } from "./../store/action/auth";
import { isEmail, isEmpty } from "validator";

function LoginPage() {
  const dispatch = useDispatch();

  const [state, setState] = useState({
    emailaddress: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    emailaddress: "",
    password: "",
  });

  const [validateOnChange, setValidateOnChange] = useState(false);

  const handleChange = (evt) => {
    const value = evt.target.value;
    setState({
      ...state,
      [evt.target.name]: value,
    });
    if (validateOnChange) {
      validateForm();
    }
  };

  const validateForm = () => {
    let { emailaddress, password } = state;
    let errors = { emailaddress: "", password: "" };
    let valid = true;

    if (isEmpty(emailaddress) || !isEmail(emailaddress)) {
      errors.emailaddress = "Please provide a valid email address";
      valid = false;
    }

    if (isEmpty(password) || password.length < 5) {
      errors.password = "Wrong Passowrd";
      valid = false;
    }

    setErrors(errors);

    return valid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      let user = {
        emailaddress: state.emailaddress,
        password: state.password,
      };
      console.log(user);
      dispatch(loginform(user));
    } else {
      setValidateOnChange(true);
    }
  };

  return (
    <div class="container mt-5 w-25 shadow p-3 mb-5 bg-body rounded">
      <h1>Hello</h1>
      <div class="mb-3 ">
        <div class="text-center">
          {" "}
          <h1 style={{ color: "#6748f0" }}>Login</h1>
        </div>
        <hr />
        <label class="form-label fw-bold ">Email address</label>
        <input
          type="email"
          name="emailaddress"
          class="form-control"
          placeholder="Email"
          value={state.emailaddress}
          onChange={handleChange}
        />
        <span style={{ color: "red" }}>
          {errors.emailaddress ? errors.emailaddress : null}
        </span>
      </div>

      <div class="mb-3">
        <label class="form-label fw-bold">Password</label>
        <input
          type="password"
          name="password"
          placeholder="Password"
          class="form-control"
          value={state.password}
          onChange={handleChange}
        />
        <span style={{ color: "red" }}>
          {errors.password ? errors.password : null}
        </span>
      </div>
      <div class="mb-2">
        <button
          style={{ backgroundColor: "#6748f0", width: "100%" }}
          type="submit"
          class="btn btn-secondary"
          onClick={handleSubmit}
        >
          Login
        </button>
      </div>
    </div>
  );
}
export default LoginPage;
