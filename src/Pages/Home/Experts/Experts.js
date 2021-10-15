import React from 'react';

import mechanic1 from '../../../images/mechanic/mechanic-1.jpg';
import mechanic2 from '../../../images/mechanic/mechanic-2.jpg';
import mechanic3 from '../../../images/mechanic/mechanic-3.jpg';
import mechanic4 from '../../../images/mechanic/mechanic-4.jpg';
import mechanic5 from '../../../images/mechanic/mechanic-5.jpg';
import Expart from './Expert/Expart';

const experts = [
    {
        id: 1,
        img: mechanic1,
        name: 'Andrew Smith',
        expertize: '-Engine Expert-'
    },
    {
        id: 2,
        img: mechanic2,
        name: 'John Aderson',
        expertize: '-Polish Expert-'
    },
    {
        id: 3,
        img: mechanic3,
        name: 'Kim Joe',
        expertize: '-Tyre Expert-'
    },
    {
        id: 4,
        img: mechanic4,
        name: 'Sakib Andarson',
        expertize: '-Alrounder Expert-'
    },
    {
        id: 5,
        img: mechanic5,
        name: 'Bisri Smith',
        expertize: '-Gas Expert-'
    }
]

const Experts = () => {
    return (
        <div id="experts" className="container">
            <h2 className="text-primary py-5">Our Exparts</h2>
            <div className="row">
                {
                    experts.map(expert => <Expart
                        key={expert.id}
                        expert={expert}
                    ></Expart>)
                }
            </div>
        </div>
    );
};

export default Experts;