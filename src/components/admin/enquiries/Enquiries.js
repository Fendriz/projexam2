import React, { useState, useEffect, useContext } from "react";

import AdminMenu from "../adminform/AdminMenu";
import Form from "react-bootstrap/Form";
import EnquiriesId from "./EnquiriesId";
import { BASE_URL, headers } from "../../../constants/api";
import { AuthContext } from "../../../context/AuthContext";

function Enquiries() {

    const url = BASE_URL + "enquiries";
    const { getHotel,hotels } = useContext(AuthContext);

    const options = { headers };
    const [enquiries, setEnquiries] = useState([]);
   
    const sort = [
        { id: 1, option: "Name" },
        { id: 2, option: "Email" },
        { id: 3, option: "Date" },
    ]; 

    useEffect(() => {
        fetch(url, options)
            .then((response) => response.json())
            .then((json) => {
                // handle error
                if (json.error) {
                    setEnquiries([]);
                } else {
                    console.log(json)
                    setEnquiries(json);
                    getHotel()
                }
            })
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
                <AdminMenu active={2}></AdminMenu>
                <Form className="form_update">
                   
                        <Form.Group controlId="exampleForm.ControlSelect1">
                            <Form.Control
                                as="select"
                                className="form_update-select"
                                onChange={changeSelect}
                            >
                                {sort.map((e) => {
                                    return <option key={e.id}>{e.option}</option>;
                                })}
                            </Form.Control>
                        </Form.Group>
                    <Form.Group className="form_readonly">
                        {enquiries.map((enc) => {
                            return <EnquiriesId
                                key={enc.id}
                                id={enc.id}
                                name={enc.name}
                                email={enc.email}
                                checkIn={enc.checkIn}
                                checkOut={enc.checkOut}
                                hotelid={enc.establishmentId}
                                hotels={hotels}
                            ></EnquiriesId>
                        })}

                    </Form.Group>
                   
                </Form>
            </div>
        </>
    );
}
export default Enquiries;