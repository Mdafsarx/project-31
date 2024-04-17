import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { GrGithub } from "react-icons/gr";
import { useContext } from "react";
import { AuthContext } from "../AuthProvider";
import { toast } from "react-toastify";
import { updateProfile } from "firebase/auth";
import auth from "../../../../firebase.config";
import { Helmet } from "react-helmet-async";

const Register = () => {
    const { register, Google, Github ,SetReload , reload } = useContext(AuthContext);
    const navLink=useNavigate()


    // register
    function handleSubmit(e) {
        e.preventDefault()
        const name = e.target.name.value;
        const email = e.target.email.value;
        const url = e.target.url.value;
        const password = e.target.password.value;
        // register

        register(email, password)
            .then(() => {
                updateProfile(auth.currentUser, {
                    displayName: name, photoURL: url 
                }).then(() => {
                    toast.success('Register successful');
                    SetReload(!reload)
                    navLink('/')
                }).catch((error) => {
                    toast.error(error.message)
                });
            }).catch(error => toast.error(error.message))

    }

    // google
    function handleGoogle() {
        Google()
        .then(() => {
            toast.success(`Login Successful`)
        })
        .catch((error) => toast.error(error.message))
    }

    // github
    const handleGithub = () => {
        Github()
        .then(() => {
            toast.success(`Register successful`)
        }).catch(error => toast.error(error.message))
    }


    return (
        <div>
            <Helmet>
                    <title>aFruits | Register </title>
                  </Helmet>
            <div className="flex flex-col lg:flex-row-reverse ">

                <div className='w-full bg-[#5755FE] flex items-center py-3 '>

                    <div className="md:w-1/3 mx-auto "  data-aos="zoom-in" data-aos-duration="2000" data-aos-delay="300">

                        <form className="card-body" onSubmit={handleSubmit}>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-white">Name</span>
                                </label>
                                <input type="name" name="name" placeholder="Name" className="input input-bordered" required />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-white">URL</span>
                                </label>
                                <input type="url" name="url" placeholder="URL" className="input input-bordered" required />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-white">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-white">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover text-white ">Forgot password?</a>
                                </label>
                            </div>

                            <div className="form-control ">
                                <button className="btn bg-black text-white border-0 ">Register</button>
                            </div>

                        </form>



                        <div className='px-9 text-white flex items-center gap-2 pb-3'>
                            <h1>Or Register with</h1>
                            <button className='btn btn-sm bg-black gap-1 text-white border-0' onClick={handleGoogle}>Google <FcGoogle /></button>
                            <button className='btn btn-sm bg-black gap-1 text-white border-0' onClick={handleGithub}>Github <GrGithub className='text-lg' /></button>
                        </div>
                        <Link className='px-9 text-white hover:text-black hover:underline' to={'/Login'}>Already have a account</Link>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default Register;