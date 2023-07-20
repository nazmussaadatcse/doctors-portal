import React from 'react';
import treatment from '../../../../assets/images/treatment.png'

const DentalCare = () => {
    return (
        <div className="hero bg-slate-100 mt-10">
            <div className="mt-14 mb-14 hero-content flex-col lg:flex-row-reverse lg:w-3/4 sm:w-full">
                
                <div className='p-8'>
                    <h1 className="text-5xl font-bold">Exceptional Dental Care, on Your Terms</h1>
                    <p className="py-6">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur odio unde cum suscipit fugiat libero, odit nihil hic vel dolores commodi quisquam minima qui praesentium voluptate magnam cupiditate molestias impedit?</p>
                    <button className="btn btn-primary bg-gradient-to-r from-primary to-secondary text-white">Get Started</button>
                </div>
                <img src={treatment} alt='Banner Images' className=" rounded-lg lg:w-1/3 shadow-2xl" />
            </div>
        </div>
    );
};

export default DentalCare;