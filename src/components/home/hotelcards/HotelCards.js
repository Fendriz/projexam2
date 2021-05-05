import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { BASE_URL, headers } from "../../../constants/api";
import Spinner from "react-bootstrap/Spinner";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import HotellItem from "./HotelItem"
import Search from "../Search"

function HotelCards() {
    const [hotels, setHotels] = useState([]);
    const [filterdHotels, setFilteredHotels] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);


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
                    setFilteredHotels([]);
                    setError(json.message);
                } else {
                    setHotels(json);
                    setFilteredHotels(json);
                    setLoading(false);
                }
            })
            .catch((error) => console.log(error));
    }, []);

    if (loading) {
        return <Spinner animation="border" className="spinner" />;
        
    }
    if(!loading) {
        console.log(hotels)
    }

    function filter(searchTerm) {

        const searchValue = searchTerm.toLowerCase();

        const filteredArray = hotels.filter((hotel) => {

            const lowerCase = hotel.name.toLowerCase()

            return(
                lowerCase.indexOf(searchValue) !== -1
            )
        });
        console.log(filteredArray)
        setFilteredHotels(filteredArray)
    }

    return (
        <>
            <div className="search">
                <div className ="search_text">
                    <h1>Hotels In Bergen</h1>
                    <Search handleSearch={filter}/> 
                </div>
            </div>
            {error && <div className="error">{error}</div>}
            <div className="flex-container">
                {filterdHotels.map((hotel) => {
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
                        key={id}
                        />
                    );
                })}
            </div>
        </>
    );
}

export default HotelCards;