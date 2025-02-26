import Laptop2 from '../assets/Laptop2.png'
import Headphone2 from '../assets/Headphone2.png'
import Iphone from '../assets/Iphone.png'
import Playstation from '../assets/PlayStation.png'
import Tablets2 from '../assets/Tablet2.png'
import AppleWatch2 from '../assets/AppleWatch2.png'
function SellingCategory() {
    return (
        <div>
            <div className="w-full lg:h-[800px] bg-yellow-300 ">
                <div className="flex lg:flex-row flex-col lg:h-1/2 lg:mb-24 max-sm:items-center md:h-[2000px] h-[1600px]">
                    <div className='lg:w-2/6 bg-blue-200  '>
                        <div className='mx-[8px]  lg:h-full bg-green-300 flex flex-col justify-center items-center'>

                            <img src={Laptop2} className='w-2/3 lg:h-2/3 object-contain' />

                            <button className='w-4/8  rounded-xl bg-purple-400 text-white m-8 p-[12px]'>Laptops</button>


                        </div>
                    </div>
                    <div className='lg:w-2/6 bg-blue-200 '>
                        <div className='mx-[8px]  lg:h-full bg-green-300 flex flex-col justify-center items-center'>

                            <img src={Headphone2} className='w-2/3 lg:h-2/3 object-contain ' />

                            <button className='w-4/8  rounded-xl bg-purple-400 text-white m-8 p-[12px]'>Headphones</button>


                        </div>
                    </div>
                    <div className='lg:w-2/6 bg-blue-200 '>
                        <div className='mx-[8px]  lg:h-full bg-green-300 flex flex-col justify-center items-center'>

                            <img src={AppleWatch2} className='w-2/3 lg:h-2/3 object-contain ' />

                            <button className='w-4/8  rounded-xl bg-purple-400 text-white m-8 p-[12px]'>iPhones</button>


                        </div>
                    </div>

                </div>




                <div className="flex lg:h-1/2 lg:flex-row flex-col max-sm:items-center md:h-[2500px] h-[2000px]">
                    <div className='lg:w-2/6 bg-blue-200 '>
                        <div className='mx-[8px]  lg:h-full bg-green-300 flex flex-col justify-center items-center'>

                            <img src={Playstation} className='w-2/3 lg:h-2/3 object-contain  ' />

                            <button className='w-4/8  rounded-xl bg-purple-400 text-white m-8 p-[12px]'>Playstation</button>


                        </div>
                    </div>
                    <div className='lg:w-2/6 bg-blue-200 '>
                        <div className='mx-[8px]  lg:h-full bg-green-300 flex flex-col justify-center items-center'>

                            <img src={Tablets2} className='w-2/3 lg:h-2/3 object-contain ' />

                            <button className='w-4/8  rounded-xl bg-purple-400 text-white m-8 p-[12px]'>Tablets </button>


                        </div>
                    </div>
                    <div className='lg:w-2/6 bg-blue-200 '>
                        <div className='mx-[8px]  lg:h-full bg-green-300 flex flex-col justify-center items-center'>

                            <img src={Iphone} className='w-2/3 lg:h-2/3 object-contain  ' />

                            <button className='w-4/8  rounded-xl bg-purple-400 text-white m-8 p-[12px]'>Apple Watches</button>


                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default SellingCategory;