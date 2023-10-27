import StudentForm from "./StudentForm";
import { useState } from "react";
import Axios from 'axios'
function CS(){
    const [arr,setArr]=useState([]);
const getState=(out)=>{
    setArr(out);
}
    const handleSubmit=(event)=>{
        event.preventDefault();
        const data={name:arr[0],email:arr[1],rollno:arr[2]};
        Axios.post("https://crud-v5x6.onrender.com/students/create-student",data)
        .then((res)=>{
            if(res.status===200)
            alert("record added successfully");
            else
            Promise.reject();
        })
        .catch((err)=>alert(err))
        event.target.reset();
    }
    return(
        <form onSubmit={handleSubmit}>
            <StudentForm getState={getState}
            nameVal="" emailVal="" rollnoVal="" >

                </StudentForm>
        </form>
    )
}
export default CS;