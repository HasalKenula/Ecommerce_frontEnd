import VRMan from "../assets/VRMan.png"

function AboutSection1() {
    return (
        <div>
            <div className="w-full lg:h-[820px] bg-white-300  flex flex-col lg:flex-row md:h-[1320px] h-[1050px]">
                <div className="lg:w-1/2 bg-white-300  lg:mt-[24px] lg:mb-[24px] lg:ml-[24px] flex  justify-center items-center ">
                    <div className=" flex  flex-col justify-center items-center   p-[6px]">
                        <div className="md:text-6xl text-4xl font-bold mt-[24px]  text-center">
                            Get to know us<span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500  font-bold"> better</span>

                        </div>

                        <div className="md:m-24 0 24 32 m-12 0 12 8 md:text-xl">
                            With over 27 years of experience, we have been providing exceptional watches services for commercial and residential properties throughout Bellingham. If you're looking for any type of plumbing repairs, installations or replacements, About watches is the company to call. We provide FREE estimates if you live in the local area. Call us today to learn more about our senior citizen and military personnel discounts.
                        </div>

                        <ul className="grid grid-cols-2 gap-4 p-4 list-none">
                            <li className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-4 rounded-lg">Best Watch Quality</li>
                            <li className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-4 rounded-lg">Watches in Colors</li>
                            <li className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-4 rounded-lg">Watches Services</li>
                            <li className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-4 rounded-lg">Modern Accessories</li>
                            <li className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-4 rounded-lg">Free app installation</li>
                            <li className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-4 rounded-lg">Free Internet Service</li>
                        </ul>



                    </div>

                </div>

                <div className="bg-white-300 lg:w-1/2  lg:mt-[24px] lg:mb-[24px] lg:mr-[24px]">
                    <img src={VRMan} />
                </div>

            

                </div>

        </div>
    );
}

export default AboutSection1;