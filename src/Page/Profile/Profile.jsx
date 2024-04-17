import { useContext , useState } from "react";
import { AuthContext } from "../Auth/AuthProvider";
import { updateProfile } from "firebase/auth";
import auth from "../../../firebase.config";
import { toast } from "react-toastify";

const Profile = () => {
    const { User, SetReload , reload} = useContext(AuthContext)
    const { photoURL, email, displayName, emailVerified } = User || {}
    const [update, setUpdate ] = useState(false)

    const handleSubmit=(e)=>{
        e.preventDefault()
        setUpdate(true)

        const name=e.target.name.value ;
        const url=e.target.url.value ;

        updateProfile(auth.currentUser,{
            displayName:name, photoURL:url,
          }).then(() => {
            toast.success('Profile Update Successful')
            setUpdate(false)
            SetReload(!reload)
          })

    }

   
     

    return (
        <div>
            <div className="flex flex-col justify-center items-center py-[136px] ">

                <div className="shadow-xl p-5 border-2 border-black rounded-2xl ">

                    <div className='flex flex-col md:flex-row items-center gap-5 '>
                        <div className="avatar">
                            <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                <img src={photoURL} />
                            </div>
                        </div>

                        <div>
                            <h1 className="text-xl font-bold">{displayName}</h1>
                            <p className="">{email}</p>
                            <p><span className="font-bold">Email: </span>{emailVerified ? 'Verified' : 'Not-Verified'}</p>
                        </div>
                    </div>

                    {/* edited section */}

                    <div>

                        <form className="p-3 space-y-2" onSubmit={handleSubmit}>

                            {
                                update && <div className="space-y-2">
                                    <div className="form-control">
                                <input type="text" name="name" placeholder="Enter your name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <input type="url" name="url" placeholder="Url" className="input input-bordered" required />
                            </div>
                                </div>
                            }

                            <div className="flex justify-center">
                                <button type="submit" className="btn btn-sm bg-black text-white" >
                                    {update?'Save':'Edit'}
                                </button>
                            </div>
                        </form>

                        {/* <div className="p-3 flex justify-center">
                        <button className="btn btn-sm bg-black text-white" onClick={() => setUpdate(true)}>Edit</button>
                        </div> */}

                    </div>
                </div>




            </div>
        </div>
    );
};

export default Profile;