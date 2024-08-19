import { useState } from "react";
import { toastNotify } from "../utils/toastNotify";

const ContactUs = () => {
  const [contact, setContact] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContact((prevContact) => ({
      ...prevContact,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would handle the form submission, e.g., sending the data to your server
    console.log(contact);
    toastNotify("success", "Thank you for contacting us!");
    // Reset form after submission
    setContact({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <div className="contact-us-container mt-4" style={styles.container}>
      <h2 style={styles.header}>Contact Us</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <div style={styles.formGroup}>
          <label htmlFor="name" style={styles.label}>
            Name
          </label>
          <input
            type="text"
            name="name"
            value={contact.name}
            onChange={handleChange}
            required
            placeholder="Your Name"
            style={styles.input}
          />
        </div>
        <div style={styles.formGroup}>
          <label htmlFor="email" style={styles.label}>
            Email
          </label>
          <input
            type="email"
            name="email"
            value={contact.email}
            onChange={handleChange}
            required
            placeholder="Your Email"
            style={styles.input}
          />
        </div>
        <div style={styles.formGroup}>
          <label htmlFor="message" style={styles.label}>
            Message
          </label>
          <textarea
            name="message"
            value={contact.message}
            onChange={handleChange}
            required
            rows="6"
            placeholder="Your Message"
            style={styles.textarea}
          />
        </div>
        <button type="submit" style={styles.button}>
          Send Message
        </button>
      </form>
    </div>
  );
};

// Styles object for inline styling
const styles = {
  container: {
    marginTop: "3rem !important",
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
    fontSize: "2rem",
    fontWeight: "bold",
    color: "#333",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  formGroup: {
    marginBottom: "1.5rem",
    width: "100%",
    maxWidth: "500px",
  },
  label: {
    display: "block",
    marginBottom: ".5rem",
    textAlign: "left",
    fontSize: "1rem",
    color: "#555",
  },
  input: {
    width: "100%",
    padding: "0.75rem",
    fontSize: "1rem",
    border: "1px solid #ddd",
    borderRadius: "0.3rem",
    outline: "none",
    transition: "border-color 0.3s ease",
    boxSizing: "border-box",
  },
  textarea: {
    width: "100%",
    padding: "0.75rem",
    fontSize: "1rem",
    border: "1px solid #ddd",
    borderRadius: "0.3rem",
    outline: "none",
    transition: "border-color 0.3s ease",
    boxSizing: "border-box",
  },
  button: {
    padding: "0.75rem 1.5rem",
    fontSize: "1rem",
    color: "white",
    backgroundColor: "#28a745",
    border: "none",
    borderRadius: "0.3rem",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
    boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
  },
};

export default ContactUs;
