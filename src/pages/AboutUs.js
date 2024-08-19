import React from "react";

// AboutUs Component
const AboutUs = () => {
  return (
    <div className="about-us-container mt-4" style={styles.container}>
      <h1 style={styles.header}>About Rohan's Store</h1>
      <p style={styles.text}>
        Welcome to Rohan's Store, the ultimate destination for food lovers
        seeking the convenience of delicious meals delivered straight to their
        doorstep. At Rohan's Store, we believe that enjoying a
        restaurant-quality meal should be as simple as clicking a button, no
        matter where you are.
      </p>
      <p style={styles.text}>
        Our journey began with a passion for great food and a vision to make it
        accessible to everyone. With a diverse menu that caters to all tastes,
        we take pride in sourcing fresh ingredients, celebrating local produce,
        and crafting dishes that inspire and delight.
      </p>
      <p style={styles.text}>
        As a team of food enthusiasts, chefs, and technologists, we're dedicated
        to providing a seamless ordering experience from the comfort of your
        home. From our kitchen to your dining table, Rohan's Store is here to
        transform how you experience food.
      </p>
      <p style={styles.text}>
        Thank you for choosing us. We're excited to serve you and look forward
        to bringing joy to your meal times.
      </p>
    </div>
  );
};

// Styles object for inline styling
const styles = {
  container: {
    marginTop: "4rem !important",
    padding: "2rem",
    textAlign: "center",
    maxWidth: "700px",
    margin: "auto",
    backgroundColor: "#ffffff77",
    borderRadius: "8px",
    boxShadow: "2px 0px 14px 7px #6a6a6aa",
  },
  header: {
    marginBottom: "2rem",
    fontSize: "2.5rem",
    fontWeight: "bold",
    color: "#333",
  },
  text: {
    marginBottom: "1.5rem",
    lineHeight: "1.8",
    fontSize: "1.1rem",
    color: "#555",
    textAlign: "justify",
  },
};

export default AboutUs;
