import { FaGoogle, FaFacebook, FaInstagram } from "react-icons/fa";
import { useState } from "react";
import "../index.css";
export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="container">
      <div className="login-box">
        <h1 className="title">carousel</h1>
        <p className="subtitle">Sign in to your account</p>
        
        <button className="social-btn google"><FaGoogle /> Sign up with Google</button>
        <button className="social-btn facebook"><FaFacebook /> Sign up with Facebook</button>
        <button className="social-btn instagram"><FaInstagram /> Sign up with Instagram</button>

        <div className="divider">or</div>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="input-field"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="input-field"
        />
        <div className="forgot-password">Forgot your password?</div>

        <button className="sign-in-btn">Sign in</button>

        <p className="signup-link">
          Don’t have an account? <span>Sign up</span>
        </p>
      </div>
    </div>
  );
}
