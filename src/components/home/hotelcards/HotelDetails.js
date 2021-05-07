import React, { useState, useEffect } from "react";
import Spinner from "react-bootstrap/Spinner";
import { useParams } from "react-router-dom";
import { BASE_URL, headers } from "../../../constants/api";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";




function GameDetails() {
	const [detail, setDetail] = useState(null);
	const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

	let { id } = useParams();
    console.log(id)
    let catering;
	const url = BASE_URL + "establishments/" + id;

    const options = { headers };

    useEffect(() => {
        fetch(url, options)
            .then((response) => response.json())
            .then((json) => {
                console.log(json);
                // handle error
                if (json.error) {
                    setDetail([]);
                    setError(json.message);
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
    if(!loading) {
        console.log(detail)
    }

    
    let maploc = `https://www.google.com/maps/embed/v1/place?q=${detail.lat},${detail.lng}&key=AIzaSyDDs8r6GYDiEfFWP8EakjkMoCqU0-mI7Ho`
	return (
          
        <div className="detail">
            <div className="detail_image" style={{backgroundImage: `url(${detail.image})`}}>
                <div className="detail_name">
                    <h1>{detail.name}</h1>
                </div>
            </div>
            <div className="detail_email">
                <h5>Email: {detail.email}</h5>
            </div>
            <div className="container_hotel">
                <div className="detail_content-info">
                    <h4>Hotel Info</h4>
                    <p>{detail.description}</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla ab esse architecto vero. Accusamus maxime beatae inventore sunt sequi alias fugit laudantium nemo, amet suscipit consectetur perspiciatis, provident necessitatibus soluta. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla ab esse architecto vero. Accusamus maxime beatae inventore sunt sequi alias fugit laudantium nemo, amet suscipit consectetur perspiciatis, provident necessitatibus soluta.</p>
                </div>
                <div className="detail_content-location">
                    <h4>Location</h4>
                    <iframe 
                        width="100%" 
                        height="600" 
                        frameborder="0" 
                        scrolling="no" 
                        marginheight="0" 
                        marginwidth="0" 
                        src={maploc}
                        >
                    </iframe>
                </div>
                <div className="detail_content-enquire">
                    <h4>Price</h4>
                   
                        <div className="enq">
                            <div><i class="fas fa-tags"></i></div>
                            <div><p>PRICE PER NIGHT: </p></div>
                            <div className="gen">{detail.price}$ / Day</div>
                        </div>
                        <div className="enq">
                            <div><i class="fas fa-utensils"></i></div>
                            <div><p>SELF CATERING: </p></div>
                            <div className="gen">{detail.selfCatering===true?catering="YES":catering="NO"}</div>
                        </div>
                        <div className="enq">
                            <div><i class="fas fa-user-friends"></i></div>
                            <div><p>MAX GUESTS: </p></div>
                            <div className="gen">{detail.maxGuests}</div>
                        </div>
                        <div className="Button">
                            Enquire
                        </div>
                   
                </div>
            </div>
        </div>
     
	);
}

export default GameDetails;