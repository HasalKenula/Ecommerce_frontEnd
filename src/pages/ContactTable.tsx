import axios from "axios";
import { useEffect, useState } from "react";
import ContactType from "../type/ContactType";
import { useAuth } from "../context/AuthContext";
import NavigationBar from "./NavigationBar";
import Footer from "./Footer";
function ContactTable() {
    const { isAuthenticated, jwtToken } = useAuth();
    const [contact, setContact] = useState<ContactType[]>([]);

    const config = {
        headers: {
            Authorization: `Bearer ${jwtToken}`
        }
    }

    async function loadContacts() {
        try {
            const response = await axios.get("http://localhost:8081/contact", config);
            setContact(response.data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(function () {
        if (isAuthenticated) {
            loadContacts();
        }
    }, [isAuthenticated])

    return (
        <>

            <div>
                <NavigationBar />
            </div>
            <div className="container mx-auto pt-5 pb-5">
                <h1 className="text-6xl text-center font-semibold mb-5 text-slate-800 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
                    Contacts Table
                </h1>

                <table className="table-auto w-full">
                    <thead>
                        <tr className="bg-slate-200 text-sm font-medium text-slate-600">
                            <th className="p-2 w-[50px] text-left">#</th>
                            <th className="p-2 w-[300px] text-left">Name</th>
                            <th className="p-2 w-[300px] text-left">Message</th>
                            <th className="p-2 w-[300px] text-left">Subject</th>
                            <th className="p-2 text-left w-[300px] text-right">Email</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {contact.map(function (contacts) {
                            return (
                                <tr key={contacts.id} className="text-sm font-medium text-slate-600">
                                    <td className="p-2 border-b border-slate-300">{contacts.id}</td>
                                    <td className="p-2 border-b border-slate-300">{contacts.name}</td>
                                    <td className="p-2 border-b border-slate-300">{contacts.message}</td>
                                    <td className="p-2 border-b border-slate-300">{contacts.subject}</td>
                                    <td className="p-2 text-right border-b border-slate-300">{contacts.email}</td>

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

export default ContactTable;