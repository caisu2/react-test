import React from "react";

const ProductForm = () => {
  return (
    <>
      <div style={{ borderRadius: 5, backgroundColor: "#f2f2f2", padding: 20 }}>
        <form action="">
          <div>
            <label>Title</label>
            <input
              type="text"
              style={{
                width: "100%",
                padding: 12,
                border: "1px solid #ccc",
                borderRadius: 4,
                boxSizing: "border-box",
              }}
              placeholder="Your name.."
            />
            <label>Price</label>
            <input
              type="number"
              style={{
                width: "100%",
                padding: 12,
                border: "1px solid #ccc",
                borderRadius: 4,
                boxSizing: "border-box",
              }}
              placeholder="Your last name.."
            />
          </div>

          <label>Description</label>
          <textarea
            id="subject"
            name="subject"
            placeholder="Write something.."
            style={{
              width: "100%",
              height: 200,
              padding: 12,
              border: "1px solid #ccc",
              borderRadius: 4,
              boxSizing: "border-box",
            }}
          ></textarea>

          <input
            type="submit"
            style={{
              backgroundColor: "#04AA6D",
              color: "white",
              padding: "12px 20px",
              border: "none",
              borderRadius: 4,
              cursor: "pointer",
            }}
          ></input>
        </form>
      </div>
    </>
  );
};

export default ProductForm;
