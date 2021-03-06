import React, { useEffect, useState } from 'react';
import Service from './Service/Service';
import './Services.css';


const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('https://warm-ravine-38230.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setServices(data))
        console.log(services)
    }, [])
    return (
        <div id="services">
            <h1 className="text-primary py-5">Our Services</h1>
            <div className="service-container">
                {
                    services.map(service => <Service
                        key={service._id}
                        service={service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;