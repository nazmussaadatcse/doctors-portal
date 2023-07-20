import { format, set } from 'date-fns';
import React, { useEffect, useState } from 'react';
import AppointmentOption from './AppointmentOption';
import BookingModal from './BookingModal';

const AvailableAppointment = ({ selectedDate }) => {

    const [appointmentOptions, setAppointmentOptions] = useState([]);
    const [treatment, setTreatment] = useState(null);

    useEffect(() => {
        fetch('appointmentOptions.json')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setAppointmentOptions(data)
            })
            .catch(error => {
                console.log(error);
            });
    }, [])



    return (
        <section className='my-10'>
            <p className='text-center text-primary font-bold'>Available Appointment on {format(selectedDate, 'PP')}</p>
            <div className='gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-5'>
                {
                    appointmentOptions.map(appointmentOption => <AppointmentOption
                        appointmentOption={appointmentOption}
                        key={appointmentOption._id}
                        setTreatment={setTreatment}
                    ></AppointmentOption>)
                }
            </div>
            {
                treatment &&
                <BookingModal
                    selectedDate={selectedDate}
                    treatment={treatment}
                    setTreatment={setTreatment}
                ></BookingModal>
            }
        </section>
    );
};

export default AvailableAppointment;