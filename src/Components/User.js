import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Container, Modal, Button, Table } from "react-bootstrap";

const User = () => {
    const [users, setUsers] = useState([]);
    const [usersDetail, setUsersDetail] = useState([]);
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);

    useEffect(() => {
        retrieveUsers();
    }, []);

    const retrieveUsers = async () => {
        try {
            const response = await axios.get(`https://reqres.in/api/users/`);

            // console.log(response.data, "<== response user list");
            setUsers(response.data.data);
        } catch (error) {
            console.log(error, "<== error retrieve user list");
        }
    };

    const retrieveUsersDetail = async (id) => {
        try {
            const response = await axios.get(`https://reqres.in/api/users/${id}`);

            // console.log(response.data.data, "<== response user list detail");
            setUsersDetail(response.data.data);
            setShow(true);
        } catch (error) {
            console.log(error, "<== error retrieve user list detail");
        }
    };
    return (
        <div>
            <Container>
                <h1>Hello ReqRes users!</h1>
                {/* {JSON.stringify(users)} */}
                {/* {JSON.stringify(retrieveUsersDetail(user.id))} */}
                <div>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((user, index) => (
                                <tr key={index}>
                                    <td>{index + 1} </td>
                                    <td>{user.first_name}</td>
                                    <td>{user.last_name}</td>
                                    <td>
                                        <Button onClick={() => retrieveUsersDetail(user.id)}>Detail</Button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </div>
                <div>
                    <Modal className="text-center" show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>Detail User</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <img key={usersDetail.avatar} src={usersDetail.avatar}></img>
                            <p>
                                <strong>{usersDetail.first_name}</strong>
                            </p>
                            <p>{usersDetail.email}</p>
                        </Modal.Body>
                    </Modal>
                </div>
            </Container>
        </div>
    );
};

export default User;
