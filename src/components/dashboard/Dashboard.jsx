import React from "react";
import "./dashboard.css";
import profile from "../../assets/images/image-jeremy.png";
import { motion } from "framer-motion";

const Dashboard = (props) => {
  const { onSelectedTimeFrameChange } = props;

  const handleTimeFrameClick = (timeFrame) => {
    onSelectedTimeFrameChange(timeFrame);
  };
  return (
    <div className="dashboard">
      <div className="dashboard-profile">
        <motion.div
          className="dashboard-profile-info"
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "tween", duration: 1.5 }}
        >
          <img src={profile} alt="profile" />
          <div className="dashboard-profile-info-text">
            <p>Report for</p>
            <h1>Jeremy Robson</h1>
          </div>
        </motion.div>
        <div className="dashboard-profile-links">
          <p
            onClick={() => handleTimeFrameClick("daily")}
            className="time-frame"
          >
            Daily
          </p>
          <p
            onClick={() => handleTimeFrameClick("weekly")}
            className="time-frame"
          >
            Weekly
          </p>
          <p
            onClick={() => handleTimeFrameClick("monthly")}
            className="time-frame"
          >
            Monthly
          </p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
