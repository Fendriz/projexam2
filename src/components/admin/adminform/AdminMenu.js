import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

function AdminMenu({active}) {
	return (
    <div className="adminMenu adminMenuTop">
      <NavLink to="/admin/hotels/create" className="adminHotel" style={active===1?{backgroundColor: "#EE4B4D"}:{}}>
        <p style={active===1?{color: "white"}:{}}>Hotel</p>
      </NavLink>
      <NavLink to="/admin/enquiries" className="adminEnquiries" style={active===2?{backgroundColor: "#EE4B4D"}:{}}>
        <p style={active===2?{color: "white"}:{}}>Enquiries</p>
      </NavLink>
      <NavLink to="/admin/messages" className="adminUserMessages" style={active===3?{backgroundColor: "#EE4B4D"}:{}}>
        <p style={active===3?{color: "white"}:{}}>Messages</p>
      </NavLink>
      <NavLink to="/admin/accounts" className="adminAccounts" style={active===4?{backgroundColor: "#EE4B4D"}:{}}>
        <p style={active===4?{color: "white"}:{}}>Accounts</p>
      </NavLink>
    </div>
	);
}
AdminMenu.propTypes = {
	active: PropTypes.number.isRequired,

};
export default AdminMenu;

