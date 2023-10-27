import Axios from "axios";
import { Link } from "react-router-dom";
function StudentListRow(props)
{
    const {_id,name,email,rollNo} = props.obj; //Object destruction

    const handleClick = () => {
        Axios.delete("https://crud-v5x6.onrender.com/students/delete-student/" + _id)
        .then((res) => {
            if(res.status === 200){
                alert("Record deleted successfully");
                window.location.reload();
            }
            else    
                Promise.reject();
        })
        .catch((err)=>alert(err));
    }
    
    return (
        <tr>
            <td>{name}</td>
            <td>{email}</td>
            <td>{rollNo}</td>
            <td>
               
                    <Link to={`/edit-student/${_id}`}>
                         <button class="btn btn-success ms-3">Edit </button></Link>
                <button onClick={handleClick} class="btn btn-danger mx-3">Delete</button>
            </td>
        </tr>
    )
}
export default StudentListRow;
