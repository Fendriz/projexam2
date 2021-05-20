import React, { useState, useEffect } from "react";
import { BASE_URL, headers } from "../../../constants/api";
import Spinner from "react-bootstrap/Spinner";
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
        return (
        <>
            <div className="search">
                <div className ="search_text">
                    <h1>Hotels In Bergen</h1>
                    <Search handleSearch={filter}/> 
                </div>
            </div>
            <Spinner animation="border" className="spinner" />
        </>
        
        );
        
    }

    function filter(searchTerm) {
        const searchValue = searchTerm.toLowerCase();
        const filteredArray = hotels.filter((hotel) => {
            const lowerCase = hotel.name.toLowerCase()

            return(
                lowerCase.indexOf(searchValue) !== -1
            )
        });
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
                <div className="hotelCards">
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
                </div>
                
            </>
        );
   
   
}

export default HotelCards;
