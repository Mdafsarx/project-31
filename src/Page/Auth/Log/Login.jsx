import { useContext } from 'react';
import bg1 from '../../../assets/undraw_Mobile_login_re_9ntv.png'
import { FcGoogle } from "react-icons/fc";
import { GrGithub } from "react-icons/gr";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../AuthProvider';
import { toast } from 'react-toastify';

const Login = () => {
    const { Google, Github, login } = useContext(AuthContext)
    const location = useLocation();
    const navLink = useNavigate()


    // login
    function HandleLogin(e) {
        e.preventDefault()
        login(e.target.email.value, e.target.password.value)
            .then(() => {
                toast.success('Login successfully');
                navLink(location.state || '/')
            })
            .catch((error) => toast.error(error.message))
    }

    // google
    const handleGoogle = () => {
        Google()
            .then(() => {
                toast.success(`Login Successful`)
                navLink(location.state||'/')
            })
            .catch((error) => toast.error(error.message))
    }

    // github
    const handleGithub = () => {
        Github()
       .then(() => {
            toast.success(`Login successful`)
            navLink(location.state||'/')
        }).catch(error => toast.error(error.message))
    }

    return (
        <div>

            <div className="flex flex-col lg:flex-row-reverse ">


                <div className='md:w-[60%] bg-[#5755FE] flex items-center py-3 '>

                    <div className="md:w-1/2 mx-auto ">

                        <form className="card-body" onSubmit={HandleLogin}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-white">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-white">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a className="label-text-alt link link-hover text-white ">Forgot password?</a>
                                </label>
                            </div>

                            <div className="form-control ">
                                <button type='submit' className="btn bg-black text-white border-0 ">Login</button>
                            </div>
                        </form>

                        <div className='px-9 text-white flex items-center gap-2 pb-3'>
                            <h1>Or login with</h1>
                            <button className='btn btn-sm bg-black gap-1 text-white border-0' onClick={handleGoogle}>Google <FcGoogle /></button>
                            <button className='btn btn-sm bg-black gap-1 text-white border-0' onClick={handleGithub}>Github <GrGithub className='text-lg' /></button>
                        </div>
                        <Link className='px-9 text-white hover:text-black hover:underline' to={'/Register'}>Register new account</Link>
                    </div>

                </div>


                <div className='hidden md:flex h-[445px]'>
                    <img src={bg1} alt="" className='w-full' />
                </div>

            </div>

        </div>
    );
};

export default Login;