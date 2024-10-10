import "./App.css";
import AddUser from "./components/User/AddUser";
import { ChakraProvider } from "@chakra-ui/react";
import UserList from "./components/User/UserList";

function App() {
  return (
    <ChakraProvider>
      <AddUser />
      <UserList users={[]}/>
    </ChakraProvider>
  );
}

export default App;

