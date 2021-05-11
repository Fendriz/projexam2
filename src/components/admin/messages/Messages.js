import React, { useState, useEffect } from "react";
import AdminMenu from "../adminform/AdminMenu";
import Form from "react-bootstrap/Form";
import MessagesId from "./MessagesId";
import { BASE_URL, headers, PATCH } from "../../../constants/api";

function Messages() {

  const url = BASE_URL + "contacts";

  const options = { headers };
  const [messages, setMessages] = useState([]);
  const opt = [
    { id: 1, option: "FirstName" },
    { id: 2, option: "LastName" },
    { id: 3, option: "Email" },
  ];

  useEffect(() => {
    fetch(url, options)
      .then((response) => response.json())
      .then((json) => {
        // handle error
        if (json.error) {
          setMessages([]);
        } else {
          console.log(json)
          setMessages(json);
     
         
        }
      })
      // .then(setHotel(hotels[0]))
      .catch((error) => console.log(error));
  }, []);

 

  function changeSelect(data) {
    console.log("data", data)
    // const url = BASE_URL + "contacts"
    // const options = { headers, method: "POST", body: JSON.stringify(data) }
    // await fetch(url, options)
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
              {opt.map((e) => {
                return <option key={e.id}>{e.option}</option>;
              })}
            </Form.Control>
          </Form.Group>
          {messages.map((mes) => {
            return <MessagesId
              id={mes.id}
              name={mes.name}
              email={mes.email}
              message={mes.message}
            ></MessagesId>
          })}
       
        </Form>
      </div>
    </>
  );
}
export default Messages;
