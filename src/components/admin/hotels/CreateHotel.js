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

  const newEstablishment = {
    name: "A hotel name",
    email: "someone@email.com",
    image: "path/to/image",
    // ...other properties
  };

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
        <Form.Group className="form-group-flex">
          <Form.Group className="form-group-left">
            <Form.Group>
              <Form.Label>Hotel Name</Form.Label>
              {console.log("test")}
              <Form.Control
                name="name"
                {...register("name")}
                placeholder="hotel Name"
              />
              {errors.name && <p class="text-danger">{errors.name.message}</p>}
            </Form.Group>
            <Form.Group>
              <Form.Label>Hotel Address</Form.Label>
              {console.log("test")}
              <Form.Control
                name="address"
                {...register("address")}
                placeholder="Hotel Address"
              />
              {errors.address && (
                <p class="text-danger">{errors.address.message}</p>
              )}
            </Form.Group>
            <Form.Group>
              <Form.Label>Email</Form.Label>
              <Form.Control
                name="email"
                placeholder="Email"
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
                placeholder="heisann"
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
                placeholder="Max Guests"
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
                placeholder="Image Url"
                {...register("image")}
              />
              {errors.image && (
                <p class="text-danger">{errors.image.message}</p>
              )}
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
          </Form.Group>
          <Form.Group className="form-group-right">
            <Form.Group>
              <Form.Label>description</Form.Label>
              <Form.Control
                as="textarea"
                rows={6}
                name="description"
                placeholder="Type your message min 10 characters"
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

            <Button type="submit" class="button">
              Submit
            </Button>
          </Form.Group>
        </Form.Group>
      </Form>
    </div>
  );
}

export default CreateHotel;
