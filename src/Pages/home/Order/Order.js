import React from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../../hooks/useAuth";
import Footer from "../../Shared/footer/Footer";
import Navigation from "../../Shared/Navigation/Navigation";

const Order = () => {
  const { user } = useAuth();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    fetch("http://localhost:5000/orders", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.insertedId) {
          alert("Ordered Successfully");
        }
        data.reset();
      });
  };

  return (
    <div style={{ backgroundColor: "#5D6D7E " }}>
      <Navigation></Navigation>
      <h1>Order Your Product</h1>
      <form
        style={{
          width: "500px",
          height: "350px",
          margin: "auto",
          marginBottom: "5rem",
          backgroundColor: "#F5B7B1",
        }}
        className="shipping-form "
        onSubmit={handleSubmit(onSubmit)}
      >
        <input
          style={{ width: "20rem", marginTop: "1.5rem", height: "3rem" }}
          defaultValue={user.displayName}
          {...register("name")}
        />
        <br />
        <input
          style={{ width: "20rem", marginTop: "0.5rem", height: "3rem" }}
          defaultValue={user.email}
          {...register("email", { required: true })}
        />
        <br />
        <input
          style={{ width: "20rem", marginTop: "0.5rem", height: "3rem" }}
          placeholder="Address"
          defaultValue=""
          {...register("address")}
        />
        <br />

        {errors.exampleRequired && <span>This field is required</span>}

        <input
          style={{ width: "20rem", marginTop: "0.5rem", height: "3rem" }}
          type="submit"
        />
      </form>
      <Footer></Footer>
    </div>
  );
};

export default Order;
