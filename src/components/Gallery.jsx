import React from "react";
import Navbar from "./Navbar";

const Gallery = ({ cakeImages, cupcakeImages, cookieImages }) => {
  return (
    <div>
      <Navbar />
      <div style={{ textAlign: "center", padding: "20px" }}>
        <h1 style={{ fontSize: "2rem", fontWeight: "bold", marginTop: "8px" }}>Gallery</h1>
        <p style={{ fontSize: "1.125rem", marginTop: "2px" }}>Lorem ipsum dolor sit amet</p>

        <div style={{ marginTop: "10px" }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: "semibold", marginBottom: "4px" }}>Cake</h2>
          <div style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
            {cakeImages.map((image, index) => (
              <div key={index} style={{ width: "150px", height: "150px", backgroundColor: "#e0e0e0" }}>
                <img src={image} alt={`Cake ${index + 1}`} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              </div>
            ))}
          </div>
          <button style={{ marginTop: "10px", padding: "5px 10px", backgroundColor: "#007bff", color: "white", border: "none", cursor: "pointer" }}>Show More</button>
        </div>

        <div style={{ marginTop: "10px" }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: "semibold", marginBottom: "4px" }}>Cupcake</h2>
          <div style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
            {cupcakeImages.map((image, index) => (
              <div key={index} style={{ width: "150px", height: "150px", backgroundColor: "#e0e0e0" }}>
                <img src={image} alt={`Cupcake ${index + 1}`} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              </div>
            ))}
          </div>
          <button style={{ marginTop: "10px", padding: "5px 10px", backgroundColor: "#007bff", color: "white", border: "none", cursor: "pointer" }}>Show More</button>
        </div>

        <div style={{ marginTop: "10px", marginBottom: "10px" }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: "semibold", marginBottom: "4px" }}>Cookie</h2>
          <div style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
            {cookieImages.map((image, index) => (
              <div key={index} style={{ width: "150px", height: "150px", backgroundColor: "#e0e0e0" }}>
                <img src={image} alt={`Cookie ${index + 1}`} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              </div>
            ))}
          </div>
          <button style={{ marginTop: "10px", padding: "5px 10px", backgroundColor: "#007bff", color: "white", border: "none", cursor: "pointer" }}>Show More</button>
        </div>
      </div>

      <footer style={{ backgroundColor: "#333", color: "white", padding: "20px", textAlign: "center" }}>
        <p>FOOTER</p>
      </footer>
    </div>
  );
};

export default Gallery;
