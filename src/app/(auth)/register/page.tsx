"use client";
import { useState } from "react";

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="d-flex align-items-center justify-content-center vh-100 bg-light">
      <div
        className="card shadow-lg p-4 border-0"
        style={{ width: "430px", borderRadius: "16px" }}
      >
        {/* Heading */}
        <h3 className="text-center fw-bold mb-2 ">GROOW </h3>
        <p className="text-center text-muted mb-4">
          {/* Join us and explore the platform 🚀 */} 
        </p>

        <form onSubmit={handleSubmit}>
          {/* Name */}
 

          {/* Email */}
          <div className="mb-3">
            <label htmlFor="email" className="form-label fw-semibold">
              Email Address
            </label>
       
             <input
          type="email"
          id="email"
          className="form-control"
          style={{
            borderRadius: "12px", 
            height: "38px", 
          }}
          placeholder="Enter your email"
         value={formData.email}
              onChange={handleChange}
          required
        />
          </div>

          {/* Password */}
          <div className="mb-3">
            <label htmlFor="password" className="form-label fw-semibold">
              Password
            </label>
        
             <input
          type="password"
          id="password"
          className="form-control"
          style={{
            borderRadius: "12px", 
            height: "38px", 
          }}
          placeholder="Enter your password"
          value={formData.password}
              onChange={handleChange}
          required
        />
          </div>

          {/* Confirm Password */}
          <div className="mb-3">
            <label htmlFor="confirmPassword" className="form-label fw-semibold">
              Confirm Password
            </label>
            <input
              type="password"
              className="form-control  "
              id="confirmPassword"
              name="confirmPassword"
                 style={{
            borderRadius: "12px", 
            height: "38px", 
            marginBottom: "16px",
          }}
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="Re-enter password"
              required
            />
          </div>

          {/* Register Button */}
      
               <button
        type="submit"
        className="btn btn-success w-100 py-2  "
        style={{ padding: "10px", fontSize: "16px",  borderRadius: "12px", 
            height: "38px", marginBottom:"4px"  }} // wider button
      >
         Register
      </button>
        </form>

        {/* Login Link */}
        <p className="text-center mt-2 mb-0 text-muted">
          Already have an account?{" "}
          <a
            href="/login"
            className="text-decoration-none fw-semibold text-success"
          >
            Login
          </a>
        </p>
      </div>
    </div>
  );
}
