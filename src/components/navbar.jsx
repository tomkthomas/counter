import React, { Component } from 'react';
// Stateless Functional Component(shrtcut = sfc)
const NavBar = ({totalCounters}) => {                  //props in class only so we pass props as arg(obj destructuring)
    return ( 
        <nav className="navbar navbar-light bg-light">
                <a className="navbar-brand" href='#'>
                    Navbar <span className="badge badge-pill badge-secondary">
                        {totalCounters} 
                    </span>
                </a>
            </nav>
     );
}
 
export default NavBar;


/*class NavBar extends Component {
    render() { 
        return ( 
            <nav className="navbar navbar-light bg-light">
                <a className="navbar-brand" href='#'>
                    Navbar <span className="badge badge-pill badge-secondary">
                        {this.props.totalCounters}
                    </span>
                </a>
            </nav>
         );
    }
}
 
export default NavBar;*/