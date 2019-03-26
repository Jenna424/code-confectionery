import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => (
  <div className="ui top fixed menu">
    <div className="item" style={{color: 'violet', backgroundColor: 'lightyellow'}}>
      <i className="birthday cake icon"></i>
    </div>
    <a className="item"><NavLink exact to="/" activeStyle={{fontWeight: 'bold', color: 'violet', backgroundColor: 'lightyellow'}}>Cake Constructor</NavLink></a>
    <a className="item"><NavLink to="/cakes" activeStyle={{fontWeight: 'bold', color: 'violet', backgroundColor: 'lightyellow'}}>Cakes Gallery</NavLink></a>
    <a className="item"><NavLink to="/ingredients/new" activeStyle={{fontWeight: 'bold', color: 'violet', backgroundColor: 'lightyellow'}}>Add Ingredient</NavLink></a>
  </div>
)

export default Navbar;