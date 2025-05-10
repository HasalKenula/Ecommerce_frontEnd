import Button from "./Button";
import Auto from "./AutoPlay";
import SellingCategory from "./SellingCategory";
import Footer from "./Footer";
import ProductsAbout from "./ProductsAbout";
import Deals from "./Deals";
import NavigationBar from "./NavigationBar";

function Home() {
   
    return (

        <div>
            <div>
                <NavigationBar />
            </div>
            <div className="w-full lg:h-[700px] flex flex-col lg:flex-row md:h-[1320px] h-[850px]">
                <div className="lg:w-1/2 lg:mt-[24px] lg:mb-[24px] lg:ml-[24px] flex  justify-center items-center ">
                    <div className=" flex  flex-col justify-center items-center   p-[6px]">
                        <div className="md:text-6xl text-4xl font-bold mt-[24px] ">
                            Get <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500 ">Best Device</span>  <br />
                            With Lowest Price
                        </div>

                        <div className="md:m-24 0 24 32 m-12 0 12 8 md:text-xl">
                            Upgrade your tech without breaking the bank!
                            Find top quality devices
                            at unbeatable prices, ensuring performance,
                            reliability, and value all in one place.
                        </div>

                        <div items-center>
                            <Button />
                        </div>
                    </div>

                </div>

                <div className="lg:w-1/2 lg:mt-[24px] lg:mb-[24px] lg:mr-[24px]">
                    <Auto />
                </div>

            </div>


            <div className="lg:m-24">
                 <SellingCategory /> 
                
            </div>

            <div>
                <ProductsAbout />
            </div>

            <div>
                <Deals />
            </div>


            <div>
                <Footer />
            </div>

           

        </div>
    )
}

export default Home;