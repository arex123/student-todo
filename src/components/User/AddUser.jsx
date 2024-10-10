import React, { useState } from "react";
import { Input } from "@chakra-ui/react";

import Card from "../UI/Card";
import ButtonGroup from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

const AddUser = (props) => {
  const [username, setUsername] = useState("");
  const [age, setAge] = useState("");
  const [error, setError] = useState();
  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (
      username.trim().length == 0 ||
      age.trim().length == 0 ||
      age.trim() <= 0
    ) {
      setError({title:"Invalid Input",message:"Enter valid username/age(non empty value)"})
      return;
    }
    if (
      age.trim() <= 0
    ) {
      setError({title:"Invalid Input",message:"Age Should be Positive (> 0)"})
      return;
    }
    props.onNewUser(username, age);
    console.log(username);
    console.log(age);
    setUsername("");
    setAge("");
  };

  const handleCloseModal = ()=>{
    setError()
  }
  return (
    <div>
      {error && <ErrorModal title={error.title} message={error.message} onClose={handleCloseModal}/>}
      <Card className="flex justify-center mt-20 ">
        <form className="flex flex-col w-[50%] rounded-md p-10">
          <span className="mb-5">
            <label htmlFor="username" className="font-bold text-xl">
              Username
            </label>
            <Input
              placeholder="Type here"
              variant="filled"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="mt-2"
              id="username"
            />
          </span>
          <span>
            <label htmlFor="age" className="font-bold text-xl">
              Age
            </label>
            <Input
              placeholder="Type here"
              variant="filled"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              className="mt-2"
              id="age"
            />
          </span>
          {/* <ButtonGroup type="submit">Add User</ButtonGroup> */}
          <ButtonGroup type="submit" onClick={handleFormSubmit}>
            Add User
          </ButtonGroup>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;
