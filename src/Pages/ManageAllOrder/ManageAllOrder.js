import React, { useEffect, useState } from "react";
import { Col, Container, Row, Table } from "react-bootstrap";
import Footer from "../Shared/footer/Footer";
import Navigation from "../Shared/Navigation/Navigation";

const ManageAllOrder = () => {
  const [manageOrders, setManageOrders] = useState([]);

  useEffect(() => {
    fetch("https://pure-shore-34277.herokuapp.com/orders")
      .then((res) => res.json())
      .then((data) => setManageOrders(data));
  }, []);
  const handleDelete = (id) => {
    // console.log(id);
    const proceed = window.confirm("Are you sure about this ?");
    if (proceed) {
      fetch(`https://pure-shore-34277.herokuapp.com/orders/${id}`, {
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
    <div style={{ backgroundColor: "#F4F6F7" }}>
      <Navigation></Navigation>
      <Container>
        <h1 style={{ padding: "10px", color: "#6A140C ", fontWeight: "700px" }}>
          All Order Manages
        </h1>
        <Table
          striped
          bordered
          hover
          variant="dark"
          responsive
          style={{ margin: "0 auto" }}
        >
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
        <br />
      </Container>
      <Footer></Footer>
    </div>
  );
};

export default ManageAllOrder;
