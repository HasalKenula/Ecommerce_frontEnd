import Laptop2 from '../assets/Laptop2.png'
import Headphone2 from '../assets/Headphone2.png'
import Iphone from '../assets/Iphone.png'
import Playstation from '../assets/PlayStation.png'
import Tablets2 from '../assets/Tablet2.png'
import AppleWatch2 from '../assets/AppleWatch2.png'
function SellingCategory() {
    return (
        <div>
            <div className="w-full lg:h-[800px] bg-yellow-300 md:text-2xl text-lg ">
                <div className="flex lg:flex-row flex-col lg:h-1/2 lg:mb-24 max-sm:items-center ">
                    <div className='lg:w-2/6 bg-blue-200  '>
                        <div className='mx-[8px]  lg:h-full bg-green-300 flex lg:flex-col justify-center items-center'>

                            <img src={Laptop2} className='w-2/3 h-2/3 object-contain items-center lg:mr-0 lg:ml-0 md:mr-8 ml-auto ' />

                            <button className='w-4/8  rounded-xl bg-purple-400 text-white lg:m-8 lg:p-[12px] p-[8px]  md:p-[24px] items-center lg:mr-0 lg:ml-0 md:mr-8 ml-auto'>Laptops</button>


                        </div>
                    </div>
                    <div className='lg:w-2/6 bg-blue-200 '>
                        <div className='mx-[8px]  lg:h-full bg-green-300 flex lg:flex-col justify-center items-center'>

                            <img src={Headphone2} className='w-2/3 h-2/3 object-contain items-center lg:mr-0 lg:ml-0 md:mr-8 ml-auto' />

                            <button className='w-4/8  rounded-xl bg-purple-400 text-white lg:m-8 lg:p-[12px] p-[8px]  md:p-[24px] items-center lg:mr-0 lg:ml-0 md:mr-8 ml-auto'>Headphones</button>


                        </div>
                    </div>
                    <div className='lg:w-2/6 bg-blue-200 '>
                        <div className='mx-[8px]  lg:h-full bg-green-300 flex lg:flex-col justify-center items-center '>

                            <img src={AppleWatch2} className='w-2/3 h-2/3 object-contain items-center lg:mr-0 lg:ml-0 md:mr-8 ml-auto' />

                            <button className='w-4/8  rounded-xl bg-purple-400 text-white lg:m-8 lg:p-[12px] p-[8px]  md:p-[24px] items-center lg:mr-0 lg:ml-0 md:mr-8 ml-auto'>Watches</button>


                        </div>
                    </div>

                </div>




                <div className="flex lg:h-1/2 lg:flex-row flex-col max-sm:items-center">
                    <div className='lg:w-2/6 bg-blue-200 '>
                        <div className='mx-[8px]  lg:h-full bg-green-300 flex lg:flex-col justify-center items-center '>

                            <img src={Playstation} className='lg:w-2/3 lg:h-2/3  w-1/2 h-1/2 object-contain items-center lg:mr-0 lg:ml-0 md:mr-8 ml-auto' />

                            <button className='w-4/8 rounded-xl bg-purple-400 text-white lg:m-8 lg:p-[12px] p-[8px]   md:p-[24px] lg:mr-0 lg:ml-0 md:mr-8 ml-auto'>Playstation</button>


                        </div>
                    </div>
                    <div className='lg:w-2/6 bg-blue-200 '>
                        <div className='mx-[8px]  lg:h-full bg-green-300 flex lg:flex-col justify-center items-center'>

                            <img src={Tablets2} className='lg:w-2/3 lg:h-2/3  w-1/2 h-1/2 object-contain items-center lg:mr-0 lg:ml-0 md:mr-8 ml-auto' />

                            <button className='w-4/8  rounded-xl bg-purple-400 text-white lg:m-8 lg:p-[12px] p-[8px]  md:p-[24px] items-center lg:mr-0 lg:ml-0 md:mr-8 ml-auto'>Tablets </button>


                        </div>
                    </div>
                    <div className='lg:w-2/6 bg-blue-200 '>
                        <div className='mx-[8px]  lg:h-full bg-green-300 flex lg:flex-col justify-center items-center '>

                            <img src={Iphone} className='lg:w-2/3 lg:h-2/3  w-1/2 h-1/2  object-contain items-center lg:mr-0 lg:ml-0 md:mr-8 ml-auto' />

                            <button className='w-4/8  rounded-xl bg-purple-400 text-white lg:m-8 lg:p-[12px]  md:p-[24px] p-[8px] items-center md:mr-8 ml-auto'>iPhones</button>


                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default SellingCategory;