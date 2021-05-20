import React, { useState, useEffect } from "react";
import Spinner from "react-bootstrap/Spinner";
import { useParams } from "react-router-dom";
import { BASE_URL, headers } from "../../../constants/api";
import EnquireModal from "../../modals/enquireModal"



function HotelDetails() {
    const [detail, setDetail] = useState(null);
    const [loading, setLoading] = useState(true);
    const { id } = useParams();
    const url = BASE_URL + "establishments/" + id;
    const options = { headers };

    useEffect(() => {
        fetch(url, options)
            .then((response) => response.json())
            .then((json) => {
                // handle error
                if (json.error) {
                    setDetail([]);
                } else {
                    setDetail(json);
                    setLoading(false);
                }
            })
            .catch((error) => console.log(error));
    }, []);

    if (loading) {
        return <Spinner animation="border" className="spinner" />;
    }
    const maploc = `https://www.google.com/maps/embed/v1/place?q=${detail.lat},${detail.lng}&key=AIzaSyDDs8r6GYDiEfFWP8EakjkMoCqU0-mI7Ho`
    return (
        <div className="detail">
            <div className="detail_image" style={{backgroundImage: `url(${detail.image})`}}>
                <div className="detail_name">
                    <h1>{detail.name}</h1>
                </div>
            </div>
            <div className="detail_email">
                <h5>{detail.address}</h5>
            </div>
            <div className="detail_container">
                <div className="detail_content-info">
                    <h4>Hotel Info</h4>
                    <p><b>Email: </b>{detail.email}</p><br></br>
                    <p>{detail.description} Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla ab esse architecto vero. Accusamus maxime beatae inventore sunt sequi alias fugit laudantium nemo, amet suscipit consectetur perspiciatis, provident necessitatibus soluta. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla ab esse architecto vero. Accusamus maxime beatae inventore sunt sequi alias fugit laudantium nemo, amet suscipit consectetur perspiciatis, provident necessitatibus soluta.</p>
                </div>
                <div className="detail_content-location">
                    <h4>Location</h4>
                    <iframe 
                        title="hotel-location"
                        width="100%" 
                        height="500" 
                        frameBorder="0" 
                        scrolling="no" 
                        marginHeight="0" 
                        marginWidth="0" 
                        src={maploc}
                    >
                    </iframe>
                </div>
                <div className="detail_content-enquire">
                    <div className="price">
                        <div><i className="fas fa-tags"></i></div>
                        <div><p>PRICE PER NIGHT: </p></div>
                        <div className="gen">{detail.price}$ / Day</div>
                    </div>
                    <div className="catering">
                        <div><i className="fas fa-utensils"></i></div>
                        <div><p>SELF CATERING: </p></div>
                        <div className="gen">{detail.selfCatering===true?"YES":"NO"}</div>
                    </div>
                    <div className="guests">
                        <div><i className="fas fa-user-friends"></i></div>
                        <div><p>MAX GUESTS: </p></div>
                        <div className="gen">{detail.maxGuests}</div>
                    </div>
                    <EnquireModal id={id}></EnquireModal>
                </div>
            </div>
        </div>

        );
}

export default HotelDetails;
