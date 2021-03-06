import React, { useState,useContext } from "react";
import { useForm } from "react-hook-form";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import AdminHotelMenu from "../adminform/AdminHotelMenu";
import AdminMenu from "../adminform/AdminMenu";
import { yupResolver } from "@hookform/resolvers/yup";
import { SchemaHotel } from "../../validation/Schema";
import HotelModal from "../../modals/hotelModal";
import { AuthContext } from "../../../context/AuthContext";

function CreateHotel() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(SchemaHotel),
  });
  const [data, setData] = useState({});
  const { openModal,ismodal } = useContext(AuthContext);
  async function onSubmit(data) {
    setData(data);
    openModal();
  }

  return (
    <div className="container_hotel">
      <AdminMenu active={1}></AdminMenu>
      <Form onSubmit={handleSubmit(onSubmit)} className="form_update"id="Form_create">
        <AdminHotelMenu active={1}></AdminHotelMenu>
        <Form.Group className="form-group-flex">
          <Form.Group className="form-group-left">
            <Form.Group>
              <Form.Label>Hotel Name</Form.Label>
              <Form.Control
                name="name"
                {...register("name")}
                placeholder="hotel Name"
              />
              {errors.name && <p className="text-danger">{errors.name.message}</p>}
            </Form.Group>
            <Form.Group>
              <Form.Label>Hotel Address</Form.Label>
              <Form.Control
                name="address"
                {...register("address")}
                placeholder="Hotel Address"
              />
              {errors.address && (
                <p className="text-danger">{errors.address.message}</p>
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
                <p className="text-danger">{errors.email.message}</p>
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
                <p className="text-danger">{errors.price.message}</p>
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
                <p className="text-danger">{errors.maxGuests.message}</p>
              )}
            </Form.Group>
            <Form.Group>
              <Form.Label>Latitude</Form.Label>
              <Form.Control
                name="lat"
                placeholder="Latitude"
                {...register("lat")}
              />
              {errors.lat && <p className="text-danger">{errors.lat.message}</p>}
            </Form.Group>
            <Form.Group>
              <Form.Label>Longitude</Form.Label>
              <Form.Control
                name="lng"
                placeholder="longitude"
                {...register("lng")}
              />
              {errors.lng && <p className="text-danger">{errors.lng.message}</p>}
            </Form.Group>
          </Form.Group>
          <Form.Group className="form-group-right">
            <Form.Group>
              <Form.Label>Image Url</Form.Label>
              <Form.Control
                name="image"
                placeholder="Image Url"
                {...register("image")}
              />
              {errors.image && (
                <p className="text-danger">{errors.image.message}</p>
              )}
            </Form.Group>
            <Form.Group>
              <Form.Label>description</Form.Label>
              <Form.Control
                as="textarea"
                rows={10}
                name="description"
                placeholder="Type your message min 10 characters"
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
          {(ismodal)?<HotelModal data={data} apiMethod="POST" apiType="establishments/"></HotelModal>:<div></div>}
        </Form.Group>
      </Form>
    </div>
  );
}

export default CreateHotel;
