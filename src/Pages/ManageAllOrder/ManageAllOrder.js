import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import Footer from "../Shared/footer/Footer";
import Navigation from "../Shared/Navigation/Navigation";

const ManageAllOrder = () => {
  const [manageOrders, setManageOrders] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/orders")
      .then((res) => res.json())
      .then((data) => setManageOrders(data));
  }, []);
  const handleDelete = (id) => {
    // console.log(id);
    const proceed = window.confirm("Are you sure about this ?");
    if (proceed) {
      fetch(`http://localhost:5000/orders/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            alert("Deleted successfully");
            const remaining = manageOrders.filter(
              (booking) => booking._id !== id
            );
            setManageOrders(remaining);
          }
        });
    }
  };
  return (
    <div style={{ margin: "auto" }}>
      <Navigation></Navigation>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Address</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {manageOrders.map((manageOrder) => (
            <tr>
              <td> {manageOrder.name}</td>
              <td> {manageOrder.email}</td>
              <td> {manageOrder.address}</td>
              <td>
                <button onClick={() => handleDelete(manageOrder._id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Footer></Footer>
    </div>
  );
};

export default ManageAllOrder;
