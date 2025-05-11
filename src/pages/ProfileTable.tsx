import axios from "axios";
import { useEffect, useState } from "react";
import ProfileType from "../type/ProfileType";
import { useAuth } from "../context/AuthContext";
import NavigationBar from "./NavigationBar";
import Footer from "./Footer";
function ProfileTable() {
    const { isAuthenticated, jwtToken } = useAuth();
    const [profile, setProfile] = useState<ProfileType[]>([]);

    const config = {
        headers: {
            Authorization: `Bearer ${jwtToken}`
        }
    }

    async function loadProfiles() {
        try {
            const response = await axios.get("http://localhost:8081/profile", config);
            setProfile(response.data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(function () {
        if (isAuthenticated) {
            loadProfiles();
        }
    }, [isAuthenticated])

    return (
        <>
            <div>
                <NavigationBar />
            </div>

            <div className="container mx-auto pt-5 pb-5">
                <h1 className="text-6xl text-center font-semibold mb-5 text-slate-800 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
                    Profiles Table
                </h1>

                <table className="table-auto w-full">
                    <thead>
                        <tr className="bg-slate-200 text-sm font-medium text-slate-600">
                            <th className="p-2 w-[50px] text-left">#</th>
                            <th className="p-2 w-[300px] text-left">fullName</th>
                            <th className="p-2 w-[300px] text-left">subName</th>
                            <th className="p-2 w-[300px] text-left">address</th>
                            <th className="p-2 w-[300px] text-left">email</th>
                            <th className="p-2 text-left w-[300px] text-right">contact</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {profile.map(function (profiles) {
                            return (
                                <tr key={profiles.id} className="text-sm font-medium text-slate-600">
                                    <td className="p-2 border-b border-slate-300">{profiles.id}</td>
                                    <td className="p-2 border-b border-slate-300">{profiles.fullName}</td>
                                    <td className="p-2 border-b border-slate-300">{profiles.subName}</td>
                                    <td className="p-2 border-b border-slate-300">{profiles.address}</td>
                                    <td className="p-2 border-b border-slate-300">{profiles.email}</td>
                                    <td className="p-2 text-right border-b border-slate-300">{profiles.contact}</td>

                                </tr>
                            )
                        })}
                    </tbody>
                </table>

            </div>
            <div>
                <Footer />
            </div>
        </>
    )
}

export default ProfileTable;