import React from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  ZoomableGroup,
} from "react-simple-maps";

import india from "./topojsons/india.json";

const MapChart = ({ setTooltipContent, setName, unit }) => {
  return (
    <>
      <ComposableMap
        data-tip=""
        projection="geoMercator"
        width={150}
        height={150}
        projectionConfig={{ scale: unit.scaleMap || 220 }}
      >
        <ZoomableGroup maxZoom={1} center={unit.centerMap || [80, 22]}>
          <Geographies geography={unit.geoURL}>
            {({ geographies }) =>
              geographies.map((geo) => (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  onMouseEnter={() => {
                    const { ST_NM ,district} = geo.properties;
                    setTooltipContent(`${ST_NM || district}`);
                  }}
                  onMouseLeave={() => {
                    setTooltipContent("");
                  }}
                  onClick={() => {
                    const { ST_NM, district } = geo.properties;
                    setName(`${ST_NM || district}`);
                  }}
                  style={{
                    default: {
                      fill: "#D6D6DA",
                      outline: "none",
                    },
                    hover: {
                      fill: "forestgreen",
                      outline: "none",
                    },
                    pressed: {
                      fill: "#2E8B57",
                      outline: "none",
                    },
                  }}
                />
              ))
            }
          </Geographies>
        </ZoomableGroup>
      </ComposableMap>
    </>
  );
};

export default MapChart;
