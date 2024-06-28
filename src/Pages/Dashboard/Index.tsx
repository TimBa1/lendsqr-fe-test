import React from "react";
import icon1 from "../../Assets/icon.svg";
import icon2 from "../../Assets/icon (1).svg";
import icon3 from "../../Assets/icon (2).svg";
import icon4 from "../../Assets/icon (3).svg";

function Dashboard() {
  return (
    <div className="users">
      <div className="title">Dashboard Analysis</div>
      <div className="box">
        <div className="box-container">
          <img src={icon1} alt="icon" />
          <h3>{"Daily Users"}</h3>
          <h2>{"2,456"}</h2>
        </div>
        <div className="box-container">
          <img src={icon2} alt="icon" />
          <h3>Active Users</h3>
          <h2>{"2,456"}</h2>
        </div>
        <div className="box-container">
          <img src={icon3} alt="icon" />
          <h3>Users with Loans</h3>
          <h2>12,400</h2>
        </div>
        <div className="box-container">
          <img src={icon4} alt="icon" />
          <h3>Users with Savings</h3>
          <h2>102,400</h2>
        </div>
        <div className="box-container">
          <img src={icon1} alt="icon" />
          <h3>{"Inactive Users"}</h3>
          <h2>{"1,456"}</h2>
        </div>
        <div className="box-container">
          <img src={icon2} alt="icon" />
          <h3>Total Transactions</h3>
          <h2>{"2,304,456"}</h2>
        </div>
        <div className="box-container">
          <img src={icon3} alt="icon" />
          <h3>Successfull Transactions</h3>
          <h2>125,400</h2>
        </div>
        <div className="box-container">
          <img src={icon4} alt="icon" />
          <h3>Users without Savings</h3>
          <h2>102,400</h2>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
