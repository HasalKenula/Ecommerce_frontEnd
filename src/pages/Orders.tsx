import axios from "axios";
import { useEffect, useState } from "react";
import OrderType from "../type/OrdersType";
import { useAuth } from "../context/AuthContext";
import Footer from "./Footer";
import AdminNavbar from "./AdminNavbar";
function Orders() {
    const { isAuthenticated, jwtToken } = useAuth();
    const [orders, setOrders] = useState<OrderType[]>([]);
    const { logout } = useAuth();
    const config = {
        headers: {
            Authorization: `Bearer ${jwtToken}`
        }
    }

    async function loadOrders() {
        try {
            const response = await axios.get("http://localhost:8081/orders", config);
            setOrders(response.data);
        } catch (error) {
            console.log(error);
        }
    }

    async function oredrDelete(orderId:number){
        try {
            await axios.delete(`http://localhost:8081/orders/${orderId}`, config);
            loadOrders();
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(function () {
        if (isAuthenticated ) {
            loadOrders();
        }
    }, [isAuthenticated])
    
    return (
        <div>
            <div>
                 <AdminNavbar logout={logout} />
            </div>
            <div className="container mx-auto pt-5 pb-5">
                <h1 className="text-6xl font-semibold mb-5 text-slate-800 text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
                    Orders Table
                </h1>
                <table className="table-auto w-full">
                    <thead>
                        <tr className="bg-slate-200 text-sm font-medium text-slate-600">
                            <th className="p-2 w-[150px] text-left">#</th>
                            <th className="p-2 w-[150px] text-left">UserName</th>
                            <th className="p-2 w-[600px] text-left">Date Time</th>
                            <th className="p-2 w-[550px] text-left">Product Names</th> 
                            <th className="p-2 w-[600px] text-left">Total Amount($)</th>
                            <th className="p-2 w-[70px] text-right">Delete</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders.map(function (order) {
                            return (
                                <tr key={order.id} className="text-sm font-medium text-slate-600">
                                    <td className="p-2 border-b border-slate-300">{order.id}</td>
                                    <td className="p-2 border-b border-slate-300">{order.username? order.username:"No User"}</td>
                                    <td className="p-2 border-b border-slate-300">{order.orderDateTime.toLocaleString()}</td>
                                    <td className="p-2 border-b border-slate-300">
                                        {order.productNames?.trim() ? order.productNames : "No products"}
                                    </td>
                                    <td className="p-2 border-b border-slate-300">{order.totalPrice}</td>
                                    <td className="p-2 rounded-lg text-white bg-slate-800 text-right border-b border-slate-300"><button type="button" onClick={()=>oredrDelete(order.id)}>Delete</button></td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>  
            <div>
                <Footer />
            </div>
        </div>
    )
}

export default Orders;

