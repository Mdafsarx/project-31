import img1 from '../../assets/fruit1.png'
import img2 from '../../assets/fruit2.png'
import img3 from '../../assets/fruit3.png'
import img4 from '../../assets/fruit4.png'
import img5 from '../../assets/fruit5.png'

const FiveFruit = () => {
    return (

            <div className='w-10 md:w-1/2  mx-auto'>

                <div className='flex items-center justify-center gap-3 p-3 md:p-6 hover:bg-slate-900 hover:text-white bg-white shadow-2xl -mt-36 absolute z-10 rounded-xl '>

                    <div className='flex flex-col items-center'>
                        <img src={img1} alt="" />
                        <h1 className='font-bold '>Grape</h1>
                    </div>

                    <div className='flex flex-col items-center'>
                        <img src={img2} alt="" />
                        <h1 className='font-bold '>Orange</h1>
                    </div>

                    <div className='flex flex-col items-center'>
                        <img src={img3} alt="" />
                        <h1 className='font-bold '>Mango</h1>
                    </div>

                    <div className='hidden md:flex flex-col items-center'>
                        <img src={img4} alt="" />
                        <h1 className='font-bold '>Strawberry</h1>
                    </div>

                    <div className='hidden md:flex flex-col items-center'>
                        <img src={img5} alt="" />
                        <h1 className='font-bold '>Pomegranate</h1>
                    </div>

                </div>

            </div>


    );
};

export default FiveFruit;