import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { addData } from "./../store/action/company";
import { useDispatch, useSelector } from "react-redux";
import { Country, State, City } from "country-state-city";
import Select from "react-select";
import { getCompany } from "./../store/action/company";
import moment from "moment";

const Equipments = [
  {
    value: "flatbed",
    label: "Flatbed",
  },
  {
    value: "stepdeck",
    label: "Step-Deck",
  },
  {
    value: "conestoage",
    label: "Conestoga",
  },
  {
    value: "van",
    label: "Van",
  },
  {
    value: "refer",
    label: "Refer",
  },
];

const AddCustomer = () => {
  const Commodities = [
    {
      value: 1,
      label: "Lumber",
    },
    {
      value: 2,
      label: "Steel",
    },
    {
      value: 3,
      label: "Stones",
    },
    {
      value: 4,
      label: "Plastic",
    },
    {
      value: 5,
      label: "Meat",
    },
    {
      value: 6,
      label: "Chicken",
    },
  ];

  const States = State.getStatesOfCountry("US");
  const Cities = City.getCitiesOfState("US", "AL");

  const dispatch = useDispatch();
  //   const [commodities,setCommodities] = useState([])
  //   const [equipment,setEquipment] = useState([])
  const comp = useSelector((state) => state.comp);
  const auth = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(getCompany());
  }, []);

  const [state, setState] = useState({
    companyname: "",
    cphone: "",
    fax: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    person: "",
    phone: "",
    email: "",
    comment: "",
    status: "",
    cemail: "",
    frequency: "",
    equipment: [],
    commodities: [],
    product: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    let companyinfo = {
      companyname: state.companyname,
      cphone: state.cphone,
      fax: state.fax,
      address: state.address,
      city: state.city,
      state: state.state,
      zip: state.zip,
      person: state.person,
      phone: state.phone,
      email: state.email,
      comment: state.comment,
      status: state.status,
      cemail: state.cemail,
      frequency: state.frequency,
      equipment: state.equipment,
      commodities: state.commodities,
      product: state.product,
      userId: auth.user._id,
      firstname: auth.user.firstname,
    };

    dispatch(addData(companyinfo));
  };

  function handleSelectEquipment(equipment) {
    setState({ ...state, equipment });
  }

  function handleSelectCommodities(commodities) {
    setState({ ...state, commodities });
  }

  const handleChange = (evt) => {
    const value = evt.target.value;
    setState({
      ...state,
      [evt.target.name]: value,
    });
  };

  return (
    <div class="container bg-light w-75 mt-5  border rounded-3 shadow-lg pb-2  ">
      <header>
        <div class="px-3 py-2">
          <div class="align-items-center justify-content-between justify-content-lg-start">
            <a href="/" class="d-flex align-items-center "></a>

            <ul class=" line nav col-12 col-lg-auto my-2 justify-content-center my-md-0 text-small">
              <li>
                <Link to="home">
                  <a
                    href="#"
                    class="nav-link text-secondary text-decoration-none"
                  >
                    Home
                  </a>
                </Link>
              </li>

              <li>
                <a class="nav-link text-secondary ">Customers</a>
              </li>

              <li>
                <Link to="carry">
                  {" "}
                  <a href="#" class="nav-link text-secondary">
                    Carriers
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </header>

      <div class="row">
        <div class="col-md-9 col-sm-12">
          <div class="mb-3 row pt-2">
            <label class="form-label  col-sm-2 col-form-label">
              Company Name
            </label>
            <div class="col-sm-10">
              <input
                type="email"
                class="form-control"
                name="companyname"
                value={state.companyname}
                onChange={handleChange}
              />
            </div>
          </div>

          <div class="mb-3 row">
            <label class=" form-label col-sm-2 col-form-label">Phone</label>

            <div class="col-sm-10">
              <input
                type="text"
                class="form-control"
                name="cphone"
                value={state.cphone}
                onChange={handleChange}
              />
            </div>
          </div>

          <div class="mb-3 row">
            <label class="form-label  col-sm-2 col-form-label">Fax</label>
            <div class="col-sm-10 ">
              <input
                type="text"
                class="form-control"
                placeholder=""
                name="fax"
                value={state.fax}
                onChange={handleChange}
              />
            </div>
          </div>

          <div class="mb-3 row">
            <label class="form-label col-sm-2 col-form-label">Address</label>
            <div class="col-sm-10">
              <input
                type="text"
                class="form-control"
                placeholder=""
                name="address"
                value={state.address}
                onChange={handleChange}
              />
            </div>
          </div>

          <form class="row g-3 ">
            <div class="col-md-6">
              <label class="form-label">City</label>
              <select
                class="form-select"
                name="city"
                value={state.city}
                onChange={handleChange}
              >
                {Cities.map((getcity, index) => {
                  return <option key={index}> {getcity.name} </option>;
                })}
                <option></option>
              </select>
            </div>

            <div class="col-md-4">
              <label class="form-label">State</label>
              <select
                class="form-select"
                name="state"
                value={state.state}
                onChange={handleChange}
              >
                {States.map((getstate, index) => {
                  return <option key={index}>{getstate.isoCode}</option>;
                })}
                <option></option>
              </select>
            </div>

            <div class="col-md-2">
              <label class="form-label">Zip</label>
              <input
                type="text"
                class="form-control"
                name="zip"
                value={state.zip}
                onChange={handleChange}
              />
            </div>
          </form>

          <div>
            <h4 class="mt-2 fw-bold" style={{ color: "#6748f0" }}>
              Contact Person
            </h4>
          </div>

          <div class="mb-3 row pt-2">
            <label class="form-label  col-sm-2 col-form-label">Name</label>
            <div class="col-sm-10">
              <input
                type="email"
                class="form-control"
                name="person"
                value={state.person}
                onChange={handleChange}
              />
            </div>
          </div>

          <div class="mb-3 row">
            <label class=" form-label col-sm-2 col-form-label">Phone</label>

            <div class="col-sm-10">
              <input
                type="text"
                class="form-control"
                name="phone"
                value={state.phone}
                onChange={handleChange}
              />
            </div>
          </div>

          <div class="mb-3 row">
            <label class="form-label  col-sm-2 col-form-label">Email</label>
            <div class="col-sm-10">
              <input
                type="email"
                class="form-control"
                name="email"
                value={state.email}
                onChange={handleChange}
              />
            </div>
          </div>

          <div class="  row">
            <label class="form-label  col-sm-2 col-form-label">Comments</label>
            <div class="col-sm-10 ">
              <textarea
                type="textarea"
                class="form-control"
                name="comment"
                value={state.comment}
                onChange={handleChange}
              />
            </div>
          </div>

          {/* <div class="mb-3 row">
                  <label  class="form-label  col-sm-2 col-form-label"></label>
                                 <div class="col-sm-10">
                                 {comp.getallcomp.map((comp) => {
                                 // const time = moment(comp.createdAt).format('YYYY-mm-dd');
                 return(
                    <div class="border border-secondary d-flex justify-content-between ">
                       <p class="m-2 fw-bolder fst-italic font-monospace "><mark style={{color: "#6748f0"}}>{comp.comment}</mark></p>
                       <p>{auth.user.firstname}</p>
                       <p   style={{color: "red"}}>Date :{moment(comp.createdAt).format("DD-MM-YYYY ")}</p>
                       <p style={{color: "#0318fc"}} >Time :{moment(comp.createdAt).format(" hh:mm:ss")}</p>
                   </div>
                  )})}
               </div>
            </div> */}
        </div>

        <div class="col-md-3 col-sm-12  p-2">
          <div class="row">
            <div class="col">
              <Link to="/home">
                {" "}
                <button type="button" class="btn btn-dark  w-100">
                  Back
                </button>
              </Link>
            </div>
            <div class="col">
              <Link to="/home">
                {" "}
                <button
                  type="button"
                  class="btn btn-primary w-100 "
                  onClick={handleSubmit}
                  style={{ backgroundColor: "#6748f0" }}
                >
                  Submit
                </button>
              </Link>
            </div>
          </div>

          <div class="mt-2 border border-3 rounded p-2">
            <select
              class="form-select form-select-sm fs-6"
              aria-label=".form-select-sm example"
              type="text"
              name="status"
              value={state.status}
              onChange={handleChange}
            >
              <option>Status</option>
              <option>Setup</option>
              <option>Red</option>
              <option>Green</option>
              <option>Yellow</option>
            </select>

            <div class="mt-2">
              <select
                class="form-select form-select-sm fs-6"
                aria-label=".form-select-sm example"
                name="cemail"
                value={state.cemail}
                onChange={handleChange}
              >
                <option>Email</option>
                <option>Steve@sureway.com</option>
                <option>John@sureway.com</option>
                <option>Alex@sureway.com</option>
              </select>
            </div>

            <div class="mt-2">
              <select
                class="form-select form-select-sm fs-6"
                aria-label=".form-select-sm example"
                name="frequency"
                value={state.frequency}
                onChange={handleChange}
              >
                <option>Frequnecy</option>
                <option value="1">133</option>
                <option value="2">122</option>
                <option value="3">111</option>
              </select>
            </div>

            <div class="mt-2">
              <select
                class="form-select form-select-sm fs-6"
                aria-label=".form-select-sm example"
                name="product"
                value={state.product}
                onChange={handleChange}
              >
                <option>Product</option>
                <option>Steel Coils</option>
                <option>Pallatized Stones</option>
                <option>Lumber</option>
                <option>Frozen Meat</option>
                <option>Frozen Chicken</option>
                <option>Dry</option>
              </select>
            </div>

            <div class="mt-2">
              <Select
                isMulti
                placeholder="Equipments"
                value={comp.equipment}
                onChange={handleSelectEquipment}
                options={Equipments}
              />
            </div>

            <div class="mt-2 ">
              <Select
                isMulti
                placeholder="Commodities"
                value={state.commodities}
                onChange={handleSelectCommodities}
                options={Commodities}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddCustomer;
