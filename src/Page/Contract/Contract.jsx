/* eslint-disable no-unused-vars */
import Swal from 'sweetalert2';
import img from '../../assets/undraw_Online_friends_re_eqaj.png'
import { Helmet } from 'react-helmet-async';


const Contract = () => {
    const handleSubmit = (e) => {
        e.preventDefault()
        const email = e.target.email.value;
        const name = e.target.name.value;
        const message = e.target.message.value;

        if (!message.length < 5) {
            Swal.fire({
                title: "We Will Contact you as soon as possible  " + `${name}`,
                icon: "success"
            });
        }

    }
    return (
        <div>
            <Helmet>
                <title>aFruits | Contract </title>
            </Helmet>
            
            <div className="grid max-w-screen-xl grid-cols-1 gap-10  py-16 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 ">

                <div  data-aos="fade-right" data-aos-duration="2000" data-aos-delay="300" >
                    <img src={img} alt="" />
                </div>

                <form onSubmit={handleSubmit} className="space-y-6 px-5 md:px-0"  data-aos="fade-left" data-aos-duration="2000" data-aos-delay="300" >
                    <div>
                        <label htmlFor="name" className="text-sm">Full name</label>
                        <input id="name" name='name' type="text" placeholder="" className="w-full p-3 rounded border " required />
                    </div>
                    <div>
                        <label htmlFor="email" className="text-sm">Email</label>
                        <input id="email" name='email' type="email" className="w-full p-3 rounded  border" required />
                    </div>
                    <div>
                        <label htmlFor="message" className="text-sm">Message</label>
                        <textarea id="message" name='message' rows="3" className="w-full p-3 rounded border"></textarea>
                    </div>
                    <button type="submit" className="w-full p-3 text-sm font-bold tracking-wide btn uppercase rounded bg-[#5755FE] text-white">Send Message</button>
                </form>

            </div>
        </div>
    );
};

export default Contract;