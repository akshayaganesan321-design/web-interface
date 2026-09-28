import React, { useState } from "react";
import "./Form.css";

function Form() {
  const [form, setForm] = useState({
    username: "",
    aadhaar: "",
    email: "",
    phone: "",
    countryCode: "+91",
    password: "",
    confirmPassword: "",
    permanentAddress: "",
    temporaryAddress: "",
    gender: "",
    dob: "",
    city: "",
    state: "",
    occupation: "",
    photo: null
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === "photo") {
      setForm({ ...form, photo: files[0] });
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const validate = () => {
    if (form.username !== form.aadhaar) {
      alert("Username and Aadhaar Name must be same");
      return false;
    }

    if (form.phone.length !== 10 || isNaN(form.phone)) {
      alert("Phone number must be 10 digits");
      return false;
    }

    if (!form.email.includes("@")) {
      alert("Invalid email");
      return false;
    }

    if (form.password.length < 6) {
      alert("Password must be at least 6 characters");
      return false;
    }

    if (form.password !== form.confirmPassword) {
      alert("Passwords do not match");
      return false;
    }

    if (form.photo) {
      const type = form.photo.type;
      if (type !== "image/png" && type !== "image/jpeg") {
        alert("Only JPG/PNG allowed");
        return false;
      }
    }

    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      alert("Form Submitted Successfully ✅");
    }
  };

  const handleReset = () => {
    setForm({
      username: "",
      aadhaar: "",
      email: "",
      phone: "",
      countryCode: "+91",
      password: "",
      confirmPassword: "",
      permanentAddress: "",
      temporaryAddress: "",
      gender: "",
      dob: "",
      city: "",
      state: "",
      occupation: "",
      photo: null
    });
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <h2>Registration Form</h2>

        <input name="username" placeholder="Username *" value={form.username} onChange={handleChange} required />
        <input name="aadhaar" placeholder="Aadhaar Name *" value={form.aadhaar} onChange={handleChange} required />
        <input type="email" name="email" placeholder="Email *" value={form.email} onChange={handleChange} required />

        <div className="phone">
          <input name="countryCode" value={form.countryCode} readOnly />
          <input name="phone" placeholder="Phone (10 digits) *" value={form.phone} onChange={handleChange} required />
        </div>

        <input type="password" name="password" placeholder="Password *" value={form.password} onChange={handleChange} required />
        <input type="password" name="confirmPassword" placeholder="Confirm Password *" value={form.confirmPassword} onChange={handleChange} required />

        <textarea name="permanentAddress" placeholder="Permanent Address *" value={form.permanentAddress} onChange={handleChange} required />
        <textarea name="temporaryAddress" placeholder="Temporary Address *" value={form.temporaryAddress} onChange={handleChange} required />

        <select name="gender" value={form.gender} onChange={handleChange}>
          <option value="">Gender</option>
          <option>Male</option>
          <option>Female</option>
        </select>

        <input type="date" name="dob" value={form.dob} onChange={handleChange} />

        <input name="city" placeholder="City" value={form.city} onChange={handleChange} />
        <input name="state" placeholder="State" value={form.state} onChange={handleChange} />
        <input name="occupation" placeholder="Occupation" value={form.occupation} onChange={handleChange} />

        <input type="file" name="photo" onChange={handleChange} />

        <div className="buttons">
          <button type="submit">Submit</button>
          <button type="button" onClick={handleReset}>Reset</button>
        </div>
      </form>
    </div>
  );
}

export default Form;