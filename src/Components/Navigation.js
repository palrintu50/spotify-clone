import React from 'react';
import '../App.css';
 
import { NavLink } from 'react-router-dom';
 
const Navigation = () => {
    return (
       <div className="Nav">
          <NavLink className="active" to="/">Home</NavLink>
          <h1>    </h1>
          <NavLink to="/Album">Album</NavLink>
          <h2>    </h2>
          <NavLink to="/Albums">Albums</NavLink>
          <h2>     </h2>
          <NavLink to="/AddAlbum">AddAlbum</NavLink>
       </div>
    );
}
 
export default Navigation;