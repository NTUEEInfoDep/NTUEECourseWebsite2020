import React from "react";
import PropTypes from "prop-types";

// ========================================

const dayMapping = ["日", "一", "二", "三", "四", "五", "六"];

export default function DateString({ ISOString }) {
  const dateObj = new Date(ISOString);

  const year = dateObj.getFullYear();
  const month = dateObj.getMonth() + 1;
  const date = dateObj.getDate();
  const day = dayMapping[dateObj.getDay()];
  const hour = String(dateObj.getHours()).padStart(2, "0");
  const minute = String(dateObj.getMinutes()).padStart(2, "0");

  const dateString = `${year}/${month}/${date} (${day}) ${hour}:${minute}`;

  return <b>{dateString}</b>;
}

DateString.propTypes = {
  ISOString: PropTypes.string.isRequired,
};
