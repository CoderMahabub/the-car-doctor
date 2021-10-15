import React from 'react';
import { Link } from 'react-router-dom';
import Notfound from '../../images/404.png'

const NotFound = () => {
    return (
        <div>
            <img style={{ width: '100%' }} src={Notfound} alt="" />
            <Link to="/home">GoBack</Link>
        </div>
    );
};

export default NotFound;