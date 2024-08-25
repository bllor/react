import PropTypes from "prop-types";
import styles from "./btn.module.css";
function Button({ text }) {
  return <button className={styles.btn}>button</button>;
}

Button.prototype = {
  text: PropTypes.string.isRequired,
};

export default Button;
