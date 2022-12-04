import React from "react";
import styles from "./Banner.module.css";
const Banner = (props) => {
  return (
    <div>
      <h1 className={[styles.subtitle_1, props.font].join(" ")}>
        Discover your next <span className={styles.subtitle_2}>Coffee</span>{" "}
        nearby.
      </h1>
      <button
        onClick={props.handleClick}
        className={[styles.show_my_button, props.font].join(" ")}
      >
        {props.buttonText}
      </button>
    </div>
  );
};

export default Banner;
