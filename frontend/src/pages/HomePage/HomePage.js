import React from "react";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";

import axios from "axios";

const HomePage = () => {
  // The "user" value from this Hook contains the decoded logged in user information (username, first name, id)
  // The "token" value is the JWT token that you will send in the header of any request requiring authentication
  //TODO: Add an AddCars Page to add a car for a logged in user's garage
  const [user, token] = useAuth();
  const [cars, setCars] = useState([]);
  const [searchResults, setSearchResults] = useState([])
  
  const getSearchResults = async () => {
    try {
      let response = await axios.get("https://www.googleapis.com/youtube/v3/search?q=dogs&key=AIzaSyAGmeDzCGv9RmU7S5NxRSFCjiwbmys9ltQ&part=snippet")
      setSearchResults(response.data.items)
    }catch(ex){console.log (ex)}
  }
  
  
  useEffect(() => {
    const fetchCars = async () => {
      try {
        let response = await axios.get("http://127.0.0.1:8000/api/cars/", {
          headers: {
            Authorization: "Bearer " + token,
          },
        });
        setCars(response.data);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchCars();
  }, [token]);
  return (
    <div className="container">
      <h1>Home Page for {user.username}!</h1>
      <button onClick={() => getSearchResults()}>click for vids</button>
      {searchResults[0]&&<h3>{searchResults[0].snippet.title}</h3>}
      {searchResults[0]&&<img src= {searchResults[0].snippet.thumbnails.high.url}/>}
      {searchResults[0]&&<p>{searchResults[0].snippet.description}</p>}
      {console.log(searchResults[0])}

      {cars &&
        cars.map((car) => (
          <p key={car.id}>
            {car.year} {car.make} {car.model}
          </p>
        ))}
    </div>
  );
};
export default HomePage;
