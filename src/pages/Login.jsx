import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const handleLogin = async (e) => {

        e.preventDefault();

        try {

            const response = await axios.post(
                "https://portfolio-backend-8bsg.onrender.com/auth/login",
                {
                    username,
                    password
                }
            );

            localStorage.setItem(
                "token",
                response.data.token
            );

            alert("Login Successful");

            navigate("/admin");

        } catch (error) {

            console.error(error);

            alert("Invalid Credentials");
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-slate-950">

            <form
                onSubmit={handleLogin}
                className="bg-slate-800 p-8 rounded-xl w-96"
            >

                <h2 className="text-3xl text-white mb-6 text-center">
                    Admin Login
                </h2>

                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) =>
                        setUsername(e.target.value)
                    }
                    className="
                        w-full
                        p-3
                        mb-4
                        rounded
                        bg-slate-700
                        text-white
                    "
                />

                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) =>
                        setPassword(e.target.value)
                    }
                    className="
                        w-full
                        p-3
                        mb-4
                        rounded
                        bg-slate-700
                        text-white
                    "
                />

                <button
                    type="submit"
                    className="
                        bg-blue-500
                        hover:bg-blue-600
                        w-full
                        py-3
                        rounded
                        text-white
                        font-semibold
                    "
                >
                    Login
                </button>

            </form>

        </div>
    );
}

export default Login;