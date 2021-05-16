import React, { useState, useEffect } from "react";
import AdminMenu from "../adminform/AdminMenu";
import Form from "react-bootstrap/Form";
import MessagesId from "./MessagesId";
import { BASE_URL, headers} from "../../../constants/api";

function Messages() {

  const url = BASE_URL + "contacts";

  const options = { headers };
  const [messages, setMessages] = useState([]);

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

  return (
    <>
      <div className="container_hotel">
        <AdminMenu active={3}></AdminMenu>
        <Form className="form_update">
          <Form.Group className="form_readonly">
            {messages.map((mes,i) => {
              return <MessagesId
                key={mes.id}
                id={mes.id}
                name={mes.name}
                email={mes.email}
                message={mes.message}
                order={i}
              ></MessagesId>
            })}
          </Form.Group>
        </Form>
      </div>
    </>
  );
}
export default Messages;
