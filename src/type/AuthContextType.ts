// interface AuthContextType{
//     isAuthenticated: boolean;
//     jwtToken: string | null;
//     login: (jwtToken: string) => void;
//     logout: () => void;
// }

// export default AuthContextType;

interface AuthContextType{
    isAuthenticated:boolean;
    jwtToken:string | null;
    loading:boolean;
    login:(jwtToken:string)=>void;
    logout:()=>void;
}


export default AuthContextType;