import React from 'react';
import PropTypes from 'prop-types';

export default function Navbar(props) {
  return (
         <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Navbar</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">{props.home}</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">{props.link}</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  {props.list}
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">Action</a></li>
                  <li><a className="dropdown-item" href="#">Another action</a></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><a className="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled" aria-disabled="true">Disabled</a>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
  );
}

Navbar.propTypes = {
  home: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  list: PropTypes.string.isRequired
};

 // You can declare that a prop is a specific JS type. By default, these
  // are all optional.
  // optionalArray: PropTypes.array,
  // optionalBool: PropTypes.bool,
  // optionalFunc: PropTypes.func,
  // optionalNumber: PropTypes.number,
  // optionalObject: PropTypes.object,
  // optionalString: PropTypes.string,
  // optionalSymbol: PropTypes.symbol,

//You can define default values for your props by assigning to the special defaultProps property:
// if you are not pass the value in props in that case it take default value 


// Specifies the default values for props:
Navbar.defaultProps = {
  home: 'Stranger',
  link: "Koenahi"
  
};