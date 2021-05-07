import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";



function AdminMenu({items}) {
	return (
        <div className="adminMenu">
            {items.map((item)=>{
                return(
                    <div key={item.id} className={item.class} style={item.active?{backgroundColor: "#EE4B4D"}:{}}>
                        <NavLink to={item.nav} style={item.active?{color: "white"}:{}}>{item.name}</NavLink>
                    </div>
                )
            })}
        </div>
		
		
	);
}
AdminMenu.propTypes = {
	items: PropTypes.array.isRequired,

};
export default AdminMenu;