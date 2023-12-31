import { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';

const Login = () => {

    const { register, handleSubmit, formState:{errors} } = useForm();
    const {signIn, googleSignIn} = useContext(AuthContext);
    const [loginError, setLoginError] =  useState('');
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from.pathName || '/';
    
    const handleLogin = data =>{
        console.log(data);
        setLoginError('');

        signIn(data.email,data.password)
        .then(result=>{
            const user = result.user;
            console.log(user);
            navigate(from,{replace:true});
        })
        .catch(error=>{
            console.log(error.message);
            setLoginError(error.message);
        });

    }
    
    const handleGoogleSignIn = ()=>{
        googleSignIn()
        .then(result=>{
            const user = result.user;
            console.log(user);
            navigate(from,{replace:true});
        })
        .catch(error=>{
            console.log(error.message);
            // setLoginError(error.message);
        });
    }
    return (
        <div className='h-[600px] flex justify-center items-center'>
            <div className='w-96 p-7'>
                <h2 className='text-2xl text-center'>Login</h2>

                <form onSubmit={handleSubmit(handleLogin)}>

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type='text' 

                        {...register("email",{
                            required: "Email Address is required"
                        })} 
                        
                        className="input input-bordered w-full max-w-xs" />
                              {errors.email && <p className='text-red-700'>{errors.email?.message}</p>}

                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type='password' 

                        {...register("password",{
                            required:"Password is required",
                            minLength:{value:6, message:'6 character required'}
                        })} 

                        className="input input-bordered w-full max-w-xs" />
                        <label className="label">
                        {errors.password && <p className='text-red-700'>{errors.password?.message}</p>}

                            <span className="label-text">Forget Password</span>
                        </label>
                    </div>

                    <input className='btn btn-accent w-full' value={'Login'} type="submit" />
                    <div>
                        {/* error  */}
                        {
                            loginError && <p className='text-red-500'>{loginError}</p>
                        }
                    </div>
                </form>
                <p>New to Doctor's Portal? <Link className='text-secondary' to='/signup'>Create new account</Link></p>
                <div className='divider'>OR</div>
                <button onClick={handleGoogleSignIn} className='btn btn-outline w-full'>CONTINUE WITH GOOGLE</button>
            </div>
        </div>
    );
};

export default Login;