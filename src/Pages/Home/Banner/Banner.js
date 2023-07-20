import React from 'react';
import chair from '../../../assets/images/chair.png';
import PrimaryButton from '../../../components/PrimaryButton/PrimaryButton';

const Banner = () => {
    return (
        <div className="hero mb-24 mt-10">
            <div className="mt-10 hero-content flex-col lg:flex-row-reverse">
                <img src={chair} alt='Banner Images' className=" rounded-lg lg:w-1/2 shadow-2xl" />
                <div>
                    <h1 className="text-5xl font-bold">Doctor's Portal !</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    {/* <button className="btn btn-primary bg-gradient-to-r from-primary to-secondary text-white">Get Started</button> */}
                    <PrimaryButton>Get Started</PrimaryButton>
                </div>
            </div>
        </div>
    );
};

export default Banner;