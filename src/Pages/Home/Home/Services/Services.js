import React from 'react';
import fluoride from '../../../../assets/images/fluoride.png'
import cavity from '../../../../assets/images/cavity.png'
import whitening from '../../../../assets/images/whitening.png'
import Service from './Service';

const Services = () => {

    const servicesData = [
        {
            id: 1,
            name: 'Fluoride treatment',
            description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit dolorem rem incidunt, id temporibus vel autem, unde quis aut molestias earum placeat ducimus sit expedita odit est consectetur fuga! Impedit.',
            img: fluoride
        },
        {
            id: 2,
            name: 'Cavity Filling',
            description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit dolorem rem incidunt, id temporibus vel autem, unde quis aut molestias earum placeat ducimus sit expedita odit est consectetur fuga! Impedit.',
            img: cavity
        },
        {
            id: 3,
            name: 'Teeth  Witening',
            description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit dolorem rem incidunt, id temporibus vel autem, unde quis aut molestias earum placeat ducimus sit expedita odit est consectetur fuga! Impedit.',
            img: whitening
        }
    ]
    return (
        <div className='mt-10'>
            <div className='text-center'>
                <h3 className='text-primary uppercase text-xl font-bold'>Our Services</h3>
                <h2 className='text-3xl mb-10'>Services We Provide</h2>
            </div>
            <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                {
                    servicesData.map(service => <Service
                        key={service.id}
                        service={service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;