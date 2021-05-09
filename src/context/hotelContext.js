import React, { createContext, useState} from "react";

const ApiContext = createContext();
const ApiContextProvider = ({ children }) => {
  const [hotels, setHotels] = useState([]);
  const [hotel,setHotel] = useState({})
    function storeHotels(hotels){
      setHotels(hotels)
    }
    function storeHotel(hotel){
      setHotel(hotel)
    }
  return (
    <ApiContext.Provider
      value={{storeHotels,storeHotel,hotels,hotel}}
    >
      {children}
    </ApiContext.Provider>
  );
};
export { ApiContext, ApiContextProvider };
