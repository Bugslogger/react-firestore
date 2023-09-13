import React, { useEffect, useState } from "react";
import Input from "./UI/Input";
import {
  DeleteFromFirestore,
  GetAllData,
  SendToFirebase,
  UpdateData,
} from "../firebase/functions";
import { FaPen } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import Loader from "./UI/Loader/Loader";

const Todo = () => {
  const [InputValue, setInputValue] = useState(""); // this state will get text from input.
  const [responseData, setresponseData] = useState([]); // this will store data got from database
  const [isUpdatable, setisUpdatable] = useState(false); // when click on pen icon will set to true
  const [isloading, setisloading] = useState(false);

  /**
   * I will write all logic in this one file only.
   * we have already create function for sending data to database in firebase.js file
   * now just import it.
   * video this how functions are create is available on youtube.
   *
   * As you can see it is automatically imported
   */

  async function SendDataToDatabase() {
    /**
     * this function takes 2 parameter
     * 1. collection name
     * 2. data to store in database.
     *
     * this function will be called on submit button
     * clear the input after sending the data to firebase.
     */

    if (!InputValue) return; //checks if input text is empty or not.

    const response = await SendToFirebase("test", { name: InputValue });
    if (response.id) {
      setInputValue("");
      GetDataFromDaatabase();
    }
    console.log("Data send to database: ", response.id);
  }

  /**
   * let create a function to get text from InputBox
   */

  function InputValueChange(event) {
    if (!event.target) return; // this will check if target in input is undefined or not.

    setInputValue(event.target.value); // set input text to state.
  }

  /**
   * Now write function to gget data from database
   * this method will be called on load.
   */
  async function GetDataFromDaatabase() {
    setresponseData([]);
    const response = await GetAllData("test"); // this function takes 1 parameter which is collection name.
    response.forEach((docs) => {
      const data = docs.data();
      console.log("Response: ", data, docs.id);
      setresponseData((prevState) => [...prevState, { ...data, id: docs.id }]); // here it will store id with data getting from firebase
    });
    setisloading(false);
  }

  function Update(name, id) {
    if (!isUpdatable) {
      setInputValue(name); // when i will click on pen icon it will show the text of that box in input
      setisUpdatable(true);
    }
    /**
     * here i will update data on pen icon click.
     * `id` is the uniqe id for each data.
     * now let import it.
     *
     * I will get latest text from set input box to update the data.
     *
     * now let test it.
     *
     * i will add this function to Input add button
     * on first click on pen icon it will just dislay text in input
     * on second click it will update text to database
     *
     * something went wrong.
     * oh i forgot i have to click on pen icon instead of add button LOL.
     *
     */
    if (isUpdatable) {
      UpdateData("test", id, { name: InputValue }).then((res) => {
        GetDataFromDaatabase(); // this wil get updated data and render it to UI. after an update
        setisUpdatable(false); // make is updatable to false
        setInputValue([]); // make input empty
        console.log("update: ", res);
      });
    }
  }

  function Delete(id) {
    setisloading(true);
    DeleteFromFirestore("test", id).then(() => {
      GetDataFromDaatabase();
    });
  }

  useEffect(() => {
    setisloading(true);
    GetDataFromDaatabase();
    // requests for data from database and store it to state
  }, []);

  return (
    <div className="w-75 mx-auto my-4">
      {/* pass function as prop to input onChange */}
      <Input
        change={InputValueChange}
        submit={SendDataToDatabase}
        value={InputValue} // add this prop to input value property.
      />
      {!isloading &&
        responseData.map(({ name, id }) => {
          return (
            <div
              key={name}
              className="shadow fw-bold p-3 mb-2 d-flex flex-row justify-content-between bg-white rounded mx-auto"
              style={{ width: "96%" }}
            >
              <div>{name}</div>
              <div>
                <MdDelete
                  className="text-danger mx-3"
                  onClick={() => Delete(id)}
                />{" "}
                {/* // here forgot to pass id */}
                <FaPen
                  className="text-success"
                  onClick={() => Update(name, id)}
                />{" "}
              </div>
              {/* just forgot to pass first argument */}
            </div>
          );
        })}
      {isloading && <Loader />}
    </div>
  );
};

export default Todo;
