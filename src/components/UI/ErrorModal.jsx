import React from "react";
import ReactDOM from 'react-dom'
import Card from "./Card";
import ButtonGroup from "./Button";

const BackDrop = (props)=>{
    return (<div
    onClick={props.onClose}
    className="fixed top-0 left-0 w-full h-lvh z-10 bg-black bg-opacity-75"
  ></div>)
}

const ModalOverlay = (props)=>{
     return (<Card className="fixed top-[30vh] left-[10%] z-[100] overflow-hidden ">
        <header className="bg-[#4f005f] p-4 ">
          <h2 className="m-0 text-white">{props.title}</h2>
        </header>
        <div className="p-4">
          <p>{props.message}</p>
        </div>
        <footer className="p-4 flex justify-end md:left-1/2 md:-translate-x-1/2 md:w-[40rem]">
          <ButtonGroup onClick={props.onClose}>Okay</ButtonGroup>
        </footer>
      </Card>)

}

const ErrorModal = (props) => {
  return (
    <>
     {ReactDOM.createPortal(<BackDrop onClose={props.onClose}/>,document.getElementById('backdrop-root'))}
     {ReactDOM.createPortal(<ModalOverlay title={props.title} message={props.message} onClose={props.onClose}/>,document.getElementById('modal-root'))}
    </>
  );
};

export default ErrorModal;
