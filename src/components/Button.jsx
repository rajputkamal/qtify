import React from "react";
import "./Button.css";

export const Button = ({ title }) => (
  <div style={{ width: "170px", height: "47px", marginRight: "32px" }}>
    <button className="feedback_button">{title}</button>
  </div>
);
