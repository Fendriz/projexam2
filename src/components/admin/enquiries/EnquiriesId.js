import React, {useState,useEffect} from "react";

import Form from "react-bootstrap/Form";
import PropTypes from "prop-types";
import Moment from 'moment';
import DeleteFromApi from "../adminform/DeleteFromApi";

function EnquiriesId({ id, name, email, checkIn, checkOut, hotels, hotelid, order }) {
    const [hotel, setHotel] = useState("");
    useEffect(() => {
        hotels.forEach(hotel => {
            if (hotel.id === hotelid) {
                setHotel(hotel.name)
            }
        })
        
    }, []);
    return (
        <Form.Group className="formGroup-readonly">
            <Form.Label className="readonly-id">#{order+1} </Form.Label>
            <DeleteFromApi id={id} name={name} button="fa-window-close" item="enquiries/"/>
            <Form.Group  >
                <Form.Label>Hotel Name</Form.Label>
                <Form.Control value={hotel} readOnly name="hotelName" />
            </Form.Group>
            <Form.Group >
                <Form.Label>Name</Form.Label>
                <Form.Control value={name} readOnly name="name" />
            </Form.Group>
            <Form.Group >
                <Form.Label>Email</Form.Label>
                <Form.Control value={email} readOnly name="email" />
            </Form.Group>
            <Form.Group>
                <Form.Label>Check Inn</Form.Label>
                <Form.Control
                   
                    name="checkIn"
                    value={Moment(checkIn).format("MMM DD YYYY")}
                    readOnly
                />
            </Form.Group>
            <Form.Group>
                <Form.Label>Check Out</Form.Label>
                <Form.Control
                 
                    name="checkOut"
                    value={Moment(checkOut).format("MMM DD YYYY")}
                    readOnly
                />
            </Form.Group>
        </Form.Group>
    );
}
EnquiriesId.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    checkIn: PropTypes.string.isRequired,
    checkOut: PropTypes.string.isRequired,
    hotels: PropTypes.array.isRequired,
    hotelid: PropTypes.string.isRequired,
    order: PropTypes.number.isRequired,
};
export default EnquiriesId;
