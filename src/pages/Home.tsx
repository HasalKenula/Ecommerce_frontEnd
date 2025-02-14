import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import Navbar from "./NavBar";
import Button from "./Button";

import Auto from "./AutoPlay";

function Home() {
    const { logout } = useAuth();
    return (

        <div>
            <div>
                <Navbar />
            </div>
            <div className="w-full lg:h-[700px] bg-green-300 flex flex-col lg:flex-row md-[1500px]">
                <div className="lg:w-1/2 bg-blue-300 lg:mt-[24px] lg:mb-[24px] lg:ml-[24px] flex  justify-center items-center ">
                    <div className=" flex  flex-col justify-center items-center   p-[6px]">
                        <div className="text-6xl font-bold mt-[24px] ">
                        Get Best Device  <br/>
                        With Lowest Price
                        </div>

                        <div className="m-24 0 24 32 ">
                        Upgrade your tech without breaking the bank! 
                        Find top-quality devices
                         at unbeatable prices, ensuring performance,
                          reliability, and value—all in one place. 
                        </div>

                        <div>
                        <Button/>
                        </div>
                    </div>

                </div>

                <div className="lg:w-1/2 bg-yellow-300 mt-[24px] lg:mb-[24px] lg:mr-[24px]">
                      <Auto/>
                </div>

            </div>
            <div>
                <Link to="/category" className="bg-gray-800 text-white px-5 py-2 me-3">Category</Link>
                <Link to="/student" className="bg-gray-800 text-white px-5 py-2 me-3">Student</Link>
                {/* <Link to="/item" className="bg-gray-800 text-white px-5 py-2 me-3">Item</Link>
                <Link to="/stock" className="bg-gray-800 text-white px-5 py-2 me-3">Stock</Link>
                <Link to="/profile" className="bg-gray-800 text-white px-5 py-2 me-3">Setting</Link> */}
                <button className="bg-gray-800 text-white px-5 py-2 me-3" onClick={logout}>Logout</button>
            </div>

        </div>
    )
}

export default Home;