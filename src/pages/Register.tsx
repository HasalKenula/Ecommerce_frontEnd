import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Registration() {


    const [userName, setUserName] = useState<String>("");
    const [usesrPassword, setUserPassword] = useState<String>("");
    const [error, setError] = useState<string>("");

    const navigate = useNavigate();



    async function submit(event: any) {
        event.preventDefault();//disable default form submission

        if (userName === "" || usesrPassword === "") { // validate user inputs
            setError("Username and Password are required")
        }

        const data = {
            username: userName,
            password: usesrPassword
        }

        try {
            await axios.post("http://localhost:8081/auth/user", data);

            alert("registration is successful");
            navigate("/auth/login");


        } catch (error) {
            setError("There was an error logging in");
        }
    }


    return (
        <div className="min-h-screen w-full p-10 h-screen bg-cover bg-center bg-fixed bg-gradient-to-r from-purple-500 to-pink-500  ">

            <div style={{ textShadow: '2px 2px 4px rgba(250, 244, 244, 0.17)' }} className="text-center  text-6xl font-bold  md:pb-24 pb-8  text-transparent bg-clip-text bg-gradient-to-r from-pink-700 to-purple-700">
                XPress Gagets
            </div>

            <div className="max-w-[600px] p-8 shadow-xl rounded-lg mx-auto">
                <div className="text-center mb-5">
                    <h1 className="text-2xl font-semibold text-white">Register</h1>

                </div>

                <form onSubmit={submit}>
                    <div className="mb-4">
                        <label className="block mb-1 text-white">Username</label>
                        <input type="text" onChange={function (event) {
                            setUserName(event.target.value);
                            setError("");
                        }} className="block w-full p-2 border border-gray-200 rounded-lg" placeholder="Enter your username" />

                    </div>

                    <div className="mb-4">
                        <label className="block mb-1 text-white">Password</label>
                        <input type="password" onChange={function (event) {
                            setUserPassword(event.target.value);
                            setError("");
                        }} className="block w-full p-2 border border-gray-200 rounded-lg" placeholder="Enter your password" />

                    </div>

                    {error && <div className="text-sm text-red-500">{error}</div>}


                    <div className="mb-8">
                        <button type="submit" className="bg-gray-800 text-white px-4 py-2 rounded-lg w-full hover:bg-gray-950">Register</button>
                    </div>

                    <div className="mb-3">

                        <Link to="/auth/login" className="w-full rounded-lg px-4 py-2 bg-gray-800 text-white hover:bg-gray-950 ">Back</Link>

                    </div>
                </form>


            </div>

        </div>
    )
}


export default Registration;