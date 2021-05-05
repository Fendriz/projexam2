import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { BASE_URL, headers } from "../../../constants/api";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import HotellItem from "./HotelItem"

function HotelCards() {
    const [hotels, setHotels] = useState([]);
    const [error, setError] = useState(null);

    const url = BASE_URL + "establishments";

    const options = { headers };

    useEffect(() => {
        fetch(url, options)
            .then((response) => response.json())
            .then((json) => {
                console.log(json);
                // handle error
                if (json.error) {
                    setHotels([]);
                    setError(json.message);
                } else {
                    setHotels(json);
                }
            })
            .catch((error) => console.log(error));
    }, []);

    return (
        <>
            <h1>Featured Hotels</h1>
            {error && <div className="error">{error}</div>}
            <div className="flex-container">
                {hotels.map((hotel) => {
                     const { id, name, image, price, email, description,selfCatering,maxGuests } = hotel;
                    return (
                      
                            <HotellItem
                            id={id}
                            name={name}
                            image={image}
                            price={price}
                            email={email}
                            description={description}
                            selfCatering={selfCatering}
                            maxGuests={maxGuests}
                            />
                       
                    );
                })}
            </div>
        </>
    );
}

export default HotelCards;