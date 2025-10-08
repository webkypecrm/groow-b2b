// import React from "react";

// function page() {
//   return <div>page sfdgf</div>;
// }

// export default page;




// "use client";

// import { useState } from "react";

// export default function page() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     console.log("Email:", email, "Password:", password);
//   };

//   return (
//    <div className="d-flex align-items-center justify-content-center vh-100 bg-light">
//   <div
//     className="card shadow-lg p-5"
//     style={{ width: "480px", borderRadius: "20px" }} // card thoda bada + round
//   >
//     <h3 className="text-center mb-4">GROOW</h3>
//     <form onSubmit={handleSubmit}>
//       {/* Email */}
//       <div className="mb-3">
//         <label htmlFor="email" className="form-label fw-semibold">
//           Email address
//         </label>
//         <input
//           type="email"
//           id="email"
//           className="form-control"
//           style={{
//             borderRadius: "12px", // rounder
//             height: "38px", // thoda chhota height
//           }}
//           placeholder="Enter your email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           required
//         />
//       </div>

//       {/* Password */}
//       <div className="mb-3">
//         <label htmlFor="password" className="form-label fw-semibold">
//           Password
//         </label>
//         <input
//           type="password"
//           id="password"
//           className="form-control"
//           style={{
//             borderRadius: "12px", // rounder
//             height: "38px", // thoda chhota height
//           }}
//           placeholder="Enter your password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           required
//         />
//       </div>

//       {/* Remember Me + Forgot */}
//       <div className="d-flex justify-content-between align-items-center mb-3">
//         <div className="form-check" style={{ marginLeft: "10px" }}>
//           {/* Checkbox thoda right shift */}
//           <input type="checkbox" className="form-check-input" id="remember" />
//           <label htmlFor="remember" className="form-check-label">
//             Remember me
//           </label>
//         </div>
//         <a href="#" className="text-decoration-none">
//           Forgot password?
//         </a>
//       </div>

//       {/* Buttons */}
//       <button
//         type="submit"
//         className="btn btn-success w-100 "
//         style={{ padding: "10px", fontSize: "16px",  borderRadius: "12px", 
//             height: "40px", paddingBottom:"4px", marginBottom:"4px"  }} // wider button
//       >
//         Login
//       </button>
//       {/* <button
//         type="button"
//         className="btn btn-outline-secondary w-100 mt-2"
//         style={{ padding: "10px", fontSize: "16px",  borderRadius: "12px",  height: "44px",  paddingBottom:"12px", marginBottom:"14px"    }} // wider button
//       >
//         Cancel
//       </button>  */}
//     </form>

//     {/* Signup Option */}
//     <p className="text-center  mb-0">
//       Don’t have an account? <a href="/register">Sign Up</a>
//     </p>
//   </div>
// </div>

//   );
// }


"use client";

import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Page() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  // Handle form submit
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Email:", email, "Password:", password);
  };

  return (
    <div className="d-flex align-items-center justify-content-center vh-100 bg-light">
      <div
        className="card shadow-lg p-5 border-0"
        style={{ width: "480px", borderRadius: "20px" }}
      >
        <h3 className="text-center mb-4 fw-bold">GROOW</h3>

        <form onSubmit={handleSubmit}>
          {/* Email */}
          <div className="mb-3">
            <label htmlFor="email" className="form-label fw-semibold">
              Email address
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
              value={email}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setEmail(e.target.value)
              }
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
              value={password}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setPassword(e.target.value)
              }
              required
            />
          </div>

          {/* Remember Me + Forgot */}
          <div className="d-flex justify-content-between align-items-center mb-3">
            <div className="form-check" style={{ marginLeft: "10px" }}>
              <input type="checkbox" className="form-check-input" id="remember" />
              <label htmlFor="remember" className="form-check-label">
                Remember me
              </label>
            </div>
            <a href="#" className="text-decoration-none">
              Forgot password?
            </a>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="btn btn-success w-100"
            style={{
              padding: "10px",
              fontSize: "16px",
              borderRadius: "12px",
              height: "40px",
              paddingBottom: "4px",
              marginBottom: "4px",
            }}
          >
            Login
          </button>
        </form>

        {/* Signup Option */}
        <p className="text-center mb-0">
          Don’t have an account? <a href="/register">Sign Up</a>
        </p>
      </div>
    </div>
  );
}


