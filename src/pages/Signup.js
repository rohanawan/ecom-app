import { useState } from "react";

// Hooks Import
import useUser from "../hooks/useUser";
import { toastNotify } from "../utils/toastNotify";

// JSX
const Signup = () => {
    const { handleSignup, loading } = useUser();

    const [formData, setFormData] = useState({
        email: "",
        password: "",
        name: "",
        postCode: "",
        address: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (
            !formData.email ||
            !formData.password ||
            !formData.name ||
            !formData.postCode ||
            !formData.address
        ) {
            toastNotify("error", "Please fill all fields.");
            return;
        }

        handleSignup(formData);
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
                    height: "65vh",
                    backgroundColor: "#f9f9f9",
                    width: "35vmax",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexDirection: "column",
                    marginTop: "5rem",
                    borderRadius: "10px",
                }}
            >
                <h2>Signup</h2>
                <form onSubmit={handleSubmit} style={{ width: "100%" }}>
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleChange}
                        style={styles.inputField}
                    />
                    <br />
                    <br />
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={formData.password}
                        onChange={handleChange}
                        style={styles.inputField}
                    />
                    <br />
                    <br />
                    <input
                        type="text"
                        name="name"
                        placeholder="Full Name"
                        value={formData.name}
                        onChange={handleChange}
                        style={styles.inputField}
                    />
                    <br />
                    <br />
                    <input
                        type="text"
                        name="postCode"
                        placeholder="Postal Code"
                        value={formData.postCode}
                        onChange={handleChange}
                        style={styles.inputField}
                    />
                    <br />
                    <br />
                    <input
                        type="text"
                        name="address"
                        placeholder="Address"
                        value={formData.address}
                        onChange={handleChange}
                        style={styles.inputField}
                    />
                    <br />
                    <br />
                    <button
                        type="submit"
                        className="btn btn-primary"
                        disabled={loading}
                    >
                        Signup
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
    },
};

export default Signup;
