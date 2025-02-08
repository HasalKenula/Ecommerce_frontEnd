import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function ProtectedRoute(){
    // const {isAuthenticated}=useAuth();

    // if(isAuthenticated){
    //     return <Outlet/>
    // }else{
    //     return (
    //         <Navigate to="/auth/login" />
    //     )
    // }

    const{isAuthenticated,loading}=useAuth();

    if(!loading){
        if(isAuthenticated){
            return <Outlet/>
        }else{
            return(
                <Navigate to="/auth/login"/>
            )
        }
    }
}

export default ProtectedRoute;