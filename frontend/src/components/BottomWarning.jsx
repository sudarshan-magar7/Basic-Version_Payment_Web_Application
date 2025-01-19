/* eslint-disable no-unused-vars */
import React from "react";
import PropTypes from "prop-types"; // Import PropTypes
import { Link } from "react-router-dom";

export function BottomWarning({ label, buttonText, to }) {
  return (
    <div className="py-2 text-sm flex justify-center">
      <div>{label}</div>
      <Link className="pointer underline pl-1 cursor-pointer" to={to}>
        {buttonText}
      </Link>
    </div>
  );
}

// Add PropTypes validation
BottomWarning.propTypes = {
  label: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
};
