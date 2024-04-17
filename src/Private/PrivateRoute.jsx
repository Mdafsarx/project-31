import { useContext } from "react";
import { AuthContext } from "../Page/Auth/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
    const { User, loader } = useContext(AuthContext)
    const location=useLocation()

    if (loader) {
        return <div className="flex justify-center items-center min-h-[50vh]">
            <span className="loading loading-bars loading-lg size-32"></span>
        </div>
    }

    if (User) {
        return children
    }
    return <Navigate to={'/Login'} state={location.pathname}></Navigate>
};

export default PrivateRoute;