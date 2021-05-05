import React from "react";

import Search from './Search'
import HotelCards from './hotelcards/HotelCards'

function Home() {
    return (
        <>
        <div className="search">
            <div className ="search_text">
                <h1>Hotels In Bergen</h1>
                <Search/> 
            </div>
               
        </div>
        <HotelCards/>
        </>
        
          
    );
}

export default Home;
