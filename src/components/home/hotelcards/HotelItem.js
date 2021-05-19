import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function HotelItem({
  id,
  name,
  image,
  price,
  email,
  description,
  selfCatering,
  maxGuests,
}) {
  return (
    <Link to={"hotel/" + id}>
      <div className="card hover">
        <div className="card__name">
          <h5>{name}</h5>
        </div>
        <div className="card__img" style={{ backgroundImage: `url(${image})` }}>
          <div className="card__price">
            <h6> {price}$ / Day</h6>
          </div>
        </div>
        <div className="card__email">
          <p>
            <b>Email: </b>
          </p>
          <p>
            {email}
          </p>
        </div>
        <div className="card__text">
          <p>
            <b>Info: </b>
          </p>
          <p> {description}</p>
        </div>
        <div className="card__stats">
          <div className="card__stats-gender">
            <div className="selfCatering">
              <h6>{selfCatering === true ? "YES" : "NO"}</h6>
            </div>
            <div className="type">
              <p>SELF CATERING</p>
            </div>
          </div>
          <div className="card__stats-text">
            <div className="maxGuests">
              <h6>{maxGuests}</h6>
            </div>
            <div className="type">
              <p>MAX GUESTS</p>
            </div>
          </div>
        </div>
      </div>
    </Link>
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
  maxGuests: PropTypes.number.isRequired,
};

export default HotelItem;

