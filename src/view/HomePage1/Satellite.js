import { useEffect, useState } from "react";
import "./satellite.css";
const Satellite = (props) => {
  const [styleSlider, setStyleSlider] = useState({});
  const [color, setColor] = useState({});
  useEffect(() => {
    switch (props.index) {
      case "1":
        return () => {
          setStyleSlider({ animationDelay: "0s" , boxShadow: "0px 0px 50px 0px gold"});
          setColor({
            background:
              "radial-gradient(at 50% 50%, white, gold, rgb(240,230,140), rgb(184,134,11), rgb(184,134,11))",
          });
        };
        break;
      case "2":
        return () => {
          setStyleSlider({ animationDelay: "-2s" , boxShadow: "0px 0px 50px 0px rgb(0,191,255)" });
          setColor({
            background:
              "radial-gradient(at 50% 50%, white, rgb(0,191,255), rgb(0,191,255), rgb(135,206,250), rgb(135,206,250))",
          });
        };
        break;
      case "3":
        return () => {
          setStyleSlider({ animationDelay: "-4s" , boxShadow: "0px 0px 50px 0px red" });
          setColor({
            background:
              "radial-gradient(at 30% 70%, white, red, rgb(255,69,0), rgb(250,128,114), rgb(250,128,114))",
          });
        };
        break;
    }
  }, []);
  return (
    <>
      <div className="ball">
        <div className="layer moving">
          <div className="layer gridplane xline"></div>
          <div className="layer gridplane xline2"></div>
          <div className="layer gridplane yline"></div>
          <div className="layer gridplane zline"></div>
          <div className="layer gridplane laser"></div>
          <div className="layer gridplane laser2"></div>
        </div>
        <div className="layer clip" style={styleSlider}>
          <div className="shade" style={color}></div>
        </div>
      </div>
    </>
  );
};
export default Satellite;
