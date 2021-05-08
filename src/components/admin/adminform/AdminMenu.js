import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";


function AdminMenu({active}) {
	return (
        <div className="adminMenu">
            <div className="adminHotel" style={active===1?{backgroundColor: "#EE4B4D"}:{}}>
                <NavLink to="/admin/hotels/create" style={active===1?{color: "white"}:{}}>Hotel</NavLink>
            </div>
            <div className="adminEnquiries" style={active===2?{backgroundColor: "#EE4B4D"}:{}}>
                <NavLink to="/admin/enquiries" style={active===2?{color: "white"}:{}}>Enquiries</NavLink>
            </div>
            <div className="adminUserMessages" style={active===3?{backgroundColor: "#EE4B4D"}:{}}>
                <NavLink to="/admin/messages" style={active===3?{color: "white"}:{}}>User Messages</NavLink>
            </div>
            <div className="adminAccounts" style={active===4?{backgroundColor: "#EE4B4D"}:{}}>
                <NavLink to="/admin/accounts"  style={active===4?{color: "white"}:{}}>Accounts</NavLink>
            </div>
        </div>
	);
}
AdminMenu.propTypes = {
	active: PropTypes.number.isRequired,

};
export default AdminMenu;

