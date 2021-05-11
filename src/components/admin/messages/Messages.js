import React from "react";
import AdminMenu from "../adminform/AdminMenu";
import Form from "react-bootstrap/Form";
import MessagesId from "./MessagesId";

function Messages() {
  const options = [
    { id: 1, option: "FirstName" },
    { id: 2, option: "LastName" },
    { id: 2, option: "Email" },
  ];
  function changeSelect() {
    console.log("changeselct");
  }
  return (
    <>
      <div className="container_hotel">
        <AdminMenu active={3}></AdminMenu>
        <Form className="form_update">
          <Form.Group controlId="exampleForm.ControlSelect1">
            <Form.Control
              as="select"
              className="form_update-select"
              onChange={changeSelect}
            >
              {options.map((e) => {
                return <option key={e.id}>{e.option}</option>;
              })}
            </Form.Control>
          </Form.Group>
          <MessagesId
            id="heisannj"
            firstName="linda"
            lastName="heisanjl"
            email="ting"
            message="johnny"
          ></MessagesId>
        </Form>
      </div>
    </>
  );
}
export default Messages;
