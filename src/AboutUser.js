import { useEffect } from "react";
import { Link } from "react-router-dom";

const AboutUser = ({match:{params:{id}}}) =>{
    const userData = JSON.parse(window.sessionStorage.getItem("data"));
    
    useEffect(()=>{
        return ()=>window.sessionStorage.removeItem("data")
    },[]);

    if(!userData){
    return <div style={{margin:"0 auto", width:"100%"}}>Data Not Found</div>;
    }
    return (<div>
        <p>Name: { userData.name }</p>
        <p>Email:{ userData.email }</p>
        <p>Phone: {userData.phone}</p>
        <p>Website: {userData.website}</p>
        <p>Company: {userData.company && userData.company.name}</p>
        <p>Address: {`${userData.address.suite} \n ${userData.address.street}\n ${userData.address.city}`}</p>
        <p><Link to="/"> Home </Link></p>
    </div>)
}
export default AboutUser;