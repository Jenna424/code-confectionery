import React from 'react';
import { NavLink } from 'react-router-dom';

const highlight = {
  fontWeight: 'bold',
  color: 'violet',
  backgroundColor: 'lightyellow'
};

const Navbar = () => (
  <div className="ui top menu">
    <div className="item" style={{color: 'violet', backgroundColor: 'lightyellow'}}>
      <i className="birthday cake icon"></i>
    </div>
    <NavLink to="/cakes" className="item" activeStyle={highlight}>Cakes Menu</NavLink>
    <NavLink to="/pastry-planning-pointers" className="item" activeStyle={highlight}>Pastry Planning Pointers</NavLink>
    <NavLink exact to="/" className="item" activeStyle={highlight}>Cake Constructor</NavLink>
    <NavLink to="/layers/new" className="item" activeStyle={highlight}>Propose a New Flavor</NavLink>
  </div>
)

export default Navbar;