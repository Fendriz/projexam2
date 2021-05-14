import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

function AdminHotelMenu({ active }) {
  return (
    <div className="adminMenu adminHotelMenu">
      <NavLink to="/admin/hotels/create" className="createHotel" style={active === 1 ? { backgroundColor: "#EE4B4D" } : {}} >
        <p style={active === 1 ? { color: "white" } : {}} > Create </p>
      </NavLink>
      <NavLink to="/admin/hotels/update" className="updateHotels" style={active === 2 ? { backgroundColor: "#EE4B4D" } : {}} >
        <p style={active === 2 ? { color: "white" } : {}} > Update </p>
      </NavLink>
    </div>
  );
}
AdminHotelMenu.propTypes = {
  active: PropTypes.number.isRequired,
};
export default AdminHotelMenu;
