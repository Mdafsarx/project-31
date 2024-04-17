import axios from "axios";
import { useEffect, useState } from "react";
import Card from "./Card";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Autoplay, Navigation, Pagination } from 'swiper/modules';


const Cards = () => {

    const [items, setItems] = useState([])

    useEffect(() => {
        axios.get('/items.json')
            .then(data => setItems(data.data.items))
    }, [])


    return (
        <div className="mb-20">

            <Swiper
                slidesPerView={4}
                centeredSlides={true}
                spaceBetween={30}
                grabCursor={true}
                pagination={{
                    clickable: true,
                }}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                  }}
                 
                  navigation={true}
                  modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                
                {items?.map((item,i)=><SwiperSlide key={i}><Card item={item}></Card></SwiperSlide>)}
            </Swiper>



        </div>
    );
};

export default Cards;