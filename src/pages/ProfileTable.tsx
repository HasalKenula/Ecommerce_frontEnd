import axios from "axios";
import { useEffect, useState } from "react";
import ProfileType from "../type/ProfileType";
import { useAuth } from "../context/AuthContext";
function ProfileTable() {
    const {isAuthenticated,jwtToken}=useAuth();
    const [profile, setProfile] = useState<ProfileType[]>([]);

    const config={
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
        if(isAuthenticated){
        loadProfiles();
        }
    },[isAuthenticated])

    return (
        <div className="container mx-auto pt-5 pb-5">
            <h1 className="text-6xl text-center font-semibold mb-5 text-slate-800">
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
                            <tr className="text-sm font-medium text-slate-600">
                                <td className="p-2">{profiles.id}</td>
                                <td className="p-2">{profiles.fullName}</td>
                                <td className="p-2">{profiles.subName}</td>
                                <td className="p-2">{profiles.address}</td>
                                <td className="p-2">{profiles.email}</td>
                                <td className="p-2 text-right">{profiles.contact}</td>

                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default ProfileTable;