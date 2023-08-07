import React, { useEffect, useState } from "react";
import { GetAllData, GetDataWithCustomID } from "../firebase/functions";

const GetData = () => {
  const [first, setfirst] = useState([]);
  useEffect(() => {
    // get fecth all data from "firstCollection" collection name.
    // import 'GetAllData' function

    GetAllData("firstCollection").then((docs) => {
      // here we need to map docs to get and store each data in state.
      docs.forEach((doc) => {
        // log it
        // console.log(doc.id, doc.data()); // let check browser console.
        // here doc.id is unique Id of object
        // doc.data() is data from firestore databse in object form.

        setfirst((first) => [...first, doc.data()]);
        //  set data in state and display it on browser.
      });
    });
    //  it dublication data in log.
    //  so first fix it for now.

    getIdData(); // get data with ID
  }, []);

  const getIdData = async () => {
    //  if i change the ID
    const res = await GetDataWithCustomID(
      "firstCollection",
      "epFPe878IYRJiEGuOLcl"
    );
    console.log("Is data available: ", res.exists()); // as you saw it console it return true coz data exists in database.
    console.log("ID Data: ", res.data());
  };

  return (
    <div className="text-left">
      {
        // sorry i forgot we have to map it.
        // coz we have array of data.
        first.map((value) => {
          // something is wrong
          //    ok i'm missing return here lol.
          return (
            <>
              <br />
              <div>Name: {value?.name}</div>
              <div>Email: {value?.email}</div>
              <div>Password: {value?.password}</div>
            </>
          );
        })
      }
    </div>
  );
};

export default GetData;
