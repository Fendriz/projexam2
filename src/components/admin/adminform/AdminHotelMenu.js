import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

function AdminHotelMenu({ active }) {
  return (
    <div className="adminMenu adminHotelMenu">
      <div
        className="createHotel"
        style={active === 1 ? { backgroundColor: "#EE4B4D" } : {}}
      >
        <NavLink
          to="/admin/hotels/create"
          style={active === 1 ? { color: "white" } : {}}
        >
          Create
        </NavLink>
      </div>
      <div
        className="updateHotels"
        style={active === 2 ? { backgroundColor: "#EE4B4D" } : {}}
      >
        <NavLink
          to="/admin/hotels/update/"
          style={active === 2 ? { color: "white" } : {}}
        >
          Update
        </NavLink>
      </div>
    </div>
  );
}
AdminHotelMenu.propTypes = {
  active: PropTypes.number.isRequired,
};
export default AdminHotelMenu;
