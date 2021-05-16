import React,{useContext} from "react";
import { AuthContext} from '../../../context/AuthContext'
import Table from 'react-bootstrap/Table'
import AdminMenu from '../adminform/AdminMenu'
import Button from 'react-bootstrap/Button'
import { useHistory } from "react-router-dom";

function Accounts() {
    const {users,removeUser} = useContext(AuthContext);
    const history = useHistory();
    function onClick(user){
      removeUser(user);
      history.go(0)
    } 
    return (
        <div className="container_hotel">
            <AdminMenu active={4}></AdminMenu>
            <div className="table-container"> 
                <Table striped bordered hover size="md">
                  <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Password</th>
                        <th>Remove</th>
                    </tr>
                  </thead>
                  <tbody>
                    {users.map((user,i )=>{
                      return (
                        <tr key={i}>
                          <td>{i+1}</td>
                          <td>{user[0]}</td>
                          <td> {user[1]} </td>
                          <td> <Button className="button admin-button" onClick={() => onClick(user[0])}> Delete </Button> </td>
                        </tr>
                      )
                    })} 
                  </tbody>
                </Table>
            </div>
        </div>
    );
}
export default Accounts;
