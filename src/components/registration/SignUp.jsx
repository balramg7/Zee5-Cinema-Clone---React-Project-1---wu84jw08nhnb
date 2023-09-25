import styles from "./SignUp.module.css";
import Card from "@mui/material/Card";
import React, { useState } from "react";

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "https://academics.newtonschool.co/api/v1/user/signup",
        {
          method: "POST",
          body: JSON.stringify({ ...formData, appType: "ott" }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.ok) {
        alert("Registration successful! You can now log in.");
        // Redirect to login page or perform other actions
      } else {
        alert("Registration failed. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };
  return (
    <div className={styles.registration_page}>
      <Card
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "20px",
          margin: "10px",
          backgroundColor: "blue",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <h2>Registration</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            required
          /><br/>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          /><br/>
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
          /><br/>
          <button type="submit">Register</button>
        </form>
      </Card>
    </div>
  );
};

export default SignUp;
