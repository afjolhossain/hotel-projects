import React, { useEffect, useState } from "react";
import { Container, Table } from "react-bootstrap";
import useAuth from "../../hooks/useAuth";

const MyOrder = () => {
  const { user } = useAuth();
  const email = user?.email;

  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const url = `http://localhost:5000/orders`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, [orders]);
  const myOrder = orders.filter((order) => order.email === email);
  const handleDelete = (id) => {
    console.log(id);
    const confirm = window.confirm("Are you sure about this ?");
    if (confirm) {
      fetch(`http://localhost:5000/orders/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            alert("Deleted successfully");
            const remaining = orders.filter((booking) => booking._id !== id);
            setOrders(remaining);
          }
        });
    }
  };
  return (
    <Container>
      <h1>My Order List</h1>

      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>Email</th>
            <th>Address</th>
            <th>Username</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {myOrder.map((order) => (
            <tr>
              <td> {order.name}</td>
              <td> {order.email}</td>
              <td> {order.address}</td>
              <td>
                <button
                  style={{ marginRight: 10, backgroundColor: "#F1948A" }}
                  onClick={() => handleDelete(order._id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default MyOrder;
