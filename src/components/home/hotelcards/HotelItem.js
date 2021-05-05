import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faHeart } from '@fortawesome/free-solid-svg-icons'
// import { useDispatch,useSelector } from "react-redux";


function HotelItem({ id, name, image, price,email,description,selfCatering,maxGuests }) {
    let catering;
	return (
        <>
		{/* <Card>
			<Card.Header>
                <Card.Title className="card_title">{name}
                    
                </Card.Title>
			</Card.Header>
			<Card.Img variant="top" src={image} />
            <Card.Text>{price}$ / Day</Card.Text>
			<Card.Body>
				<Card.Text>Rating: {email}</Card.Text>
				<Card.Text>Released: {description}</Card.Text>
                <div className="card_buttom">
                    <div>
                    <Card.Text>{selfCatering===true?catering="YES":catering="NO"}</Card.Text>
                    <Card.Text>SELF CATERING</Card.Text>
                    </div>
                    <div>
                    <Card.Text>{maxGuests}</Card.Text>
                    <Card.Text>MAXGUESTS </Card.Text>
                    </div>
                </div>
				<Link to={"game/" + id}>
					<Button variant="secondary" id="button_view" block>
						View
					</Button>
					
				</Link>
			</Card.Body>
		</Card> */}
                <div className="card hover">
               
					<div className="card__name">
						<h2>{name}</h2>
					</div>
					<div className="card__img" style={{backgroundImage: `url(${image})`}}>
                        <div className="card__price">
                            <p> {price}$ / Day</p>
                        </div>
					</div>
					<div class="card__faction">
						<h3>{email}</h3>
					</div>
					<div class="card__text">
						<p> {description}</p>
					</div>
					<div class="card__stats">
						<div class="card__stats-gender">
							<div class="selfCatering">{selfCatering===true?catering="YES":catering="NO"}</div>
							<div class="type">SELF CATERING</div>
						</div>
						<div class="card__stats-text">
							<div class="maxGuests">{maxGuests}</div>
							<div class="type">MAXGUESTS</div>
						</div>
					</div>
                </div>
				
    </>
	);
}
HotelItem.propTypes = {
	id: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	image: PropTypes.string.isRequired,
	price: PropTypes.number.isRequired,
	email: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    selfCatering: PropTypes.bool.isRequired,
    maxGuests: PropTypes.number.isRequired
};

export default HotelItem;