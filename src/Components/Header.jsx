import { NavLink } from "react-router-dom";
import logo from '../assets/logo.png'
import { useContext } from "react";
import { AuthContext } from "../Page/Auth/AuthProvider";

const Header = () => {
    const { User, Logout } = useContext(AuthContext);
    console.log(User)

    function handleLogout() {
        Logout()
    }

    const pages = <>
        <NavLink to={'/'}>Home</NavLink>
        <NavLink to={'/Profile'}>Profile</NavLink>
        <NavLink to={'/Contract-us'}>Contract</NavLink>
    </>


    return (
        <div className="bg-[#E3FEF7] ">
            <div className="navbar max-w-7xl mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu space-y-2 font-bold menu-sm text-center text-white dropdown-content mt-3 z-[1] p-2 shadow bg-black rounded-box w-32">
                            {pages}
                        </ul>
                    </div>
                    <div className="flex items-center  text-xl font-bold gap-0">
                        a<span className="text-[#FF6868]">Fruits</span>
                        <img src={logo} alt="" className="w-8 ml-1" />
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 space-x-10 font-bold ">
                        {pages}
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        User ?
                            // Login
                            <div className="flex items-center gap-2">

                                <div className="dropdown dropdown-left dropdown-bottom dropdown-hover">
                                    <div className="avatar placeholder">
                                        <div className="bg-black ring ring-primary ring-offset-base-content ring-offset-1  rounded-full w-8">
                                            <img src={User?.photoURL} alt="" />
                                        </div>
                                    </div>
                                    <ul tabIndex={0} className="dropdown-content z-50 menu p-2 shadow bg-gray-800 rounded-box w-32">
                                        <p className="text-center text-white"><span className="block border-b-2 border-white pb-2 font-bold mb-1">Name</span>{User.displayName}</p>
                                    </ul>
                                </div>

                                {/* <div className="avatar placeholder">
                                    <div className="bg-black ring ring-primary ring-offset-base-content ring-offset-1  rounded-full w-8">
                                        <img src={User?.photoURL} alt="" />
                                    </div>
                                </div> */}


                                <button className="font-bold text-[#5755FE]" onClick={handleLogout}>Logout</button>

                            </div>
                            :
                            // Logout  
                            <NavLink className="font-bold text-[#5755FE]" to={'/Login'}>Login</NavLink>
                    }
                </div>
            </div>
        </div>
    );
};

export default Header;