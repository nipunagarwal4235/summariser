import { useState } from "react";
import { useNavigate } from "react-router";

export default function Login() {
  const navigate = useNavigate();

  const [state, setState] = useState("Sign Up");

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div>
      <h2>{state === "Sign Up" ? "Create Account" : "Login"}</h2>
      <p>{state === "Sign Up" ? "Create your Account" : "Login"}</p>
      <form action="">
        {state === "Sign Up" && (
          <input
            onChange={(e) => setName(e.target.value)}
            value={name}
            type="text"
            placeholder="Full Name"
            required
          />
        )}

        <input
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          type="email"
          placeholder="Email"
          required
        />
        <input
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          type="password"
          placeholder="Password"
          required
        />
        <p onClick={() => navigate("/reset-password")}>Forgot Password</p>
        <button type="submit">{state}</button>
        {state === "Sign Up" ? (
          <p onClick={() => setState("Login")}>
            Already have an account. <span>Login Here</span>
          </p>
        ) : (
          <p onClick={() => setState("Sign Up")}>
            Don't have an account. <span>Sign Up Here</span>
          </p>
        )}
      </form>
    </div>
  );
}
