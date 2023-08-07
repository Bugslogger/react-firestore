import React from "react";

const SendData = () => {
  // here i will create a state and store form data into a state
  // and then pass state into "SendToFirebase()" function
  // which sends data to firebase.

  const [formdata, setformdata] = useState({
    email: "",
    password: "",
  });

  function onSubmit() {
    // import the function we have create in function.js
    // first parameter is collection name. you can name anything you want.
    //  second parameter is data you want to send to firebase.
    // here state "formdata" is a object which has key value pair
    //  email and password.
    // now let set state value email and password.
    // Now let checck it again.

    // SendToFirebase("firstCollection", formdata)
    //   .then((res) => {
    //     console.log("Send To Firebase: ", res);
    //   })
    //   .catch((error) => console.log(error));

    // Comment the above code

    // custom Id
    // first parameter is collection name. you can name anything you want.
    //  i can also use same collection name "firstCollection" this one.
    // second parameter here is an Id
    // third parameteer is data.

    // here in custon Id if i submit data again with the same id it will overwrite
    // old data stored in firebase with new data.
    //  lemme shhow you.
    // So, aas you show it overwrites old data with new one.
    SendDataWithCustomID("customIdCollection", "xyz", formdata)
      .then((res) => {
        console.log("Firebase Custom Id: ", res);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <div className="w-50 mx-auto">
      <div className="text-start">
        <div class="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input
            onChange={(e) => {
              // this will get value from input and store it into state
              setformdata({ ...formdata, email: e.target.value });
            }}
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
          />
          {/* <small id="emailHelp" class="form-text text-muted">
          We'll never share your email with anyone else.
        </small> */}
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input
            onChange={(e) => {
              // this will get value from input and store it into state
              setformdata({ ...formdata, password: e.target.value });
            }}
            type="password"
            class="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
          />
        </div>
        <button onClick={onSubmit} type="submit" class="btn my-3 btn-primary">
          Submit
        </button>
      </div>
    </div>
  );
};

export default SendData;

// This we have already seen in last video
