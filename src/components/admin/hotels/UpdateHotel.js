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
import UpdateHotelModal from "../../modals/updateHotelModal";

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
      console.log(ismodal);
      setData(data);
      openModal();
    }
    function changeSelect(data) {
      hotels.forEach((hotel) => {
        if (data.target.value === hotel.name) {
          setHotel(hotel);
          setValue("name", hotel.name, {
            shouldValidate: true,
            shouldDirty: true,
          });
          setValue("address", hotel.address, {
            shouldValidate: true,
            shouldDirty: true,
          });
          setValue("email", hotel.email, {
            shouldValidate: true,
            shouldDirty: true,
          });
          setValue("price", hotel.price, {
            shouldValidate: true,
            shouldDirty: true,
          });
          setValue("maxGuests", hotel.maxGuests, {
            shouldValidate: true,
            shouldDirty: true,
          });
          setValue("image", hotel.image, {
            shouldValidate: true,
            shouldDirty: true,
          });
          setValue("lat", hotel.lat, {
            shouldValidate: true,
            shouldDirty: true,
          });
          setValue("lng", hotel.lng, {
            shouldValidate: true,
            shouldDirty: true,
          });
          setValue("description", hotel.description, {
            shouldValidate: true,
            shouldDirty: true,
          });
          setValue("selfCatering", hotel.selfCatering, {
            shouldValidate: true,
            shouldDirty: true,
          });
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
                  <p class="text-danger">{errors.name.message}</p>
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
                  <p class="text-danger">{errors.address.message}</p>
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
                  <p class="text-danger">{errors.email.message}</p>
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
                  <p class="text-danger">{errors.price.message}</p>
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
                  <p class="text-danger">{errors.maxGuests.message}</p>
                )}
              </Form.Group>
              <Form.Group>
                <Form.Label>Latitude</Form.Label>
                <Form.Control
                  name="lat"
                  defaultValue={hotel.lat}
                  {...register("lat")}
                />
                {errors.lat && <p class="text-danger">{errors.lat.message}</p>}
              </Form.Group>
              <Form.Group>
                <Form.Label>Longitude</Form.Label>
                <Form.Control
                  name="lng"
                  defaultValue={hotel.lng}
                  {...register("lng")}
                />
                {errors.lng && <p class="text-danger">{errors.lng.message}</p>}
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
                  <p class="text-danger">{errors.image.message}</p>
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
                  <p class="text-danger">{errors.description.message}</p>
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
            {(ismodal)?<UpdateHotelModal data={data} hotel={hotel}></UpdateHotelModal>:<div></div>}
          </Form.Group>
        </Form>
      </div>
    );
  }
}

export default UpdateHotel;
