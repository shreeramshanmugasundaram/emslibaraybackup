import React from "react";
import "./Body.css";
const Body = ({ reference }) => {
  return (
    <div className="Body center-div">
      <h2>Our Vision</h2>
      <p>
        The library seeks to facilitate seamless access to quality information
        and knowledge resources in all formats, to execute this vision the
        library will create a congenial atmosphere that will allow interface of
        library resource for integrative scholarship
      </p>
      <h2 ref={reference}>About Us</h2>
      <p>
        The EMS LIBRARY is the one-stop destination for bookworms and readers
        who require a positive, inspirational, and comfortable study
        environment.
        <br />
        <br /> The EMS library is a key to the world of knowledge, and the
        acquisition of knowledge will help enlighten the personality of an
        individual at the vital, spiritual, and mental levels and will inculcate
        social virtues and foster intellectual development to make him a worthy
        citizen. To keep pace with the ever-expanding field of knowledge, the
        library is being updated from time to time. <br />
        <br />
        At the EMS library, the users are given free access to the Internet. We
        are sure to keep ourselves in the mainstream by sensitizing the library
        to the ever-changing needs of the stakeholders.
      </p>
    </div>
  );
};

export default Body;
