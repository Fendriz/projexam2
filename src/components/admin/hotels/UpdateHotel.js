import React, { useState, useEffect,useContext } from "react";
import { useForm } from "react-hook-form";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { BASE_URL, headers } from "../../../constants/api";
import { yupResolver } from "@hookform/resolvers/yup";
import AdminHotelMenu from "../adminform/AdminHotelMenu";
import AdminMenu from "../adminform/AdminMenu";
import { SchemaHotel } from "../../validation/Schema";
import Spinner from "react-bootstrap/Spinner";
import DeleteFromApi from "../adminform/DeleteFromApi";
import HotelModal from "../../modals/hotelModal";

import { AuthContext } from "../../../context/AuthContext";
function UpdateHotel() {
  const { register, handleSubmit, setValue, formState: { errors }, } = useForm({ resolver: yupResolver(SchemaHotel), });
  const [hotels, setHotels] = useState([]);
  const [hotel, setHotel] = useState({});
  const [data, setData] = useState({});
  const { openModal,ismodal } = useContext(AuthContext);
  const [loading, setLoading] = useState(true);
  const [first, firstload] = useState(false);
  const url = BASE_URL + "establishments";
  const options = { headers };

  useEffect(() => {
    fetch(url, options).then((response) => response.json()).then((json) => {
        if (json.error) { setHotels([]); } else { setHotels(json); setLoading(false); } })
      .catch((error) => console.log(error));
  }, []);

  if (loading) { return <Spinner animation="border" className="spinner" />; }
  if (!loading) {
    if (!first) {
      setHotel(hotels[0]);
      firstload(true);
    }

    async function onSubmit(data) {
      setData(data);
      openModal();
    }
    console.log(hotels)
    function changeSelect(data) {
      hotels.forEach((hotel) => {
        let trimmedHotel=hotel.name.trim()
        if (data.target.value === trimmedHotel) {
          setHotel(hotel);
          setValue("name", hotel.name) 
          setValue("address", hotel.address);
          setValue("email", hotel.email);
          setValue("price", hotel.price);
          setValue("maxGuests", hotel.maxGuests);
          setValue("image", hotel.image);
          setValue("lat", hotel.lat);
          setValue("lng", hotel.lng);
          setValue("description", hotel.description);
          setValue("selfCatering", hotel.selfCatering);
        }
      });
    }
    return (
      <div className="container_hotel">
        <AdminMenu active={1}></AdminMenu>
        <Form onSubmit={handleSubmit(onSubmit)} className="form_update">
          <AdminHotelMenu active={2}></AdminHotelMenu>
          <Form.Group controlId="exampleForm.ControlSelect1">
            <Form.Control
              as="select"
              className="form_update-select"
              onChange={changeSelect}
            >
              {hotels.map((hot) => {
                return <option key={hot.id}>{hot.name}</option>;
              })}
            </Form.Control>
          </Form.Group>
          {(typeof hotel.id === 'string' &&typeof hotel.name === 'string')?<DeleteFromApi id={hotel.id} name={hotel.name} button="fa-trash-alt" item="establishments/"/>:<div></div>}
          <Form.Group className="form-group-flex">
            <Form.Group className="form-group-left ">
              <Form.Group>
                <Form.Label>Hotel Name</Form.Label>
                <Form.Control
                  name="name"
                  {...register("name")}
                  defaultValue={hotel.name}
                />
                {errors.name && (
                  <p className="text-danger">{errors.name.message}</p>
                )}
              </Form.Group>
              <Form.Group>
                <Form.Label>Hotel Address</Form.Label>
                <Form.Control
                  name="address"
                  {...register("address")}
                  defaultValue={hotel.address}
                />
                {errors.address && (
                  <p className="text-danger">{errors.address.message}</p>
                )}
              </Form.Group>
              <Form.Group>
                <Form.Label>Email</Form.Label>
                <Form.Control
                  name="email"
                  defaultValue={hotel.email}
                  {...register("email")}
                />
                {errors.email && (
                  <p className="text-danger">{errors.email.message}</p>
                )}
              </Form.Group>
              <Form.Group>
                <Form.Label>Price per Night</Form.Label>
                <Form.Control
                  name="price"
                  defaultValue={hotel.price}
                  {...register("price")}
                />
                {errors.price && (
                  <p className="text-danger">{errors.price.message}</p>
                )}
              </Form.Group>
              <Form.Group>
                <Form.Label>Max Guests</Form.Label>
                <Form.Control
                  name="maxGuests"
                  defaultValue={hotel.maxGuests}
                  {...register("maxGuests")}
                />
                {errors.maxGuests && (
                  <p className="text-danger">{errors.maxGuests.message}</p>
                )}
              </Form.Group>
              <Form.Group>
                <Form.Label>Latitude</Form.Label>
                <Form.Control
                  name="lat"
                  defaultValue={hotel.lat}
                  {...register("lat")}
                />
                {errors.lat && <p className="text-danger">{errors.lat.message}</p>}
              </Form.Group>
              <Form.Group>
                <Form.Label>Longitude</Form.Label>
                <Form.Control
                  name="lng"
                  defaultValue={hotel.lng}
                  {...register("lng")}
                />
                {errors.lng && <p className="text-danger">{errors.lng.message}</p>}
              </Form.Group>
            </Form.Group>
            <Form.Group className="form-group-right form-margintop">
              <Form.Group>
                <Form.Label>Image Url</Form.Label>
                <Form.Control
                  name="image"
                  defaultValue={hotel.image}
                  {...register("image")}
                />
                {errors.image && (
                  <p className="text-danger">{errors.image.message}</p>
                )}
              </Form.Group>
              <Form.Group>
                <Form.Label>Message</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={7}
                  name="description"
                  defaultValue={hotel.description}
                  {...register("description")}
                />
                {errors.description && (
                  <p className="text-danger">{errors.description.message}</p>
                )}
              </Form.Group>
              <Form.Group>
                <Form.Label>SelfCatering</Form.Label>
                <Form.Check
                  type="switch"
                  id="custom-switch"
                  name="selfCatering"
                  {...register("selfCatering")}
                />
              </Form.Group>
              <Button type="submit" className="button">
                Submit
              </Button>
            </Form.Group>
            {(ismodal)?<HotelModal data={data} hotel={hotel} apiMethod="PATCH" apiType="establishments/"></HotelModal>:<div></div>}
          </Form.Group>
        </Form>
      </div>
    );
  }
}

export default UpdateHotel;
