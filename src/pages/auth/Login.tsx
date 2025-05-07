import axios from "axios";
import { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";

function Login() {

    const {login} =useAuth();
    const navigate = useNavigate();

    const [username, setUsername]=useState<string>("");
    const [password, setPassword]=useState<string>("");
    const [error, setError]=useState<string>("");
    async function submit(event: any){
        event.preventDefault();
        if(username === "" || password === ""){
            setError("Username and password are reqired")
        }

        const data ={
            username: username,
            password: password
        }

        try{
            const response = await axios.post("http://localhost:8081/auth/login",data);
            //console.log(response);
            login(response.data);
            navigate("/");
        }catch(error){
            setError("There was an error login");
        }
    }
    return (
        <div className="p-10">
            <div className="max-w-[600px] p-8 shadow-xl rounded-lg mx-auto">
                <div className="text-center mb-5">
                    <h1 className="text-2xl font-semibold">Login</h1>
                </div>

                <form onSubmit={submit}>
                    <div className="mb-4">
                        <label className="block mb-1">Username</label>
                        <input type="text" onChange={function(event){
                            setUsername(event.target.value);
                            setError("");
                        }} className="block w-full p-2 border border-gay-200 rounded-lg" placeholder="Enter your username" />
                    </div>

                    <div className="mb-4">
                        <label className="block mb-1">Password</label>
                        <input type="text" onChange={function(event){
                            setPassword(event.target.value);
                            setError("");
                        }} className="block w-full p-2 border border-gay-200 rounded-lg" placeholder="Enter your password" />
                    </div>

                    {error && <div className="text-sm text-red-500">{error}</div>}

                    <div className="mt-8">
                        <button type="submit" className="bg-gray-800 text-white px-4 py-2 rounded-lg w-full hover:bg-gray-950">Login</button>
                    </div>

                    <div className="mb-3">
                    
                        <Link to="/register"  className="w-full rounded-lg px-4 py-2 bg-gray-800 text-white hover:bg-gray-950 ">Register</Link>

                    </div>

                </form>
            </div>
        </div>
    )
}

export default Login;