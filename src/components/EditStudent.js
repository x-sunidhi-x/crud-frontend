import { useEffect, useState } from "react";
import StudentForm from "./StudentForm";
import  Axios  from "axios";
import { useParams } from "react-router-dom";
function EditStudent(){
    const {id}=useParams();
    const [newData,setNewData]=useState([]);
    const [init,setInit]=useState({name:"",email:"",rollno:""});
    useEffect(()=>{
        Axios.get("https://crud-v5x6.onrender.com/students/update-student/"+id)
        .then((res)=>{
            if(res.status === 200){
                const {name,email,rollno}= res.data;
            setInit({name,email,rollno});
            }
            else
                Promise.reject();
        })
        .catch((err)=>alert(err));
    },[id]);
    
    const getState=(childData)=>{
        setNewData(childData);
    }
    const handleSubmit=()=>{
        const data={name:newData[0],email:newData[1],rollno:newData[2]}
        Axios.put("https://crud-v5x6.onrender.com/students/update-student/"+id,data)
        .then((res)=>{
            if(res.status===200)
                alert("record updated")
            else    Promise.reject();
        })
        .catch((err)=>alert(err));
    }
    return (
        <form onSubmit={handleSubmit}>
            <StudentForm getState={getState}  nameVal={init.name} emailVal={init.email} rollnoVal={init.rollno} />
        </form>
    )
}
export default EditStudent;