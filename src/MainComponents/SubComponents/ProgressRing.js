import React from "react";

function ProgressRing({ progressPercent = 0, mortgageLength=0}) {
  const width = 180;
  const height = 180;
  const strokeWidth = 8;
  const radius = width / 2 - strokeWidth * 2;
  const circumference = radius * 2 * Math.PI;
  const offset = circumference - progressPercent * circumference;
  const backgroundColor = "#CED0D1"
  const progressColor = "#39ABB4"
  
  return (
    <div className="progressRing">
      <svg
        className="progressCircle"
        height={height}
        width={width}
        viewBox={`0 0 ${width} ${height}`}
      >
        <circle
          strokeWidth={strokeWidth}
          stroke={backgroundColor}
          fill="none"
          r={radius}
          cx={width / 2}
          cy={height / 2}
        />
        <circle
          className="progressValue"
          strokeWidth={strokeWidth}
          stroke={progressColor}
          fill="none"
          r={radius}
          cx={width / 2}
          cy={height / 2}
          strokeDasharray={`${circumference} ${circumference}`}
          strokeDashoffset={offset}
        />
      </svg>
      <div className="circleText">
        <div className= "circleTextContainer">
          <div className ="circlePercent">{progressPercent * 100}%</div>
          <div className = "circleLength">Over<span> {mortgageLength} </span> year{mortgageLength > 2 ? "s" : ""}</div>
        </div>
      </div>
    </div>
  );
}

export default ProgressRing;
