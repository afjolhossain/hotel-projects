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
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    fetch("https://pure-shore-34277.herokuapp.com/orders", {
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
    <div style={{ backgroundColor: "#E5E7E9" }}>
      <Navigation></Navigation>
      <h1 style={{ marginTop: "30px", color: "#C94463 " }}>
        Order Your Product
      </h1>
      <form
        style={{
          width: "450px",
          height: "350px",
          margin: "auto",
          marginTop: "20px",
          marginBottom: "5rem",
          backgroundColor: "#2C3E50",
        }}
        className="shipping-form "
        onSubmit={handleSubmit(onSubmit)}
      >
        <input
          style={{ width: "20rem", marginTop: "1.5rem", height: "3rem" }}
          defaultValue={user.displayName}
          {...register("name", { required: true })}
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
