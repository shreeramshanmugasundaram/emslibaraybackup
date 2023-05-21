import React from "react";
import Email from "./Email";

const Newsletter = () => {
  return (
    <div
      style={{
        background: "var(--clr-grad)",
        padding: "2rem 0",
        margin: "5rem auto 0rem auto",
      }}
    >
      <div className="center-div" style={{}}>
        <h2 style={{ marginBottom: "1rem", color: "#fff" }}>
          Subscribe Our Newsletter
        </h2>
        <div style={{ width: "min(45rem,98%)" }}>
          <Email />
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
