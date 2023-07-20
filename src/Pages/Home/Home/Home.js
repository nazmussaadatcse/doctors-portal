import React from 'react';
import Banner from '../Banner/Banner';
import InfoCards from './InfoCards/InfoCards';
import Services from './Services/Services';
import DentalCare from './DentalCare/DentalCare';
import MakeAppointment from './MakeAppointment/MakeAppointment';
import Testimonial from './Testimonial/Testimonial';
import SubmitForm from './SubmitForm/SubmitForm';

const Home = () => {
    return (
        <div className='mx-5'>
            <Banner></Banner>
            <InfoCards></InfoCards>
            <Services></Services>
            <DentalCare></DentalCare>
            <MakeAppointment></MakeAppointment>
            <Testimonial></Testimonial>
            <SubmitForm></SubmitForm>
        </div>
    );
};

export default Home;