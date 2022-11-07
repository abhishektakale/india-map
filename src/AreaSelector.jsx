import React, { useState } from "react";
import ReactTooltip from "react-tooltip";
import MapChart from "./MapChart";
import jsonToState from "./States";
import india from "./topojsons/india.json";

const AreaSelector = ({ state }) => {
  const [content, setContent] = useState("");
  const [STName, setSTName] = useState("");
  const [contentD, setContentD] = useState("");
  const [DTName, setDTName] = useState("");

  return (
    <React.Fragment>
      {!state && !STName ? (
        <div style={{ backgroundColor: "black" }}>
          <MapChart
            unit={{ geoURL: india }}
            setTooltipContent={setContent}
            setName={setSTName}
          />
          <ReactTooltip>{content}</ReactTooltip>
        </div>
      ) : (
        <div style={{ backgroundColor: "black" }}>
          <div style={{ border: "1px solid black", backgroundColor: "black" }}>
            <MapChart
              unit={jsonToState(state || STName)}
              setTooltipContent={setContentD}
              setName={setDTName}
            />
            <ReactTooltip>{contentD}</ReactTooltip>
          </div>
        </div>
      )}
    </React.Fragment>
  );
};

export default AreaSelector;
