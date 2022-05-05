import React, { useRef } from "react";
import Footer from "../Shared/footer/Footer";
import Navigation from "../Shared/Navigation/Navigation";

const AddService = () => {
  const nameref = useRef();
  const imageref = useRef();
  const descriptionref = useRef();
  const priceref = useRef();

  const handleAddService = (e) => {
    const name = nameref.current.value;
    const image = imageref.current.value;
    const description = descriptionref.current.value;
    const price = priceref.current.value;

    const newService = { name, description, price, image };

    fetch("https://pure-shore-34277.herokuapp.com/services", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newService),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          alert("successfully Added service");
          e.target.reset();
        }
      });

    e.eventDefault();
  };
  return (
    <div style={{ backgroundColor: "#D5D8DC" }}>
      <Navigation></Navigation>
      <br />
      <form
        sx={12}
        onSubmit={handleAddService}
        style={{
          border: "2px solid black",
          width: 400,
          marginBottom: "5px",
          height: 400,
          borderRadius: "10px",
          margin: "0 auto",
          backgroundColor: "#212F3D",
        }}
      >
        <br />
        <h3 style={{ color: "#D35400" }}>ADD A SERVICE</h3>
        <input
          type="text"
          style={{
            width: "350px",
            height: 50,
            borderRadius: "6px",
            marginTop: 15,
            backgroundColor: "#CACFD2",
          }}
          placeholder="Service Name"
          ref={nameref}
        />
        <br />
        <input
          type="text"
          style={{
            width: "350px",
            height: 50,
            borderRadius: "6px",
            marginTop: 10,
            backgroundColor: "#CACFD2",
          }}
          placeholder="Image-Url"
          ref={imageref}
        />
        <br />

        <input
          type="text"
          style={{
            width: "350px",
            height: 50,
            borderRadius: "6px",
            marginTop: 10,
            backgroundColor: "#CACFD2",
          }}
          placeholder="Description"
          ref={descriptionref}
        />
        <br />
        <input
          type="number"
          style={{
            width: "350px",
            height: 50,
            borderRadius: "6px",
            marginTop: 10,
            backgroundColor: "#CACFD2",
          }}
          placeholder="Price"
          ref={priceref}
        />
        <br />
        <input
          type="submit"
          style={{
            width: "350px",
            height: 50,
            marginTop: 10,
            borderRadius: "6px",
            backgroundColor: "#D35400",
          }}
          value="SUBMIT"
        />
      </form>
      <br />

      <Footer></Footer>
    </div>
  );
};

export default AddService;
