import React from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { BASE_URL, headers } from "../../../constants/api";

import AdminHotelMenu from "../adminform/AdminHotelMenu";
import AdminMenu from "../adminform/AdminMenu";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { SchemaHotel } from "../../validation/Schema";

function CreateHotel() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(SchemaHotel),
  });

  const history = useHistory();

  async function onSubmit(data) {
    console.log("data", data);

    const url = BASE_URL + "establishments";

    const options = { headers, method: "POST", body: JSON.stringify(data) };

    await fetch(url, options);

    history.push("/admin/hotels/update");
  }

  return (
    <div className="container_hotel">
      <AdminMenu active={1}></AdminMenu>
      <Form onSubmit={handleSubmit(onSubmit)} className="form_update">
        <AdminHotelMenu active={1}></AdminHotelMenu>
        <Form.Group>
          <Form.Label>Hotel Name</Form.Label>
          {console.log("test")}
          <Form.Control
            label="hotel"
            name="hotel"
            {...register("hotel")}
            placeholder="hotel Name"
          />
          {errors.hotel && <p class="text-danger">{errors.hotel.message}</p>}
        </Form.Group>
        <Form.Group>
          <Form.Label>Email</Form.Label>
          <Form.Control
            name="email"
            placeholder="Email"
            {...register("email")}
          />
          {errors.email && <p class="text-danger">{errors.email.message}</p>}
        </Form.Group>
        <Form.Group>
          <Form.Label>Price per Night</Form.Label>
          <Form.Control
            name="price"
            placeholder="heisann"
            {...register("price")}
          />
          {errors.price && <p class="text-danger">{errors.price.message}</p>}
        </Form.Group>
        <Form.Group>
          <Form.Label>Max Guests</Form.Label>
          <Form.Control
            name="guests"
            placeholder="Max Guests"
            {...register("guests")}
          />
          {errors.guests && <p class="text-danger">{errors.guests.message}</p>}
        </Form.Group>
        <Form.Group>
          <Form.Label>Image Url</Form.Label>
          <Form.Control name="url" placeholder="heisann" {...register("url")} />
          {errors.url && <p class="text-danger">{errors.url.message}</p>}
        </Form.Group>
        <Form.Group>
          <Form.Label>Latitude</Form.Label>
          <Form.Control
            name="lat"
            placeholder="Latitude"
            {...register("lat")}
          />
          {errors.lat && <p class="text-danger">{errors.lat.message}</p>}
        </Form.Group>
        <Form.Group>
          <Form.Label>Longitude</Form.Label>
          <Form.Control
            name="lng"
            placeholder="longitude"
            {...register("lng")}
          />
          {errors.lng && <p class="text-danger">{errors.lng.message}</p>}
        </Form.Group>
        <Form.Group>
          <Form.Label>ID</Form.Label>
          <Form.Control name="id" placeholder="hotelID" {...register("id")} />
          {errors.id && <p class="text-danger">{errors.id.message}</p>}
        </Form.Group>
        <Form.Group>
          <Form.Label>Message</Form.Label>
          <Form.Control
            as="textarea"
            rows={6}
            name="mess"
            placeholder="Type your message min 10 characters"
            {...register("mess")}
          />
          {errors.mess && <p class="text-danger">{errors.mess.message}</p>}
        </Form.Group>

        <Button type="submit" class="button">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default CreateHotel;
