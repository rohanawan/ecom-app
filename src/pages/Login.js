import { useState } from "react";
import { Link } from "react-router-dom";

// Hooks Import
import useUser from "../hooks/useUser";
import { toastNotify } from "../utils/toastNotify";

const Login = () => {
    const [credentials, setCredentials] = useState({ email: "", password: "" });
    const { loading, handleLogin } = useUser();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCredentials((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!credentials.email || !credentials.password) {
            toastNotify("error", "Please fill all fields.");
            return;
        }

        handleLogin(credentials);
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
                <h2
                    style={{
                        marginBottom: "2rem",
                    }}
                >
                    Login
                </h2>
                <form onSubmit={handleSubmit} style={{ width: "100%" }}>
                    <input
                        type="email"
                        name="email"
                        value={credentials.email}
                        onChange={handleChange}
                        placeholder="Email"
                        style={styles.inputField}
                    />
                    <br />
                    <br />
                    <input
                        type="password"
                        name="password"
                        value={credentials.password}
                        onChange={handleChange}
                        placeholder="Password"
                        style={styles.inputField}
                    />
                    <br />
                    <br />
                    <button
                        type="submit"
                        className="btn btn-primary"
                        disabled={loading}
                    >
                        Login
                    </button>
                    <br />
                    <br />
                    <Link to="/signup">Don't have an account? Sign up</Link>
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

export default Login;
