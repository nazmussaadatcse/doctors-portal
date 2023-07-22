import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import {AuthContext} from '../../Context/AuthProvider'

const SignUp = () => {

    const {register, handleSubmit, formState:{errors}} =  useForm();
    const {createUser} =  useContext(AuthContext);

    const handleSignUp = data =>{
        console.log(data);
        createUser(data.email,data.password)
        .then(result=>{
            const user = result.user;
            console.log(user);
        })
        .catch(error=> console.log(error));
    }

    return (
        <div className='h-[600px] flex justify-center items-center'>
            <div className='w-96 p-7'>
                <h2 className='text-2xl text-center'>Sign Up</h2>

                <form onSubmit={handleSubmit(handleSignUp)}>

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type='text'{...register('name',{
                            required:'Name is Required'
                        })} className="input input-bordered w-full max-w-xs" />
                        {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type='text' {...register('email',{
                            required:'Email Address is Required'
                        })} className="input input-bordered w-full max-w-xs" />
                        {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type='password' {...register('password',{
                            required:'Password is Required',
                            minLength:{value:6,message:'Must be 6 Character'},
                            pattern:{value:/(?=.*?[#?!@$%^&*-])/,message:'At least one special character'}
                            // regular Exp 
                        })} className="input input-bordered w-full max-w-xs" />
                        {errors.password && <p className='text-red-500'>{errors.password.message}</p>}
                    </div>

                    <input className='btn btn-accent w-full mt-5' value='SignUp' type="submit" />
                </form>
                <p>Already have an account? <Link className='text-secondary' to='/login'>Please Login</Link></p>
                <div className='divider'>OR</div>
                <button className='btn btn-outline w-full'>CONTINUE WITH GOOGLE</button>
            </div>
        </div>
    );
};

export default SignUp;