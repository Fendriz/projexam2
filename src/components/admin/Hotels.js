import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { BASE_URL, headers } from "../../constants/api";

function Hotels() {
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
            <h1>Hotels</h1>
            {error && <div className="error">{error}</div>}
            <ul>
                {hotels.map((hotel) => {
                    return (
                        <li key={hotel.id}>
                            <NavLink to={`/admin/hotels/edit/${hotel.id}`}>{hotel.name}</NavLink>
                        </li>
                    );
                })}
            </ul>
        </>
    );
}

export default Hotels;
