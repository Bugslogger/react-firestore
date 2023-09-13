import Loader from "./Loader/Loader";
import React, { useState } from "react";

// this is a input box with button component
const Input = ({ change, submit, value }) => {
  const [loader, setloader] = useState(false);
  return (
    <div
      className="input-group shadow border-0 mx-auto rounded mb-3"
      style={{ width: "96%" }}
    >
      <input
        type="text"
        id="add"
        value={value}
        onChange={change}
        className="form-control py-3 border-0"
        placeholder="Add your today's task"
      />
      <button
        onClick={submit}
        className="btn btn-dark px-4"
        type="button"
        id="button-addon2"
      >
        {loader ? <Loader /> : "Add"}
      </button>
    </div>
  );
};

export default Input;
