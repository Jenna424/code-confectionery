import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => (
  <div className="ui top menu">
    <div className="item" style={{color: 'violet', backgroundColor: 'lightyellow'}}>
      <i className="birthday cake icon"></i>
    </div>
    <NavLink to="/cakes" className="item" activeStyle={{fontWeight: 'bold', color: 'violet', backgroundColor: 'lightyellow'}}>Cakes Gallery</NavLink>
    <NavLink exact to="/" className="item" activeStyle={{fontWeight: 'bold', color: 'violet', backgroundColor: 'lightyellow'}}>Cake Constructor</NavLink>
    <NavLink to="/ingredients/new" className="item" activeStyle={{fontWeight: 'bold', color: 'violet', backgroundColor: 'lightyellow'}}>Add Ingredient</NavLink>
  </div>
)

export default Navbar;