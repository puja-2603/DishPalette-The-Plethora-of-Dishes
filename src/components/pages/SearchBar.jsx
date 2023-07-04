import React, {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import {FaSearch} from 'react-icons/fa'

function SearchBar() {
    const [input, setInput] = useState("");
    // const [recipes, setrecipes] = useState([]);
    const navigate = useNavigate();

      var url=`https://api.spoonacular.com/recipes/complexSearch?query=${input}&apiKey=${process.env.REACT_APP_API_KEY}&number=2`
    const handleSearch = (e) => {
        e.preventDefault();
        navigate("/searched/"+input);
    };
    
  return (
    <div className="search-bar mx-auto">
    <form className="app_search d-flex" role="search" onSubmit={handleSearch}>
      <FaSearch></FaSearch>
      <input  type="search"
       placeholder="Search"
       aria-label="Search"
       onChange={(e) => setInput(e.target.value)} value={input} />
      < input className="btn btn-outline-success" type="submit" value="Submit"/>
    
    </form>
  </div>
  )
}


export default SearchBar
