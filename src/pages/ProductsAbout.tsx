import Button from "./Button";
import Tab from '../assets/AppleAir.png';
import Watch from '../assets/AppleWatch.jpeg';
function ProductsAbout() {
    return (
        <div>
            <div className="w-full lg:h-[700px]  flex flex-col lg:flex-row text-white ">
                <div className=" lg:w-1/2 h-[500px] lg:h-auto bg-gray-800 lg:mt-[24px] lg:mb-[24px] lg:ml-[24px] relative ">
                    <img src={Tab} alt="iPad Air" className="absolute inset-0 w-full h-full object-cover opacity-20" />
                    <div className=" absolute flex  flex-col inset-0 justify-center items-center   p-[6px] ">

                        <div className=" md:text-6xl text-4xl font-bold mt-[24px] ">
                            Apple  <br />
                            iPad Aire
                        </div>

                        <div className=" md:m-24 0 24 32 m-12 0 12 8 md:text-xl">
                            Power meets portability with the iPad Air. Featuring a stunning
                            Liquid Retina display, the powerful Apple M1 chip, and support for Apple Pencil
                            and Magic Keyboard, it's perfect for work, creativity, and entertainment all in
                            a sleek, lightweight design.
                        </div>

                        <div items-center>
                            <Button />
                        </div>
                    </div>

                </div>

                <div className=" lg:w-1/2 h-[500px] lg:h-auto bg-gray-800 lg:mt-[24px] lg:mb-[24px] lg:mr-[24px] relative">
                    <img src={Watch} alt="iPad Air" className="absolute inset-0 w-full h-full object-cover opacity-20" />
                    <div className=" absolute flex  inset-0 flex-col justify-center items-center   p-[6px]">
                        <div className="md:text-6xl text-4xl font-bold mt-[24px] ">
                            Apple  <br />
                            Watch
                        </div>

                        <div className="md:m-24 0 24 32 m-12 0 12 8 md:text-xl">
                            Stay connected, fit, and stylish with the SMART Apple Watch.
                            Track your workouts, monitor your health, receive notifications,
                            and enjoy seamless integration with your Apple devices all from your wrist.
                        </div>

                        <div items-center>
                            <Button />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )


}

export default ProductsAbout;