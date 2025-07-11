import { useEffect, useState } from "react";
import axios from "axios";
import NavigationBar from "./NavigationBar";
import Footer from "./Footer";
import Profile from "../assets/Profile.png";
import { useAuth } from "../context/AuthContext";
function ProfileData() {
    const { isAuthenticated, jwtToken } = useAuth();

    const [fullName, setFullName] = useState<string>("");
    const [subName, setSubName] = useState<string>("");
    const [address, setAddress] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [contact, setContact] = useState<string>("");

    const config = {
        headers: {
            Authorization: `Bearer ${jwtToken}`
        }
    }



    async function send() {
        await axios.post("http://localhost:8081/profile", {
            fullName: fullName,
            subName: subName,
            address: address,
            email: email,
            contact: contact
        }, config);
        setFullName("");
        setSubName("");
        setAddress("");
        setEmail("");
        setContact("");
        alert("your are successful")
    }

    useEffect(function () {

    }, [isAuthenticated])


    function handleFullName(event: any) {
        setFullName(event.target.value);
    }

    function handleSubName(event: any) {
        setSubName(event.target.value);
    }



    function handleAddress(event: any) {
        setAddress(event.target.value);
    }

    function handleEmail(event: any) {
        setEmail(event.target.value);
    }

    function handleContact(event: any) {
        setContact(event.target.value);
    }


    return (

        <div>

            <div className="sticky top-0 z-50">
                <NavigationBar />
            </div>
            <div className="bg-white-300 lg:flex justify-center items-center w-full lg:h-[700px] md:h-[1150px] h-[900px] m-auto  aligns-items ">

                <div className=" bg-white-300 lg:w-1/2 lg:p-5  relative w-full  lg:h-3/3 m-0 lg:ml-8 p-3  ">




                    <div className="md:text-6xl text-4xl font-bold mt-[24px]  text-center">
                        Fill your <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500  font-bold">Profile</span>

                    </div>

                    <div className=' flex justify-center items-center pt-4 sm:pt-8 md:pt-12 lg:pt-8'>
                        <img src={Profile} className="w-32 sm:w-48 md:w-64 lg:w-60 rounded-full " />
                    </div>
                    <div className="md:m-24 0 24 32 m-12 0 12 8 md:text-xl text-center">
                        Please fill your profile,
                        before your first order.
                    </div>



                </div>


                <div className=" bg-white-300 lg:w-1/2 lg:p-5  relative w-full rounded-lg lg:h-3/3 m-0 lg:mr-8 p-3 flex justify-center ">



                    <div className="w-[550px] border border-slate-200 px-4 py-3 rounded-lg shadow-2xl ">


                        <label className="text-sm text-slate-600 block mb-3">Enter  your full name</label>
                        <input type="text" className="block w-full p-2 border border-slate-300 rounded-lg text-slate-600 text-sm mb-4 " value={fullName} onChange={handleFullName} />

                        <label className="text-sm text-slate-600 block mb-3">Enter  your user name</label>
                        <input type="text" className="block w-full p-2 border border-slate-300 rounded-lg text-slate-600 text-sm mb-4 " value={subName} onChange={handleSubName} />

                        <label className="text-sm text-slate-600 block mb-3">Enter your address</label>
                        <input type="text" className="block w-full p-2 border border-slate-300 rounded-lg text-slate-600 text-sm mb-4 " value={address} onChange={handleAddress} />


                        <label className="text-sm text-slate-600 block mb-3">Email Address</label>
                        <input type="email" className="block w-full p-2 border border-slate-300 rounded-lg text-slate-600 text-sm mb-4 " value={email} onChange={handleEmail} />

                        <label className="text-sm text-slate-600 block mb-3">Enter your contact number</label>
                        <input type="text" className="block w-full p-2 border border-slate-300 rounded-lg text-slate-600 text-sm mb-4 " value={contact} onChange={handleContact} />

                        <button className="py-2 px-3 rounded-lg bg-slate-800 text-white hover:bg-slate-950" onClick={send}>Send</button>

                    </div>

                </div>

            </div>

            <div>
                <Footer />
            </div>
        </div>



    )
}

export default ProfileData;