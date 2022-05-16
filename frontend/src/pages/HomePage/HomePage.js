import React from "react";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import axios from "axios";
import "./Homepage.css"
const HomePage = () => {
  // The "user" value from this Hook contains the decoded logged in user information (username, first name, id)
  // The "token" value is the JWT token that you will send in the header of any request requiring authentication
  //TODO: Add an AddCars Page to add a car for a logged in user's garage
  const [user, token] = useAuth();
  // const [cars, setCars] = useState([]);
  const [searchResults, setSearchResults] = useState([])
  const [videoId, setVideoId] = useState("BTPcq2HczVY")
  const [searchTerm, setSearchTerm] = useState("cats")

  const getSearchResults = async () => {
    try {
      let response = await axios.get(`https://www.googleapis.com/youtube/v3/search?q=${searchTerm}&key=AIzaSyAGmeDzCGv9RmU7S5NxRSFCjiwbmys9ltQ&part=snippet`)
      setSearchResults(response.data.items)
    }catch(ex){console.log (ex)}
  }

  useEffect(()=>{
    getSearchResults();
  }, [])

  // useEffect(() => {
  //   const fetchCars = async () => {
  //     try {
  //       let response = await axios.get("http://127.0.0.1:8000/api/cars/", {
  //         headers: {
  //           Authorization: "Bearer " + token,
  //         },
  //       });
  //       setCars(response.data);
  //     } catch (error) {
  //       console.log(error.message);
  //     }
  //   };
  //   fetchCars();
  // }, [token]);

  return (
    <div>
      <div className= "suggestedVideos" > 
        
        {searchResults[0]&&<h3 >{searchResults[0].snippet.title}</h3>}
        {searchResults[0]&&<img src= {searchResults[0].snippet.thumbnails.high.url}/>}
        {searchResults[0]&&<p>{searchResults[0].snippet.description}</p>}
        {searchResults[1]&&<h3 >{searchResults[1].snippet.title}</h3>}
        {searchResults[1]&&<img src= {searchResults[1].snippet.thumbnails.high.url}/>}
        {searchResults[1]&&<p>{searchResults[1].snippet.description}</p>}
        {searchResults[2]&&<h3 >{searchResults[2].snippet.title}</h3>}
        {searchResults[2]&&<img src= {searchResults[2].snippet.thumbnails.high.url}/>}
        {searchResults[2]&&<p>{searchResults[2].snippet.description}</p>}
        {searchResults[3]&&<h3 >{searchResults[3].snippet.title}</h3>}
        {searchResults[3]&&<img src= {searchResults[3].snippet.thumbnails.high.url}/>}
        {searchResults[3]&&<p>{searchResults[3].snippet.description}</p>}
        {searchResults[4]&&<h3 >{searchResults[4].snippet.title}</h3>}
        {searchResults[4]&&<img src= {searchResults[4].snippet.thumbnails.high.url}/>}
        {searchResults[4]&&<p>{searchResults[4].snippet.description}</p>}
      </div>
    <div className="container">
      <h1>Home Page for {user.username}!</h1>
      <button onClick={() => getSearchResults()}>click for vids</button>

      <iframe id="ytplayer" type="text/html" width="640" height="360"
  src= {`https://www.youtube.com/embed/${videoId}`}
  frameBorder="0"></iframe>
  
      {/* {cars &&
        cars.map((car) => (
          <p key={car.id}>
            {car.year} {car.make} {car.model}
          </p>
        ))} */}
    </div></div>

  );
};
export default HomePage;
