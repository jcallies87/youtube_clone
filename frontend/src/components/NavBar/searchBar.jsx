import React,{useState}  from "react";
import "./NavBar.css";

const SearchBar = (props) => {
const [searchTerm, setSearchTerm] = useState("dogs")

function handleSubmit(formEvent){
    formEvent.preventDefault();
    let newSearch = searchTerm
    props.search(newSearch)
}
return(
<form onSubmit={handleSubmit}>
<label>Search</label>
<input type= "textarea" onChange={(event) => setSearchTerm(event.target.value)}/>
<button type= 'submit'>Submit</button>
</form>)
}
export default SearchBar