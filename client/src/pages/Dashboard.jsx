import React, { useEffect, useState } from "react";
import { getemails } from "../action/getemails";
import { sendemail } from "../action/sendemail";
import "./Dashboard.css";
import "../App.css";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  const [emailList, setEmailList] = useState([]);
  const [selectedEmail, setSelectedEmail] = useState([]);
  const [subject, setSubject] = useState();
  const [html, setHtml] = useState();

  const updateSelectedEmail = (e) => {
    if (!selectedEmail.find((item) => item === e.target.value)) {
      setSelectedEmail([...selectedEmail, e.target.value]);
    } else {
      console.log("inside");
      setSelectedEmail(selectedEmail.filter((item) => item !== e.target.value));
    }
  };
  const selectAll = async () => {
    const confirm = window.confirm(
      "Once the process get started it cannot be stopped , Are you Sure you to send to all ?"
    );
    if (confirm) {
      const result = emailList.map((item) => item.email);
      await sendemail({ emails: result, html: html, subject: subject });
    }
  };
  const sendMail = async () => {
    const confirm = window.confirm(
      `Once the process get started it cannot be stopped , Are you Sure you to send to selected email? \n Email Count : ${selectedEmail.length}`
    );
    if (confirm) {
      await sendemail({ emails: selectedEmail, html: html, subject: subject });
    }
  };
  const fetchData = async () => {
    const result = await getemails(navigate);
    setEmailList(result);
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="DashboardWrapper center-div">
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: "1rem",
        }}
      >
        <h2>Email Sender</h2>
        <button
          className="btn-1"
          style={{ fontSize: "0.8rem", padding: "0.1rem 1rem" }}
          onClick={() => {
            localStorage.clear();
            navigate("/");
          }}
        >
          Log Out
        </button>
      </div>
      <div className="Dashboard">
        <div className="Dashboard_Left">
          <input
            type="text"
            onChange={(e) => setSubject(e.target.value)}
            placeholder="Subject"
          />
          <textarea
            placeholder="HTML/CSS"
            onChange={(e) => setHtml(e.target.value)}
            style={{ width: "100%", height: "50vh", padding: "1rem" }}
          ></textarea>
          <div>
            <button
              onClick={selectAll}
              className="btn-1"
              style={{ margin: "1rem" }}
            >
              Send To ALL
            </button>
            <button
              onClick={sendMail}
              className="btn-1"
              style={{ margin: "1rem" }}
            >
              Send Emails
            </button>
          </div>
        </div>
        <div className="Dashboard_Right">
          {emailList.map((item) => {
            return (
              <div key={item?._id} className="Dashboard_Item">
                <input
                  type="checkbox"
                  value={item?.email}
                  onChange={updateSelectedEmail}
                  id={item?.id}
                />
                <label htmlFor={item?.id}>{item?.email}</label>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
