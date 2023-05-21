import React, { useState } from "react";
import { emailsender } from "../action/email";
import "./Email.css";

const Email = ({ setPopup }) => {
  const [email, setEmail] = useState();
  const handleSubmit = async (e) => {
    e.preventDefault();
    emailsender(email);
    try {
      setPopup(false);
    } catch (err) {}
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="Email ">
        <input
          required
          type="email"
          name="email"
          onChange={(e) =>
            setEmail({ ...email, [e.target.name]: e.target.value })
          }
          placeholder="Enter your email-id to subscribe to our newsletter"
        />
        <button>Subscribe</button>
      </div>
    </form>
  );
};

export default Email;
