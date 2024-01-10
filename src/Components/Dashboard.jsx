import React from "react";
import Heading from "./Heading";
import Sidebar from "./Sidebar";
import Charts from "./Charts";
import TransactionBar from "./Transactionbar";

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <Heading />
      <div className="dashboard-content">
        <Sidebar />
        <div className="main-content">
          <Charts />
          <TransactionBar />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
