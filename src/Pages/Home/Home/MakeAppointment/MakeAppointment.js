import React from 'react';
import '../MakeAppointment/MakeAppointment.css'
import doctor from '../../../../assets/images/doctor.png'
import PrimaryButton from '../../../../components/PrimaryButton/PrimaryButton';

const MakeAppointment = () => {
    return (
        <section className="mt-32 section">
            <div className=" hero-content flex-col lg:flex-row-reverse lg:w-3/4 sm:w-full sm:p-7 lg:ml-32">

                <div className=''>
                    <h4 className='text-lg text-primary font-bold'>Appointment</h4>
                    <h1 className="text-5xl font-bold text-white">Make an appointment today!</h1>
                    <p className="py-2 text-white">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur odio unde cum suscipit fugiat libero, odit nihil hic vel dolores commodi quisquam minima qui praesentium voluptate magnam cupiditate molestias impedit?</p>
                    <PrimaryButton>Appointment</PrimaryButton>
                </div>
                <img src={doctor} alt='Banner Images' className="-mt-32 rounded-lg lg:w-1/2 hidden lg:block md:block sm:w-full" />
            </div>
        </section>
    );
};

export default MakeAppointment;