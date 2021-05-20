import React, { useState, useEffect, useContext } from "react";
import AdminMenu from "../adminform/AdminMenu";
import Form from "react-bootstrap/Form";
import EnquiriesId from "./EnquiriesId";
import { BASE_URL, headers } from "../../../constants/api";
import { AuthContext } from "../../../context/AuthContext";
import Spinner from "react-bootstrap/Spinner";

function Enquiries() {

    const url = BASE_URL + "enquiries";
    const { getHotel,hotels } = useContext(AuthContext);
    const options = { headers };
    const [enquiries, setEnquiries] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetch(url, options).then((response) => response.json()).then((json) => {
            if (json.error) { 
                setEnquiries([]); 
            } else { setEnquiries(json);
                setLoading(false);
                getHotel();
            }
        })
            .catch((error) => console.log(error));
    }, []);
    //if (loading) { return <Spinner animation="border" className="spinner" />; }
    return (
        <div className="container_hotel">
            <AdminMenu active={2}></AdminMenu>
            {loading?<Spinner animation="border" className="spinner" />:null}
            <Form className="form_update">
                <Form.Group className="form_readonly">
                    {(hotels.length>0)?enquiries.map((enc,i) => {
                        return <EnquiriesId
                            key={enc.id}
                            id={enc.id}
                            name={enc.name}
                            email={enc.email}
                            checkIn={enc.checkIn}
                            checkOut={enc.checkOut}
                            hotelid={enc.establishmentId}
                            hotels={hotels}
                            order={i}
                        ></EnquiriesId>
                    }):null}
                </Form.Group>

            </Form>
        </div>
    );
}
export default Enquiries;
