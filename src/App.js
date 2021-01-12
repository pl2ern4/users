import { shallowEqual, useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetch_user } from './action'

function App() {
  const userData = useSelector(state => state.userData, shallowEqual);
  const dispatch = useDispatch();

  useEffect(() => dispatch(fetch_user()), [])
  const handleClick = params =>{
    window.sessionStorage.setItem("data",JSON.stringify(userData[params]));
    window.location.href = `/users/page2/${params}`;
  }
  return (
    <div className="App">
      <table style={{width:"100%"}}>
        <thead>
          <tr>
          <th>
              Id
            </th>
            <th>
              Name
            </th>
            <th>
              Email
            </th>
            <th>
              Phone
            </th>
            <th>
              Street
            </th>
            <th>
              City
            </th>
            <th>
              Company Name
            </th>
          </tr>
        </thead>
        <tbody>
          {userData && userData.map((obj, key) => (
            <tr key={key} onClick={()=>handleClick(obj.id)}>
              <td>{obj.id}</td>
              <td>{obj.name}</td>
              <td>{obj.email}</td>
              <td>{obj.phone}</td>
              <td>{obj.address.street}</td>
              <td>{obj.address.city}</td>       
              <td>{obj.company && obj.company.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
