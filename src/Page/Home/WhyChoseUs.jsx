import img1 from '../../assets/whychoose1.png'
import { IoPeople } from "react-icons/io5";
import { GiSelfLove } from "react-icons/gi";
import { BsGift } from "react-icons/bs";
import { GiFruitBowl } from "react-icons/gi";
import { FaIceCream } from "react-icons/fa6";
import { BiLike } from "react-icons/bi";







const WhyChoseUs = () => {
    return (
        <div className='space-y-4 pb-24'>
            {/* title */}
            
            <div className="text-center space-y-2 py-3">
                <h1 className="text-3xl font-bold">Why Choose Us</h1>
                <p className="text-balance">Contrary to popular belief, is not simply random text. It has roots in a piece of classical <br /> Latin literature from 45 BC, making it over 2000 years old.</p>
            </div>

            <div className="flex flex-col md:flex-row space-y-8 md:space-y-0">

                {/* Dedicated Team */}
                <div className="px-5  md:px-0 md:w-[33.33%] space-y-8"  
                data-aos="fade-right" data-aos-duration="2000" data-aos-delay="400" data-aos-easing="linear">

                    {/* 1 */}
                    <div className='flex gap-3 '>
                        {/* icon */}
                        <div className='bg-gray-300 w-10 h-10 p-2 rounded-full'>
                            <IoPeople className='text-2xl  ' />
                        </div>
                        <div className='space-y-3 '>
                            <h1 className='text-lg font-bold border-b-2 pb-3 border-black'>Dedicated Team</h1>
                            <p>Professional employees are there for you to pick <br /> the most amazing and fresh fruits.</p>
                        </div>
                    </div>

                    {/* 2 */}
                    <div className='flex gap-3 '>
                        {/* icon */}
                        <div className='bg-gray-300 w-10 h-10 p-2 rounded-full'>
                            <GiSelfLove className='text-2xl  ' />
                        </div>
                        <div className='space-y-3'>
                            <h1 className='text-lg font-bold border-b-2 pb-2 border-black'>Fresh is Best</h1>
                            <p>Professional employees are there for you to pick <br /> the most amazing and fresh fruits.</p>
                        </div>
                    </div>

                    {/* 3 */}
                    <div className='flex gap-3 '>
                        {/* icon */}
                        <div className='bg-gray-300 w-10 h-10 p-2 rounded-full'>
                            <BsGift className='text-2xl  ' />
                        </div>
                        <div className='space-y-3'>
                            <h1 className='text-lg font-bold border-b-2 pb-3 border-black'>Gift Certificates</h1>
                            <p>Professional employees are there for you to pick <br /> the most amazing and fresh fruits.</p>
                        </div>
                    </div>

                </div>

                {/* img */}
                <div className='px-5  md:px-0 md:w-[33.33%] '  data-aos="zoom-in" data-aos-duration="1500" data-aos-delay="50" data-aos-easing="linear">
                    <img src={img1} alt="" />
                </div>


                {/* Integrated Supplier */}
                <div className='px-5 md:px-0 md:w-[33.33%] space-y-8'  data-aos="fade-left" data-aos-duration="2000" data-aos-delay="400" data-aos-easing="linear" >

                    {/* 1 */}
                    <div className='flex flex-row-reverse gap-3 '>
                        {/* icon */}
                        <div className='bg-gray-300 w-10 h-10 p-2 rounded-full'>
                            <GiFruitBowl className='text-2xl  ' />
                        </div>
                        <div className='space-y-3 '>
                            <h1 className='text-lg font-bold border-b-2 pb-3 border-black'>Integrated Supplier</h1>
                            <p>Professional employees are there for you to pick <br /> the most amazing and fresh fruits.</p>
                        </div>
                    </div>


                    {/* 2 */}
                    <div className='flex flex-row-reverse gap-3 '>
                        {/* icon */}
                        <div className='bg-gray-300 w-10 h-10 p-2 rounded-full'>
                            <FaIceCream className='text-2xl  ' />
                        </div>
                        <div className='space-y-3 '>
                            <h1 className='text-lg font-bold border-b-2 pb-3 border-black'>Sustainable Practice</h1>
                            <p>Professional employees are there for you to pick <br /> the most amazing and fresh fruits.</p>
                        </div>
                    </div>


                    {/* 3 */}
                    <div className='flex flex-row-reverse gap-3 '>
                        {/* icon */}
                        <div className='bg-gray-300 w-10 h-10 p-2 rounded-full'>
                            <BiLike className='text-2xl  ' />
                        </div>
                        <div className='space-y-3 '>
                            <h1 className='text-lg font-bold border-b-2 pb-3 border-black'>The Benefits Only</h1>
                            <p>Professional employees are there for you to pick <br /> the most amazing and fresh fruits.</p>
                        </div>
                    </div>

                </div>

            </div>


        </div>
    );
};

export default WhyChoseUs;