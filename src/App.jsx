import "./App.css";
import AddUser from "./components/User/AddUser";
import { ChakraProvider } from "@chakra-ui/react";

function App() {
  return (
    <ChakraProvider>
      <AddUser />
    </ChakraProvider>
  );
}

export default App;

