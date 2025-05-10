import {useEffect, useState } from "react";
import axios from "axios";
import NavigationBar from "./NavigationBar";
import Footer from "./Footer";
import { useAuth } from "../context/AuthContext";
function Contact() {
    const { isAuthenticated, jwtToken } = useAuth();

    const [name, setName] = useState<string>("");
    const [message, setMessage] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [subject, setSubjet] = useState<string>("");

    const config = {
        headers: {
            Authorization: `Bearer ${jwtToken}`
        }
    }


    async function send() {
        await axios.post("http://localhost:8081/contact", {
            name: name,
            message: message,
            subject: subject,
            email: email
        },config);
        setSubjet("");
        setMessage("");
        setName("");
        setEmail("");
        alert("your contact is successful")
    }

    useEffect(function () {

    }, [isAuthenticated])


    function handleMessage(event: any) {
        setMessage(event.target.value);
    }

    function handleSubject(event: any) {
        setSubjet(event.target.value);
    }



    function handleName(event: any) {
        setName(event.target.value);
    }

    function handleEmail(event: any) {
        setEmail(event.target.value);
    }


    return (

        <div>

            <div>
                <NavigationBar />
            </div>
            <div className="bg-white-300 lg:flex justify-center items-center w-full lg:h-[700px] md:h-[920px] h-[800px] m-auto  aligns-items ">

                <div className=" bg-white-300 lg:w-1/2 lg:p-5  relative w-full  lg:h-3/3 m-0 lg:ml-8 p-3  ">




                    <div className="md:text-6xl text-4xl font-bold mt-[24px]  text-center">
                        Do you have any questions?<span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500  font-bold"> Ask us</span>

                    </div>
                    <div className="md:m-24 0 24 32 m-12 0 12 8 md:text-xl">
                        Please if you can not find your answer,
                        please send us your question, and we will answer you as soon as possible.
                    </div>




                </div>


                <div className=" bg-white-300 lg:w-1/2 lg:p-5  relative w-full rounded-lg lg:h-3/3 m-0 lg:mr-8 p-3 flex justify-center ">



                    <div className="w-[550px] border border-slate-200 px-4 py-3 rounded-lg shadow-2xl ">


                        <label className="text-sm text-slate-600 block mb-3">Enter  Message</label>
                        <textarea className="block w-full p-2 border border-slate-300 rounded-lg text-slate-600 text-sm mb-4 " value={message} onChange={handleMessage} />

                        <label className="text-sm text-slate-600 block mb-3">Enter your name</label>
                        <input type="text" className="block w-full p-2 border border-slate-300 rounded-lg text-slate-600 text-sm mb-4 " value={name} onChange={handleName} />


                        <label className="text-sm text-slate-600 block mb-3">Email Address</label>
                        <input type="email" className="block w-full p-2 border border-slate-300 rounded-lg text-slate-600 text-sm mb-4 " value={email} onChange={handleEmail} />

                        <label className="text-sm text-slate-600 block mb-3">Enter Subject</label>
                        <input type="text" className="block w-full p-2 border border-slate-300 rounded-lg text-slate-600 text-sm mb-4 " value={subject} onChange={handleSubject} />

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

export default Contact;