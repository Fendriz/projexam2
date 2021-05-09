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


function UpdateHotel() {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(SchemaHotel),
  });

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

  if(loading){
    return <Spinner animation="border" className="spinner" />
  }


  if(!loading){
   
    if(!first){
      setHotel(hotels[0]);
      firstload(true)
    }
   
 

 async function onSubmit(data) {
    console.log("testsdfsdf")
    console.log(data)
  }
 
 function changeSelect(data) {
  

    hotels.map((hotel) => {

      if (data.target.value===hotel.name){
        setHotel(hotel);
        setValue("hotel", hotel.name, {
          shouldValidate: true,
          shouldDirty: true
        })
        setValue("email", hotel.email, {
          shouldValidate: true,
          shouldDirty: true
        })
        setValue("price", hotel.price, {
          shouldValidate: true,
          shouldDirty: true
        })
        setValue("guests", hotel.maxGuests, {
          shouldValidate: true,
          shouldDirty: true
        })
        setValue("image", hotel.image, {
          shouldValidate: true,
          shouldDirty: true
        })
        setValue("lat", hotel.lat, {
          shouldValidate: true,
          shouldDirty: true
        })
        setValue("lng", hotel.lng, {
          shouldValidate: true,
          shouldDirty: true
        })
        setValue("lng", hotel.lng, {
          shouldValidate: true,
          shouldDirty: true
        })
        setValue("id", hotel.id, {
          shouldValidate: true,
          shouldDirty: true
        })
        }
    });
  }

  function changeInput(e){
 
    console.log(e);


  }

 
  return (
    
    <div className="container_hotel">
      <div key={hotel.name}>
        <input defaultValue={hotel.name} />
      </div>
      <form action="">
        <input type="text" id="country" name="country" value="Norway" ></input>
      </form>
      <AdminMenu active={1}></AdminMenu>

           
    
      <Form onSubmit={handleSubmit(onSubmit)} className="form_update">
        <AdminHotelMenu active={2}></AdminHotelMenu>
      

       
        <Form.Group controlId="exampleForm.ControlSelect1">
        
          <Form.Control as="select" className="form_update-select" onChange={changeSelect}>
          {hotels.map((hot) => {
            
            return (
             
              <option key={hot.id}>
               
                  {hot.name}
                
              </option>
            );
          })}
           
          </Form.Control>
         
        </Form.Group>
        
        <Form.Group>
          <Form.Label>Hotel Name</Form.Label>
            {console.log("test")}
        
            <Form.Control
              label="hotel"
              name="hotel"
             
              {...register("hotel")}
              //placeholder={hotel.name}
              defaultValue={hotel.name}
          
             
              
          
            />
        
            {errors.hotel && <p class="text-danger">{errors.hotel.message}</p>}
         
          
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
            name="guests"
            defaultValue={hotel.maxGuests}
            {...register("guests")}
          />
          {errors.guests && <p class="text-danger">{errors.guests.message}</p>}
        </Form.Group>
        <Form.Group>
          <Form.Label>Image Url</Form.Label>
          <Form.Control
            name="url"
            defaultValue={hotel.url}
            {...register("url")}
          />
          {errors.url && <p class="text-danger">{errors.url.message}</p>}
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
          <Form.Label>ID</Form.Label>
          <Form.Control name="id" defaultValue={hotel.id} {...register("id")} />
          {errors.id && <p class="text-danger">{errors.id.message}</p>}
        </Form.Group>
        <Form.Group>
          <Form.Label>Message</Form.Label>
          <Form.Control
            as="textarea"
            rows={6}
            name="mess"
            defaultValue={hotel.description}
            {...register("mess")}
          />
          {errors.mess && <p class="text-danger">{errors.mess.message}</p>}
        </Form.Group>

        <Button type="submit" class="button">
          Submit
        </Button>
        
        <ul>
          {hotels.map((hotel) => {
            return (
              <li key={hotel.id}>
                <NavLink to={`/admin/hotels/edit/${hotel.id}`}>
                  {hotel.name}
                </NavLink>
              </li>
            );
          })}
        </ul>
    
      </Form>
    </div>
  );

  }

  
        
}

export default UpdateHotel;
