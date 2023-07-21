import React from 'react';

const AppointmentOption = ({ appointmentOption, setTreatment }) => {

    const { name, slots } = appointmentOption;

    return (
        <div className="card m-5 shadow-xl">
            <div className="card-body text-center">
                <h2 className="text-primary text-center text-xl font-bold ">{name}</h2>
                <p>{slots.length > 0 ? '8:00 AM-5:00 PM' : 'Try Later'}</p>
                {/* <p>{slots.length > 0 ? slots[0] : 'Try Later'}</p> */}
                <p>{slots.length > 0} {slots.length > 1 ? 'slots' : 'slot'} available</p>
                <div className="card-actions justify-center">

                    <button className="btn btn-primary text-white"
                        onClick={() => {
                            setTreatment(appointmentOption);
                            window.bookingModal.showModal();
                            console.log()
                        }}>Book Appointment</button>

                </div>
            </div>
        </div>
    );
};

export default AppointmentOption;