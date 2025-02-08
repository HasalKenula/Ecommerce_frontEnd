import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import StudentType from "../type/StudentType";
import axios from "axios";
function Student(){
    const {isAuthenticated,jwtToken}=useAuth();
   


    const[students,setStudents]=useState<StudentType[]>([]);
    const[studentName,setStudentName]=useState<string>("");
    const[grade,setGrade]=useState<string>("");

   const config={
    headers: {
        Authorization: `Bearer ${jwtToken}`
    }
   }


    async function loadCategories(){
        const apiResponse=await axios.get("http://localhost:8081/student", config);
        setStudents(apiResponse.data);
    }

    function handeStudentName(event: any){
        setStudentName(event.target.value);
    }

    function handelGrade(event: any){
        setGrade(event.target.value);
    }


    async function addStudent() {
        await axios.post("http://localhost:8081/student",{
            student:studentName,
            grade:grade
        }, config);
        loadCategories();
    }

    useEffect(function (){
        if(isAuthenticated){
            loadCategories();
        }
        
    
    },[isAuthenticated])

    return(
        // <div className="container mx-auto pt-5 pb-5">
        //     <h1 className="text-3xl font-semibold mb-5 text-slate-800">Categories</h1>
        //     {/* <button onClick={loadCategories}>Load Categories</button> */}
        //     {/* <ul className="m-5">
        //         {categories.map(category=>(
        //             <li className="inline-block p-2 m-2 border border-slate-500 rounded-lg shadow-lg" key={category.id}>{category.name}</li>
        //         ))}
        //     </ul> */}
        //     <ul className="m-5">
        //         {students.map(function(student){
        //             return(<li  className="inline-block p-2 m-2 border border-slate-500 rounded-lg shadow-lg" key={student.id}>{student.student} {student.grade}</li>)
        //         })}
        //     </ul>

        //     <div className="mt-10 w-[650px] border border-slate-200 px-4 py-3 rounded-lg">
        //         <h2 className="text-xl font-medium mb-4">Add category</h2>
        //         <label className="text-sm text-slate-600 block mb-3">Enter the Student Name here</label>
        //         <input type="text" className="block w-full p-2 border border-slate-300 rounded-lg text-slate-600 text-sm mb-4"  value={StudentName} onChange={handeStudentName}/>
        //         <label className="text-sm text-slate-600 block mb-3">Enter the  grade here</label>
        //         <input type="text" className="block w-full p-2 border border-slate-300 rounded-lg text-slate-600 text-sm mb-4" value={grade} onChange={handelGrade} />
        //         <button className="py-2 px-3 rounded-lg bg-slate-800 text-sm text-white hover:bg-slate-950" onClick={addStudent}>Add Student</button>
        //     </div>
        // </div>

        <div className="container mx-auto pt-5 pb-5 bg-blue-400">
        <h1 className="text-3xl font-semibold mb-5 text-slate-800">
            Products
        </h1>

        <table className="table-auto w-full">
            <thead>
                <tr className="bg-slate-200 text-sm font-medium text-slate-600">
                    <th className="p-2 w-[50px] text-left">#</th>
                    <th className="p-2 w-[200px] text-left">Product Name</th>
                    <th className="p-2 text-left w-[100px]">Product Price</th>
                   
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {students.map(function (student) {
                    return (
                        <tr>
                            <td className="p-2 text-slate-600 border-b border-slate-200">{student.id}</td>
                            <td className="p-2 text-slate-600 border-b border-slate-200">{student.student}</td>
                            <td className="p-2 text-slate-600 text-right border-b border-slate-200">{student.grade}</td>
                            
                        </tr>
                    )
                })}
            </tbody>
        </table>

        <div className="mt-10 w-[650px] border border-slate-200 px-4 py-3 rounded-lg">
            <h2 className="text-xl font-medium mb-4">
               Add Product
            </h2>

            <div className="mb-4">
                <label className="text-sm text-slate-600 block mb-3">Enter product name</label>
                <input type="text" className="block w-full p-2 border border-slate-300 rounded-lg text-slate-600 text-sm" value={studentName} onChange={handeStudentName} />
            </div>

            <div className="mb-4">
                <label className="text-sm text-slate-600 block mb-3">Enter product price</label>
                <input type="text" className="block w-full p-2 border border-slate-300 rounded-lg text-slate-600 text-sm" value={grade} onChange={handelGrade} />
            </div>

           

          

            
                <button className="py-2 px-3 rounded-lg bg-slate-800 text-sm text-white hover:bg-slate-950" onClick={addStudent}>Add Product</button>
            
        </div>
    </div>
        

    )
}

export default Student;