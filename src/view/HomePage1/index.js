import React, { useEffect, useRef } from "react";
import Headder from "../../component/header";
import "./index.css";
import Rock from "../../assets/imgHomePage1/rock.png";
import Satellite from "./Satellite";
const HomePage1 = () => {
  const StarGroup = useRef();
  useEffect(() => {
    const createDiv = (size) => {
      let circle = document.createElement("div");
      circle.classList.add("circle");

      let randRange5 = Math.floor(Math.random() * 5) + 1;
      circle.classList.add(`blink_${randRange5}`);

      let widthAndHeight = random(size, "px");
      circle.style.height = circle.style.width = widthAndHeight;

      circle.style.left = random(window.innerWidth, "px");
      circle.style.top = random(window.innerHeight, "px");
      circle.style.backgroundColor = randomColor();

      StarGroup.current.appendChild(circle);
    };
    const random = (range, unit) => {
      let randNum = Math.floor(Math.random() * ((range * 98) / 100)) + 1;
      return `${randNum}${unit}`;
    };
    const paintStars = (stars, size) => {
      while (StarGroup.current.firstChild) {
        StarGroup.current.removeChild(StarGroup.current.firstChild);
      }
      for (let i = 0; i < stars; i++) {
        createDiv(size);
      }
    };
    const randomColor = () => {
      let range255 = () => random(255, "");
      return `rgb(${range255()},${range255()}, ${range255()}`;
    };
    paintStars(150, 5);
  }, []);
  return (
    <div className="home-Container">
      <div className="home1-starGroup" ref={StarGroup}></div>
      <div className="home1-floor">
        <div className="home1-main-Text">
          <p>“Scroll chuột” để bắt đầu khám phá về chúng tôi</p>
        </div>
      </div>
      <div className="home1-main">
        <Headder></Headder>
        <div className="home1-main-rock-Container">
          <div className="home1-main-rock-Floor">
            <div className="home1-main-rock-Item">
              <img src={Rock} />
            </div>
            <div className="home1-main-react-item home1-main-react-item1">
              <Satellite index="1"></Satellite>
            </div>
            <div className="home1-main-react-item home1-main-react-item2">
              <Satellite index="2"></Satellite>
            </div>
            <div className="home1-main-react-item home1-main-react-item3">
              <Satellite index="3"></Satellite>
            </div>
          </div>
        </div>
      </div>
      <div className="home1-main-Title">
        <div className="home1-main-Title-left">
          <p>THIẾT KẾ</p>
          <h1>TINH TẾ</h1>
        </div>
        <div className="home1-main-Title-right">
          <h1>ĐỘT PHÁ</h1>
          <p>CÔNG NGHỆ</p>
        </div>
      </div>
    </div>
  );
};
export default HomePage1;
