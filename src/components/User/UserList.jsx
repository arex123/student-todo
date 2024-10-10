import React from "react";
import Card from "../UI/Card";

const UserList = (props) => {
//   const users = [
//     { name: "Max", age: 30 },
//     { name: "jane", age: 20 },
//     { name: "harry", age: 12 },
//     { name: "ella", age: 9 },
//     { name: "adi", age: 18 },
//     { name: "rohit", age: 22 },
//     { name: "govind", age: 23 },
//     { name: "sunil", age: 24 },
//     { name: "sachin", age: 23 },
//     { name: "goku", age: 86 },
//   ];
  return (
    <Card className="my-8 mx-auto w-[90%] max-w-[40rem]">
      <ul className="list-none p-[1rem]">
        {props.users.map((user) => (
          <li key={user.id} className="my-[0.5rem] mx-0 p-[0.5rem] border border-gray-300">
            {user.name}({user.age} years old)
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default UserList;
