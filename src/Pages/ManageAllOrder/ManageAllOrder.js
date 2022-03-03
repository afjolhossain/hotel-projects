import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";

const ManageAllOrder = () => {
  const [manageOrders, setManageOrders] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/orders")
      .then((res) => res.json())
      .then((data) => setManageOrders(data));
  }, []);
  const handleDelete = (id) => {
    console.log(id);
    const confirm = window.confirm("Are you sure about this ?");
    if (confirm) {
      fetch(`http://localhost:5000/${id}`, {
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
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Username</th>
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
    </div>
  );
};

export default ManageAllOrder;
