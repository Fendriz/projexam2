import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Link, useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { BASE_URL, headers, PATCH } from "../../../constants/api";

import { yupResolver } from "@hookform/resolvers/yup";

import AdminHotelMenu from "../adminform/AdminHotelMenu";
import AdminMenu from "../adminform/AdminMenu";
import { NavLink } from "react-router-dom";
import { SchemaHotel } from "../../validation/Schema";
import Spinner from "react-bootstrap/Spinner";
import DeleteHotel from "./DeleteHotel";


function UpdateHotel() {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(SchemaHotel),
  });
  const history = useHistory();
  const [hotels, setHotels] = useState([]);
  const [hotel, setHotel] = useState({});

  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [first, firstload] = useState(false);
 

  const url = BASE_URL + "establishments";

  const options = { headers };

  useEffect(() => {
    fetch(url, options)
      .then((response) => response.json())
      .then((json) => {
        // handle error
        if (json.error) {
          setHotels([]);

          setError(json.message);
        } else {
          setHotels(json);
          // setHotel(hotels[0])
          setLoading(false);
        }
      })
      // .then(setHotel(hotels[0]))
      .catch((error) => console.log(error));
  }, []);

  console.log(hotels);

  if (loading) {
    return <Spinner animation="border" className="spinner" />;
  }

  if (!loading) {
    if (!first) {
      setHotel(hotels[0]);
      firstload(true);
    }

    async function onSubmit(data) {
      console.log("testsdfsdf");
      console.log(data);
      history.go(0)
    }
    async function onDelete(data) {
      console.log(hotel.id);
      console.log(hotel.name);
 
    }

    function changeSelect(data) {
      hotels.map((hotel) => {
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

    function changeInput(e) {
      console.log(e);
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
          <Form.Group className="form_flex">
            <div className="form_flex-input">
              <Form.Label>Hotel Name</Form.Label>
              {console.log("test")}
              <Form.Control
                name="name"
                {...register("name")}
                defaultValue={hotel.name}
              />
              {errors.name && <p class="text-danger">{errors.name.message}</p>}
            </div>
           <DeleteHotel id={hotel.id} name={hotel.name}></DeleteHotel>  
            
            
          </Form.Group>
          <Form.Group>
            <Form.Label>Hotel Address</Form.Label>
            {console.log("test")}
            <Form.Control
              name="address"
              {...register("address")}
              defaultValue={hotel.address}
            />
            {errors.address && <p class="text-danger">{errors.address.message}</p>}
          </Form.Group>
          <Form.Group>
            <Form.Label>Email</Form.Label>
            <Form.Control
              name="email"
              defaultValue={hotel.email}
              {...register("email")}
            />
            {errors.email && <p class="text-danger">{errors.email.message}</p>}
          </Form.Group>
          <Form.Group>
            <Form.Label>Price per Night</Form.Label>
            <Form.Control
              name="price"
              defaultValue={hotel.price}
              {...register("price")}
            />
            {errors.price && <p class="text-danger">{errors.price.message}</p>}
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
            <Form.Label>Image Url</Form.Label>
            <Form.Control
              name="image"
              defaultValue={hotel.image}
              {...register("image")}
            />
            {errors.image && <p class="text-danger">{errors.image.message}</p>}
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
          <Form.Group>
            <Form.Label>Message</Form.Label>
            <Form.Control
              as="textarea"
              rows={6}
              name="description"
              defaultValue={hotel.description}
              {...register("description")}
            />
            {errors.description && <p class="text-danger">{errors.description.message}</p>}
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

          <Button type="submit" class="button">
            Submit
          </Button>
        </Form>
      </div>
    );
  }
}

export default UpdateHotel;
