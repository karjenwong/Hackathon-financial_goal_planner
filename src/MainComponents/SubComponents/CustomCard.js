import React from "react";

function CustomCard({ info: { title, text, placeholder = false } }) {
  return (
    <div className="customCard">
      <div>{title}</div>
      {placeholder ? (
        <input type="text" placeholder={text} />
      ) : (
        <div>{text}</div>
      )}
    </div>
  );
}

export default CustomCard;
