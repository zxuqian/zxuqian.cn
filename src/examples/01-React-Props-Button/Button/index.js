import React from "react";
import PropTypes from "prop-types";
import styles from "./styles.module.css";

function Button({ children }) {
  return <button className={styles.Button}>{children}</button>;
}

Button.propTypes = {};

export default Button;
