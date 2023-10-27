import { useEffect, useState } from "react";


function StudentForm(props){
    const [name,setName]=useState(props.nameVal);
    const [email,setEmail]=useState(props.emailVal);
    const [rollno,setRollno]=useState(props.rollnoVal);
    const arr=[name,email,rollno];
    const handleclick=()=>{
        props.getState(arr);
    }
    useEffect(()=>{
        setName(props.nameVal);
        setEmail(props.emailVal);
        setRollno(props.rollnoVal);
    },[props.nameVal,props.emailVal,props.rollnoVal]);
    return(
        <div style={{maxWidth:"40%",margin:"0px auto"}}>
            <input defaultValue={props.nameVal} onChange={(event)=>setName(event.target.value)} class="form-control my-2" placeholder="enter name"/>
            <input defaultValue={props.emailVal} onChange={(event)=>setEmail(event.target.value)} class="form-control my-2" placeholder="enter email"/>
            <input defaultValue={props.rollnoVal} onChange={(event)=>setRollno(event.target.value)} class="form-control my-2" placeholder="enter rollno"/>
            <button onClick={handleclick} class="btn btn-success my-2 d-block mx-auto" type="submit">Submit</button>
        </div>
    )
}
export default StudentForm;