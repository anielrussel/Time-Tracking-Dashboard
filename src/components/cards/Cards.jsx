import React from "react";
import "./cards.css";
import ellipse from "../../assets/images/icon-ellipsis.svg";
import { motion } from "framer-motion";

const Cards = (props) => {
  const { selectedTimeFrame, item } = props;

  let current, previous;
  if (selectedTimeFrame === "daily") {
    current = item.timeframes.daily.current;
    previous = item.timeframes.daily.previous;
  } else if (selectedTimeFrame === "weekly") {
    current = item.timeframes.weekly.current;
    previous = item.timeframes.weekly.previous;
  } else {
    current = item.timeframes.monthly.current;
    previous = item.timeframes.monthly.previous;
  }

  return (
    <div className="cards">
      <motion.div
        className="cards-image"
        style={{ backgroundColor: `${props.item.color}` }}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "tween", duration: 1.5 }}
      >
        <img src={props.item.image} alt="work" />
      </motion.div>
      <div className="cards-details">
        <div className="cards-details-top">
          <p>{props.item.title}</p>
          <img src={ellipse} alt="ellipse" />
        </div>
        <div className="cards-details-bottom">
          <h1>{props.item.timeframes[selectedTimeFrame].current}hr/s</h1>
          <p>
            Last week - {props.item.timeframes[selectedTimeFrame].previous}hrs
          </p>
        </div>
      </div>
    </div>
  );
};

export default Cards;
