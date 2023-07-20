import { format } from 'date-fns';
import React from 'react';

const BookingModal = ({ treatment, selectedDate }) => {

    const { name, slots } = treatment;
    const date = format(selectedDate, 'PP');
    return (
        <>
            <dialog id="bookingModal" className="modal">
                <form method="dialog" className="modal-box">
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    <h3 className="font-bold text-lg">{name}</h3>
                    <div className='grid grid-cols-1 gap-4 mt-10'>

                        <input type="text" value={date} disabled className="input input-bordered w-full" />

                        <select className="select select-bordered w-full ">
                            {
                                slots.map(slot=> <option value={slot}>{slot}</option> )
                            }
                        </select>

                        <input type="text" placeholder="Type here" className="input input-bordered w-full" />
                        <input type="text" placeholder="Type here" className="input input-bordered w-full" />
                        <br />
                        <input className='w-full btn btn-accent' type="submit" value="Submit" />
                    </div>
                </form>

            </dialog>
        </>
    );
};

export default BookingModal;