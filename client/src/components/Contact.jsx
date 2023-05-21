import React, { useState } from "react";
import { contact } from "../action/contact";
import "./Contact.css";

const Contact = ({ refrence }) => {
  const [formData, setFormData] = useState();
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    contact(formData);
  };
  return (
    <div className="center-div" ref={refrence}>
      <h2>Contact Us</h2>
      <div className="Contact">
        <form onSubmit={handleSubmit}>
          <div className="ContactFlex">
            <input
              required
              type="text"
              placeholder="First Name"
              name="fname"
              value={formData?.fname}
              onChange={handleChange}
            />
            <input
              required
              type="text"
              placeholder="Last Name"
              name="lname"
              value={formData?.lname}
              onChange={handleChange}
            />
          </div>

          <input
            required
            type="email"
            placeholder="Enter Email Address"
            name="email"
            value={formData?.email}
            onChange={handleChange}
          />

          <input
            required
            type="phone"
            placeholder="Enter Phone Number"
            name="phone"
            value={formData?.phone}
            onChange={handleChange}
            style={{ width: "60%" }}
          />

          <button className="btn-1" style={{ margin: "1rem 0 1rem 0 " }}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
