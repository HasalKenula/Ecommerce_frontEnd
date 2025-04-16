import Button from "./Button";
import Cat from '../assets/Cat.jpg';
function ProductsAbout() {
    return (
        <div>
            <div className="w-full lg:h-[700px] bg-purple-300 flex flex-col lg:flex-row ">
                <div className="lg:w-1/2 bg-blue-300 lg:mt-[24px] lg:mb-[24px] lg:ml-[24px]  ">
                    <div className=" flex  flex-col justify-center items-center   p-[6px]">
                        <div className="md:text-6xl text-4xl font-bold mt-[24px] ">
                            Get Best Device  <br />
                            With Lowest Price
                        </div>

                        <div className="md:m-24 0 24 32 m-12 0 12 8 ">
                            Upgrade your tech without breaking the bank!
                            Find top-quality devices
                            at unbeatable prices, ensuring performance,
                            reliability, and value—all in one place.
                        </div>

                        <div items-center>
                            <Button />
                        </div>
                    </div>

                </div>

                <div className="lg:w-1/2 bg-red-300 lg:mt-[24px] lg:mb-[24px] lg:mr-[24px]">
                <div className=" flex  flex-col justify-center items-center   p-[6px]">
                        <div className="md:text-6xl text-4xl font-bold mt-[24px] ">
                            Get Best Device  <br />
                            With Lowest Price
                        </div>

                        <div className="md:m-24 0 24 32 m-12 0 12 8 ">
                            Upgrade your tech without breaking the bank!
                            Find top-quality devices
                            at unbeatable prices, ensuring performance,
                            reliability, and value—all in one place.
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