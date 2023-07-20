import { format } from 'date-fns';
import React from 'react';

const BookingModal = ({ treatment,setTreatment, selectedDate }) => {

    const { name, slots } = treatment;
    const date = format(selectedDate, 'PP');



    const handleBooking = e => {
        e.preventDefault();

        const form = e.target;
        const slot = form.slot.value;
        const name = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;

        const booking ={
            appointmentDate: date,
            treatment:treatment.name,
            patient:name,
            slot:slot,
            email:email,
            phone:phone,
        }

        console.log(booking);
        setTreatment(null);

    }


    return (
        <>
            <dialog id="bookingModal" className="modal">
                <form onSubmit={handleBooking} method="dialog" className="modal-box">
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" >✕</button>
                    <h3 className="font-bold text-lg">{name}</h3>
                    <div className='grid grid-cols-1 gap-4 mt-10'>

                        <input type="text" value={date} disabled className="input input-bordered w-full" />

                        <select name='slot' className="select select-bordered w-full ">
                            {
                                slots.map((slot, index) => <option
                                    key={index} //key= index  
                                    value={slot}>{slot}</option>)
                            }
                        </select>

                        <input name='name' type="text" placeholder="Your Names" className="input input-bordered w-full" />
                        <input name='email' type="email" placeholder="Email" className="input input-bordered w-full" />
                        <input name='phone' type="phone" placeholder="Phone Number" className="input input-bordered w-full" />
                        <br />
                        <input className='w-full btn btn-accent' type="submit" value="Submit" />
                    </div>
                </form>

            </dialog>
        </>
    );
};

export default BookingModal;