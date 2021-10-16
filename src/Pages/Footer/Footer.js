import React from 'react';
import { NavLink } from 'react-bootstrap';

const Footer = () => {
    return (
        <div>
            <p className="bg-dark text-light py-2 mb-0 mt-5">© 2021 | All Rights Reserved by <NavLink href="https://codermahabub.com/">CoderMahabub</NavLink></p>
        </div>
    );
};

export default Footer;