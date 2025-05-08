import Earbuds from "../assets/Earbuds.png"
function AboutSection2() {
    return (

        
        <div className="w-full lg:h-[700px] bg-white-300  flex flex-col lg:flex-row md:h-[920px] h-[850px]">


            <div className="bg-white-300 lg:w-1/2  lg:mt-[24px] lg:mb-[24px] lg:ml-[24px]  flex justify-center">
                <img src={Earbuds} />
            </div>

            <div className="lg:w-1/2 bg-white-300  lg:mt-[24px] lg:mb-[24px] lg:mr-[24px] flex  justify-center items-center ">
                <div className=" flex  flex-col justify-center items-center   p-[6px]">
                    <div className="md:text-6xl text-4xl font-bold mt-[24px] text-center">
                        We are expert in <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500  font-bold"> Gadgets</span>
                    </div>

                    <div className="md:m-24 0 24 32 m-12 0 12 8 md:text-xl">
                        With over 27 years of experience, we have been providing exceptional Watches products for commercial and residential properties throughout Bellingham. If you're looking for any type of plumbing repairs, installations or replacements, About Watches is the company to call.
                    </div>


                </div>

            </div>



        </div>

        
    );
}

export default AboutSection2;