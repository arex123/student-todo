import "./App.css";
import AddUser from "./components/User/AddUser";
import { ChakraProvider, useStatStyles } from "@chakra-ui/react";
import UserList from "./components/User/UserList";
import { useState } from "react";
import Wrapper from "./components/Helpers/Wrapper";

function App() {
  const [userList, setUserList] = useState([]);
  const handleNewUser = (name, age) => {
    setUserList((prev) => [...prev, { name, age, id: Math.random() + name }]);
  };
  return (
    <Wrapper>
      <ChakraProvider>
        <AddUser onNewUser={handleNewUser} />
        <UserList users={userList} />
      </ChakraProvider>
    </Wrapper>
  );
}

export default App;
