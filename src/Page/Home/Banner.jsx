import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


// import required modules
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import img1 from '../../assets/banner1.png'
import img2 from '../../assets/banner2.png'
import img3 from '../../assets/banner3.png'
import img4 from '../../assets/banner4.png'





const Banner = () => {
    return (
        <div className='bg-slate-900'>
            <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >


                <SwiperSlide>

                    <div className='flex flex-row items-center justify-between'>

                        <div className='*:text-white pl-32 hidden  md:flex flex-col justify-center items-center '>
                            <h1 className='text-5xl font-bold'>Exotic tastes at <br /> your doorstep</h1>
                            <p className='mt-3'>We supply highly quality organic products</p>
                            <button className='btn bg-[#FF6868] border-none mt-3'>Shop Now</button>
                        </div>

                        <figure className='md:w-[60%]'>
                            <img src={img1} />
                        </figure>

                    </div>

                </SwiperSlide>


                <SwiperSlide>
                    <div className='flex flex-row items-center justify-between'>

                        <div className='*:text-white pl-32 hidden  md:flex flex-col justify-center items-center '>
                            <h1 className='text-5xl font-bold'>Exotic tastes at <br /> your doorstep</h1>
                            <p className='mt-3'>We supply highly quality organic products</p>
                            <button className='btn bg-[#FF6868] border-none mt-3'>Shop Now</button>
                        </div>

                        <figure className='md:w-[60%]'>
                            <img src={img2} />
                        </figure>

                    </div>
                </SwiperSlide>


                <SwiperSlide>
                    <div className='flex flex-row items-center justify-between'>

                        <div className='*:text-white pl-32 hidden  md:flex flex-col justify-center items-center '>
                            <h1 className='text-5xl font-bold'>Exotic tastes at <br /> your doorstep</h1>
                            <p className='mt-3'>We supply highly quality organic products</p>
                            <button className='btn bg-[#FF6868] border-none mt-3'>Shop Now</button>
                        </div>

                        <figure className='md:w-[60%]'>
                            <img src={img3} />
                        </figure>

                    </div>
                </SwiperSlide>


                <SwiperSlide>
                    <div className='flex flex-row items-center justify-between'>

                        <div className='*:text-white pl-32 hidden  md:flex flex-col justify-center items-center '>
                            <h1 className='text-5xl font-bold'>Exotic tastes at <br /> your doorstep</h1>
                            <p className='mt-3'>We supply highly quality organic products</p>
                            <button className='btn bg-[#FF6868] border-none mt-3'>Shop Now</button>
                        </div>

                        <figure className='md:w-[60%]'>
                            <img src={img4} />
                        </figure>

                    </div>
                </SwiperSlide>


            </Swiper>
        </div>
    );
};

export default Banner;