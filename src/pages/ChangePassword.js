import { useState } from "react";

// Hooks Import
import useUser from "../hooks/useUser";
import { toastNotify } from "../utils/toastNotify";

// JSX
const ChangePassword = () => {
  const { loading, handleUpdatePassword } = useUser();

  const [formData, setFormData] = useState({
    oldPassword: "",
    newPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.oldPassword || !formData.newPassword) {
      toastNotify("error", "Please fill all fields.");
      return;
    }

    handleUpdatePassword(formData);
  };

  return (
    <div
      className="text-center"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          height: "50vh",
          backgroundColor: "#ffffff77",
          width: "35vmax",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          marginTop: "5rem",
          borderRadius: "10px",
        }}
      >
        <h2
          style={{
            marginBottom: "2rem",
          }}
        >
          Change Password
        </h2>
        <form onSubmit={handleSubmit} style={{ width: "100%" }}>
          <input
            type="password"
            name="oldPassword"
            placeholder="Old Password"
            value={formData.oldPassword}
            onChange={handleChange}
            style={styles.inputField}
          />
          <br />
          <br />
          <input
            type="password"
            name="newPassword"
            placeholder="New Password"
            value={formData.newPassword}
            onChange={handleChange}
            style={styles.inputField}
          />
          <br />
          <br />
          <button
            type="submit"
            className="btn btn-primary p-2"
            disabled={loading}
            style={{ width: "80%" }}
          >
            Change Password
          </button>
        </form>
      </div>
    </div>
  );
};

const styles = {
  inputField: {
    width: "80%",
    padding: "0.5rem",
    borderRadius: "5px",
    border: "1px solid gray",
    outline: "none",
    marginBottom: ".25rem",
  },
};

export default ChangePassword;
