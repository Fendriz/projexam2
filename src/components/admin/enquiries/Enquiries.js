import React, { useState, useEffect } from "react";
import AdminMenu from "../adminform/AdminMenu";
import Form from "react-bootstrap/Form";
import EnquiriesId from "./EnquiriesId";
import { BASE_URL, headers, PATCH } from "../../../constants/api";

function Enquiries() {

    const url = BASE_URL + "enquiries";

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


                }
            })
            // .then(setHotel(hotels[0]))
            .catch((error) => console.log(error));
    }, []);


    console.log(enquiries)
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
                <Form className="enquire-form">
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
                    {enquiries.map((enc) => {
                        return <EnquiriesId
                            id={enc.id}
                            name={enc.name}
                            email={enc.email}
                            checkIn={enc.checkIn}
                            checkOut={enc.checkOut}
                        ></EnquiriesId>
                    })}
                </Form>
            </div>
        </>
    );
}
export default Enquiries;