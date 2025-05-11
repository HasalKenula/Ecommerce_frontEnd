import axios from "axios";
import { useEffect, useState } from "react";
import OrderType from "../type/OrdersType";
import { useAuth } from "../context/AuthContext";
import NavigationBar from "./NavigationBar";
import Footer from "./Footer";
function Orders() {
    const { isAuthenticated, jwtToken } = useAuth();
    const [orders, setOrders] = useState<OrderType[]>([]);

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

    useEffect(function () {
        if (isAuthenticated) {
            loadOrders();
        }
    }, [isAuthenticated])
    
    return (
        <div>
            <div>
                <NavigationBar />
            </div>
            <div className="container mx-auto pt-5 pb-5">
                <h1 className="text-6xl font-semibold mb-5 text-slate-800 text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
                    Orders Table
                </h1>

                <table className="table-auto w-full">
                    <thead>
                        <tr className="bg-slate-200 text-sm font-medium text-slate-600">
                            <th className="p-2 w-[150px] text-left">#</th>
                            <th className="p-2 w-[600px] text-left">Date Time</th>
                            <th className="p-2 w-[600px] text-right">Total Amount</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders.map(function (order) {
                            return (
                                <tr key={order.id} className="text-sm font-medium text-slate-600">
                                    <td className="p-2 border-b border-slate-300">{order.id}</td>
                                    <td className="p-2 border-b border-slate-300">{order.orderDateTime.toLocaleString()}</td>
                                    <td className="p-2 text-right border-b border-slate-300">{order.totalPrice}</td>
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