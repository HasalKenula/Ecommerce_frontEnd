import Button from "./Button";
import VRMan from "../assets/VRMan.png"

function Deals() {
    return (
        <div className="w-full lg:h-[700px] flex flex-col lg:flex-row md:h-[1320px] h-[850px]">
            <div className="lg:w-1/2 lg:mt-[24px] lg:mb-[24px] lg:ml-[24px] flex  justify-center items-center ">
                <div className=" flex  flex-col justify-center items-center   p-[6px]">
                    <div className="md:text-6xl text-4xl font-bold mt-[24px] ">
                        Get Virtual Reality <br />
                        with  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500 ">40% </span> off.
                    </div>

                    <div className="md:m-24 0 24 32 m-12 0 12 8 md:text-xl">
                        Experience immersive worlds like never before. Whether it's gaming, learning, or exploring, our advanced VR system brings your imagination to life with stunning visuals, intuitive controls, and seamless connectivity.
                    </div>

                    <div items-center>
                        <Button />
                    </div>
                </div>

            </div>

            <div className="lg:w-1/2  lg:mt-[24px] lg:mb-[24px] lg:mr-[24px]">
                <img src={VRMan} />
            </div>

        </div>
    );
}

export default Deals;