import React, { useState } from "react";
import { Input } from "@chakra-ui/react";

import Card from "../UI/Card";
import ButtonGroup from "../UI/Button";

const AddUser = () => {
  const [username, setUsername] = useState();
  const [age, setAge] = useState();
  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(username)
    console.log(age)
    setUsername("")
    setAge("")
  };
  return (
    <Card className="flex justify-center mt-20 ">
      <form className="flex flex-col w-[50%] bg-slate-200 rounded-md p-10">
        <span className="mb-5">
          <label htmlFor="username" className="font-bold text-xl">
            Username
          </label>
          <Input placeholder='Type here' variant='filled' value={username} onChange={(e)=>setUsername(e.target.value)} className="mt-2" id="username" />
        </span>
        <span>
          <label htmlFor="age" className="font-bold text-xl">Age</label>
          <Input placeholder='Type here' variant='filled' value={age} onChange={(e)=>setAge(e.target.value)} className="mt-2" id="age" />
        </span>
        {/* <ButtonGroup type="submit">Add User</ButtonGroup> */}
        <ButtonGroup type="submit" onClick={handleFormSubmit}>Add User</ButtonGroup>
      </form>
    </Card>
  );
};

export default AddUser;
