import { Icon } from '@iconify/react';

function Footer() {
    return (
        <div className="flex flex-col  justify-center items-center w-full lg:h-[550px] h-[1510px] md:h-[1750px] m-auto bg-opacity-90 bg-black">





            <div className="lg:flex lg:flex-row  flex-col w-full flex-bg-blue-400 lg:h-2/3 lg:m-0 lg:flex-nowrap flex-wrap text-white text-sm">
                <div className="lg:w-1/4 p-4   lg:mr-8  rounded-3xl lg:ml-10 mt-5 md:w-4/6 lg:m-0 m-auto lg:border-0 border-slate-500 border-b-4 ">

                    <div className="flex font-bold justify-center m-2 text-slate-500 lg:mb-8 md:text-xl">
                        About

                    </div>
                    <div className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500 flex font-bold justify-center  text-blue-400 md:text-xl ">
                        XPress

                    </div>
                    <div className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500 flex font-bold text-3xl justify-center text-blue-400">
                        Gagets

                    </div>
                    <div className="flex justify-center m-2 lg:leading-4 lg:mt-8 text-sm text-center md:text-xl lg:text-base">
                        <p> Welcome to XPress - your one-stop destination for fast, reliable, and affordable online shopping. At XPress, we're dedicated to delivering a seamless shopping experience with a wide range of quality products, from electronics and fashion to home essentials and more. With a focus on customer satisfaction and speedy delivery, we make shopping easier, quicker, and smarter. Experience the joy of shopping with XPress - where everything you need is just a click away!</p>
                    </div>

                </div>


                <div className="lg:w-1/4 p-4  lg:mr-8  lg:ml-8 rounded-3xl lg:m-0 mt-5 md:w-4/6 m-auto lg:border-0 border-slate-500 border-b-4">

                    <div className="flex font-bold justify-center text-slate-500  m-2 mb-3 md:text-xl">
                        Navigation Links
                    </div>
                    <div className="flex flex-col items-start items-center m-2 md:text-xl lg:text-base">
                        <div className='mb-12 '>
                            Home
                        </div>
                        <div className='mb-12'>
                            Services
                        </div>
                        <div className='mb-12'>
                            Gagets
                        </div>
                        <div >
                            Contact
                        </div>
                    </div>

                </div>


                <div className="lg:w-1/4 p-4 lg:mr-8  lg:ml-8 rounded-3xl lg:m-0 mt-5 md:w-4/6 m-auto lg:border-0 border-slate-500 border-b-4">

                    <div className="flex font-bold justify-center text-slate-500 m-2 mb-3 md:text-xl">
                        Contact
                    </div>
                    <div className="flex flex-col items-start items-center m-2 md:text-xl lg:text-base">
                        <div className='flex flex-col  items-start items-center gap-4'>

                            <Icon icon="material-symbols:location-on-outline" width="30px" height="30px" color="#7e22ce" />

                            <div className='m-0 p-0'>
                                "No 23, Ramaanayaka <br /> Road,Colombo 07"
                            </div>

                        </div>
                        <div className='flex flex-col  items-center gap-4'>

                            <Icon icon="material-symbols:call-outline" width="30px" height="30px" color="#7e22ce" />

                            <div>
                                034-2240334
                            </div>
                        </div>
                        <div className='flex flex-col  items-center gap-4'>

                            <Icon icon="material-symbols:mail-outline" width="30px" height="30px" color="#7e22ce" />

                            <div>
                                XPress@gmail.com
                            </div>
                        </div>
                        <div className='flex flex-col  items-center gap-4'>

                            <Icon icon="material-symbols:alarm-outline-rounded" width="30px" height="30px" color="#7e22ce" />

                            <div>
                                Monday-Friday<br />8:00am-5:00pm
                            </div>

                        </div>
                    </div>

                   
                </div>

                <div className="lg:w-1/4 p-4  lg:mr-8  lg:ml-8 rounded-3xl lg:m-0 mt-5 md:w-4/6 m-auto lg:border-0 border-slate-500 border-b-4">

                    <div className="flex font-bold justify-center text-slate-500  m-2 mb-3 md:text-xl">
                       Services
                    </div>
                    <div className="flex flex-col items-start items-center m-2 md:text-xl lg:text-base">
                        <div className='mb-12'>
                            Products
                        </div>
                        <div className='mb-12'>
                            Payments
                        </div>
                        <div className='mb-12'>
                            Discounts
                        </div>
                        <div >
                            Gifts
                        </div>
                    </div>

                </div>


            </div>

            <div className="text-slate-500 mt-8  pt-4 border-slatee-500 border-t-2  flex gap-4">



                <Icon icon="stash:social-whatsapp" width="30px" height="30px" color="#64748B" />


                <Icon icon="si:twitter-line" width="30px" height="30px" color="#64748B" />


                <Icon icon="ri:facebook-circle-line" width="30px" height="30px" color="#64748B" />


                <Icon icon="si:youtube-line" width="30px" height="30px" color="#64748B" />




            </div>
        </div>

    )
}

export default Footer;





