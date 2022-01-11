import React, { useEffect, useState } from "react";
import { ExcelRenderer } from "react-excel-renderer";
import { useParams } from "react-router-dom";
import axios from "axios";

const SaveFile = () => {
  const { id } = useParams();
  const [csvFile, setcsvFile] = useState();

  const handleChange = (event) => {
    setcsvFile(event.target.files[0]);
  };

  const HandleSubmit = (id) => {
    const formData = new FormData();
    formData.append("file", csvFile);

    axios
      .post(`http://localhost:4000/user/savefile/${id}`, formData)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div
      class="container mt-3 shadow-lg p-3 mb-5 bg-body rounded  bg-light p-2"
      style={{ backgroundColor: "light-grey" }}
    >
      <input
        class="form-control form-control-sm mb-3"
        type="file"
        onChange={handleChange}
        style={{ padding: "10px" }}
      />
      <button
        type="button"
        class="btn btn-primary btn-sm"
        data-bs-toggle="tooltip"
        data-bs-placement="top"
        title="Upload File"
        onClick={() => HandleSubmit(id)}
      >
        Upload
      </button>
    </div>
  );
};

export default SaveFile;
