import React from "react";

const NavBar = ({ totalCounters }) => {
  return (
    <nav className="navbar navbar-light bg-light navbar-center">
      <div className="navbar-brand mx-auto m-5">
        <i className="fa fa-shopping-cart fa-lg m-2" aria-hidden="true" />
        <span className="badge badge-pill badge-info m-2" style={{ width: 50 }}>
          {totalCounters}
        </span>
        Items
      </div>
    </nav>
  );
};

export default NavBar;
