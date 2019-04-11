import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => (
  <div className="ui top menu">
    <div className="item" style={{color: 'violet', backgroundColor: 'lightyellow'}}>
      <i className="birthday cake icon"></i>
    </div>
    <NavLink to="/cakes" className="item" activeStyle={{fontWeight: 'bold', color: 'violet', backgroundColor: 'lightyellow'}}>Cakes Menu</NavLink>
    <NavLink exact to="/" className="item" activeStyle={{fontWeight: 'bold', color: 'violet', backgroundColor: 'lightyellow'}}>Cake Constructor</NavLink>
    <NavLink to="/layers/new" className="item" activeStyle={{fontWeight: 'bold', color: 'violet', backgroundColor: 'lightyellow'}}>Propose a New Flavor</NavLink>
  </div>
)

export default Navbar;