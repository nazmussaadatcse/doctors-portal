import React from 'react';
import '../SubmitForm/SubmitForm.css'
import PrimaryButton from '../../../../components/PrimaryButton/PrimaryButton';

const SubmitForm = () => {
    return (
        <div className='p-20 flex justify-center backImg'>

            <form className='flex flex-col space-y-4 w-96' action="">

                <input type="email" placeholder="Email Address" className="input input-bordered" />
                <input type="text" placeholder="Subject" className="input input-bordered" />
                <textarea className="textarea textarea-bordered" placeholder="Your Message"></textarea>
                <PrimaryButton>Submit</PrimaryButton>

            </form>

        </div>
    );
};

export default SubmitForm;